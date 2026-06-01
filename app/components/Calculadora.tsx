"use client";

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import {
  calcular,
  DEFAULT_PRICES,
  type EventType,
  type Proteinas,
  type Extras,
  type Results,
} from "../lib/calculator";
import AdBanner from "./AdBanner";

// ── LocalStorage ──────────────────────────────────────────────────────────────

const STORAGE_KEY = "calcuasada-state";

function readSaved(persistState: boolean): Record<string, unknown> {
  if (!persistState || typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
  } catch { return {}; }
}

// ── Constants ─────────────────────────────────────────────────────────────────

const EVENT_TYPES: { value: EventType; label: string; desc: string }[] = [
  { value: "ligero",   label: "Ligero",   desc: "Botaneo relajado" },
  { value: "normal",   label: "Normal",   desc: "La clásica carne asada" },
  { value: "tragones", label: "Tragones", desc: "Comes hasta caer" },
];

const PROTEIN_OPTIONS: { key: keyof Proteinas; label: string }[] = [
  { key: "res",      label: "🥩 Carne de res" },
  { key: "pollo",    label: "🍗 Pollo" },
  { key: "salchicha",label: "🌭 Salchicha para asar" },
  { key: "queso",    label: "🧀 Queso para asar" },
];

const TIERS_RES = [
  {
    id: "rendidora",
    emoji: "💰",
    label: "Rendidora",
    desc: "Pa' que alcance sin que duela tanto.",
    cortes: ["Diezmillo", "Retazo", "Bistec"],
    precioKg: 250,
  },
  {
    id: "confiable",
    emoji: "⭐",
    label: "La confiable",
    desc: "Buena carne para una carne asada bien armada.",
    cortes: ["Arrachera", "Falda", "Picaña"],
    precioKg: 390,
  },
  {
    id: "mamalona",
    emoji: "🔥",
    label: "Mamalona",
    desc: "Cortes buenos para lucirse sin irse tan extremo.",
    cortes: ["Costilla", "T-bone", "Sirloin"],
    precioKg: 600,
  },
  {
    id: "mamalonafifi",
    emoji: "👑",
    label: "Mamalona fifí",
    desc: "Sin miedo al ticket: cortes premium o importados.",
    cortes: ["Ribeye", "New York"],
    precioKg: 850,
  },
] as const;

type TierResId = typeof TIERS_RES[number]["id"];

// Costo de ingredientes para salsa verde casera (por receta de 7 personas)
// Tomatillos $23 + chiles serranos $2 + cebolla $2 + ajo $3 + cilantro $3 + sal $0.50
const SALSA_CASERA_COSTO_RECETA = 33.50;

const PRICE_LABELS: Record<string, string> = {
  res:       "Carne de res ($/kg)",
  pollo:     "Pollo ($/kg)",
  salchicha: "Salchicha ($/kg)",
  queso:     "Queso para asar ($/kg)",
  tortillas: "Tortillas ($/kg)",
  cebolla:   "Cebolla ($/pza)",
  limon:     "Limones ($/pza)",
  aguacate:  "Aguacate ($/pza)",
  salsa:     "Salsa ($/litro)",
  carbon:    "Carbón ($/kg)",
  hielo:     "Hielo ($/kg)",
  frijoles:  "Frijoles de olla ($/litro)",
  cerveza:   "Cerveza ($/lata)",
  refrescos: "Refrescos ($/botella 2L)",
};

// ── Formatters ────────────────────────────────────────────────────────────────

