import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa verde para carne asada — Receta fácil y buenísima — Calcuasada",
  description:
    "Receta de salsa verde casera para carne asada: tomatillo, chile serrano, ajo y cilantro. Sencilla, rápida y con el toque especial de Yeyito para que quede de diez.",
};

export default function SalsaVerdePage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Receta de la casa</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          Salsa verde para carne asada
        </h1>
        <p className="text-sm text-gray-500">5 min de lectura · Actualizado mayo 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Se hace directo en el asador — no necesitas estufa</li>
          <li>Lista en 15 minutos, antes de que llegue la carne</li>
          <li>Rinde para 6 a 8 personas por receta</li>
          <li>Con el toque de grasa del asador queda con un sabor ahumado increíble</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Por qué esta salsa es la que va con la carne asada</h2>
        <p className="text-sm leading-relaxed">
          Hay salsas que se hacen para taquerías, otras para enchiladas, y luego está la salsa verde para carne asada — que es su propio mundo. La diferencia está en cómo se tatema: directo en el asador, con el calor de las brasas, el tomatillo agarra un ahumado natural que no se puede imitar en estufa. El resultado es una salsa más rústica, con un sabor más profundo y un pequeño toque de amargo que le va perfecto a la carne.
        </p>
        <p className="text-sm leading-relaxed">
          Esta receta es sencilla a propósito. No lleva crema, no lleva aguacate, no tiene ingredientes raros. Es la salsa de siempre, la que se hace en la mayoría de las casas del norte de México cuando hay carne asada — y que nunca falla.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas. Usa la calculadora para ajustar la cantidad.</p>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {[
            { emoji: "🍅", cantidad: "8", ingrediente: "Tomatillos (tomates verdes)" },
            { emoji: "🌶️", cantidad: "2", ingrediente: "Chiles serranos" },
            { emoji: "🧅", cantidad: "1 pedazo", ingrediente: "Cebolla blanca" },
            { emoji: "🧄", cantidad: "1 diente", ingrediente: "Ajo" },
            { emoji: "🌿", cantidad: "1 puñito", ingrediente: "Cilantro" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0">{emoji}</span>
              <span className="text-sm font-bold text-gray-500 w-16 flex-shrink-0">{cantidad}</span>
              <span className="text-sm text-gray-800">{ingrediente}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">
          Sal al gusto — no está en la lista porque ya la tienes en la cocina.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Preparación</h2>

        <div className="space-y-3">
          {[
            {
              n: 1,
              titulo: "Tatema todo en el asador",
              texto: "Pon los tomatillos, los chiles serranos, la cebolla y el ajo directamente en la parrilla. Dales vuelta con unas pinzas cada par de minutos hasta que estén bien tatemados por fuera — con manchas negras — y suaves por dentro. En carbón caliente tarda unos 10-12 minutos.",
            },
            {
              n: 2,
              titulo: "Deja que enfríen un momento",
              texto: "Retíralos del fuego y deja que suelten el vapor un par de minutos. No los metas de inmediato a la licuadora cuando están muy calientes — además de quemarte, la tapa puede volar.",
            },
            {
              n: 3,
              titulo: "Todo a la licuadora",
              texto: "Mete los tomatillos, los chiles, la cebolla y el ajo a la licuadora. Agrega el cilantro y sal al gusto.",
            },
            {
              n: 4,
              titulo: "Licúa a tu gusto",
              texto: "Licúa hasta que tenga la textura que prefieras. Puede quedar bien molida o un poco martajada, más rústica. Prueba y ajusta de sal. Lista.",
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
          Si quieres darle un toque más sabroso, corta un pedacito de grasa de la carne — como una esquinita que le quites a un corte — y dóralo en el asador hasta que quede bien cocido, suavecito y con sabor ahumado.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Después agrégalo a la licuadora junto con el resto de los ingredientes. Le va a dar a la salsa un sabor más profundo, grasosito y muy de carne asada. No necesitas mucho — con un pedacito pequeño basta para darle ese toque especial sin que la salsa quede pesada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Tips rápidos</h2>
        <div className="space-y-2">
          {[
            { emoji: "🌶️", tip: "¿Quieres más picante? Agrega otro chile serrano. ¿Menos? Usa solo uno o quítale las semillas antes de licuar." },
            { emoji: "🍅", tip: "Los tomatillos deben verse maduros — verdes intensos y firmes. Si están muy pequeños o amarillentos la salsa queda ácida." },
            { emoji: "🧄", tip: "El ajo tatemado tiene un sabor más suave que el crudo. Si te gusta con más punch de ajo, agrega medio diente extra crudo al licuar." },
            { emoji: "🌿", tip: "El cilantro va crudo — no lo tatemes. Se agrega al final justo antes de licuar para que conserve su color verde y su sabor fresco." },
            { emoji: "🫙", tip: "Sobra salsa? Guárdala en un frasco con tapa en el refri. Dura hasta 4 días sin problema." },
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
          Esta salsa verde va con todo lo que sale del asador. Arrachera, costilla, pollo, salchicha para asar, quesadillas de queso — no importa qué estés cocinando, esta salsa le queda bien a todo. También es perfecta para los tacos que armas con la carne sobrante al final de la tarde.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes guacamole y esta salsa verde, ya tienes las dos salsas que necesita cualquier carne asada. Con eso y las tortillas calientes, todos van a estar contentos.
        </p>
      </section>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <p className="text-sm font-bold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-sm text-gray-600">
          La calculadora ya incluye los ingredientes de esta salsa ajustados al número de personas — activa la opción &ldquo;Casera&rdquo; en la fila de salsa.
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
