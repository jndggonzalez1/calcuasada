import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

type Guia = {
  slug: string;
  emoji?: string;
  image?: string;
  titulo: string;
  desc: string;
  tiempo: string;
};

export const metadata: Metadata = {
  title: "Guías de Carne Asada — Calcuasada",
  description:
    "Guías completas para hacer la mejor carne asada: cortes, carbón, lista de compras y más. Todo en español mexicano, gratis.",
};

const guias: Guia[] = [
  {
    slug: "carne-asada-perfecta-monterrey",
    emoji: "🥩",
    titulo: "Cómo hacer una carne asada perfecta al estilo Monterrey",
    desc: "Los mejores cortes, el carbón correcto, sal de grano y todos los secretos para que salga de diez.",
    tiempo: "10 min de lectura",
  },
  {
    slug: "cuanto-carbon-necesito-carne-asada",
    emoji: "🔥",
    titulo: "¿Cuánto carbón necesito para mi carne asada?",
    desc: "Fórmula exacta según el número de personas, el tamaño del asador y cuántas horas va a durar el evento.",
    tiempo: "8 min de lectura",
  },
  {
    slug: "lista-compras-carne-asada-completa",
    emoji: "🛒",
    titulo: "Lista de compras completa para carne asada: no olvides nada",
    desc: "Desde la carne hasta las bolsas de basura — todo lo que necesitas comprar para que no se te olvide nada.",
    tiempo: "7 min de lectura",
  },
  {
    slug: "como-hacer-brisket-ahumado",
    image: "/smoker.png",
    titulo: "Cómo hacer brisket ahumado paso a paso",
    desc: "Temperatura ideal, cuánto tiempo tarda, cómo envolver, cuándo está listo y cómo cortarlo. Todo lo que necesitas saber.",
    tiempo: "12 min de lectura",
  },
];

export default function GuiasPage() {
  return (
    <div className="space-y-8 text-gray-700">
      <div className="text-center space-y-3 py-2">
        <h1 className="text-2xl font-black text-gray-900">Guías de Carne Asada</h1>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Todo lo que necesitas saber para organizar una carne asada perfecta — desde elegir los cortes hasta no quedarte sin carbón.
        </p>
      </div>

      <AdBanner />

      <div className="space-y-4">
        {guias.map((g) => (
          <Link
            key={g.slug}
            href={`/guias/${g.slug}`}
            className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-brasa/30 transition-all group"
          >
            <div className="flex gap-4 items-start">
              {g.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={g.image} alt="" className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-900" />
              ) : (
                <span className="text-3xl flex-shrink-0">{g.emoji}</span>
              )}
              <div className="space-y-1 min-w-0">
                <h2 className="text-base font-black text-gray-900 group-hover:text-brasa transition-colors leading-snug">
                  {g.titulo}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                <p className="text-xs text-brasa font-semibold pt-1">{g.tiempo} →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdBanner />

      <div className="bg-brasa-light rounded-2xl p-5 text-center space-y-3">
        <p className="text-sm font-bold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-sm text-gray-600">Usa la calculadora y en segundos tienes la lista exacta de lo que necesitas comprar.</p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-brasa-hover transition-colors"
        >
          Ir a la calculadora →
        </Link>
      </div>
    </div>
  );
}
