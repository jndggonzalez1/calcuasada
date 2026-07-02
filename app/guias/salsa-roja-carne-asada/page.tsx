import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa roja para carne asada — Receta con jitomate tatemado — Calcuasada",
  description:
    "Receta de salsa roja casera para carne asada: jitomates tatemados en el asador, chiles de árbol, ajo y cebolla. Picosita, ahumada y con mucho carácter.",
};

export default function SalsaRojaPage() {
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Salsa roja para carne asada',
    description: 'Salsa roja casera con jitomates tatemados en el asador, chiles de árbol, cebolla y ajo. Picosita, ahumada y lista en 15 minutos.',
    author: { '@type': 'Organization', name: 'Calcuasada', url: 'https://www.calcuasada.com' },
    datePublished: '2026-06-01',
    prepTime: 'PT5M',
    cookTime: 'PT15M',
    totalTime: 'PT20M',
    recipeYield: '6-8 porciones',
    recipeCategory: 'Salsa',
    recipeCuisine: 'Mexicana norteña',
    keywords: 'salsa roja carne asada, salsa jitomate tatemado, salsa chile de árbol, salsa para tacos',
    recipeIngredient: [
      '6 a 8 jitomates maduros',
      '3 a 4 chiles de árbol secos',
      '1 pedazo de cebolla blanca',
      '1 diente de ajo',
      'Sal al gusto',
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', name: 'Tatema en el asador', text: 'Pon los jitomates, la cebolla y el ajo directamente en la parrilla. Dales vuelta cada par de minutos hasta que estén bien tatemados con manchas negras y suaves por dentro, unos 10-12 minutos.' },
      { '@type': 'HowToStep', name: 'Tuesta los chiles de árbol', text: 'Pon los chiles secos en la parrilla o comal a fuego medio. Muévelos constantemente — se tuestan en 30 a 60 segundos. Solo los quieres aromáticos, no quemados.' },
      { '@type': 'HowToStep', name: 'Deja enfriar', text: 'Retira todo del fuego y deja enfriar un par de minutos antes de licuar.' },
      { '@type': 'HowToStep', name: 'Licúa y prueba', text: 'Mete todo a la licuadora, agrega sal al gusto y licúa hasta obtener la textura deseada. Prueba y ajusta de sal.' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Cuántos chiles de árbol son demasiados para la salsa roja?', acceptedAnswer: { '@type': 'Answer', text: 'La receta base usa 3 a 4 para 6-8 personas. Con 5 o más la salsa es realmente muy picante. Si no sabes cuánto aguanta tu gente, empieza con 2.' } },
      { '@type': 'Question', name: '¿Puedo hacer salsa roja sin chiles de árbol?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El sustituto más fácil es chile guajillo para una versión suave, o jalapeño fresco tatemado junto con el jitomate.' } },
      { '@type': 'Question', name: '¿Por qué la salsa roja quedó amarga?', acceptedAnswer: { '@type': 'Answer', text: 'El culpable casi siempre son los chiles quemados. Si los tostaste de más el amargor no se puede quitar. Agrégale más jitomate tatemado para diluirlo. La próxima vez, mueve los chiles constantemente y retíralos en 30-60 segundos.' } },
      { '@type': 'Question', name: '¿Cuál es la diferencia entre la salsa roja de carne asada y la de taquería?', acceptedAnswer: { '@type': 'Answer', text: 'La de taquería se hace con jitomate hervido. La de carne asada se tatema sobre las brasas, lo que le da un ahumado real del carbón con un sabor mucho más profundo y rústico.' } },
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
          Salsa roja para carne asada
        </h1>
        <p className="text-sm text-gray-500">8 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Jitomates tatemados directo en el asador — el ahumado es la clave</li>
          <li>Lista en 15 minutos, antes de que llegue la carne</li>
          <li>Rinde para 6 a 8 personas por receta</li>
          <li>Más picante que la verde — los chiles de árbol no perdonan</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">La salsa roja que va con la carne asada</h2>
        <p className="text-sm leading-relaxed">
          La salsa roja para carne asada no es la salsa de taquerías que conoces — esa va cocida y con jitomate hervido. Esta va tatemada directo en la parrilla, con las brasas del mismo asador. El jitomate agarra un sabor ahumado y ligeramente dulce que combinado con el chile de árbol da una salsa con carácter: picosita, sabrosa y con ese toque de carbón que solo se consigue en la parrilla.
        </p>
        <p className="text-sm leading-relaxed">
          Es la salsa que va cuando quieres algo con más cuerpo que la verde. También aguanta bien al lado del guacamole — las dos se complementan perfecto en la mesa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">El chile de árbol y por qué es el correcto para esta salsa</h2>
        <p className="text-sm leading-relaxed">
          El chile de árbol es el protagonista de esta receta. Es un chile seco, delgado, de color rojo brillante que se consigue en cualquier mercado o supermercado. Su picante es intenso — se ubica entre 15,000 y 30,000 unidades Scoville, que es bastante más que el jalapeño y más que el serrano también.
        </p>
        <p className="text-sm leading-relaxed">
          Lo que hace especial al chile de árbol para salsa de carne asada es que al tostarse en el asador desarrolla un aroma profundo y una ligera nota nuez que le da carácter a la salsa sin dominar el jitomate. Si se quema completamente, amarga — por eso la clave es tostarlo rápido y con cuidado.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-gray-700 mb-2">Comparación de chiles para salsa roja</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex gap-3"><span className="font-bold w-28 flex-shrink-0">Chile de árbol</span><span className="text-gray-600">Picante intenso, aroma pronunciado, color rojo brillante — el clásico para carne asada</span></div>
            <div className="flex gap-3"><span className="font-bold w-28 flex-shrink-0">Chile guajillo</span><span className="text-gray-600">Picante suave, sabor frutal y ligeramente dulce — ideal si quieres menos calor</span></div>
            <div className="flex gap-3"><span className="font-bold w-28 flex-shrink-0">Chile ancho</span><span className="text-gray-600">Muy suave, sabor terroso y profundo — bueno para dar color sin mucho picante</span></div>
            <div className="flex gap-3"><span className="font-bold w-28 flex-shrink-0">Chipotle</span><span className="text-gray-600">Jalapeño ahumado, picante medio — le da un sabor diferente y muy rico</span></div>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas. Usa la calculadora para ajustar la cantidad.</p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
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
        <h2 className="text-base font-semibold text-gray-900">Preparación</h2>

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
          Igual que con la salsa verde — si quieres darle más sabor, agrega un pedacito de grasa de la carne tatemada directo a la licuadora. Le da un sabor más profundo y ahumado que no tiene comparación.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Para esta salsa roja, también puedes sustituir uno o dos chiles de árbol por un chipotle en adobo. Le da un sabor más ahumado y un picante más suave y redondo. No es la receta tradicional, pero queda muy buena.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Tips rápidos</h2>
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
        <h2 className="text-base font-semibold text-gray-900">Variaciones con otros chiles</h2>
        <p className="text-sm leading-relaxed">
          Si quieres ajustar el picante o experimentar con otros perfiles de sabor, estas son las sustituciones que mejor funcionan:
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con chile guajillo — versión suave</p>
            <p className="text-sm text-gray-600">Sustituye los chiles de árbol por 2 guajillos desvenados. El guajillo da un color rojo muy bonito, un sabor frutal y casi nada de picante. Buena opción cuando van niños o gente que no aguanta el picante del árbol.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con chipotle — versión ahumada</p>
            <p className="text-sm text-gray-600">Agrega 1 chipotle en adobo (de lata) en lugar de uno de los chiles de árbol. El chipotle es jalapeño ahumado y da una profundidad diferente a la salsa. Queda riquísima con costilla de res porque complementa la grasa con el ahumado.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Mezcla árbol + guajillo — la campechana de salsas</p>
            <p className="text-sm text-gray-600">Usa 2 chiles de árbol y 1 guajillo. El árbol aporta el picante, el guajillo aporta el color y la profundidad de sabor. El resultado es más complejo y equilibrado que usando uno solo.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Qué hacer si la salsa no salió bien</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó amarga</p>
            <p className="text-sm text-gray-600">El culpable casi siempre son los chiles quemados. Si los tostaste de más, el amargor no se puede quitar fácilmente. Lo más que puedes hacer es agregar más jitomate tatemado para diluir el sabor amargo. La próxima vez, mueve los chiles constantemente y retíralos en cuanto estén aromáticos — 30 a 60 segundos máximo.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó muy picante</p>
            <p className="text-sm text-gray-600">Agrega más jitomate tatemado para diluir o incorpora un poco de aguacate al licuar — la grasa del aguacate atenúa el picante. La próxima vez, saca las semillas de los chiles de árbol antes de usarlos.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">No sabe a nada — quedó sosa</p>
            <p className="text-sm text-gray-600">Primero revisa la sal — muchas veces es simplemente eso. Si ya tiene sal suficiente y sigue sosa, significa que el jitomate no se tatemó lo suficiente. Regresa algunos a la parrilla unos minutos más.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó muy espesa</p>
            <p className="text-sm text-gray-600">Agrega de a poco agua purificada o el jugo que soltaron los jitomates al tatemarse y licúa de nuevo. Una salsa muy espesa es difícil de servir y de poner en el taco.</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cómo guardar la salsa roja</h2>
        <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
          <li><strong>En el refrigerador:</strong> en frasco de vidrio tapado dura hasta 4 días. La salsa puede espesarse en el frío — está bien, se aligera de nuevo a temperatura ambiente.</li>
          <li><strong>En el congelador:</strong> hasta 3 meses. Congela en porciones pequeñas para descongelar solo lo que vas a usar.</li>
          <li><strong>No la dejes más de 2 horas a temperatura ambiente</strong> — el jitomate fermenta rápido, especialmente en días calurosos.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">¿Con qué va esta salsa?</h2>
        <p className="text-sm leading-relaxed">
          Con todo. Arrachera, costilla, pollo, salchicha, quesadillas — la salsa roja aguanta todo lo que le pongas encima. Es especialmente buena con costilla de res porque el sabor fuerte de la carne y el picante del chile de árbol se complementan muy bien.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes salsa roja y salsa verde en la mesa, ya tienes las dos que necesita cualquier carne asada norteña completa.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preguntas frecuentes sobre salsa roja para carne asada</h2>
        <div className="space-y-3">
          {[
            {
              q: "¿Cuántos chiles de árbol son demasiados?",
              a: "La receta base usa 3 a 4 para 6-8 personas. Con 5 o más la salsa empieza a ser realmente picante — más de lo que la mayoría aguanta cómodamente. Si tu gente aguanta el picante, sube a 5. Si no sabes, empieza con 2 y sirve más chiles enteros aparte para quienes quieran más."
            },
            {
              q: "¿Puedo hacerla sin chiles de árbol si no los consigo?",
              a: "Sí. El sustituto más fácil es chile serrano seco (más difícil de conseguir) o jalapeño fresco tatemado junto con el jitomate. También puedes usar chile guajillo para una versión suave sin casi picante. La salsa no va a quedar idéntica pero sí sabrosa."
            },
            {
              q: "¿Puedo preparar la salsa antes de que lleguen los invitados?",
              a: "Sí, puedes hacerla hasta un día antes. Guárdala tapada en el refri. El sabor incluso mejora con el reposo porque los ingredientes se integran. Solo asegúrate de que esté completamente fría antes de tapar el frasco."
            },
            {
              q: "¿Por qué la salsa de taquería y la de carne asada saben diferente si usan los mismos ingredientes?",
              a: "Por el método de cocción. En taquería el jitomate se hierve o se tatema en comal seco. En carne asada se tatema sobre las brasas, donde agarra un ahumado real del carbón. Ese humo cambia completamente el perfil de sabor — es más profundo, más rústico y con un toque de amargo que equilibra el picante."
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
              <p className="text-sm font-bold text-gray-900">{q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
        <p className="text-sm font-semibold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-sm text-gray-600">
          La calculadora ya incluye los ingredientes de esta salsa ajustados al número de personas — activa la opción &ldquo;Casera&rdquo; en la fila de salsa y elige &ldquo;Roja&rdquo;.
        </p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Ir a la calculadora →
        </Link>
      </div>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/salsa-verde-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🟢 Salsa verde para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Tomatillo tatemado, serrano y el toque especial de grasa del asador</p>
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
