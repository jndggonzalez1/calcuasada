import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Guacamole para carne asada — Receta clásica y que no se ponga negro — Calcuasada",
  description:
    "Receta de guacamole para carne asada: aguacates maduros, limón, cebolla, cilantro y chile serrano. Más el secreto para que no se oxide y cuánto preparar por persona.",
};

export default function GuacamolePage() {
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Guacamole para carne asada',
    description: 'Receta clásica norteña de guacamole: aguacates Hass maduros, limón, cebolla, chile serrano y cilantro. Rinde para 6 a 8 personas.',
    author: { '@type': 'Organization', name: 'Calcuasada', url: 'https://www.calcuasada.com' },
    datePublished: '2026-06-01',
    prepTime: 'PT10M',
    totalTime: 'PT10M',
    recipeYield: '6-8 porciones',
    recipeCategory: 'Acompañante',
    recipeCuisine: 'Mexicana',
    keywords: 'guacamole carne asada, guacamole casero, guacamole receta, guacamole que no se ponga negro',
    recipeIngredient: [
      '3 aguacates Hass maduros',
      'Jugo de 2 limones',
      '¼ de cebolla blanca picada muy fina',
      '1 a 2 chiles serranos picados',
      '1 puñito de cilantro fresco picado',
      'Sal al gusto',
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', name: 'Saca el aguacate', text: 'Parte cada aguacate por la mitad, retira el hueso y saca la pulpa con una cuchara directamente al tazón.' },
      { '@type': 'HowToStep', name: 'Exprime el limón', text: 'Exprime los limones inmediatamente sobre el aguacate. El limón evita la oxidación — no lo dejes sin limón ni un minuto.' },
      { '@type': 'HowToStep', name: 'Machaca con tenedor', text: 'Usa un tenedor para machacar el aguacate dejando textura rústica con algunos trozos visibles. No uses licuadora.' },
      { '@type': 'HowToStep', name: 'Agrega los demás ingredientes', text: 'Incorpora la cebolla picada, el chile serrano, el cilantro y la sal. Mezcla bien.' },
      { '@type': 'HowToStep', name: 'Prueba y ajusta', text: 'Prueba el guacamole y ajusta de sal, limón o chile según tu gusto.' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Cómo evitar que el guacamole se ponga negro?', acceptedAnswer: { '@type': 'Answer', text: 'Exprime limón abundante inmediatamente al abrir el aguacate, y cubre el guacamole con plástico adherente puesto directamente sobre la superficie sin espacio de aire. Si ya se puso negro por encima, raspa la capa superficial — debajo estará verde y fresco.' } },
      { '@type': 'Question', name: '¿Puedo preparar el guacamole con anticipación?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, hasta 2 horas antes. Cubre con plástico adherente directo sobre la superficie y refrigera. Saca 15 minutos antes de servir.' } },
      { '@type': 'Question', name: '¿Cuántos aguacates necesito para mi carne asada?', acceptedAnswer: { '@type': 'Answer', text: 'Para 6-8 personas: 3 aguacates. Para 10-12: 4-5 aguacates. Para 15-20: 7-8 aguacates. Para 25 o más: 10+ aguacates. Si a tu grupo le encanta el guacamole, sube las cantidades un 30%.' } },
      { '@type': 'Question', name: '¿Por qué mi guacamole quedó aguado?', acceptedAnswer: { '@type': 'Answer', text: 'Normalmente porque el aguacate estaba muy maduro y soltó mucha agua, o porque le pusiste jitomate con semillas que sueltan jugo. Escurre el líquido antes de mezclar.' } },
      { '@type': 'Question', name: '¿El guacamole se puede congelar?', acceptedAnswer: { '@type': 'Answer', text: 'No funciona bien — el aguacate cambia completamente de textura al descongelarse. El guacamole es para hacer y comer el mismo día.' } },
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
          Guacamole para carne asada
        </h1>
        <p className="text-sm text-gray-500">7 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo más importante:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>El aguacate tiene que estar maduro — si está duro, no hay receta que lo salve</li>
          <li>Limón abundante es el ingrediente más importante para el sabor Y para que no se oxide</li>
          <li>El guacamole para carne asada es más rústico que el de restaurante — con textura, no como puré</li>
          <li>Calcula 1 aguacate por cada 2 o 3 personas para que alcance bien</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">El guacamole perfecto para carne asada</h2>
        <p className="text-sm leading-relaxed">
          El guacamole para carne asada no es igual al que sirven en los restaurantes de lujo — ese suele quedar muy fino, casi como una crema. El de carne asada tiene más personalidad: es más rústico, con pedazos de aguacate que se sienten, un toque generoso de limón y suficiente chile para que se note.
        </p>
        <p className="text-sm leading-relaxed">
          Es el complemento perfecto para la carne porque su frescura y cremosidad contrastan con la grasa de la arrachera o la costilla. Un taco de carne asada con buen guacamole y salsa verde es de las cosas más ricas que existen.
        </p>
        <p className="text-sm leading-relaxed">
          Esta receta es la versión clásica del norte de México — sencilla, sin adornos raros y con los sabores en las proporciones correctas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cómo elegir aguacates para guacamole</h2>
        <p className="text-sm leading-relaxed">
          Este es el paso más importante de toda la receta. Un aguacate que no está maduro es imposible de convertir en buen guacamole — quedará duro, sin sabor y con textura de jabón. Un aguacate demasiado maduro huele raro y puede tener manchas negras por dentro.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La prueba del tacto</p>
            <p className="text-sm text-gray-600">Presiona suavemente con el pulgar. Si cede ligeramente pero no se hunde, está perfecto. Si está duro como una pelota de beisbol, necesita más días. Si se hunde mucho y la piel se arruga, está pasado.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">La prueba del rabo</p>
            <p className="text-sm text-gray-600">Quita el pequeño rabo del aguacate (esa punta verde en la parte de arriba). Si debajo hay color verde brillante, está listo. Si está café oscuro, el aguacate está pasado o tiene manchas negras por dentro. Si está duro y no sale, necesita más días.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">El color de la piel</p>
            <p className="text-sm text-gray-600">El aguacate Hass (el más común en México para guacamole) está maduro cuando la piel se pone de un color verde muy oscuro, casi negro. Si la piel todavía está verde brillante, le faltan días.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-bold text-gray-700 mb-1">Tip: maduración acelerada</p>
          <p className="text-xs text-gray-600">Si los aguacates están duros y necesitas guacamole mañana, ponlos en una bolsa de papel kraft junto con una manzana o un plátano. El etileno que producen las frutas acelera la maduración. En 24-36 horas estarán listos.</p>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Para 6 a 8 personas (como acompañante de carne asada).</p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {[
            { emoji: "🥑", cantidad: "3 aguacates",   ingrediente: "Hass maduros — la variedad que se pone negra cuando madura" },
            { emoji: "🍋", cantidad: "2 limones",      ingrediente: "Jugo abundante — sabor y antioxidante natural" },
            { emoji: "🧅", cantidad: "¼ pieza",        ingrediente: "Cebolla blanca picada muy fina" },
            { emoji: "🌶️", cantidad: "1 a 2 piezas",  ingrediente: "Chile serrano picado (con o sin semillas según el picante que quieras)" },
            { emoji: "🌿", cantidad: "1 puñito",       ingrediente: "Cilantro fresco picado" },
            { emoji: "🧂", cantidad: "Al gusto",       ingrediente: "Sal" },
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
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preparación</h2>

        <div className="space-y-3">
          {[
            {
              n: 1,
              titulo: "Parte y saca el aguacate",
              texto: "Parte cada aguacate por la mitad a lo largo, gira las dos partes en sentidos contrarios para separar. Clava el filo del cuchillo en el hueso y gíralo para sacarlo. Saca la pulpa con una cuchara grande directamente al tazón donde vayas a machacar.",
            },
            {
              n: 2,
              titulo: "Exprime el limón inmediatamente",
              texto: "En cuanto el aguacate esté en el tazón, exprime los dos limones encima. Esto es lo primero que tienes que hacer — el limón evita que el aguacate se oxide y se ponga negro. No lo dejes sin limón ni un minuto.",
            },
            {
              n: 3,
              titulo: "Machaca con el tenedor",
              texto: "Usa un tenedor para machacar el aguacate — no la licuadora ni el procesador. La idea es que queden pedazos, no un puré liso. Machaca hasta que tengas una textura rústica con algunos trozos más grandes visibles.",
            },
            {
              n: 4,
              titulo: "Agrega los demás ingredientes",
              texto: "Incorpora la cebolla picada, el chile serrano, el cilantro y la sal. Mezcla bien con el tenedor o una cuchara.",
            },
            {
              n: 5,
              titulo: "Prueba y ajusta",
              texto: "Prueba el guacamole. ¿Le falta sal? ¿Más limón? ¿Más picante? Ajusta de a poco. El guacamole se afina al gusto — no hay proporciones perfectas universales.",
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
        <p className="text-sm font-semibold text-gray-900">El secreto para que no se ponga negro</p>
        <p className="text-sm leading-relaxed text-gray-700">
          El guacamole se pone negro por oxidación — el aguacate reacciona con el oxígeno del aire. El limón ralentiza este proceso, pero no lo detiene completamente.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          El truco más efectivo para servir en una carne asada: <strong>guarda el hueso del aguacate dentro del tazón</strong> con el guacamole. El hueso no "previene" la oxidación per se, pero al estar en el centro del tazón bloquea el contacto con el aire en esa zona. Más importante: cubre el guacamole con <strong>plástico adherente (Saran Wrap) puesto directamente sobre la superficie</strong> — sin espacio de aire entre el plástico y el guacamole. Eso sí funciona.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Si el guacamole ya se puso negro por encima, simplemente raspa la capa superficial con una cuchara — debajo estará verde y fresco.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cuánto guacamole preparar por persona</h2>
        <p className="text-sm leading-relaxed">
          Para carne asada, el guacamole es un acompañante — no el plato principal. Estas son las cantidades para que alcance sin desperdiciar:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Personas</th>
                <th className="text-left py-3 px-3 font-bold">Aguacates</th>
                <th className="text-left py-3 px-3 font-bold">Limones</th>
                <th className="text-left py-3 px-3 font-bold">Chiles serranos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-bold">6 a 8</td>
                <td className="py-2.5 px-3">3 aguacates</td>
                <td className="py-2.5 px-3">2 limones</td>
                <td className="py-2.5 px-3">1 a 2</td>
              </tr>
              <tr className="bg-brasa/5">
                <td className="py-2.5 px-3 font-bold">10 a 12</td>
                <td className="py-2.5 px-3">4 a 5 aguacates</td>
                <td className="py-2.5 px-3">3 limones</td>
                <td className="py-2.5 px-3">2 a 3</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">15 a 20</td>
                <td className="py-2.5 px-3">7 a 8 aguacates</td>
                <td className="py-2.5 px-3">4 a 5 limones</td>
                <td className="py-2.5 px-3">3 a 4</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">25 o más</td>
                <td className="py-2.5 px-3">10+ aguacates</td>
                <td className="py-2.5 px-3">6+ limones</td>
                <td className="py-2.5 px-3">5 a 6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">Si saben que a tu grupo le encanta el guacamole, sube las cantidades un 30%. El guacamole siempre se acaba antes que la carne.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Variaciones clásicas</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Guacamole con jitomate</p>
            <p className="text-sm text-gray-600">Agrega 1 jitomate picado sin semillas (para que no suelten líquido). Le da color, textura y un sabor ligeramente más ácido y fresco. Es la versión que más se conoce en el centro del país.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Guacamole con granada</p>
            <p className="text-sm text-gray-600">Agrega granos de granada al servir (no al mezclar). Le da un crujido y un toque dulce que contrasta muy bien con el picante del chile. Se ve muy bonito en el tazón también.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Guacamole con mango</p>
            <p className="text-sm text-gray-600">Agrega ¼ de mango pelado y picado en cubos pequeños. El dulce del mango con el picante del chile es una combinación excelente, especialmente en carnes asadas de verano.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Guacamole tatemado</p>
            <p className="text-sm text-gray-600">Tatema los chiles y la cebolla directamente en el asador antes de picar y agregar al guacamole. El ahumado del asador le da una dimensión completamente diferente — más profundo y con ese toque de carbón que va muy bien con la carne asada.</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preguntas frecuentes sobre guacamole</h2>
        <div className="space-y-3">
          {[
            {
              q: "¿Puedo preparar el guacamole con anticipación?",
              a: "Sí, hasta 2 horas antes. Ponlo en el tazón, exprímele el limón extra, cubre con plástico adherente puesto directamente sobre la superficie sin espacio de aire y refrigera. Saca 15 minutos antes de servir para que esté a temperatura ambiente."
            },
            {
              q: "¿Por qué mi guacamole quedó aguado?",
              a: "Normalmente porque el aguacate estaba muy maduro y soltó mucha agua, o porque le pusiste jitomate con semillas que sueltan jugo. Para aguacates muy maduros, escurre el líquido antes de mezclar. Si ya está aguado, no se puede arreglar — sirve como está o descarta el líquido con una cuchara."
            },
            {
              q: "¿El guacamole se puede congelar?",
              a: "No funciona bien. El aguacate cambia completamente de textura al descongelarse — queda fibroso y con una textura rara. El guacamole es para hacer y comer el mismo día."
            },
            {
              q: "¿Hay diferencia entre el limón verde mexicano y el limón amarillo para guacamole?",
              a: "Sí, mucha. El limón verde mexicano (el chiquito que se usa en todos lados en México) tiene más acidez y un sabor más intenso que el limón amarillo (tipo eureka o lisa). Para guacamole usa el verde mexicano — el resultado en sabor es completamente diferente y mucho mejor."
            },
            {
              q: "¿Qué hago si no tengo cilantro?",
              a: "El guacamole sin cilantro sigue estando bueno — el limón, la cebolla y el chile son los sabores principales. Si no tienes o no te gusta el cilantro, simplemente omítelo. No lo sustituyas por perejil — el sabor cambia completamente y no va bien con aguacate."
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
        <p className="text-sm font-semibold text-gray-900">¿Ya tienes el guacamole? Ahora calcula todo lo demás.</p>
        <p className="text-xs text-gray-500">La calculadora te dice exactamente cuánta carne, tortillas, bebidas y más necesitas para tu grupo.</p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:opacity-90 transition-colors"
        >
          Calcular cuánto necesito →
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/salsa-verde-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🟢 Salsa verde para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Tomatillo tatemado — el complemento perfecto para el guacamole</p>
          </Link>
          <Link href="/guias/como-marinar-arrachera" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🥩 Cómo marinar arrachera</p>
            <p className="text-xs text-gray-500 mt-1">Marinada clásica, tiempo exacto y errores comunes</p>
          </Link>
          <Link href="/guias/lista-compras-carne-asada-completa" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🛒 Lista de compras completa para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Todo lo que necesitas sin olvidar nada — incluyendo los aguacates</p>
          </Link>
        </div>
      </section>

    </article>
    </>
  );
}