function formatMXN(n: number) {
  return n.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatSalsa(ml: number): string {
  return ml >= 1000 ? `${ml / 1000} L` : `${ml} ml`;
}

function formatCerveza(latas: number): string {
  if (!latas) return "";
  const sixpacks = latas / 6;
  return `${sixpacks} ${sixpacks === 1 ? "six-pack" : "six-packs"} (${latas} latas)`;
}

function splitQty(total: number, count: number): number {
  return Math.ceil((total / count) * 100) / 100;
}

function perPersonaHint(key: string, value: number, total: number): string {
  if (total === 0) return "";
  const pp = value / total;
  switch (key) {
    case "tortillas": return `~${Math.round(pp)} por persona`;
    case "cebolla":   return pp >= 1 ? `~${Math.round(pp)} por persona` : `~1 cada ${Math.round(1 / pp)} personas`;
    case "limon":     return `~${Math.round(pp)} por persona`;
    case "aguacate":  return pp >= 1 ? `~${Math.round(pp)} por persona` : `~1 cada ${Math.round(1 / pp)} personas`;
    case "salsa":     return `~${Math.round(pp)} ml por persona`;
    case "carbon":    return `~${pp.toFixed(1)} kg por persona`;
    case "hielo":     return `~${pp.toFixed(1)} kg por persona`;
    case "frijoles":  return `~${pp.toFixed(2)} L por persona`;
    default: return "";
  }
}

// ── Label renderer (replaces 🌭 with custom sausage image) ───────────────────

function renderLabel(label: string, salchichaUrl: string, salsaUrl = "", refrescoUrl = "") {
  const replacements: [string, string][] = [
    ["🌭", salchichaUrl],
    ["🫙", salsaUrl],
    ["🥤", refrescoUrl],
  ];
  const parts: React.ReactNode[] = [label];
  for (const [emoji, url] of replacements) {
    if (!url) continue;
    const next: React.ReactNode[] = [];
    for (const part of parts) {
      if (typeof part !== "string" || !part.includes(emoji)) { next.push(part); continue; }
      const segments = part.split(emoji);
      segments.forEach((seg, i) => {
        if (i > 0) next.push(<img key={`${emoji}-${i}`} src={url} alt="" style={{ display: "inline-block", width: "1.7em", height: "1.7em", verticalAlign: "-0.35em", objectFit: "contain" }} />);
        if (seg) next.push(seg);
      });
    }
    parts.splice(0, parts.length, ...next);
  }
  return <>{parts}</>;
}

// ── Distribuidor types ────────────────────────────────────────────────────────

interface ActiveItem {
  key: string;
  displayLabel: string;
  textLabel: string;
  value: number;
  unit: string;
}

// ── Component props ───────────────────────────────────────────────────────────

interface Props {
  defaultAdultos?: number;
  defaultNinos?: number;
  defaultTipo?: EventType;
  persistState?: boolean;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Calculadora({
  defaultAdultos = 6,
  defaultNinos = 0,
  defaultTipo = "normal",
  persistState = false,
}: Props) {
  // Lee localStorage una sola vez en el primer render (antes del save effect)
  const savedRef = useRef<Record<string, unknown> | undefined>(undefined);
  const saved = (() => {
    if (savedRef.current !== undefined) return savedRef.current;
    savedRef.current = readSaved(persistState);
    return savedRef.current;
  })();

  const [adultos, setAdultos] = useState(() =>
    typeof saved.adultos === "number" ? saved.adultos : defaultAdultos
  );
  const [ninos, setNinos] = useState(() =>
    typeof saved.ninos === "number" ? saved.ninos : defaultNinos
  );
  const [sliderAdultos, setSliderAdultos] = useState(() =>
    typeof saved.sliderAdultos === "number" ? saved.sliderAdultos : 50
  );
  const [tipo, setTipo] = useState<EventType>(() =>
    (saved.tipo as EventType) ?? defaultTipo
  );
  const [proteinas, setProteinas] = useState<Proteinas>(() =>
    (saved.proteinas as Proteinas) ?? { res: true, pollo: false, salchicha: false, queso: false }
  );
  const [extras, setExtras] = useState<Extras>(() =>
    (saved.extras as Extras) ?? { cerveza: false, refrescos: false, botanas: false }
  );
  const [priceTab, setPriceTab] = useState<"promedio" | "personalizado">(() =>
    (saved.priceTab as "promedio" | "personalizado") ?? "promedio"
  );
  const [customPrices, setCustomPrices] = useState(() =>
    (saved.customPrices as typeof DEFAULT_PRICES) ?? { ...DEFAULT_PRICES }
  );
  const [disabledRows, setDisabledRows] = useState<Set<string>>(() =>
    Array.isArray(saved.disabledRows) ? new Set(saved.disabledRows as string[]) : new Set()
  );

  // Tier de res
  const [tierRes, setTierRes] = useState<TierResId>(() =>
    (saved.tierRes as TierResId) ?? "confiable"
  );
  const [tierDetail, setTierDetail] = useState<number | null>(null);

  // Salsa casera toggle
  const [salsaCasera, setSalsaCasera] = useState(() =>
    typeof saved.salsaCasera === "boolean" ? saved.salsaCasera : false
  );

  const handleTierRes = (id: TierResId) => {
    setTierRes(id);
    const tier = TIERS_RES.find(t => t.id === id)!;
    setCustomPrices(prev => ({ ...prev, res: tier.precioKg }));
  };

  // Distribuidor state
  const [distribuidorOpen, setDistribuidorOpen] = useState(false);
  const [personaNombre, setPersonaNombre] = useState("");
  const [personas, setPersonas] = useState<string[]>([]);
  const [assignments, setAssignments] = useState<Record<string, string[]>>({});

  // Share image state
  const cardRef = useRef<HTMLDivElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [logoDataUrl, setLogoDataUrl] = useState<string>("");
  const [salchichaDataUrl, setSalchichaDataUrl] = useState<string>("");
  const [salsaDataUrl, setSalsaDataUrl] = useState<string>("");
  const [refrescoDataUrl, setRefrescoDataUrl] = useState<string>("");

  useEffect(() => {
    const loadImg = (src: string, set: (v: string) => void) =>
      fetch(src).then(r => r.blob()).then(blob => {
        const reader = new FileReader();
        reader.onload = () => set(reader.result as string);
        reader.readAsDataURL(blob);
      }).catch(() => {});
    loadImg("/logo.png", setLogoDataUrl);
    loadImg("/salchicha.png", setSalchichaDataUrl);
    loadImg("/salsa.png", setSalsaDataUrl);
    loadImg("/refresco.png", setRefrescoDataUrl);
  }, []);

  // Guardar estado al cambiar cualquier campo
  useEffect(() => {
    if (!persistState) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        adultos, ninos, sliderAdultos, tipo, proteinas, extras,
        priceTab, customPrices, disabledRows: [...disabledRows],
        tierRes, salsaCasera,
      }));
    } catch {}
  }, [persistState, adultos, ninos, sliderAdultos, tipo, proteinas, extras, priceTab, customPrices, disabledRows, tierRes, salsaCasera]);

  // ── Derived values ──────────────────────────────────────────────────────────

  const mujeres = Math.round(adultos * sliderAdultos / 100);
  const hombres = adultos - mujeres;
  const totalPersonas = adultos + ninos;
  const sinPersonas   = totalPersonas === 0;
  const sinProteinas  = !proteinas.res && !proteinas.pollo && !proteinas.salchicha && !proteinas.queso;
  const soloQueso     = proteinas.queso && !proteinas.res && !proteinas.pollo && !proteinas.salchicha;
  const puedeCalcular = !sinPersonas && !sinProteinas;

  const results = calcular(hombres, mujeres, ninos, tipo, proteinas, extras);
  const activeTier = TIERS_RES.find(t => t.id === tierRes)!;
  const basePrices = priceTab === "promedio" ? DEFAULT_PRICES : customPrices;
  const prices: Record<string, number> = {
    ...basePrices,
    ...(proteinas.res ? { res: priceTab === "promedio" ? activeTier.precioKg : customPrices.res } : {}),
  };
  const bolsas  = extras.botanas ? Math.ceil(totalPersonas / 5) : 0;

  const salsaIngredientes = useMemo(() => {
    if (totalPersonas === 0) return null;
    const batches = totalPersonas / 7;
    return {
      tomatillos: Math.max(4, Math.ceil(8 * batches)),
      chiles:     Math.max(1, Math.ceil(2 * batches)),
      cebolla:    Math.max(1, Math.ceil(batches)),
      ajo:        Math.max(1, Math.ceil(batches)),
      cilantro:   Math.max(1, Math.ceil(batches)),
    };
  }, [totalPersonas]);

  const isRowEnabled = (key: string) => !disabledRows.has(key);
  const toggleRow    = (key: string) =>
    setDisabledRows(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });

  const total = puedeCalcular
    ? (results.res       ?? 0) * prices.res +
      (results.pollo     ?? 0) * prices.pollo +
      (results.salchicha ?? 0) * prices.salchicha +
      (results.queso     ?? 0) * prices.queso +
      (isRowEnabled("tortillas") ? (results.tortillas * 0.03) * prices.tortillas : 0) +
      (isRowEnabled("cebolla")   ? results.cebolla   * prices.cebolla   : 0) +
      (isRowEnabled("limon")     ? results.limon     * prices.limon     : 0) +
      (isRowEnabled("aguacate")  ? results.aguacate  * prices.aguacate  : 0) +
      (isRowEnabled("salsa")
        ? salsaCasera
          ? SALSA_CASERA_COSTO_RECETA * (totalPersonas / 7)
          : (results.salsa / 1000) * prices.salsa
        : 0) +
      (isRowEnabled("carbon")    ? results.carbon    * prices.carbon    : 0) +
      (isRowEnabled("hielo")     ? results.hielo     * prices.hielo     : 0) +
      (isRowEnabled("frijoles")  ? results.frijoles  * prices.frijoles  : 0) +
      (results.cerveza   ?? 0) * prices.cerveza +
      (results.refrescos ?? 0) * prices.refrescos
    : 0;

  // ── Active items for distribuidor ───────────────────────────────────────────

  const activeItems = useMemo<ActiveItem[]>(() => {
    if (!puedeCalcular) return [];
    const items: ActiveItem[] = [];
    if (results.res)       items.push({ key: "res",       displayLabel: "🥩 Carne de res",     textLabel: "Carne de res",     value: results.res,       unit: "kg"     });
    if (results.pollo)     items.push({ key: "pollo",     displayLabel: "🍗 Pollo",             textLabel: "Pollo",            value: results.pollo,     unit: "kg"     });
    if (results.salchicha) items.push({ key: "salchicha", displayLabel: "🌭 Salchicha para asar",textLabel:"Salchicha para asar",value: results.salchicha, unit: "kg"  });
    if (results.queso)     items.push({ key: "queso",     displayLabel: "🧀 Queso para asar",   textLabel: "Queso para asar",  value: results.queso,     unit: "kg"     });
    if (isRowEnabled("tortillas")) items.push({ key: "tortillas", displayLabel: "🫓 Tortillas", textLabel: "Tortillas", value: results.tortillas, unit: "pzas" });
    if (isRowEnabled("cebolla")) {
      const salsaNote = (salsaCasera && isRowEnabled("salsa") && salsaIngredientes)
        ? ` (+${salsaIngredientes.cebolla} pedazo${salsaIngredientes.cebolla > 1 ? "s" : ""} para salsa)`
        : "";
      items.push({ key: "cebolla", displayLabel: `🧅 Cebolla${salsaNote}`, textLabel: `Cebolla${salsaNote}`, value: results.cebolla, unit: "pzas" });
    }
    if (isRowEnabled("limon"))     items.push({ key: "limon",     displayLabel: "🍋 Limones",   textLabel: "Limones",   value: results.limon,     unit: "pzas" });
    if (isRowEnabled("aguacate"))  items.push({ key: "aguacate",  displayLabel: "🥑 Aguacates", textLabel: "Aguacates", value: results.aguacate,  unit: "pzas" });
    if (isRowEnabled("salsa")) {
      if (salsaCasera && salsaIngredientes) {
        items.push({ key: "tomatillos",     displayLabel: "🍅 Tomatillos",      textLabel: "Tomatillos",      value: salsaIngredientes.tomatillos, unit: "pzas"      });
        items.push({ key: "chiles_serrano", displayLabel: "🌶️ Chiles serranos", textLabel: "Chiles serranos", value: salsaIngredientes.chiles,     unit: "pzas"      });
        items.push({ key: "ajo_salsa",      displayLabel: "🧄 Ajo",             textLabel: "Ajo",             value: salsaIngredientes.ajo,        unit: "diente(s)" });
        items.push({ key: "cilantro_salsa", displayLabel: "🌿 Cilantro",        textLabel: "Cilantro",        value: salsaIngredientes.cilantro,   unit: "puñito(s)" });
      } else {
        items.push({ key: "salsa", displayLabel: "🫙 Salsa", textLabel: "Salsa", value: results.salsa, unit: "ml" });
      }
    }
    if (isRowEnabled("carbon"))    items.push({ key: "carbon",    displayLabel: "🪨 Carbón",    textLabel: "Carbón",    value: results.carbon,    unit: "kg"   });
    if (isRowEnabled("hielo"))     items.push({ key: "hielo",     displayLabel: "🧊 Hielo",     textLabel: "Hielo",     value: results.hielo,     unit: "kg"   });
    if (isRowEnabled("frijoles"))  items.push({ key: "frijoles",  displayLabel: "🫘 Frijoles",  textLabel: "Frijoles",  value: results.frijoles,  unit: "L"    });
    if (results.cerveza)  items.push({ key: "cerveza",  displayLabel: "🍺 Cerveza",  textLabel: "Cerveza",  value: results.cerveza,  unit: "latas"   });
    if (results.refrescos)items.push({ key: "refrescos",displayLabel: "🥤 Refrescos",textLabel: "Refrescos",value: results.refrescos!,unit: "botellas"});
    if (extras.botanas && bolsas > 0) items.push({ key: "botanas", displayLabel: "🍿 Botanas", textLabel: "Botanas", value: bolsas, unit: "bolsas" });
    return items;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results, disabledRows, puedeCalcular, bolsas, extras.botanas]);

  const distribuidorActivo = distribuidorOpen && personas.length >= 2;
  const todosAsignados =
    !distribuidorActivo ||
    activeItems.every(item => (assignments[item.key] ?? []).length > 0);

  // ── Distribuidor handlers ───────────────────────────────────────────────────

  const addPersona = () => {
    const nombre = personaNombre.trim();
    if (!nombre || personas.length >= 8 || personas.includes(nombre)) return;
    setPersonas(prev => [...prev, nombre]);
    setPersonaNombre("");
    setAssignments({});
  };

  const removePersona = (nombre: string) => {
    setPersonas(prev => prev.filter(p => p !== nombre));
    setAssignments({});
  };

  const toggleAssignment = (itemKey: string, persona: string) => {
    setAssignments(prev => {
      const current = prev[itemKey] ?? [];
      const next = current.includes(persona)
        ? current.filter(p => p !== persona)
        : [...current, persona];
      return { ...prev, [itemKey]: next };
    });
  };

  // ── Share text ──────────────────────────────────────────────────────────────

  const buildShareText = useCallback(() => {
    const nivelLabel = tipo === "ligero" ? "Ligero" : tipo === "tragones" ? "Tragones" : "Normal";
    const ninosLine = ninos > 0 ? ` · ${ninos} niños` : "";
    const header = [
      `🔥 Lista de carne asada para ${totalPersonas} personas — Calcuasada`,
      `Nivel de hambre: ${nivelLabel}`,
      `${hombres} hombres · ${mujeres} mujeres${ninosLine}`,
      `Aquí está todo lo que necesitan comprar para que no falte nada:`,
    ].join("\n");
    const footer = `✅ Lista generada gratis en calcuasada.com — ¿Cuánto necesitas tú? Calcúlalo en segundos 👆`;

    const fmtActiveItem = (item: ActiveItem, qty?: number): string => {
      const v = qty ?? item.value;
      let val: string;
      if (item.key === "salsa")    val = formatSalsa(v);
      else if (item.key === "cerveza") val = formatCerveza(v);
      else val = `${v} ${item.unit}`;
      return `• ${item.displayLabel}: ${val}`;
    };

    // Modo distribuidor: usa activeItems filtrado por asignaciones
    if (distribuidorActivo && todosAsignados) {
      const lines: string[] = [
        header, "",
        `👥 Lista dividida entre ${personas.length} personas. Cada quien sabe qué le toca comprar:`,
      ];
      personas.forEach(persona => {
        const personaItems = activeItems
          .filter(item => (assignments[item.key] ?? []).includes(persona))
          .map(item => {
            const count = (assignments[item.key] ?? []).length;
            return fmtActiveItem(item, splitQty(item.value, count));
          });
        if (personaItems.length > 0) {
          lines.push("", `🛒 ${persona}:`);
          personaItems.forEach(l => lines.push(l));
        }
      });
      lines.push("", footer);
      return lines.join("\n");
    }

    // Modo normal: agrupa activeItems por categoría (respeta toggles del usuario)
    const proteinKeys  = new Set(["res", "pollo", "salchicha", "queso"]);
    const bebidaKeys   = new Set(["cerveza", "refrescos"]);
    const botanaKeys   = new Set(["botanas"]);

    const proteinas    = activeItems.filter(i => proteinKeys.has(i.key));
    const acompanantes = activeItems.filter(i => !proteinKeys.has(i.key) && !bebidaKeys.has(i.key) && !botanaKeys.has(i.key));
    const bebidas      = activeItems.filter(i => bebidaKeys.has(i.key));
    const botanaItems  = activeItems.filter(i => botanaKeys.has(i.key));

    const lines: string[] = [header, ""];

    if (proteinas.length > 0) {
      lines.push("🥩 PROTEÍNAS:");
      proteinas.forEach(i => lines.push(fmtActiveItem(i)));
      lines.push("");
    }
    if (acompanantes.length > 0) {
      lines.push("🛒 ACOMPAÑANTES:");
      acompanantes.forEach(i => lines.push(fmtActiveItem(i)));
      lines.push("");
    }
    if (bebidas.length > 0) {
      lines.push("🍺 BEBIDAS:");
      bebidas.forEach(i => lines.push(fmtActiveItem(i)));
      lines.push("");
    }
    if (botanaItems.length > 0) {
      lines.push("🍿 BOTANAS:");
      botanaItems.forEach(i => lines.push(fmtActiveItem(i)));
      lines.push("");
    }

    lines.push(`💰 Costo estimado: $${formatMXN(total)} MXN`, "", footer);
    return lines.join("\n");
  }, [hombres, mujeres, ninos, tipo, total, totalPersonas, distribuidorActivo, todosAsignados, personas, assignments, activeItems]);

  // ── Action handlers ─────────────────────────────────────────────────────────

  const warnAsignacion = () =>
    alert("Faltan ingredientes por asignar. Asegúrate de que toda la lista esté cubierta.");

  const handleWhatsApp = () => {
    if (!puedeCalcular) return;
    if (distribuidorActivo && !todosAsignados) { warnAsignacion(); return; }
    const a = document.createElement("a");
    a.href = `https://wa.me/?text=${encodeURIComponent(buildShareText())}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePDF = async () => {
    if (!puedeCalcular) return;
    if (distribuidorActivo && !todosAsignados) { warnAsignacion(); return; }
    const html2canvas = (await import("html2canvas")).default;
    const el = cardRef.current;
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#FDF9F4", logging: false });
    setPreviewUrl(canvas.toDataURL("image/png"));
  };

  const handleShareImage = async () => {
    if (!previewUrl) return;
    const res = await fetch(previewUrl);
    const blob = await res.blob();
    const file = new File([blob], "calcuasada-lista.png", { type: "image/png" });
    if (navigator.share && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: "Lista de carne asada — Calcuasada" }); }
      catch { /* usuario canceló */ }
    } else {
      const a = document.createElement("a");
      a.href = previewUrl;
      a.download = "calcuasada-lista.png";
      a.click();
    }
  };

  const handleDownloadImage = () => {
    if (!previewUrl) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = "calcuasada-lista.png";
    a.click();
  };

  const handlePrint = () => {
    if (!puedeCalcular) return;
    if (distribuidorActivo && !todosAsignados) { warnAsignacion(); return; }
    if (distribuidorActivo && todosAsignados) {
      const win = window.open("", "_blank");
      if (win) {
        win.document.write(
          `<pre style="font-family:sans-serif;padding:24px;white-space:pre-wrap;font-size:14px">${buildShareText()}</pre>`
        );
        win.document.close();
        win.print();
      }
      return;
    }
    window.print();
  };

  // ── JSX ─────────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">

      {/* ── FORM ── */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
        <h2 className="text-sm font-bold text-gray-600 mb-4 text-center bg-brasa-light border border-brasa/20 rounded-lg py-1.5 px-3 text-brasa">¿Cuántos van?</h2>

        {/* Adultos + Niños inputs */}
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="adultos" className="text-sm font-medium text-gray-600">Adultos</label>
            <input
              id="adultos"
              type="number"
              min={0}
              value={adultos}
              onChange={e => setAdultos(Math.max(0, parseInt(e.target.value) || 0))}
              className="border border-gray-300 rounded-xl px-4 py-3 text-xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brasa"
            />
            <div className="mt-1">
              <input
                type="range"
                min={0}
                max={100}
                value={sliderAdultos}
                onChange={e => setSliderAdultos(Number(e.target.value))}
                className="w-full accent-brasa"
                disabled={adultos === 0}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                <span>♂ {hombres}</span>
                <span>{mujeres} ♀</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="ninos" className="text-sm font-medium text-gray-600">Niños/niñas</label>
            <input
              id="ninos"
              type="number"
              min={0}
              value={ninos}
              onChange={e => setNinos(Math.max(0, parseInt(e.target.value) || 0))}
              className="border border-gray-300 rounded-xl px-4 py-3 text-xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brasa"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4 text-sm text-gray-500 text-center leading-relaxed">
          <span className="font-semibold text-gray-700">
            {hombres} hombres · {mujeres} mujeres · {ninos} niños/niñas
          </span>
          <br />
          <span className="text-xs">
            Total: <span className="font-bold text-gray-700">{totalPersonas}</span> personas
          </span>
        </div>

        {/* Appetite selector */}
        <p className="text-sm font-bold text-gray-600 mb-2 text-center bg-brasa-light border border-brasa/20 rounded-lg py-1.5 px-3 text-brasa">Tipo de carne asada</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {EVENT_TYPES.map(({ value, label, desc }) => (
            <button
              key={value}
              onClick={() => setTipo(value)}
              className={`rounded-xl border-2 p-3 text-center transition-all ${
                tipo === value
                  ? "border-brasa bg-brasa-light text-brasa"
                  : "border-gray-200 text-gray-600 hover:border-brasa/40"
              }`}
            >
              <div className="font-bold text-sm">{label}</div>
              <div className="text-xs mt-0.5 opacity-75">{desc}</div>
            </button>
          ))}
        </div>

        {/* Tier de carne de res */}
        {proteinas.res && (
          <div className="mb-4">
            <p className="text-sm font-bold text-gray-600 mb-2 text-center bg-brasa-light border border-brasa/20 rounded-lg py-1.5 px-3 text-brasa">¿Qué tipo de carne asada es? <span className="font-normal text-gray-400 text-xs">(presupuesto)</span></p>
            <div className="grid grid-cols-2 gap-2 items-start">
              {TIERS_RES.map((tier, idx) => {
                const selected = tierRes === tier.id;
                const row = Math.floor(idx / 2);
                const open = tierDetail === row;
                return (
                  <div
                    key={tier.id}
                    className={`rounded-lg border-2 transition-all ${
                      selected ? "border-brasa bg-brasa-light" : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      onClick={() => handleTierRes(tier.id)}
                      className="w-full text-left px-2 py-1.5"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-black leading-tight ${selected ? "text-brasa" : "text-gray-700"}`} style={{ fontSize: "11px" }}>
                          {tier.emoji} {tier.label}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className={`font-bold ${selected ? "text-brasa" : "text-gray-400"}`} style={{ fontSize: "10px" }}>
                            ~${tier.precioKg}/kg
                          </span>
                          <button
                            onClick={e => { e.stopPropagation(); setTierDetail(open ? null : row); }}
                            className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                              open
                                ? selected ? "bg-brasa text-white" : "bg-gray-400 text-white"
                                : selected ? "bg-brasa/20 text-brasa" : "bg-gray-200 text-gray-500"
                            }`}
                            style={{ fontSize: "9px", fontWeight: 900, lineHeight: 1 }}
                            aria-label="Ver detalles"
                          >
                            {open ? "✕" : "?"}
                          </button>
                        </div>
                      </div>
                    </button>
                    {open && (
                      <div className={`px-2 pb-2 pt-1.5 border-t text-center ${selected ? "border-brasa/20" : "border-gray-100"}`}>
                        <div className={`leading-tight mb-1 ${selected ? "text-brasa/80" : "text-gray-500"}`} style={{ fontSize: "11px" }}>
                          {tier.cortes.join(" · ")}
                        </div>
                        <div className={`leading-tight italic ${selected ? "text-brasa/60" : "text-gray-400"}`} style={{ fontSize: "11px" }}>
                          {tier.desc}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Protein toggles */}
        <p className="text-sm font-bold text-gray-600 mb-2 text-center bg-brasa-light border border-brasa/20 rounded-lg py-1.5 px-3 text-brasa">Proteínas</p>
        <div className="grid grid-cols-2 gap-2">
          {PROTEIN_OPTIONS.map(({ key, label }) => (
            <label
              key={key}
              className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                proteinas[key]
                  ? "border-brasa bg-brasa-light"
                  : "border-gray-200 hover:border-brasa/40"
              }`}
            >
              <input
                type="checkbox"
                checked={proteinas[key]}
                onChange={() => setProteinas(prev => ({ ...prev, [key]: !prev[key] }))}
                className="w-4 h-4 accent-brasa"
              />
              <span className={`text-sm font-medium leading-tight ${proteinas[key] ? "text-brasa" : "text-gray-600"}`}>
                {renderLabel(label, salchichaDataUrl, salsaDataUrl, refrescoDataUrl)}
              </span>
            </label>
          ))}
        </div>

        {/* Validation messages */}
        {sinPersonas && (
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700 flex items-center gap-2">
            <span>⚠️</span>
            <span>Agrega al menos una persona para calcular.</span>
          </div>
        )}
        {!sinPersonas && sinProteinas && (
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700 flex items-center gap-2">
            <span>⚠️</span>
            <span>Activa al menos una proteína para calcular.</span>
          </div>
        )}
        {!sinPersonas && soloQueso && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-700 flex items-start gap-2">
            <span className="flex-shrink-0">💡</span>
            <span>El queso para asar funciona mejor como complemento. Te recomendamos activar carne, pollo o salchicha también.</span>
          </div>
        )}
      </section>

      {/* ── AD ── */}
      <AdBanner />

      {/* ── RESULTS (only when we have people) ── */}
      {!sinPersonas && (
        <>
          {/* Lista de compras */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Lista de compras</h2>

            {/* Proteins sub-section */}
            {!sinProteinas && (
              <>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Proteínas</p>
                <div className="divide-y divide-gray-50 mb-4">
                  {results.res       && <ProteinRow label="🥩 Carne de res"      value={results.res} />}
                  {results.pollo     && <ProteinRow label="🍗 Pollo"              value={results.pollo} />}
                  {results.salchicha && <ProteinRow label={renderLabel("🌭 Salchicha para asar", salchichaDataUrl, salsaDataUrl, refrescoDataUrl)} value={results.salchicha} />}
                  {results.queso     && <ProteinRow label="🧀 Queso para asar"    value={results.queso} />}
                </div>
              </>
            )}

            {/* Accompaniments sub-section */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Acompañantes</p>
            <div className="divide-y divide-gray-50">
              <ResultRow label="🫓 Tortillas" perPerson={perPersonaHint("tortillas", results.tortillas, totalPersonas)} value={results.tortillas} unit="pzas" enabled={isRowEnabled("tortillas")} onToggle={() => toggleRow("tortillas")} />
              <ResultRow label="🧅 Cebolla"   perPerson={perPersonaHint("cebolla",   results.cebolla,   totalPersonas)} value={results.cebolla}   unit="pzas" enabled={isRowEnabled("cebolla")}   onToggle={() => toggleRow("cebolla")} />
              <ResultRow label="🍋 Limones"   perPerson={perPersonaHint("limon",     results.limon,     totalPersonas)} value={results.limon}     unit="pzas" enabled={isRowEnabled("limon")}     onToggle={() => toggleRow("limon")} />
              <ResultRow label="🥑 Aguacates" perPerson={perPersonaHint("aguacate",  results.aguacate,  totalPersonas)} value={results.aguacate}  unit="pzas" enabled={isRowEnabled("aguacate")}  onToggle={() => toggleRow("aguacate")} />
              {/* Salsa — con toggle Comprada / Casera */}
              <div className={`py-3 transition-opacity ${!isRowEnabled("salsa") ? "opacity-35" : ""}`}>
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleRow("salsa")}
                    className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 mt-0.5 ${isRowEnabled("salsa") ? "bg-brasa" : "bg-gray-300"}`}
                    aria-label={isRowEnabled("salsa") ? "Desactivar" : "Activar"}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${isRowEnabled("salsa") ? "translate-x-4" : "translate-x-0"}`} />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-gray-700 text-sm leading-tight ${!isRowEnabled("salsa") ? "line-through" : ""}`}>
                      {renderLabel("🫙 Salsa", salchichaDataUrl, salsaDataUrl, refrescoDataUrl)}
                    </p>
                    {!salsaCasera && (
                      <p className="text-xs text-gray-400 mt-0.5">{perPersonaHint("salsa", results.salsa, totalPersonas)}</p>
                    )}
                    {isRowEnabled("salsa") && (
                      <div className="flex gap-1 mt-1.5">
                        <button
                          onClick={() => setSalsaCasera(false)}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${!salsaCasera ? "bg-brasa text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                        >
                          Comprada
                        </button>
                        <button
                          onClick={() => setSalsaCasera(true)}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${salsaCasera ? "bg-brasa text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                        >
                          Casera
                        </button>
                      </div>
                    )}
                  </div>
                  {!salsaCasera && (
                    <span className="text-2xl font-black text-gray-900 tabular-nums flex-shrink-0">
                      {results.salsa >= 1000 ? results.salsa / 1000 : results.salsa}{" "}
                      <span className="text-sm font-medium text-gray-500">{results.salsa >= 1000 ? "L" : "ml"}</span>
                    </span>
                  )}
                </div>
                {salsaCasera && isRowEnabled("salsa") && salsaIngredientes && (
                  <div className="ml-13 mt-2 pl-1 border-l-2 border-brasa/20 space-y-0.5">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Ingredientes para la salsa verde:</p>
                    {[
                      `🍅 ${salsaIngredientes.tomatillos} tomatillos`,
                      `🌶️ ${salsaIngredientes.chiles} chile${salsaIngredientes.chiles > 1 ? "s" : ""} serrano`,
                      `🧅 ${salsaIngredientes.cebolla} pedazo${salsaIngredientes.cebolla > 1 ? "s" : ""} de cebolla blanca`,
                      `🧄 ${salsaIngredientes.ajo} diente${salsaIngredientes.ajo > 1 ? "s" : ""} de ajo`,
                      `🌿 ${salsaIngredientes.cilantro} puñito${salsaIngredientes.cilantro > 1 ? "s" : ""} de cilantro`,
                    ].map(line => (
                      <p key={line} className="text-xs text-gray-600">{line}</p>
                    ))}
                    <a href="/guias/salsa-verde-carne-asada" className="inline-block mt-1.5 text-xs text-brasa font-semibold hover:underline">
                      Ver receta completa →
                    </a>
                  </div>
                )}
              </div>
              <ResultRow label="🪨 Carbón"  perPerson={perPersonaHint("carbon",   results.carbon,   totalPersonas)} value={results.carbon}   unit="kg" enabled={isRowEnabled("carbon")}   onToggle={() => toggleRow("carbon")} />
              <ResultRow label="🧊 Hielo"   perPerson={perPersonaHint("hielo",    results.hielo,    totalPersonas)} value={results.hielo}    unit="kg" enabled={isRowEnabled("hielo")}    onToggle={() => toggleRow("hielo")} />
              <ResultRow label="🫘 Frijoles" perPerson={perPersonaHint("frijoles", results.frijoles, totalPersonas)} value={results.frijoles} unit="L"  enabled={isRowEnabled("frijoles")} onToggle={() => toggleRow("frijoles")} />
            </div>
          </section>

          {/* ── EXTRAS ── */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Extras opcionales</h2>
            <div className="space-y-2">

              {/* Cerveza */}
              <div>
                <label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={extras.cerveza}
                    onChange={() => setExtras(prev => ({ ...prev, cerveza: !prev.cerveza }))}
                    className="w-5 h-5 accent-brasa rounded"
                  />
                  <span className="text-sm text-gray-700">🍺 Cerveza</span>
                  {extras.cerveza && results.cerveza && (
                    <span className="ml-auto font-bold text-brasa text-sm">
                      {formatCerveza(results.cerveza)}
                    </span>
                  )}
                </label>
                {extras.cerveza && (
                  <p className="text-xs text-gray-400 text-center italic px-2 pb-2">
                    No puede haber carnita asada sin cervecita para acompañarla 🍻
                  </p>
                )}
              </div>

              {/* Refrescos */}
              <label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={extras.refrescos}
                  onChange={() => setExtras(prev => ({ ...prev, refrescos: !prev.refrescos }))}
                  className="w-5 h-5 accent-brasa rounded"
                />
                <span className="text-sm text-gray-700">{renderLabel("🥤 Refrescos (botellas 2L)", salchichaDataUrl, salsaDataUrl, refrescoDataUrl)}</span>
                {extras.refrescos && results.refrescos && (
                  <span className="ml-auto font-bold text-brasa text-sm">{results.refrescos} botellas</span>
                )}
              </label>

              {/* Botanas */}
              <div>
                <label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={extras.botanas}
                    onChange={() => setExtras(prev => ({ ...prev, botanas: !prev.botanas }))}
                    className="w-5 h-5 accent-brasa rounded"
                  />
                  <span className="text-sm text-gray-700">🍿 Botanas (bolsas de papas)</span>
                  {extras.botanas && bolsas > 0 && (
                    <span className="ml-auto font-bold text-brasa text-sm">{bolsas} bolsas</span>
                  )}
                </label>
                {extras.botanas && (
                  <p className="text-xs text-gray-400 px-2 pb-1">
                    Con botanas se calcula un poco menos de proteína — todos comen más seguido antes de la carne.
                  </p>
                )}
              </div>

            </div>
          </section>

          {/* ── COST ESTIMATOR ── */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Estimador de costo</h2>
            <p className="text-xs text-gray-400 mb-4">
              Recuerda que necesitas condimentos para tu cocinada — no olvides tener sal, pimienta o tu sazonador de preferencia.
            </p>
            <div className="flex gap-2 mb-4 print:hidden">
              {(["promedio", "personalizado"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setPriceTab(tab)}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                    priceTab === tab ? "bg-brasa text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab === "promedio" ? "Precios promedio" : "Precios personalizados"}
                </button>
              ))}
            </div>

            {priceTab === "personalizado" && (
              <div className="grid grid-cols-2 gap-3 mb-4 print:hidden">
                {Object.entries(PRICE_LABELS).map(([key, label]) => (
                  <label key={key} className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500">{label}</span>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <span className="px-2 text-gray-400 text-sm">$</span>
                      <input
                        type="number"
                        min={0}
                        value={customPrices[key]}
                        onChange={e =>
                          setCustomPrices(prev => ({ ...prev, [key]: parseFloat(e.target.value) || 0 }))
                        }
                        className="flex-1 py-2 pr-2 text-sm focus:outline-none"
                      />
                    </div>
                  </label>
                ))}
              </div>
            )}

            <div className="bg-brasa-light border border-brasa-mid rounded-xl p-4 text-center">
              <p className="text-sm text-brasa mb-1">Tu carne asada costará aproximadamente</p>
              <p className="text-4xl font-black text-brasa">
                ${formatMXN(total)}{" "}
                <span className="text-xl font-bold">MXN</span>
              </p>
              <p className="text-xs text-brasa/70 mt-1">
                ${formatMXN(total / Math.max(totalPersonas, 1))} por persona
              </p>
            </div>
          </section>

          {/* ── COMPARTIR Y DISTRIBUIR ── */}
          <section className="bg-white rounded-2xl shadow-sm border border-brasa/20 overflow-hidden print:hidden">
            {/* Header de la sección */}
            <div className="bg-brasa-light px-5 py-3 border-b border-brasa/15 flex items-center gap-2">
              <span className="text-lg">📤</span>
              <div>
                <p className="font-black text-gray-900 text-sm">Compartir y distribuir</p>
                <p className="text-xs text-gray-500">Manda la lista o divide quién compra qué entre los cuates</p>
              </div>
            </div>

            {/* Distribuidor colapsable */}
            <button
              onClick={() => setDistribuidorOpen(prev => !prev)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left bg-amber-50 hover:bg-amber-100 border-b border-amber-200 transition-colors"
            >
              <span className="text-xl">👥</span>
              <span className="flex-1 font-bold text-amber-900 text-sm">
                Distribuir compras entre tus amigos
              </span>
              <span className="text-amber-600 text-xl font-black leading-none">{distribuidorOpen ? "▲" : "▼"}</span>
            </button>

            {distribuidorOpen && (
              <div className="px-5 pb-5 space-y-4 border-b border-amber-100 bg-amber-50/40">
                <div className="flex gap-2 mt-4">
                  <input
                    type="text"
                    value={personaNombre}
                    onChange={e => setPersonaNombre(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addPersona()}
                    placeholder="Nombre de la persona"
                    maxLength={30}
                    className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brasa"
                  />
                  <button
                    onClick={addPersona}
                    disabled={personas.length >= 8}
                    className="bg-brasa text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-brasa/90 disabled:opacity-40 transition-all"
                  >
                    Agregar persona
                  </button>
                </div>

                {personas.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {personas.map(p => (
                      <div key={p} className="flex items-center gap-1 bg-brasa-light border border-brasa-mid rounded-full px-3 py-1">
                        <span className="text-sm text-brasa font-medium">{p}</span>
                        <button
                          onClick={() => removePersona(p)}
                          className="text-brasa/50 hover:text-brasa text-xs ml-1 font-bold leading-none"
                          aria-label={`Quitar a ${p}`}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {personas.length === 1 && (
                  <p className="text-xs text-gray-400 text-center">
                    Agrega al menos una persona más para distribuir la lista.
                  </p>
                )}

                {personas.length >= 2 && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-600">¿Quién compra qué?</p>
                    <div className="divide-y divide-gray-50">
                      {activeItems.map(item => {
                        const assignedTo = assignments[item.key] ?? [];
                        return (
                          <div key={item.key} className="py-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-sm font-medium ${assignedTo.length > 0 ? "text-gray-700" : "text-gray-400"}`}>
                                {renderLabel(item.displayLabel, salchichaDataUrl, salsaDataUrl, refrescoDataUrl)}
                              </span>
                              <span className="text-sm text-gray-400">
                                {item.key === "salsa" ? formatSalsa(item.value) : `${item.value} ${item.unit}`}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {personas.map(p => {
                                const checked = assignedTo.includes(p);
                                return (
                                  <label
                                    key={p}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border cursor-pointer text-sm transition-all ${
                                      checked
                                        ? "bg-brasa text-white border-brasa"
                                        : "bg-white text-gray-600 border-gray-300 hover:border-brasa/50"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggleAssignment(item.key, p)}
                                      className="sr-only"
                                    />
                                    {p}
                                    {checked && assignedTo.length > 0 && (
                                      <span className="text-xs opacity-75">
                                        ({splitQty(item.value, assignedTo.length)} {item.unit})
                                      </span>
                                    )}
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {!todosAsignados && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700 flex items-start gap-2">
                        <span className="flex-shrink-0">⚠️</span>
                        <span>Faltan ingredientes por asignar. Asegúrate de que toda la lista esté cubierta.</span>
                      </div>
                    )}
                    {todosAsignados && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-700 flex items-center gap-2">
                        <span>✅</span>
                        <span>Lista completa. Ya puedes compartir o imprimir la distribución.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Botones de acción */}
            <div className="grid grid-cols-3 gap-3 p-4 border-b border-gray-100">
              <button
                onClick={handlePrint}
                disabled={!puedeCalcular}
                className="flex flex-col items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-2 rounded-xl text-sm transition-all disabled:opacity-40"
              >
                <span className="text-xl">🖨️</span>
                Imprimir lista
              </button>
              <button
                onClick={handlePDF}
                disabled={!puedeCalcular}
                className="flex flex-col items-center gap-1 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium py-3 px-2 rounded-xl text-sm transition-all disabled:opacity-40"
              >
                <span className="text-xl">🖼️</span>
                Compartir imagen
              </button>
              <button
                onClick={handleWhatsApp}
                disabled={!puedeCalcular}
                className="flex flex-col items-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-2 rounded-xl text-sm transition-all disabled:opacity-40"
              >
                <span className="text-xl">💬</span>
                Compartir por WhatsApp
              </button>
            </div>

          </section>
        </>
      )}


      {/* Hidden card for image generation — off-screen, always rendered with latest data */}
      {(() => {
        const nivelLabel = tipo === "ligero" ? "Ligero" : tipo === "tragones" ? "Tragones" : "Normal";
        const fmtVal = (item: ActiveItem, qty?: number) => {
          const v = qty ?? item.value;
          if (item.key === "salsa") return formatSalsa(v);
          if (item.key === "cerveza") return formatCerveza(v);
          return `${v} ${item.unit}`;
        };
        const proteinKeysC = new Set(["res", "pollo", "salchicha", "queso"]);
        const bebidaKeysC  = new Set(["cerveza", "refrescos"]);
        const botanaKeysC  = new Set(["botanas"]);

        type CardSection = { title: string; titleBg: string; titleColor: string; items: { label: React.ReactNode; val: string }[] };
        const sections: CardSection[] = distribuidorActivo && todosAsignados
          ? personas.map(persona => ({
              title: `🛒 ${persona}`,
              titleBg: "#FFF3ED",
              titleColor: "#C73B08",
              items: activeItems
                .filter(item => (assignments[item.key] ?? []).includes(persona))
                .map(item => ({
                  label: renderLabel(item.displayLabel, salchichaDataUrl, salsaDataUrl, refrescoDataUrl),
                  val: fmtVal(item, splitQty(item.value, (assignments[item.key] ?? []).length)),
                })),
            }))
          : ([
              { title: "🥩 PROTEÍNAS",     titleBg: "#FFF0EB", titleColor: "#C73B08", items: activeItems.filter(i => proteinKeysC.has(i.key)).map(i => ({ label: renderLabel(i.displayLabel, salchichaDataUrl, salsaDataUrl, refrescoDataUrl), val: fmtVal(i) })) },
              { title: "🛒 ACOMPAÑANTES",  titleBg: "#F0F7F0", titleColor: "#2E6B2E", items: activeItems.filter(i => !proteinKeysC.has(i.key) && !bebidaKeysC.has(i.key) && !botanaKeysC.has(i.key)).map(i => ({ label: i.displayLabel, val: fmtVal(i) })) },
              { title: "🍺 BEBIDAS",        titleBg: "#EFF4FF", titleColor: "#1A56A0", items: activeItems.filter(i => bebidaKeysC.has(i.key)).map(i => ({ label: i.displayLabel, val: fmtVal(i) })) },
              { title: "🍿 BOTANAS",        titleBg: "#FFFBE6", titleColor: "#A0780A", items: activeItems.filter(i => botanaKeysC.has(i.key)).map(i => ({ label: i.displayLabel, val: fmtVal(i) })) },
            ] as CardSection[]).filter(s => s.items.length > 0);

        return (
          <div
            ref={cardRef}
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", top: "0", width: "440px", fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#FDF9F4" }}
          >
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #E8460A 0%, #B83A08 100%)", padding: "22px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
              {logoDataUrl && (
                <img src={logoDataUrl} alt="" style={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0 }} />
              )}
              <div>
                <div style={{ color: "white", fontSize: "24px", fontWeight: "900", letterSpacing: "-0.5px", lineHeight: 1.1 }}>Calcuasada</div>
                <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", marginTop: "5px" }}>
                  Lista para <strong style={{ color: "white" }}>{totalPersonas} personas</strong> · {nivelLabel}
                </div>
                {ninos > 0 && (
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", marginTop: "2px" }}>
                    {adultos} adultos · {ninos} niños
                  </div>
                )}
                {distribuidorActivo && todosAsignados && (
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", marginTop: "2px" }}>
                    Distribuido entre {personas.length} personas
                  </div>
                )}
              </div>
            </div>

            {/* Sections */}
            <div style={{ padding: "12px 0 4px" }}>
              {sections.map((section, si) => (
                <div key={si} style={{ marginBottom: "4px" }}>
                  {/* Section header */}
                  <div style={{ backgroundColor: section.titleBg, padding: "6px 24px", marginBottom: "2px" }}>
                    <span style={{ color: section.titleColor, fontSize: "11px", fontWeight: "800", letterSpacing: "0.5px", textTransform: "uppercase" as const }}>
                      {section.title}
                    </span>
                  </div>
                  {/* Section items */}
                  {section.items.map((item, ii) => (
                    <div
                      key={ii}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "9px 24px",
                        backgroundColor: ii % 2 === 0 ? "#FFFCF9" : "#FAF7F2",
                        borderBottom: ii < section.items.length - 1 ? "1px solid #F0EDE8" : "none",
                      }}
                    >
                      <span style={{ color: "#3D3530", fontSize: "13px" }}>{item.label}</span>
                      <span style={{ color: "#C73B08", fontSize: "13px", fontWeight: "700" }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Total estimado (solo modo normal) */}
            {!distribuidorActivo && total > 0 && (
              <div style={{ margin: "8px 24px 4px", padding: "10px 16px", backgroundColor: "#FFF3ED", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#7A3A1A", fontSize: "13px", fontWeight: "600" }}>💰 Estimado total</span>
                <span style={{ color: "#C73B08", fontSize: "15px", fontWeight: "900" }}>${formatMXN(total)} MXN</span>
              </div>
            )}

            {/* Footer */}
            <div style={{ marginTop: "12px", padding: "12px 24px", backgroundColor: "#1A1A1A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#888", fontSize: "12px" }}>calcuasada.com</span>
              <span style={{ color: "#E8460A", fontSize: "12px", fontWeight: "700" }}>Hecho con 🔥 Calcuasada</span>
            </div>
          </div>
        );
      })()}

      {/* Preview modal */}
      {previewUrl && (
        <div
          onClick={() => setPreviewUrl(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "440px", width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", maxHeight: "80vh" }}
          >
            <div style={{ overflowY: "auto", flex: 1 }}>
              <img src={previewUrl} alt="Lista de carne asada" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ backgroundColor: "#1A1A1A", padding: "16px", display: "flex", gap: "10px", flexShrink: 0 }}>
              <button
                onClick={handleShareImage}
                style={{ flex: 1, backgroundColor: "#E8460A", color: "white", border: "none", borderRadius: "12px", padding: "13px 10px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}
              >
                📤 Compartir
              </button>
              <button
                onClick={handleDownloadImage}
                style={{ flex: 1, backgroundColor: "#2D2D2D", color: "white", border: "1px solid #444", borderRadius: "12px", padding: "13px 10px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}
              >
                ⬇️ Descargar
              </button>
            </div>
          </div>
          <button
            onClick={() => setPreviewUrl(null)}
            style={{ marginTop: "20px", color: "rgba(255,255,255,0.7)", background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%", width: "40px", height: "40px", fontSize: "18px", cursor: "pointer" }}
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProteinRow({ label, value }: { label: React.ReactNode; value: number }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="flex-1">
        <p className="text-gray-700 text-sm">{label}</p>
      </div>
      <span className="text-2xl font-black text-gray-900 tabular-nums">
        {value}{" "}
        <span className="text-sm font-medium text-gray-500">kg</span>
      </span>
    </div>
  );
}

function ResultRow({
  label,
  perPerson,
  value,
  unit,
  enabled,
  onToggle,
}: {
  label: React.ReactNode;
  perPerson: string;
  value: number;
  unit: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`flex items-center gap-3 py-3 transition-opacity ${!enabled ? "opacity-35" : ""}`}>
      <button
        onClick={onToggle}
        className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 ${enabled ? "bg-brasa" : "bg-gray-300"}`}
        aria-label={enabled ? "Desactivar" : "Activar"}
      >
        <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${enabled ? "translate-x-4" : "translate-x-0"}`} />
      </button>
      <div className="flex-1 min-w-0">
        <p className={`text-gray-700 text-sm leading-tight ${!enabled ? "line-through" : ""}`}>{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{perPerson}</p>
      </div>
      <span className="text-2xl font-black text-gray-900 tabular-nums flex-shrink-0">
        {value}{" "}
        <span className="text-sm font-medium text-gray-500">{unit}</span>
      </span>
    </div>
  );
}
