import type { EventType } from "./calcuasada-config";
import {
  BASE_PROTEIN_G,
  PROTEIN_DISTRIBUTION,
  BOTANAS_PROTEIN_MULTIPLIER,
  BASE_ACOMPS,
  ACOMP_MULTIPLIERS,
  CERVEZA_LATAS,
} from "./calcuasada-config";

export type { EventType } from "./calcuasada-config";
export { DEFAULT_PRICES } from "./calcuasada-config";

export interface Proteinas {
  res: boolean;
  pollo: boolean;
  salchicha: boolean;
  queso: boolean;
}

export interface Extras {
  cerveza: boolean;
  refrescos: boolean;
  botanas: boolean;
}

export interface Results {
  res?: number;         // kg, redondeado a 0.1
  pollo?: number;       // kg, redondeado a 0.1
  salchicha?: number;   // kg, redondeado a 0.1
  queso?: number;       // kg, redondeado a 0.1
  tortillas: number;    // pzas, múltiplo de 10
  cebolla: number;      // pzas, entero (ceil)
  limon: number;        // pzas, entero (ceil)
  aguacate: number;     // pzas, entero (ceil)
  salsa: number;        // ml, redondeado a 250/500/1000+
  carbon: number;       // kg, nearest 0.5
  hielo: number;        // kg, nearest 0.5
  frijoles: number;     // ollas, entero (ceil)
  cerveza?: number;     // latas, múltiplo de 6
  refrescos?: number;   // botellas 2L
}

// ── Rounding helpers ─────────────────────────────────────────────────────────

function roundToTen(n: number): number {
  return Math.ceil(n / 10) * 10;
}

function roundToHalf(n: number): number {
  return Math.ceil(n * 2) / 2;
}

function roundSalsa(ml: number): number {
  if (ml <= 250) return 250;
  if (ml <= 500) return 500;
  return Math.ceil(ml / 1000) * 1000;
}

function roundProteinKg(grams: number): number {
  return Math.round(grams / 100) / 10;
}

// ── Main calculation ──────────────────────────────────────────────────────────

export function calcular(
  hombres: number,
  mujeres: number,
  ninos: number,
  tipo: EventType,
  proteinas: Proteinas,
  extras: Extras
): Results {
  const baseG = BASE_PROTEIN_G[tipo];
  const totalGrams = hombres * baseG.hombre + mujeres * baseG.mujer + ninos * baseG.nino;
  const adjustedGrams =
    totalGrams * (extras.botanas ? BOTANAS_PROTEIN_MULTIPLIER.on : BOTANAS_PROTEIN_MULTIPLIER.off);

  const parts: string[] = [];
  if (proteinas.res) parts.push("res");
  if (proteinas.pollo) parts.push("pollo");
  if (proteinas.salchicha) parts.push("salchicha");
  if (proteinas.queso) parts.push("queso");
  const dist = parts.length > 0 ? PROTEIN_DISTRIBUTION[parts.join("_")] : null;

  const m = ACOMP_MULTIPLIERS;
  const b = BASE_ACOMPS;

  const tortillasRaw =
    (hombres * b.tortillas.hombre + mujeres * b.tortillas.mujer + ninos * b.tortillas.nino) * m.tortillas[tipo];
  const cebollaRaw =
    (hombres * b.cebolla.hombre + mujeres * b.cebolla.mujer + ninos * b.cebolla.nino) * m.cebolla[tipo];
  let limonRaw =
    (hombres * b.limon.hombre + mujeres * b.limon.mujer + ninos * b.limon.nino) * m.limon[tipo];
  if (extras.cerveza) limonRaw *= 1.15;
  const aguacateRaw =
    (hombres * b.aguacate.hombre + mujeres * b.aguacate.mujer + ninos * b.aguacate.nino) * m.aguacate[tipo];
  const salsaRaw =
    (hombres * b.salsa.hombre + mujeres * b.salsa.mujer + ninos * b.salsa.nino) * m.salsa[tipo];
  const carbonRaw =
    (hombres * b.carbon.hombre + mujeres * b.carbon.mujer + ninos * b.carbon.nino) * m.carbon[tipo];
  const frijolesRaw =
    (hombres * b.frijoles.hombre + mujeres * b.frijoles.mujer + ninos * b.frijoles.nino) * m.frijoles[tipo];
  let hieloRaw =
    (hombres * b.hielo.hombre + mujeres * b.hielo.mujer + ninos * b.hielo.nino) * m.hielo[tipo];
  if (extras.cerveza) hieloRaw *= 1.4;

  const cervezaRates = CERVEZA_LATAS[tipo];
  const cervezaLatasRaw = hombres * cervezaRates.hombre + mujeres * cervezaRates.mujer;
  const totalPersonas = hombres + mujeres + ninos;

  return {
    res:      dist && proteinas.res      ? roundProteinKg(adjustedGrams * dist.res)      : undefined,
    pollo:    dist && proteinas.pollo    ? roundProteinKg(adjustedGrams * dist.pollo)    : undefined,
    salchicha:dist && proteinas.salchicha? roundProteinKg(adjustedGrams * dist.salchicha): undefined,
    queso:    dist && proteinas.queso    ? roundProteinKg(adjustedGrams * dist.queso)    : undefined,
    tortillas: roundToTen(tortillasRaw),
    cebolla:   Math.ceil(cebollaRaw),
    limon:     Math.ceil(limonRaw),
    aguacate:  Math.ceil(aguacateRaw),
    salsa:     roundSalsa(salsaRaw),
    carbon:    roundToHalf(carbonRaw),
    hielo:     roundToHalf(hieloRaw),
    frijoles:  Math.ceil(frijolesRaw),
    cerveza:   extras.cerveza   ? Math.ceil(cervezaLatasRaw / 6) * 6         : undefined,
    refrescos: extras.refrescos ? Math.ceil(totalPersonas / 4)               : undefined,
  };
}

// ── Compatibility helper for SEO static pages ────────────────────────────────

export function calcularParaPersonas(n: number) {
  const hombres = Math.round(n / 2);
  const mujeres = n - hombres;
  const r = calcular(
    hombres, mujeres, 0, "normal",
    { res: true, pollo: false, salchicha: false, queso: false },
    { cerveza: false, refrescos: false, botanas: false }
  );
  return {
    res:      r.res ?? 0,
    tortillas: r.tortillas,
    limon:    r.limon,
    aguacate: r.aguacate,
    carbon:   r.carbon,
    hielo:    r.hielo,
  };
}
