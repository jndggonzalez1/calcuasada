import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Cómo marinar arrachera para carne asada — Receta y tiempo exacto — Calcuasada",
  description:
    "Aprende a marinar arrachera correctamente: la mejor marinada, cuánto tiempo dejar, errores comunes y cuándo no marinar. Guía completa para que tu arrachera quede perfecta.",
};

export default function MarinarArracherapage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo marinar arrachera para carne asada',
    description: 'Aprende a marinar arrachera correctamente: la mejor marinada, cuánto tiempo dejar, errores comunes y cuándo no marinar.',
    author: { '@type': 'Organization', name: 'Calcuasada', url: 'https://www.calcuasada.com' },
    totalTime: 'PT4H10M',
    supply: [
      { '@type': 'HowToSupply', name: 'Arrachera sin suavizar (1 kg)' },
      { '@type': 'HowToSupply', name: 'Jugo de 3 limones' },
      { '@type': 'HowToSupply', name: '4 cucharadas de salsa de soya' },
      { '@type': 'HowToSupply', name: '3 dientes de ajo picados' },
      { '@type': 'HowToSupply', name: '¼ de cebolla blanca rallada' },
      { '@type': 'HowToSupply', name: '2 cucharadas de aceite vegetal' },
      { '@type': 'HowToSupply', name: 'Pimienta negra al gusto' },
    ],
    step: [
      { '@type': 'HowToStep', name: 'Verifica si tu arrachera necesita marinada', text: 'Si compraste arrachera suavizada en carnicería del norte, no necesita marinada — solo sal de grano 20 minutos antes. Si es arrachera sin suavizar de supermercado, sí marinar.' },
      { '@type': 'HowToStep', name: 'Prepara la marinada', text: 'Mezcla el jugo de limón, la salsa de soya, el ajo picado, la cebolla rallada, el aceite y la pimienta en un tazón de vidrio o bolsa zip.' },
      { '@type': 'HowToStep', name: 'Sumerge la arrachera', text: 'Coloca la arrachera en la marinada. En bolsa zip asegúrate de que todo el contacto sea parejo. Cierra bien.' },
      { '@type': 'HowToStep', name: 'Marina en refrigerador', text: 'Deja en el refrigerador entre 2 y 4 horas. No más de 8 horas con marinada ácida de limón.' },
      { '@type': 'HowToStep', name: 'Seca antes de asar', text: 'Saca la arrachera de la marinada y sécala con papel absorbente antes de ponerla al asador. La carne húmeda no sella bien.' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿La arrachera suavizada de carnicería necesita marinada?', acceptedAnswer: { '@type': 'Answer', text: 'No. La arrachera suavizada ya fue trabajada mecánicamente para romper las fibras y está lista para asar solo con sal de grano aplicada 20 minutos antes. Agregarle ácido puede arruinar la textura que ya tenía.' } },
      { '@type': 'Question', name: '¿Cuánto tiempo marinar la arrachera?', acceptedAnswer: { '@type': 'Answer', text: 'Entre 2 y 4 horas es el punto óptimo. Con marinada de limón no dejes más de 8 horas — el ácido empieza a descomponer la textura. Con marinada de naranja puedes dejar hasta toda la noche.' } },
      { '@type': 'Question', name: '¿Se puede marinar arrachera congelada?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Descongela la arrachera parcialmente y sumérgela en la marinada. Mientras termina de descongelarse en el refrigerador, va absorbiendo la marinada al mismo tiempo.' } },
      { '@type': 'Question', name: '¿Por qué hay que secar la arrachera antes de asar?', acceptedAnswer: { '@type': 'Answer', text: 'La carne húmeda de la marinada no sella bien en el asador — el exceso de líquido la hace cocer al vapor en lugar de sellar. Seca con papel absorbente antes de ponerla al fuego para obtener una buena costra.' } },
      { '@type': 'Question', name: '¿Puedo reutilizar la marinada para bañar la carne en el asador?', acceptedAnswer: { '@type': 'Answer', text: 'No — la marinada tuvo carne cruda y puede tener bacterias. Si quieres bañar la carne mientras se asa, haz una porción fresca de marinada por separado.' } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Guía completa</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Cómo marinar arrachera para carne asada
        </h1>
        <p className="text-sm text-gray-500">9 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo más importante de esta guía:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>La arrachera suavizada de carnicería ya no necesita marinada — la sal de grano basta</li>
          <li>Si vas a marinar, entre 2 y 4 horas es suficiente — más tiempo no mejora el resultado</li>
          <li>El ácido (limón, vinagre) ablanda la carne pero en exceso la endurece</li>
          <li>Las mejores marinadas para carne asada son simples: 4 o 5 ingredientes máximo</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">¿Realmente necesita marinada la arrachera?</h2>
        <p className="text-sm leading-relaxed">
          Esta es la pregunta que más confunde a la gente. La respuesta honesta es: depende de qué arrachera compraste.
        </p>
        <p className="text-sm leading-relaxed">
          La <strong>arrachera suavizada</strong> que consigues en carnicerías del norte de México ya fue trabajada mecánicamente para romper las fibras — el proceso se llama "suavizado" o "ablandado" y deja la carne lista para asar sin necesidad de marinada. Para esta carne, lo único que necesitas es sal de grano aplicada 20 minutos antes de ponerla al asador. Cualquier marinada ácida que le pongas encima puede en realidad dañar la textura de una carne que ya estaba perfecta.
        </p>
        <p className="text-sm leading-relaxed">
          La <strong>arrachera sin suavizar</strong> — más común si la compras en supermercados o en estados donde no es tan común la cultura de la carne asada norteña — sí se beneficia de una marinada. Sus fibras son más tensas y necesitan tiempo con un ácido para relajarse.
        </p>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-bold text-gray-700 mb-2">¿Cómo saber qué arrachera tienes?</p>
          <ul className="text-xs space-y-1.5 text-gray-600 list-disc list-inside">
            <li>Si la compraste en una carnicería del norte y pediste "suavizada": no necesita marinada</li>
            <li>Si la compraste en supermercado nacional sin indicación de suavizado: sí marinar</li>
            <li>Si puedes doblarla fácilmente con las manos: ya está suavizada</li>
            <li>Si se siente rígida y resistente: marinar antes de asar</li>
          </ul>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Marinada clásica para arrachera</h2>
        <p className="text-sm leading-relaxed">
          Esta marinada funciona para arrachera que no fue suavizada. Es sencilla, con ingredientes que se consiguen en cualquier tienda, y el resultado es una carne con mucho sabor y buena textura.
        </p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {[
            { emoji: "🍋", cantidad: "Jugo de 3 limones", ingrediente: "El ácido principal — ablanda y aporta frescura" },
            { emoji: "🫙", cantidad: "4 cdas",            ingrediente: "Salsa de soya — umami y profundidad de sabor" },
            { emoji: "🧄", cantidad: "3 dientes",         ingrediente: "Ajo picado o machacado" },
            { emoji: "🧅", cantidad: "¼ pieza",           ingrediente: "Cebolla blanca rallada o picada fina" },
            { emoji: "🫒", cantidad: "2 cdas",            ingrediente: "Aceite vegetal o de oliva" },
            { emoji: "🌿", cantidad: "Al gusto",          ingrediente: "Pimienta negra molida y comino (opcional)" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-start gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
              <div>
                <p className="text-sm font-bold text-gray-800">{cantidad}</p>
                <p className="text-xs text-gray-500">{ingrediente}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">
          Mezcla todo en un tazón o en una bolsa zip y sumerge la arrachera. Deja en el refrigerador entre 2 y 4 horas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Marinada estilo norteño (sin soya)</h2>
        <p className="text-sm leading-relaxed">
          Esta versión es más tradicional y más sencilla. No lleva soya ni ingredientes de cocina oriental — es puramente sabores del norte de México.
        </p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {[
            { emoji: "🍊", cantidad: "Jugo de 2 naranjas", ingrediente: "El ácido que ablanda sin ser tan agresivo como el limón" },
            { emoji: "🍋", cantidad: "Jugo de 2 limones",  ingrediente: "Complementa la naranja y agrega frescura" },
            { emoji: "🧄", cantidad: "4 dientes",          ingrediente: "Ajo machacado" },
            { emoji: "🧂", cantidad: "1 cdita",            ingrediente: "Sal de grano" },
            { emoji: "🌶️", cantidad: "1 pieza",            ingrediente: "Chile serrano o jalapeño partido a la mitad (opcional)" },
            { emoji: "🌿", cantidad: "Al gusto",           ingrediente: "Pimienta negra gruesa" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-start gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
              <div>
                <p className="text-sm font-bold text-gray-800">{cantidad}</p>
                <p className="text-xs text-gray-500">{ingrediente}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          La naranja es el ingrediente secreto de esta versión. El jugo de naranja tiene ácido cítrico y azúcares naturales que ablanadan la carne y le dan una caramelización increíble en el asador — la carne se dora con un color más oscuro y apetitoso que con limón solo.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Cuánto tiempo marinar la arrachera</h2>
        <p className="text-sm leading-relaxed">
          El tiempo de marinada es el factor que más se exagera en la mayoría de las recetas. No es cierto que "más tiempo = más sabor". Hay un límite a partir del cual el ácido empieza a dañar la textura en lugar de mejorarla.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Tiempo</th>
                <th className="text-left py-3 px-3 font-bold">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-bold">30 minutos</td>
                <td className="py-2.5 px-3">Sabor superficial. Sirve si no tienes más tiempo.</td>
              </tr>
              <tr className="bg-brasa/5">
                <td className="py-2.5 px-3 font-bold text-brasa">2 a 4 horas ⭐</td>
                <td className="py-2.5 px-3 font-medium">El punto óptimo. Sabor penetrado, textura correcta.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">6 a 8 horas</td>
                <td className="py-2.5 px-3">Funciona si la marinada no es muy ácida (más naranja que limón).</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Más de 12 horas</td>
                <td className="py-2.5 px-3 text-red-600">El ácido descompone demasiado la proteína — textura pastosa.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Toda la noche</td>
                <td className="py-2.5 px-3 text-red-600">No recomendado con marinadas de limón. Sí funciona con naranja o con marinadas que usan vinagre balsámico suave.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
          <p className="text-xs font-bold text-brasa mb-1">Regla práctica:</p>
          <p className="text-sm text-gray-700">Pon la arrachera a marinar en la mañana y ásala en la tarde. Eso son 4 a 6 horas — el punto perfecto para la mayoría de las marinadas.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">La ciencia detrás de la marinada</h2>
        <p className="text-sm leading-relaxed">
          Entender qué hace cada ingrediente te ayuda a crear tu propia versión o ajustar las recetas según lo que tienes disponible.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">El ácido (limón, naranja, vinagre)</p>
            <p className="text-sm text-gray-600">Desnaturaliza parcialmente las proteínas de la superficie, rompiendo la tensión de las fibras. El resultado es una textura más suave. Pero si el ácido actúa demasiado tiempo o en exceso, "cocina" la carne (como el ceviche) y la deja pastosa. Por eso el tiempo importa.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La sal</p>
            <p className="text-sm text-gray-600">La sal de la marinada penetra más profundo que la que aplicas a la superficie. Le da sabor desde adentro y también ayuda a que la carne retenga más humedad durante la cocción. No temas usar sal en la marinada — es necesaria.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">El aceite</p>
            <p className="text-sm text-gray-600">El aceite no penetra la carne, pero ayuda a que los ingredientes con sabor (ajo, hierbas) se adhieran mejor a la superficie. También previene que la carne se pegue a la parrilla durante el sellado.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">El azúcar (naranja, refrescos, miel)</p>
            <p className="text-sm text-gray-600">Los azúcares naturales de la marinada caramilizan en contacto con el calor del asador, creando ese color oscuro y dorado en la superficie de la carne. La naranja es especialmente efectiva por esto. Si quieres más caramelización, agrega una cucharada de miel o piloncillo diluido.</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Errores más comunes al marinar arrachera</h2>
        <ul className="text-sm space-y-2.5 leading-relaxed">
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Marinar arrachera suavizada de carnicería.</strong> Si la pediste suavizada, ya está lista. Agregarle ácido solo puede arruinar la textura que ya tenía.</span></li>
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Dejarla más de 8 horas con marinada ácida.</strong> El ácido sigue trabajando y la textura empieza a volverse pastosa. Más no es mejor.</span></li>
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Marinar en tazón de metal.</strong> El metal reacciona con el ácido del limón y puede cambiar el sabor de la carne. Usa bolsa de plástico, tazón de vidrio o recipiente de plástico.</span></li>
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>No refrigerar durante el marinado.</strong> La carne a temperatura ambiente en ácido puede desarrollar bacterias. Siempre marinar en el refrigerador.</span></li>
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Asar sin secar la carne primero.</strong> La carne húmeda de la marinada no sella bien — el exceso de líquido la hace cocer en lugar de sellar. Saca la arrachera de la marinada, sécala con papel absorbente y luego ponla al fuego.</span></li>
          <li className="flex gap-2 items-start"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Reutilizar la marinada para bañar la carne en el asador.</strong> La marinada tuvo carne cruda y puede tener bacterias. Si quieres bañar la carne mientras se asa, haz una porción fresca de la marinada separada.</span></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cómo saber si tu arrachera quedó bien marinada</h2>
        <p className="text-sm leading-relaxed">
          Antes de sacarla del refrigerador para asar, revisa estas señales:
        </p>
        <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
          <li>El color de la superficie cambió ligeramente — un poco más oscuro o más opaco que al principio</li>
          <li>Al presionar con el dedo, la carne cede un poco más que una arrachera sin marinar</li>
          <li>El olor de la marinada penetró en la carne — puedes sentirlo al acercarla</li>
          <li>No tiene aspecto "cocido" ni textura pastosa — si se ve como ceviche, estuvo demasiado tiempo</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Marinadas con ingredientes que quizás tienes en casa</h2>
        <p className="text-sm leading-relaxed">
          Estas son combinaciones rápidas con ingredientes comunes que funcionan muy bien:
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La del refri vacío</p>
            <p className="text-sm text-gray-600">Jugo Maggi + jugo de limón + ajo en polvo + pimienta. Igual de efectiva que una marinada compleja para una noche express.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La cervecera</p>
            <p className="text-sm text-gray-600">1 cerveza (clara o obscura) + ajo + sal + pimienta + un chorrito de limón. La cerveza ablanda suavemente con menos acidez que el limón y le da un sabor muy rico a malta. Buen recurso cuando tienes más cervezas que limones.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La de Valentina</p>
            <p className="text-sm text-gray-600">Salsa Valentina + jugo de limón + ajo + aceite. El vinagre de la Valentina hace el trabajo del ácido y le agrega un toque de picante que queda muy bien a las brasas.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La balsámica</p>
            <p className="text-sm text-gray-600">Vinagre balsámico + ajo + aceite de oliva + romero + pimienta negra gruesa. Esta versión es más europea que norteña, pero el resultado en la parrilla es increíble — la carne queda oscura y con un sabor agridulce muy especial.</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preguntas frecuentes sobre marinar arrachera</h2>
        <div className="space-y-3">
          {[
            {
              q: "¿Se puede marinar arrachera congelada?",
              a: "Sí, y de hecho es una técnica práctica. Descongela la arrachera parcialmente (todavía firme pero sin estar dura como piedra) y sumérgela en la marinada. Mientras termina de descongelarse en el refrigerador, va absorbiendo la marinada. Llega completamente descongelada y marinada al mismo tiempo."
            },
            {
              q: "¿La arrachera marinada sabe diferente al asar?",
              a: "Sí — más sabrosa y con más carácter en el exterior. Los azúcares de la marinada caramlizan en el asador creando una corteza más oscura y con más sabor que la arrachera sin marinar. El interior también tiene más profundidad de sabor."
            },
            {
              q: "¿Cuánta marinada necesito por kilo de arrachera?",
              a: "Suficiente para cubrir completamente la carne. En bolsa de plástico zip basta con 200-250 ml de marinada por kilo — la bolsa asegura que todo el contacto sea parejo. En tazón necesitas más cantidad porque la carne no está completamente sumergida — dale vuelta a la mitad del tiempo."
            },
            {
              q: "¿Qué pasa si olvido la arrachera en la marinada toda la noche?",
              a: "Depende de qué tan ácida era la marinada. Si tenía mucho limón o vinagre, la textura puede quedar afectada — más suave de lo normal o con un toque ligeramente ácido en el sabor. Si la marinada era más suave (naranja + cerveza), probablemente esté bien. Revisa la textura antes de asar — si la sientes normal, procede."
            },
            {
              q: "¿Necesito sal de grano si ya mariné la arrachera?",
              a: "Si la marinada ya llevaba suficiente sal, no es necesario agregar más. Prueba una pequeña parte de la superficie antes de asar — si está bien sazonada, no agregues más sal. Si sientes que le falta, un poco de sal de grano encima justo antes del asador siempre ayuda."
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
              <p className="text-sm font-bold text-gray-900">{q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center space-y-3">
        <p className="text-sm font-semibold text-gray-900">¿Ya tienes la arrachera? Ahora calcula cuánta necesitas.</p>
        <p className="text-xs text-gray-500">La calculadora te dice exactamente cuántos kilos por persona según el nivel de apetito de tu grupo.</p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:opacity-90 transition-colors"
        >
          Calcular cuánta carne necesito →
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/carne-asada-perfecta-monterrey" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🥩 Cómo hacer una carne asada perfecta al estilo Monterrey</p>
            <p className="text-xs text-gray-500 mt-1">Técnica de sellado, cortes, carbón mesquite y errores comunes</p>
          </Link>
          <Link href="/guias/guacamole-para-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🥑 Guacamole para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Receta clásica y el secreto para que no se ponga negro</p>
          </Link>
          <Link href="/guias/salsa-verde-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🟢 Salsa verde para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Tatemada directo en el asador — rápida y sin fallas</p>
          </Link>
        </div>
      </section>

    </article>
    </>
  );
}
