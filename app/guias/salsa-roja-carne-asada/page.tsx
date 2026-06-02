import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa roja para carne asada — Receta con jitomate tatemado — Calcuasada",
  description:
    "Receta de salsa roja casera para carne asada: jitomates tatemados en el asador, chiles de árbol, ajo y cebolla. Sencilla, picosita y con un ahumado natural que no tiene precio.",
};

export default function SalsaRojaPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Receta de la casa</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          Salsa roja para carne asada
        </h1>
        <p className="text-sm text-gray-500">5 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Jitomates tatemados directo en el asador — el ahumado es la clave</li>
          <li>Lista en 15 minutos, antes de que llegue la carne</li>
          <li>Rinde para 6 a 8 personas por receta</li>
          <li>Más picante que la verde — los chiles de árbol no perdonan</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">La salsa roja que va con la carne asada</h2>
        <p className="text-sm leading-relaxed">
          La salsa roja para carne asada no es la salsa de taquerías que conoces — esa va cocida y con jitomate hervido. Esta va tatemada directo en la parrilla, con las brasas del mismo asador. El jitomate agarra un sabor ahumado y ligeramente dulce que combinado con el chile de árbol da una salsa con carácter: picosita, sabrosa y con ese toque de carbón que solo se consigue en la parrilla.
        </p>
        <p className="text-sm leading-relaxed">
          Es la salsa que va cuando quieres algo con más cuerpo que la verde. También aguanta bien al lado del guacamole — las dos se complementan perfecto en la mesa.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas. Usa la calculadora para ajustar la cantidad.</p>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {[
            { emoji: "🍅", cantidad: "6 a 8",    ingrediente: "Jitomates (tomates rojos, maduros)" },
            { emoji: "🌶️", cantidad: "3 a 4",    ingrediente: "Chiles de árbol secos" },
            { emoji: "🧅", cantidad: "1 pedazo", ingrediente: "Cebolla blanca" },
            { emoji: "🧄", cantidad: "1 diente", ingrediente: "Ajo" },
            { emoji: "🧂", cantidad: "Al gusto", ingrediente: "Sal" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0">{emoji}</span>
              <span className="text-sm font-bold text-gray-500 w-16 flex-shrink-0">{cantidad}</span>
              <span className="text-sm text-gray-800">{ingrediente}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">
          Los chiles de árbol secos son pequeños, rojos y muy picosos. Los encuentras en cualquier mercado o súper.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Preparación</h2>

        <div className="space-y-3">
          {[
            {
              n: 1,
              titulo: "Tatema todo en el asador",
              texto: "Pon los jitomates, la cebolla y el ajo directamente en la parrilla. Dales vuelta cada par de minutos hasta que estén bien tatemados por fuera — con manchas negras y piel levantada — y suaves por dentro. En carbón caliente tarda unos 10-12 minutos.",
            },
            {
              n: 2,
              titulo: "Tuesta los chiles de árbol",
              texto: "Pon los chiles secos en la parrilla o en un comal a fuego medio. Muévelos constantemente — se tuestan muy rápido, en 30 a 60 segundos. Solo los quieres aromáticos y ligeramente inflados, no quemados. Si se queman amargan.",
            },
            {
              n: 3,
              titulo: "Deja enfriar un momento",
              texto: "Retira todo del fuego y deja que suelten el vapor un par de minutos antes de licuar. No los metas a la licuadora muy calientes.",
            },
            {
              n: 4,
              titulo: "Todo a la licuadora",
              texto: "Mete los jitomates, los chiles de árbol, la cebolla y el ajo. Agrega sal al gusto. Si los chiles de árbol tienen semillas y quieres la salsa menos picosa, sácalas antes de licuar.",
            },
            {
              n: 5,
              titulo: "Licúa y prueba",
              texto: "Licúa hasta que tenga la textura que prefieras. Puede quedar bien molida o un poco martajada. Prueba y ajusta de sal. Si quedó muy espesa, agrega un poquito de agua — aunque sin agua queda más intensa.",
            },
          ].map(({ n, titulo, texto }) => (
            <div key={n} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brasa text-white font-black text-sm flex items-center justify-center mt-0.5">
                {n}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-900">{titulo}</p>
                <p className="text-sm leading-relaxed text-gray-600">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner />

      <section className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-3">
        <p className="text-sm font-black text-gray-900">⭐ Recomendación especial de Yeyito</p>
        <p className="text-sm leading-relaxed text-gray-700">
          Igual que con la salsa verde — si quieres darle más sabor, agrega un pedacito de grasa de la carne tatemada directo a la licuadora. Le da un sabor más profundo y ahumado que no tiene comparación.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Para esta salsa roja, también puedes sustituir uno o dos chiles de árbol por un chipotle en adobo. Le da un sabor más ahumado y un picante más suave y redondo. No es la receta tradicional, pero queda muy buena.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Tips rápidos</h2>
        <div className="space-y-2">
          {[
            { emoji: "🌶️", tip: "Los chiles de árbol son más picosos que los serranos. Si no sabes cuánto aguanta tu gente, empieza con 2 y ve subiendo." },
            { emoji: "🍅", tip: "El jitomate debe quedar bien tatemado — con manchas negras por fuera. Ahí está el sabor. Si te quedas corto, la salsa queda sosa." },
            { emoji: "🧄", tip: "El ajo tatemado tiene sabor más suave. Si te gusta con más presencia de ajo, agrega medio diente crudo al licuar." },
            { emoji: "🫙", tip: "Sobra salsa? En frasco tapado en el refri aguanta hasta 4 días sin problema." },
          ].map(({ emoji, tip }, i) => (
            <div key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="flex-shrink-0">{emoji}</span>
              <p className="leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">¿Con qué va esta salsa?</h2>
        <p className="text-sm leading-relaxed">
          Con todo. Arrachera, costilla, pollo, salchicha, quesadillas — la salsa roja aguanta todo lo que le pongas encima. Es especialmente buena con costilla de res porque el sabor fuerte de la carne y el picante del chile de árbol se complementan muy bien.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes salsa roja y salsa verde en la mesa, ya tienes las dos que necesita cualquier carne asada norteña completa.
        </p>
      </section>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <p className="text-sm font-bold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-sm text-gray-600">
          La calculadora ya incluye los ingredientes de esta salsa ajustados al número de personas — activa la opción &ldquo;Casera&rdquo; en la fila de salsa y elige &ldquo;Roja&rdquo;.
        </p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Ir a la calculadora →
        </Link>
      </div>

      <AdBanner />

    </article>
  );
}
