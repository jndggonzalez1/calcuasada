import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa verde para carne asada — Receta fácil y buenísima — Calcuasada",
  description:
    "Receta de salsa verde casera para carne asada: tomatillo tatemado en el asador, chile serrano, ajo y cilantro. Con tips para que quede perfecta y sin fallar.",
};

export default function SalsaVerdePage() {
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Salsa verde para carne asada',
    description: 'Salsa verde casera tatemada directo en el asador con tomatillo, chile serrano, cebolla y cilantro. Lista en 15 minutos, rinde para 6 a 8 personas.',
    author: { '@type': 'Organization', name: 'Calcuasada', url: 'https://www.calcuasada.com' },
    datePublished: '2026-05-01',
    prepTime: 'PT5M',
    cookTime: 'PT15M',
    totalTime: 'PT20M',
    recipeYield: '6-8 porciones',
    recipeCategory: 'Salsa',
    recipeCuisine: 'Mexicana norteña',
    keywords: 'salsa verde carne asada, salsa verde tomatillo, salsa tatemada, salsa para tacos',
    recipeIngredient: [
      '8 tomatillos (tomates verdes)',
      '2 chiles serranos',
      '1 pedazo de cebolla blanca',
      '1 diente de ajo',
      '1 puñito de cilantro fresco',
      'Sal al gusto',
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', name: 'Tatema en el asador', text: 'Pon los tomatillos, los chiles serranos, la cebolla y el ajo directamente en la parrilla. Dales vuelta cada par de minutos hasta que estén bien tatemados con manchas negras y suaves por dentro, unos 10-12 minutos.' },
      { '@type': 'HowToStep', name: 'Deja enfriar', text: 'Retíralos del fuego y deja que suelten el vapor un par de minutos antes de licuar.' },
      { '@type': 'HowToStep', name: 'Licúa', text: 'Mete los tomatillos, los chiles, la cebolla y el ajo a la licuadora. Agrega el cilantro y sal al gusto. Licúa hasta que tenga la textura que prefieras.' },
      { '@type': 'HowToStep', name: 'Prueba y ajusta', text: 'Prueba la salsa y ajusta de sal. Lista para servir.' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Puedo hacer la salsa verde el día anterior?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, y de hecho muchas veces queda mejor porque los sabores se integran durante la noche. Guárdala en frasco tapado en el refri hasta 4 días.' } },
      { '@type': 'Question', name: '¿Se puede hacer salsa verde sin licuadora?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, en molcajete. El resultado es más rústico y con más textura. Solo tatema bien todo primero y machaca a mano.' } },
      { '@type': 'Question', name: '¿Por qué mi salsa verde quedó café y no verde?', acceptedAnswer: { '@type': 'Answer', text: 'Por oxidación del cilantro y el tomatillo — es completamente normal y no afecta el sabor. Agrega un chorrito de limón justo antes de servir para que tarde más en oscurecerse.' } },
      { '@type': 'Question', name: '¿La salsa de carne asada es diferente a la salsa de taquería?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La de taquería se hace con ingredientes hervidos. La de carne asada se tatema sobre las brasas, donde agarra un ahumado real del carbón que cambia completamente el perfil de sabor.' } },
      { '@type': 'Question', name: '¿Cuántos tomatillos necesito para más de 8 personas?', acceptedAnswer: { '@type': 'Answer', text: 'Para 6-8 personas usa 8 tomatillos. Para 10-15 usa 16. Para 20 o más haz dos tandas.' } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Receta de la casa</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Salsa verde para carne asada
        </h1>
        <p className="text-sm text-gray-500">8 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Se hace directo en el asador — no necesitas estufa</li>
          <li>Lista en 15 minutos, antes de que llegue la carne</li>
          <li>Rinde para 6 a 8 personas por receta</li>
          <li>Con el toque de grasa del asador queda con un sabor ahumado increíble</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Por qué esta salsa es la que va con la carne asada</h2>
        <p className="text-sm leading-relaxed">
          Hay salsas que se hacen para taquerías, otras para enchiladas, y luego está la salsa verde para carne asada — que es su propio mundo. La diferencia está en cómo se tatema: directo en el asador, con el calor de las brasas, el tomatillo agarra un ahumado natural que no se puede imitar en estufa. El resultado es una salsa más rústica, con un sabor más profundo y un pequeño toque de amargo que le va perfecto a la carne.
        </p>
        <p className="text-sm leading-relaxed">
          Esta receta es sencilla a propósito. No lleva crema, no lleva aguacate, no tiene ingredientes raros. Es la salsa de siempre, la que se hace en la mayoría de las casas del norte de México cuando hay carne asada — y que nunca falla.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Por qué el asador cambia todo en una salsa verde</h2>
        <p className="text-sm leading-relaxed">
          Cuando tatemas el tomatillo directo en las brasas pasan dos cosas que no se pueden replicar en estufa. Primero, el calor seco concentra los azúcares naturales del tomatillo — esa acidez tan característica del tomate verde se suaviza y se vuelve más redonda, más compleja. Segundo, el humo del carbón se adhiere a la piel del tomatillo y penetra ligeramente hacia adentro, dando ese sabor ahumado que distingue una salsa de carne asada de una salsa de taquería.
        </p>
        <p className="text-sm leading-relaxed">
          La clave es dejar que el tomatillo se tatemate de verdad — que tenga manchas negras visibles, que la piel se levante y que por dentro esté completamente suave. Un tomatillo a medias tatema da una salsa con sabor a cruda. Vale la pena esperar los 10 a 12 minutos que necesita.
        </p>
        <p className="text-sm leading-relaxed">
          El ajo y la cebolla en el asador siguen el mismo principio: el calor directo les saca caramelización y suavidad que no consigues con ajo o cebolla crudos. La salsa queda más suave, menos agresiva, con más profundidad de sabor.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas. Usa la calculadora para ajustar la cantidad.</p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
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
        <h2 className="text-base font-semibold text-gray-900">Preparación</h2>

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
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brasa text-white font-bold text-sm flex items-center justify-center mt-0.5">
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

      <section className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
        <p className="text-sm font-semibold text-gray-900">⭐ Recomendación especial de Yeyito</p>
        <p className="text-sm leading-relaxed text-gray-700">
          Si quieres darle un toque más sabroso, corta un pedacito de grasa de la carne — como una esquinita que le quites a un corte — y dóralo en el asador hasta que quede bien cocido, suavecito y con sabor ahumado.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Después agrégalo a la licuadora junto con el resto de los ingredientes. Le va a dar a la salsa un sabor más profundo, grasosito y muy de carne asada. No necesitas mucho — con un pedacito pequeño basta para darle ese toque especial sin que la salsa quede pesada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Tips rápidos</h2>
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
        <h2 className="text-base font-semibold text-gray-900">Variaciones que puedes probar</h2>
        <p className="text-sm leading-relaxed">
          La receta base es la que funciona para carne asada, pero hay variaciones que valen la pena conocer si quieres experimentar sin alejarte demasiado de lo clásico.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con chile jalapeño</p>
            <p className="text-sm text-gray-600">Sustituye los serranos por jalapeños para una salsa con picante más suave y un sabor ligeramente más vegetal. Buena opción si va a comer gente que no aguanta mucho picante.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con chipotle (versión ahumada)</p>
            <p className="text-sm text-gray-600">Agrega uno o medio chipotle en adobo al momento de licuar junto con los demás ingredientes. Le da un sabor ahumado más profundo y un picante diferente, más suave y redondo. No es la receta tradicional, pero queda muy buena.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con aguacate (salsa verde cremosa)</p>
            <p className="text-sm text-gray-600">Agrega medio aguacate maduro al momento de licuar. La salsa queda más espesa, con una textura sedosa y un sabor más suave. Esta versión va mejor para hacer tacos que para ponerla directo en la carne en la parrilla.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Sin licuadora: versión martajada en molcajete</p>
            <p className="text-sm text-gray-600">Muele todo a mano en el molcajete en lugar de la licuadora. La textura queda más rústica con pedacitos de chile y tomatillo que se sienten en el taco. El sabor cambia un poco — es más intenso y con más presencia de cada ingrediente por separado.</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Qué hacer si la salsa no salió bien</h2>
        <p className="text-sm leading-relaxed">
          Estas son las situaciones más comunes cuando la salsa no queda como esperabas y cómo resolverlas.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó demasiado ácida</p>
            <p className="text-sm text-gray-600">Normalmente pasa cuando los tomatillos no estaban bien maduros o se tatemaron poco. Solución: agrega una pizca de azúcar o una bolita de cebolla cruda fresca al licuar — la cebolla cruda neutraliza la acidez sin cambiar el sabor principal.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó muy aguada</p>
            <p className="text-sm text-gray-600">Los tomatillos sueltan mucho jugo al tatemarlos. Si quieres una salsa más espesa, escurre un poco del líquido antes de licuar o licúa a pulsos cortos sin agregar agua extra.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó muy picante</p>
            <p className="text-sm text-gray-600">Agrega más tomatillos tatemados o un poco de aguacate para diluir el picante sin cambiar la base de la salsa. La próxima vez, quítale las semillas al chile antes de tatemas.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Perdió el color verde (se puso café)</p>
            <p className="text-sm text-gray-600">Es oxidación, pasa con el cilantro y el tomatillo. Es normal y no cambia el sabor. Para que tarde más en oscurecerse, guárdala en frasco bien tapado con el menor espacio de aire posible. También puedes exprimir unas gotas de limón encima.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">No sabe a nada — sabe sosa</p>
            <p className="text-sm text-gray-600">La sal es lo que despierta todos los sabores de la salsa. Agrega más sal de a poco y vuelve a probar. También revisa que los tomatillos estuvieran bien tatemados — si quedaron a medias, la salsa pierde profundidad de sabor.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cómo guardar la salsa verde</h2>
        <p className="text-sm leading-relaxed">
          Si sobró salsa o quieres prepararla con anticipación para la carne asada:
        </p>
        <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
          <li><strong>En el refrigerador:</strong> en frasco de vidrio con tapa hermética dura hasta 4 días. Mezcla antes de servir porque puede separarse.</li>
          <li><strong>En el congelador:</strong> dura hasta 3 meses sin perder mucho sabor. Congela en bolsas o en recipientes pequeños con porciones listas para descongelar.</li>
          <li><strong>Para calentar:</strong> directamente en el comal o sartén a fuego bajo, revolviendo, o en el microondas en intervalos de 30 segundos.</li>
          <li><strong>No dejes la salsa a temperatura ambiente por más de 2 horas</strong> — el tomatillo fermente rápido y puede echarse a perder.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">¿Con qué va esta salsa?</h2>
        <p className="text-sm leading-relaxed">
          Esta salsa verde va con todo lo que sale del asador. Arrachera, costilla, pollo, salchicha para asar, quesadillas de queso — no importa qué estés cocinando, esta salsa le queda bien a todo. También es perfecta para los tacos que armas con la carne sobrante al final de la tarde.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes guacamole y esta salsa verde, ya tienes las dos salsas que necesita cualquier carne asada. Con eso y las tortillas calientes, todos van a estar contentos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preguntas frecuentes sobre salsa verde para carne asada</h2>
        <div className="space-y-3">
          {[
            {
              q: "¿Puedo hacer la salsa el día anterior?",
              a: "Sí, y de hecho muchas veces queda mejor porque los sabores se integran durante la noche. Guárdala en frasco tapado en el refri. Al día siguiente prueba y ajusta de sal si es necesario — la sal se suaviza un poco con el reposo."
            },
            {
              q: "¿Se puede hacer sin licuadora?",
              a: "Sí, en molcajete. El resultado es más rústico y con más textura — a muchos les gusta más así. Solo tatema bien todo primero y machaca a mano. Lleva más tiempo pero el sabor es diferente y muy bueno."
            },
            {
              q: "¿Cuántos tomatillos necesito para más personas?",
              a: "Para 6-8 personas: 8 tomatillos. Para 10-15: usa 16. Para 20 o más: haz dos tandas. La calculadora de Calcuasada ya incluye la cantidad exacta de ingredientes cuando activas la opción 'Casera' en la salsa."
            },
            {
              q: "¿Por qué mi salsa verde quedó café y no verde?",
              a: "Por oxidación del cilantro y el tomatillo — es completamente normal y no afecta el sabor. El color verde se mantiene mejor si la sirves recién hecha. Si necesitas que dure bonita, agrega un chorrito de limón justo antes de servir."
            },
            {
              q: "¿La salsa de carne asada es diferente a la salsa de taquería?",
              a: "Sí. La de taquería normalmente se hace con ingredientes hervidos o en seco en comal. La de carne asada se tatema directo en las brasas, lo que le da un ahumado natural que es imposible de replicar en estufa. Son completamente diferentes en sabor y textura."
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
              <p className="text-sm font-bold text-gray-900">{q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
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

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/salsa-roja-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🔴 Salsa roja para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Jitomates tatemados, chiles de árbol y ese ahumado del asador</p>
          </Link>
          <Link href="/guias/salsa-chile-piquin-limon" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🌶️ Salsa de chile piquín con limón</p>
            <p className="text-xs text-gray-500 mt-1">La favorita de Yeyito — sin agua, con molcajete y limón como base</p>
          </Link>
          <Link href="/guias/guacamole-para-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🥑 Guacamole para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Receta clásica y el secreto para que no se ponga negro</p>
          </Link>
        </div>
      </section>

    </article>
    </>
  );
}
