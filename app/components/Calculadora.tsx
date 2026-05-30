"use client";

import { useState, useCallback } from "react";
import {
  calcularResultados,
  calcularExtras,
  DEFAULT_PRICES,
  MULTIPLIERS,
  type EventType,
  type AddOns,
  type Results,
} from "../lib/calculator";
import AdBanner from "./AdBanner";

const EVENT_TYPES: { value: EventType; label: string; desc: string }[] = [
  { value: "ligero", label: "Ligero", desc: "Botaneo relajado" },
  { value: "normal", label: "Normal", desc: "La clásica carne asada" },
  { value: "tragones", label: "Tragones", desc: "Comes hasta caer" },
];

const ADD_ON_LABELS: Record<keyof AddOns, string> = {
  cerveza: "Cerveza (caguamas 940ml)",
  refrescos: "Refrescos (botellas 2L)",
  botanas: "Botanas (bolsas de papas)",
  queso: "Queso para asar",
  pollo: "Pollo",
  hamburguesas: "Hamburguesas",
};

const PRICE_LABELS: Record<string, string> = {
  carne: "Carne de res ($/kg)",
  salchicha: "Salchicha para asar ($/kg)",
  tortillas: "Tortillas ($/kg)",
  carbon: "Carbón ($/kg)",
  hielo: "Hielo ($/kg)",
  cerveza: "Cerveza caguama ($/pieza)",
  pollo: "Pollo ($/kg)",
  queso: "Queso para asar ($/kg)",
};

interface Props {
  defaultAdultos?: number;
  defaultNinos?: number;
  defaultTipo?: EventType;
}

