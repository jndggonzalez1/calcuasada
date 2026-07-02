import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa de chile piquín con limón — Receta para carne asada — Calcuasada",
  description:
    "Receta de salsa de chile piquín con limón y ajo tostado. Sin agua, en molcajete, lista en 10 minutos. La favorita del norte de México para carne asada — como la hacía el abuelito.",
};

export default function SalsaPiquinPage() {
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Salsa de chile piquín con limón',
    description: 'Salsa de chile piquín con limón y ajo tostado. Sin agua, en molcajete, lista en 10 minutos. La favorita del norte de México para carne asada.',
    author: { '@type': 'Organization', name: 'Calcuasada', url: 'https://www.calcuasada.com' },
    datePublished: '2026-06-01',
    prepTime: 'PT2M',
    cookTime: 'PT8M',
    totalTime: 'PT10M',
    recipeYield: '6-8 porciones',
    recipeCategory: 'Salsa',
    recipeCuisine: 'Mexicana norteña',
    keywords: 'salsa chile piquín, salsa piquín limón, salsa norteña carne asada, salsa molcajete',
    recipeIngredient: [
      '25 a 35 chiles piquín enteros (preferentemente rojos)',
      '5 a 6 limones',
      '2 dientes de ajo',
      'Sal al gusto',
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', name: 'Tuesta el ajo', text: 'Pon los dientes de ajo en el asador, comal o sartén a fuego medio-alto. Dales vuelta hasta que estén suaves por dentro y con manchas doradas por fuera, unos 6 a 8 minutos.' },
      { '@type': 'HowToStep', name: 'Machaca los chiles con la sal', text: 'En un molcajete, muele los chiles piquín enteros junto con la sal dejando textura rústica con pedacitos de chile.' },
      { '@type': 'HowToStep', name: 'Agrega el ajo', text: 'Añade los dientes de ajo al molcajete y machaca hasta integrarlos con el chile.' },
      { '@type': 'HowToStep', name: 'Exprime los limones', text: 'Exprime los limones directamente sobre la mezcla — el limón es la base líquida, sin agua. Revuelve bien.' },
      { '@type': 'HowToStep', name: 'Prueba y ajusta', text: 'Prueba la salsa. Ajusta con más sal, limón o chile según el picante y acidez deseados.' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Por qué la salsa de piquín no lleva agua?', acceptedAnswer: { '@type': 'Answer', text: 'Porque el limón hace la función del líquido y además aporta acidez y sabor. El agua solo diluye sin agregar nada. Sin agua la salsa queda más concentrada con los sabores más intensos.' } },
      { '@type': 'Question', name: '¿Se puede hacer salsa piquín sin molcajete?', acceptedAnswer: { '@type': 'Answer', text: 'Técnicamente sí en licuadora, pero el resultado no es el mismo. El molcajete deja pedazos que se sienten al morderlos, que es parte del carácter de la salsa. Un mortero de cocina funciona mejor que la licuadora.' } },
      { '@type': 'Question', name: '¿Dónde consigo chile piquín si no soy de Monterrey?', acceptedAnswer: { '@type': 'Answer', text: 'En casi cualquier mercado de abastos en México. En el centro del país puede llamarse chile del monte. También está disponible online en tiendas de especias mexicanas.' } },
      { '@type': 'Question', name: '¿Cuántos chiles piquín necesito para salsa suave, media y picante?', acceptedAnswer: { '@type': 'Answer', text: 'Para salsa suave: 10 a 15 chiles. Nivel medio: 25 a 35 chiles. Picante: 40 chiles o más.' } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">La favorita de Yeyito</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Salsa de chile piquín con limón
        </h1>
        <p className="text-sm text-gray-500">8 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Sin estufa ni licuadora — solo molcajete</li>
          <li>Lista en 10 minutos</li>
          <li>Rinde para 6 a 8 personas</li>
          <li>El limón es la base líquida — sin agua para que quede más intensa</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Una salsa sencilla, picosita y muy buena para carne asada</h2>
        <p className="text-sm leading-relaxed">
          Esta salsa va con chiles piquín enteros, limón, sal y ajo tostado. Es la favorita de Yeyito — los piquines rojos, como le enseñó su abuelito. Queda perfecta para tacos de carne, salchicha, pollo, quesadillas, cebollitas asadas o para ponerle directo a la carne recién salida del asador.
        </p>
        <p className="text-sm leading-relaxed">
          El chile piquín es pequeño pero tiene mucho carácter. El limón lo equilibra y le da frescura; el ajo tostado le da profundidad. Juntos hacen una salsa rústica, ácida y picosita que va de maravilla con la grasa de la carne asada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">El chile piquín en el norte de México</h2>
        <p className="text-sm leading-relaxed">
          El chile piquín tiene una presencia muy particular en la gastronomía del norte de México. A diferencia de otros chiles que se trabajan más en la cocina del centro y sur del país, el piquín en el noreste se usa principalmente en salsas muy simples y directas — molido con sal y limón, o machacado en molcajete. No va en guisados ni en moles. Es una salsa de asador, de domingo, de familia.
        </p>
        <p className="text-sm leading-relaxed">
          Lo que lo hace especial es su combinación de picante intenso con un sabor floral y ligeramente ahumado que no tiene ningún otro chile. No es el picante plano del jalapeño ni la intensidad herbácea del serrano — es algo completamente distinto, más sutil y más interesante.
        </p>
        <p className="text-sm leading-relaxed">
          En Monterrey y en muchos hogares del noreste, esta salsa de piquín con limón se hace de generación en generación prácticamente sin cambiar la receta. La simplicidad es parte del punto: pocos ingredientes, técnica sencilla, resultado que no falla.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">¿Piquines verdes o rojos?</h2>
        <p className="text-sm leading-relaxed">
          Los dos funcionan — es cuestión de gusto. Los <strong>verdes</strong> tienen un picante más fresco y un sabor ligeramente herbáceo. Los <strong>rojos</strong> están más secos, tienen un picante más concentrado y un sabor más intenso y terroso.
        </p>
        <p className="text-sm leading-relaxed">
          Yeyito prefiere los rojos porque son los que usaba su abuelito. Si encuentras una mezcla de los dos, también funciona bien — le da complejidad al sabor.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-gray-700">Dónde conseguir chile piquín en Monterrey</p>
          <ul className="text-xs space-y-1.5 text-gray-600 list-disc list-inside">
            <li><strong>Mercados de barrio:</strong> lo consigues por gramo o por bolsita — el más barato y fresco</li>
            <li><strong>Supermercados (HEB, Walmart, Soriana):</strong> en el área de especias o chiles secos, en bolsas de 50 o 100g</li>
            <li><strong>Tiendas de especias en el mercado de abastos:</strong> el mejor precio y más variedad (verde, rojo, molido)</li>
            <li><strong>Online:</strong> fácil de pedir si vives fuera de Monterrey — busca &ldquo;chile piquín seco norteño&rdquo;</li>
          </ul>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas.</p>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {[
            { emoji: "🌶️", cantidad: "25 a 35 pzas", ingrediente: "Chiles piquín enteros (preferentemente rojos)" },
            { emoji: "🍋", cantidad: "5 a 6 pzas",  ingrediente: "Limones" },
            { emoji: "🧄", cantidad: "2 dientes",   ingrediente: "Ajo" },
            { emoji: "🧂", cantidad: "Al gusto",    ingrediente: "Sal" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0">{emoji}</span>
              <span className="text-sm font-bold text-gray-500 w-20 flex-shrink-0">{cantidad}</span>
              <span className="text-sm text-gray-800">{ingrediente}</span>
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
              titulo: "Tuesta el ajo",
              texto: "Pon los dientes de ajo en el asador, comal o sartén a fuego medio-alto. Dales vuelta hasta que estén suaves por dentro y con manchas doradas por fuera, unos 6 a 8 minutos. El ajo tostado tiene un sabor más suave y ahumado que el crudo — es clave para esta salsa.",
            },
            {
              n: 2,
              titulo: "Machaca los chiles con la sal",
              texto: "En un molcajete, muele los chiles piquín enteros junto con la sal. No los muelas demasiado fino — la idea es que queden con textura, con pedacitos de chile que se sientan al morderlos.",
            },
            {
              n: 3,
              titulo: "Agrega el ajo tostado",
              texto: "Añade los dientes de ajo al molcajete y machaca hasta integrarlos con el chile. No necesitas que quede una pasta perfectamente lisa — rústica está bien y hasta mejor.",
            },
            {
              n: 4,
              titulo: "Exprime los limones",
              texto: "Exprime los limones directamente sobre la mezcla. El limón es la base líquida de esta salsa — no lleva agua. Revuelve bien para que todo se integre.",
            },
            {
              n: 5,
              titulo: "Prueba y ajusta",
              texto: "Prueba la salsa. Ajusta con más sal, limón o chile según qué tan ácida y picosa la quieras. Si quedó muy densa, un poco más de limón la aligera.",
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

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Alternativa rápida: sin ajo fresco</h2>
        <p className="text-sm leading-relaxed">
          Si no tienes ajo fresco, puedes usar ajo en polvo. No sabe igual que el ajo tostado en el asador, pero funciona para salir del apuro.
        </p>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-3">
            <span className="text-xl flex-shrink-0">🧄</span>
            <span className="text-sm font-bold text-gray-500 w-20 flex-shrink-0">½ cdita</span>
            <span className="text-sm text-gray-800">Ajo en polvo</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Agrégalo directamente junto con el chile piquín y la sal, antes de exprimir el limón.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Nivel de picante</h2>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {[
            { nivel: "Suave",    cantidad: "10 a 15 chiles piquín",  color: "text-yellow-600" },
            { nivel: "Medio",   cantidad: "25 a 35 chiles piquín",  color: "text-orange-500" },
            { nivel: "Picante", cantidad: "40 chiles o más",         color: "text-red-600"    },
          ].map(({ nivel, cantidad, color }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className={`text-sm font-semibold w-16 flex-shrink-0 ${color}`}>{nivel}</span>
              <span className="text-sm text-gray-700">{cantidad}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
        <p className="text-sm font-semibold text-gray-900">⭐ Recomendación especial de Yeyito</p>
        <p className="text-sm leading-relaxed text-gray-700">
          Esta salsa queda mejor sin agua. La idea es que el limón sea la base líquida y que el sabor quede más intenso, ácido y picosito.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Si la quieres más fuerte, agrega más piquín. Si la quieres más fresca, agrega más limón. Para carne asada, queda especialmente buena cuando está bien acidita porque corta la grasa de la carne y levanta el sabor del taco.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Variaciones que puedes probar</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con naranja agria</p>
            <p className="text-sm text-gray-600">Sustituye la mitad del limón por jugo de naranja agria. Le da un sabor más tropical y ligeramente más dulce que equilibra muy bien con el picante del piquín. Si no consigues naranja agria, una mezcla de naranja normal con un poco más de limón funciona de emergencia.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con sal de grano en lugar de sal fina</p>
            <p className="text-sm text-gray-600">La textura de la sal de grano cambia la experiencia del molcajete — al moler los piquines junto con los cristales de sal gruesa el proceso es más eficiente y el resultado tiene más textura. Vale la pena si tienes sal de grano a la mano.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Con un toque de ajo negro</p>
            <p className="text-sm text-gray-600">El ajo negro (ajo fermentado, cada vez más fácil de conseguir en supermercados) tiene un sabor dulce, umami y muy diferente al ajo regular. Un solo diente de ajo negro en lugar del ajo tostado le da a esta salsa una profundidad completamente diferente.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Qué hacer si la salsa no salió bien</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó demasiado picante</p>
            <p className="text-sm text-gray-600">Agrega más limón y más sal — el ácido y la sal atenúan la percepción del picante. También puedes agregar un poco más de ajo para suavizarlo. No hay forma de sacarle piquines una vez molidos, así que ajusta con limón.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Quedó muy espesa y pastosa</p>
            <p className="text-sm text-gray-600">Agrega más limón de a poco hasta que la consistencia sea la que buscas. Esta salsa no lleva agua — el limón es lo que la aligera. Si ya quedó ácida de más, un poquito de sal extra balancea.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">Sabe amargo</p>
            <p className="text-sm text-gray-600">El ajo se tostó de más y se quemó — el ajo quemado tiene amargor intenso. Empieza de nuevo con el ajo. La próxima vez, tóstalo a fuego medio y vigílalo — se quema fácil.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <p className="text-sm font-bold text-gray-900">No sabe a nada — sabe plana</p>
            <p className="text-sm text-gray-600">Revisa la sal primero. Después revisa la calidad del piquín — si es piquín muy viejo o almacenado mucho tiempo, pierde potencia. El piquín fresco del mercado siempre va a ser más intenso que el que lleva meses en una bolsita en la alacena.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Cómo guardar la salsa de piquín</h2>
        <p className="text-sm leading-relaxed">
          Esta salsa es la que menos dura de las tres porque no lleva base de tomate o tomatillo que funcione como conservador natural.
        </p>
        <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
          <li><strong>En el refrigerador:</strong> en frasco bien tapado dura 2 a 3 días. El sabor del limón se intensifica con el reposo.</li>
          <li><strong>No se recomienda congelar:</strong> el limón cambia de sabor al congelarse y el molcajete pierde toda la textura.</li>
          <li><strong>Lo ideal es hacerla el mismo día:</strong> es tan rápida (10 minutos) que no vale la pena guardarla mucho tiempo. Haz la cantidad exacta para el evento.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">¿Con qué va esta salsa?</h2>
        <p className="text-sm leading-relaxed">
          Con todo lo que sale del asador. Tacos de arrachera, costilla, pollo, salchicha para asar, quesadillas de queso, cebollitas asadas — esta salsa le queda bien a todo. También es perfecta para ponerle directo a la carne recién salida de la parrilla, antes de armar el taco.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes esta salsa de piquín y una salsa verde en la mesa, ya tienes las dos que necesita cualquier carne asada norteña.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Preguntas frecuentes sobre salsa de chile piquín</h2>
        <div className="space-y-3">
          {[
            {
              q: "¿Por qué no lleva agua esta salsa?",
              a: "Porque el limón hace la función del líquido y además aporta acidez y sabor. El agua solo diluye sin agregar nada. Sin agua la salsa queda más concentrada, con los sabores más intensos. Esta es la forma tradicional en el norte."
            },
            {
              q: "¿Se puede hacer en licuadora en lugar de molcajete?",
              a: "Técnicamente sí, pero el resultado no es el mismo. En licuadora los chiles quedan muy molidos y la textura es diferente. El molcajete deja pedazos que se sienten al morderlos y eso es parte del carácter de la salsa. Si no tienes molcajete, un vaso mezclador o un mortero de cocina funciona mejor que la licuadora."
            },
            {
              q: "¿El chile piquín fresco y el seco saben igual?",
              a: "No. El piquín fresco tiene un sabor más vegetal y brillante, con picante limpio. El seco tiene más concentración de sabor, un toque más terroso y el picante puede ser más intenso. Esta receta usa piquín seco (entero), que es lo que normalmente se consigue en los mercados del norte."
            },
            {
              q: "¿Es normal que la salsa quede un poco espesa?",
              a: "Sí, es la textura correcta. No es una salsa líquida como la de botella — es más parecida a una pasta espesa con textura de molcajete. Se agrega con cuchara o con una bolita de chile del molcajete directo al taco."
            },
            {
              q: "¿Dónde consigo chile piquín si no soy de Monterrey?",
              a: "En casi cualquier mercado de abastos en México lo consigues. En el centro del país puede llamarse 'chile del monte' o simplemente 'piquín'. También está disponible online en tiendas de especias mexicanas. En el norte de México es más fácil — cualquier mercadito de barrio lo tiene."
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
          La calculadora te dice exactamente cuánta carne, tortillas, limones y más necesitas — para que no te falte nada.
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
          <Link href="/guias/salsa-verde-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🟢 Salsa verde para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Tomatillo tatemado en el asador y el toque especial de grasa de carne</p>
          </Link>
          <Link href="/guias/salsa-roja-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🔴 Salsa roja para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Jitomates tatemados con chile de árbol — más cuerpo y más picante</p>
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
