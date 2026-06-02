export type EventType = "ligero" | "normal" | "tragones";

// Gramos de proteína base por tipo de persona según nivel de apetito
export const BASE_PROTEIN_G: Record<EventType, { hombre: number; mujer: number; nino: number }> = {
  ligero:   { hombre: 200, mujer: 150, nino: 100 },
  normal:   { hombre: 300, mujer: 230, nino: 150 },
  tragones: { hombre: 400, mujer: 320, nino: 200 },
};

// Proporción de la proteína total asignada a cada proteína activa
export const PROTEIN_DISTRIBUTION: Record<string, { res: number; pollo: number; salchicha: number; queso: number }> = {
  res:                       { res: 1.00, pollo: 0,    salchicha: 0,    queso: 0    },
  res_pollo:                 { res: 0.65, pollo: 0.35, salchicha: 0,    queso: 0    },
  res_salchicha:             { res: 0.75, pollo: 0,    salchicha: 0.25, queso: 0    },
  res_queso:                 { res: 0.85, pollo: 0,    salchicha: 0,    queso: 0.15 },
  res_pollo_salchicha:       { res: 0.55, pollo: 0.30, salchicha: 0.15, queso: 0    },
  res_pollo_queso:           { res: 0.60, pollo: 0.30, salchicha: 0,    queso: 0.10 },
  res_salchicha_queso:       { res: 0.65, pollo: 0,    salchicha: 0.20, queso: 0.15 },
  res_pollo_salchicha_queso: { res: 0.50, pollo: 0.25, salchicha: 0.15, queso: 0.10 },
  pollo:                     { res: 0,    pollo: 1.00, salchicha: 0,    queso: 0    },
  pollo_salchicha:           { res: 0,    pollo: 0.70, salchicha: 0.30, queso: 0    },
  pollo_queso:               { res: 0,    pollo: 0.80, salchicha: 0,    queso: 0.20 },
  salchicha:                 { res: 0,    pollo: 0,    salchicha: 1.00, queso: 0    },
  salchicha_queso:           { res: 0,    pollo: 0,    salchicha: 0.70, queso: 0.30 },
  queso:                     { res: 0,    pollo: 0,    salchicha: 0,    queso: 1.00 },
};

// Multiplicador de proteína cuando hay botanas activas
export const BOTANAS_PROTEIN_MULTIPLIER = { off: 1.00, on: 0.95 };

// Cantidades base de acompañantes por tipo de persona a nivel Normal
export const BASE_ACOMPS = {
  tortillas: { hombre: 3.5,  mujer: 3.0,  nino: 2.0  }, // pzas — 3-4 por persona
  cebolla:   { hombre: 0.25, mujer: 0.20, nino: 0.10 }, // pzas — 1 grande cada 4-5 personas
  limon:     { hombre: 0.8,  mujer: 0.6,  nino: 0.3  }, // pzas — ~1 kg cada 10 personas
  aguacate:  { hombre: 0.40, mujer: 0.35, nino: 0.20 }, // pzas — 1 cada 2-3 personas
  salsa:     { hombre: 70,   mujer: 60,   nino: 30   }, // ml
  carbon:    { hombre: 0.5,  mujer: 0.5,  nino: 0.25 }, // kg
  hielo:     { hombre: 1.0,  mujer: 1.0,  nino: 0.5  }, // kg
  frijoles:  { hombre: 0.12, mujer: 0.10, nino: 0.06 }, // litros — ~0.1L por persona
};

// Multiplicadores de acompañantes por nivel de apetito
export const ACOMP_MULTIPLIERS: Record<string, Record<EventType, number>> = {
  tortillas: { ligero: 0.80, normal: 1.00, tragones: 1.30 },
  cebolla:   { ligero: 0.80, normal: 1.00, tragones: 1.25 },
  limon:     { ligero: 0.80, normal: 1.00, tragones: 1.40 },
  aguacate:  { ligero: 0.80, normal: 1.00, tragones: 1.30 },
  salsa:     { ligero: 0.75, normal: 1.00, tragones: 1.35 },
  carbon:    { ligero: 0.85, normal: 1.00, tragones: 1.20 },
  hielo:     { ligero: 0.90, normal: 1.00, tragones: 1.20 },
  frijoles:  { ligero: 0.80, normal: 1.00, tragones: 1.25 },
};

// Latas de cerveza por tipo de persona según nivel de apetito (niños = 0 siempre)
export const CERVEZA_LATAS: Record<EventType, { hombre: number; mujer: number; nino: number }> = {
  ligero:   { hombre: 2, mujer: 1, nino: 0 },
  normal:   { hombre: 4, mujer: 3, nino: 0 },
  tragones: { hombre: 7, mujer: 5, nino: 0 },
};

// Precios de mercado en MXN (referencia, ajustables)
export const DEFAULT_PRICES: Record<string, number> = {
  res:           280, // $/kg
  pollo:         120, // $/kg
  salchicha:     120, // $/kg
  queso:         190, // $/kg
  tortillas:      25, // $/kg  (~30g por tortilla)
  cebolla:         8, // $/pza
  limon:           2, // $/pza
  aguacate:       22, // $/pza
  salsa:         100, // $/L  (~$1 cada 10g, bote 300g = $30)
  carbon:         35, // $/kg
  hielo:          15, // $/kg
  frijoles:       28, // $/L de frijol de olla
  cerveza:        20, // $/lata
  refrescos:      40, // $/botella 2L
  // Ingredientes de salsa casera
  chile_piquin:  0.30, // $/pza (chile seco entero, a granel en mercado)
  tomatillo:     3.00, // $/pza (miltomate)
  jitomate:      4.00, // $/pza (bola o roma)
  chile_serrano: 2.00, // $/pza
  chile_arbol:   1.50, // $/pza
  ajo:           1.00, // $/diente
  cilantro:      4.00, // $/puñito (manojo pequeño)
};