export default function Calculadora({
  defaultAdultos = 10,
  defaultNinos = 0,
  defaultTipo = "normal",
}: Props) {
  const [adultos, setAdultos] = useState(defaultAdultos);
  const [ninos, setNinos] = useState(defaultNinos);
  const [tipo, setTipo] = useState<EventType>(defaultTipo);
  const [addOns, setAddOns] = useState<AddOns>({
    cerveza: false,
    refrescos: false,
    botanas: false,
    queso: false,
    pollo: false,
    hamburguesas: false,
  });
  const [priceTab, setPriceTab] = useState<"promedio" | "personalizado">(
    "promedio"
  );
  const [customPrices, setCustomPrices] = useState({ ...DEFAULT_PRICES });
  const [disabledRows, setDisabledRows] = useState<Set<keyof Results>>(new Set());

  const toggleRow = (key: keyof Results) =>
    setDisabledRows((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  const isEnabled = (key: keyof Results) => !disabledRows.has(key);

  const results = calcularResultados(adultos, ninos, tipo);
  const extras = calcularExtras(adultos, ninos, addOns);
  const prices = priceTab === "promedio" ? DEFAULT_PRICES : customPrices;

  const tortillasKg = results.tortillas * 0.03; // ~30g per tortilla
  const total =
    (isEnabled("carne") ? results.carne * prices.carne : 0) +
    (isEnabled("salchicha") ? results.salchicha * prices.salchicha : 0) +
    (isEnabled("tortillas") ? tortillasKg * prices.tortillas : 0) +
    (isEnabled("carbon") ? results.carbon * prices.carbon : 0) +
    (isEnabled("hielo") ? results.hielo * prices.hielo : 0) +
    (extras.cerveza ?? 0) * prices.cerveza +
    (extras.pollo ?? 0) * prices.pollo +
    (extras.queso ?? 0) * prices.queso;

  const formatMXN = (n: number) =>
    n.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const toggleAddOn = (key: keyof AddOns) =>
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));

  const buildShareText = useCallback(() => {
    const lines = [
      `🥩 Calcuasada — Lista para ${adultos} adultos y ${ninos} niños (${tipo})`,
      "",
      "LISTA DE COMPRAS:",
      `• Carne de res: ${results.carne} kg`,
      `• Salchicha para asar: ${results.salchicha} kg`,
      `• Tortillas: ${results.tortillas} pzas`,
      `• Cebollas: ${results.cebollas} pzas`,
      `• Limones: ${results.limones} pzas`,
      `• Aguacates: ${results.aguacates} pzas`,
      `• Salsa: ${results.salsa} L`,
      `• Carbón: ${results.carbon} kg`,
      `• Hielo: ${results.hielo} kg`,
    ];
    if (extras.cerveza) lines.push(`• Cerveza: ${extras.cerveza} caguamas`);
    if (extras.refrescos) lines.push(`• Refrescos: ${extras.refrescos} botellas`);
    if (extras.botanas) lines.push(`• Botanas: ${extras.botanas} bolsas`);
    if (extras.queso) lines.push(`• Queso: ${extras.queso} kg`);
    if (extras.pollo) lines.push(`• Pollo: ${extras.pollo} kg`);
    if (extras.hamburguesas) lines.push(`• Hamburguesas: ${extras.hamburguesas} pzas`);
    lines.push("", `💰 Costo estimado: $${formatMXN(total)} MXN`);
    lines.push("", "Calculado en calcuasada.mx");
    return lines.join("\n");
  }, [adultos, ninos, tipo, results, extras, total]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(buildShareText());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handlePDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const text = buildShareText();
    const lines = doc.splitTextToSize(text, 180);
    doc.setFontSize(12);
    doc.text(lines, 15, 20);
    doc.save("calcuasada-lista.pdf");
  };

  return (
    <div className="space-y-6">
      {/* FORM */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4">¿Cuántos van?</h2>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">Adultos</span>
            <input
              type="number"
              min={0}
              value={adultos}
              onChange={(e) => setAdultos(Math.max(0, parseInt(e.target.value) || 0))}
              className="border border-gray-300 rounded-xl px-4 py-3 text-xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brasa"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">Niños</span>
            <input
              type="number"
              min={0}
              value={ninos}
              onChange={(e) => setNinos(Math.max(0, parseInt(e.target.value) || 0))}
              className="border border-gray-300 rounded-xl px-4 py-3 text-xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brasa"
            />
          </label>
        </div>

        <p className="text-sm font-medium text-gray-600 mb-2">Tipo de carne asada</p>
        <div className="grid grid-cols-3 gap-2">
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
      </section>

      {/* AD between form and results */}
      <AdBanner />

      {/* RESULTS */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Lista de compras</h2>
        <div className="divide-y divide-gray-50">
          <ResultRow label="🥩 Carne de res" perPerson={perPersonaText("carne", tipo)} value={results.carne} unit="kg" enabled={isEnabled("carne")} onToggle={() => toggleRow("carne")} />
          <ResultRow label="🌭 Salchicha para asar" perPerson={perPersonaText("salchicha", tipo)} value={results.salchicha} unit="kg" enabled={isEnabled("salchicha")} onToggle={() => toggleRow("salchicha")} />
          <ResultRow label="🫓 Tortillas" perPerson={perPersonaText("tortillas", tipo)} value={results.tortillas} unit="pzas" enabled={isEnabled("tortillas")} onToggle={() => toggleRow("tortillas")} />
          <ResultRow label="🧅 Cebollas" perPerson={perPersonaText("cebollas", tipo)} value={results.cebollas} unit="pzas" enabled={isEnabled("cebollas")} onToggle={() => toggleRow("cebollas")} />
          <ResultRow label="🍋 Limones" perPerson={perPersonaText("limones", tipo)} value={results.limones} unit="pzas" enabled={isEnabled("limones")} onToggle={() => toggleRow("limones")} />
          <ResultRow label="🥑 Aguacates" perPerson={perPersonaText("aguacates", tipo)} value={results.aguacates} unit="pzas" enabled={isEnabled("aguacates")} onToggle={() => toggleRow("aguacates")} />
          <ResultRow label="🫙 Salsa" perPerson={perPersonaText("salsa", tipo)} value={results.salsa} unit="litros" enabled={isEnabled("salsa")} onToggle={() => toggleRow("salsa")} />
          <ResultRow label="🪨 Carbón" perPerson={perPersonaText("carbon", tipo)} value={results.carbon} unit="kg" enabled={isEnabled("carbon")} onToggle={() => toggleRow("carbon")} />
          <ResultRow label="🧊 Hielo" perPerson={perPersonaText("hielo", tipo)} value={results.hielo} unit="kg" enabled={isEnabled("hielo")} onToggle={() => toggleRow("hielo")} />
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Extras opcionales</h2>
        <div className="space-y-2">
          {(Object.keys(ADD_ON_LABELS) as (keyof AddOns)[]).map((key) => (
            <label
              key={key}
              className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={addOns[key]}
                onChange={() => toggleAddOn(key)}
                className="w-5 h-5 accent-brasa rounded"
              />
              <span className="text-sm text-gray-700">{ADD_ON_LABELS[key]}</span>
              {addOns[key] && (
                <span className="ml-auto font-bold text-brasa text-sm">
                  {key === "cerveza" && `${extras.cerveza} caguamas`}
                  {key === "refrescos" && `${extras.refrescos} botellas`}
                  {key === "botanas" && `${extras.botanas} bolsas`}
                  {key === "queso" && `${extras.queso} kg`}
                  {key === "pollo" && `${extras.pollo} kg`}
                  {key === "hamburguesas" && `${extras.hamburguesas} pzas`}
                </span>
              )}
            </label>
          ))}
        </div>
      </section>

      {/* COST ESTIMATOR */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 print:shadow-none print:border-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Estimador de costo</h2>
        <div className="flex gap-2 mb-4 print:hidden">
          {(["promedio", "personalizado"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setPriceTab(tab)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                priceTab === tab
                  ? "bg-brasa text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                    onChange={(e) =>
                      setCustomPrices((prev) => ({
                        ...prev,
                        [key]: parseFloat(e.target.value) || 0,
                      }))
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
            ${formatMXN(total / Math.max(adultos + ninos, 1))} por persona
          </p>
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <section className="grid grid-cols-3 gap-3 print:hidden">
        <button
          onClick={() => window.print()}
          className="flex flex-col items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-2 rounded-xl text-sm transition-all"
        >
          <span className="text-xl">🖨️</span>
          Imprimir lista
        </button>
        <button
          onClick={handlePDF}
          className="flex flex-col items-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 font-medium py-3 px-2 rounded-xl text-sm transition-all"
        >
          <span className="text-xl">📄</span>
          Descargar PDF
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-2 rounded-xl text-sm transition-all"
        >
          <span className="text-xl">💬</span>
          Compartir por WhatsApp
        </button>
      </section>
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
  label: string;
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

function perPersonaText(key: keyof Results, tipo: EventType): string {
  const m = MULTIPLIERS[tipo];
  switch (key) {
    case "carne":    return `~${m.carne * 1000}g por persona`;
    case "salchicha": return `~${m.salchicha * 1000}g por persona`;
    case "tortillas": return `~${m.tortillas} por persona`;
    case "cebollas":  return `~1 cada ${Math.round(1 / m.cebollas)} personas`;
    case "limones":   return `~${m.limones} por persona`;
    case "aguacates": return `~1 cada ${Math.round(1 / m.aguacates)} personas`;
    case "salsa":     return `~${m.salsa * 1000}ml por persona`;
    case "carbon":    return `~${m.carbon * 1000}g por persona`;
    case "hielo":     return `~${m.hielo} kg por persona`;
  }
}
