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
    slug: "como-marinar-arrachera",
    emoji: "🫙",
    titulo: "Cómo marinar arrachera para carne asada",
    desc: "La mejor marinada, cuánto tiempo dejar, cuándo no marinar y los errores que arruinan la textura.",
    tiempo: "9 min de lectura",
  },
  {
    slug: "guacamole-para-carne-asada",
    emoji: "🥑",
    titulo: "Guacamole para carne asada",
    desc: "Receta clásica norteña, cuánto preparar por persona y el secreto para que no se ponga negro.",
    tiempo: "7 min de lectura",
  },
  {
    slug: "tortillas-maiz-vs-harina",
    emoji: "🫓",
    titulo: "Tortillas de maíz vs tortillas de harina",
    desc: "Diferencias de sabor, textura y uso. Más la historia completa: 10,000 años de maíz y 400 años de harina en el norte.",
    tiempo: "12 min de lectura",
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

const salsas = [
  { slug: "salsa-verde-carne-asada",   label: "🟢 Verde",        desc: "Tomatillo · serrano · cilantro" },
  { slug: "salsa-roja-carne-asada",    label: "🔴 Roja",         desc: "Jitomate · chile de árbol" },
  { slug: "salsa-chile-piquin-limon",  label: "🌶️ Piquín limón", desc: "La favorita de Yeyito" },
];

export default function GuiasPage() {
  return (
    <div className="space-y-8 text-gray-700">
      <div className="space-y-2 py-2">
        <h1 className="text-2xl font-bold text-gray-900">Guías de Carne Asada</h1>
        <p className="text-sm text-gray-400">
          Todo lo que necesitas saber para organizar una carne asada perfecta.
        </p>
      </div>

      <AdBanner />

      <div className="space-y-3">
        {guias.map((g) => (
          <Link
            key={g.slug}
            href={`/guias/${g.slug}`}
            className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors group"
          >
            <div className="flex gap-4 items-start">
              {g.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={g.image} alt="" className="w-11 h-11 rounded-lg object-cover flex-shrink-0" />
              ) : (
                <span className="text-2xl flex-shrink-0 mt-0.5">{g.emoji}</span>
              )}
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-gray-900 group-hover:text-brasa transition-colors leading-snug">
                  {g.titulo}
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{g.desc}</p>
                <p className="text-xs text-brasa font-medium mt-2">{g.tiempo} →</p>
              </div>
            </div>
          </Link>
        ))}

        {/* Card especial: Salsas para carne asada */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0 mt-0.5">🫙</span>
            <div className="space-y-3 min-w-0 flex-1">
              <div>
                <h2 className="text-sm font-semibold text-gray-900 leading-snug">
                  Salsas para carne asada — 3 recetas
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Las tres salsas que van con todo lo que sale del asador. Elige la que te late más.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {salsas.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/guias/${s.slug}`}
                    className="flex flex-col bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-300 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-800">{s.label}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdBanner />

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center space-y-3">
        <p className="text-sm font-semibold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-xs text-gray-500">Usa la calculadora y en segundos tienes la lista exacta de lo que necesitas comprar.</p>
        <Link
          href="/"
          className="inline-block border border-brasa text-brasa font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-brasa/5 transition-colors"
        >
          Ir a la calculadora →
        </Link>
      </div>
    </div>
  );
}
