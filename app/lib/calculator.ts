export type EventType = "ligero" | "normal" | "tragones";

export interface Multipliers {
  carne: number;
  salchicha: number;
  tortillas: number;
  cebollas: number;
  limones: number;
  aguacates: number;
  salsa: number;
  carbon: number;
  hielo: number;
}

export const MULTIPLIERS: Record<EventType, Multipliers> = {
  ligero: {
    carne: 0.25,
    salchicha: 0.1,
    tortillas: 6,
    cebollas: 0.3,
    limones: 1,
    aguacates: 0.3,
    salsa: 0.05,
    carbon: 0.5,
    hielo: 0.8,
  },
  normal: {
    carne: 0.35,
    salchicha: 0.15,
    tortillas: 8,
    cebollas: 0.4,
    limones: 1.5,
    aguacates: 0.4,
    salsa: 0.07,
    carbon: 0.7,
    hielo: 1.0,
  },
  tragones: {
    carne: 0.5,
    salchicha: 0.2,
    tortillas: 12,
    cebollas: 0.5,
    limones: 2,
    aguacates: 0.5,
    salsa: 0.1,
    carbon: 1.0,
    hielo: 1.5,
  },
};

export interface Results {
  carne: number;
  salchicha: number;
  tortillas: number;
  cebollas: number;
  limones: number;
  aguacates: number;
  salsa: number;
  carbon: number;
  hielo: number;
}

export function calcularResultados(
  adultos: number,
  ninos: number,
  tipo: EventType
): Results {
  const personas = adultos + ninos * 0.5;
  const m = MULTIPLIERS[tipo];
  return {
    carne: round2(personas * m.carne),
    salchicha: round2(personas * m.salchicha),
    tortillas: Math.ceil(personas * m.tortillas),
    cebollas: Math.ceil(personas * m.cebollas),
    limones: Math.ceil(personas * m.limones),
    aguacates: Math.ceil(personas * m.aguacates),
    salsa: round2(personas * m.salsa),
    carbon: round2(personas * m.carbon),
    hielo: round2(personas * m.hielo),
  };
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export interface AddOns {
  cerveza: boolean;
  refrescos: boolean;
  botanas: boolean;
  queso: boolean;
  pollo: boolean;
  hamburguesas: boolean;
}

export interface AddOnResults {
  cerveza?: number;
  refrescos?: number;
  botanas?: number;
  queso?: number;
  pollo?: number;
  hamburguesas?: number;
}

export function calcularExtras(
  adultos: number,
  ninos: number,
  addOns: AddOns
): AddOnResults {
  const totalPersonas = adultos + ninos;
  const result: AddOnResults = {};
  if (addOns.cerveza) result.cerveza = Math.ceil(adultos / 2);
  if (addOns.refrescos) result.refrescos = Math.ceil(totalPersonas / 4);
  if (addOns.botanas) result.botanas = Math.ceil(totalPersonas / 6);
  if (addOns.queso) result.queso = round2(totalPersonas * 0.1);
  if (addOns.pollo) result.pollo = round2(totalPersonas * 0.2);
  if (addOns.hamburguesas) result.hamburguesas = Math.ceil(adultos / 2);
  return result;
}

export const DEFAULT_PRICES: Record<string, number> = {
  carne: 280,
  salchicha: 120,
  tortillas: 30,
  carbon: 35,
  hielo: 25,
  cerveza: 35,
  pollo: 90,
  queso: 180,
};
