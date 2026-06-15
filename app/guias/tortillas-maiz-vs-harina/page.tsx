import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Tortillas de maíz vs tortillas de harina — Diferencias e historia — Calcuasada",
  description:
    "¿Maíz o harina? Diferencias de sabor, textura y uso. Más la historia completa de la tortilla en México: su origen prehispánico, cómo llegó el trigo al norte y por qué Nuevo León eligió la harina.",
};

export default function TortillasPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuál es mejor para carne asada, tortilla de maíz o de harina?", acceptedAnswer: { "@type": "Answer", text: "En el norte de México la respuesta es unánime: tortilla de harina. Es más suave, más flexible y aguanta mejor el peso de la carne, la salsa y el guacamole sin romperse. La tortilla de maíz es perfecta para tacos al pastor, carnitas o barbacoa, pero para carne asada norteña la de harina es la correcta." } },
      { "@type": "Question", name: "¿Por qué en el norte de México comen tortillas de harina y en el sur de maíz?", acceptedAnswer: { "@type": "Answer", text: "Por el clima y la historia. El norte de México tiene un clima más seco y frío que favorece el cultivo de trigo. Cuando los españoles llegaron en el siglo XVI trajeron el trigo, y las misiones franciscanas lo sembraron en el norte. El sur mantuvo el maíz porque el clima tropical lo favorece y la tradición prehispánica era más profunda ahí." } },
      { "@type": "Question", name: "¿Cuántas tortillas de harina necesito por persona en una carne asada?", acceptedAnswer: { "@type": "Answer", text: "Calcula entre 3 y 4 tortillas por adulto para una carne asada normal. La calculadora de Calcuasada te da la cantidad exacta ajustada al número de personas y al nivel de apetito de tu grupo." } },
      { "@type": "Question", name: "¿La tortilla de harina tiene más calorías que la de maíz?", acceptedAnswer: { "@type": "Answer", text: "Sí. Una tortilla de harina de 25 cm tiene aproximadamente 140-160 calorías. Una tortilla de maíz del mismo tamaño tiene alrededor de 60-70 calorías. La diferencia es la grasa (manteca o aceite) que lleva la masa de harina, que la tortilla de maíz no necesita." } },
      { "@type": "Question", name: "¿Qué es la nixtamalización?", acceptedAnswer: { "@type": "Answer", text: "Es el proceso de cocinar el maíz seco en agua con cal (hidróxido de calcio). Este proceso ablanda el maíz, lo hace más fácil de moler, aumenta su valor nutritivo y le da el sabor y el olor característicos de la tortilla de maíz. Tiene más de 10,000 años de antigüedad y es uno de los descubrimientos gastronómicos más importantes de la humanidad." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="space-y-8 text-gray-700">

        <div className="text-center space-y-2">
          <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Guía completa</p>
          <h1 className="text-2xl font-black text-gray-900 leading-tight">
            Tortillas de maíz vs tortillas de harina
          </h1>
          <p className="text-sm text-gray-500">12 min de lectura · Actualizado junio 2026</p>
        </div>

        <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
          <p className="text-sm font-black text-gray-900">La respuesta corta:</p>
          <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
            <li>Para carne asada norteña: <strong>tortilla de harina</strong>, siempre</li>
            <li>Para tacos al pastor, carnitas o barbacoa: <strong>tortilla de maíz</strong></li>
            <li>No son rivales — cada una es perfecta para su comida</li>
            <li>El norte eligió la harina por historia y clima, no por capricho</li>
          </ul>
        </div>

        {/* ── SECCIÓN 1: DIFERENCIAS ── */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">Maíz vs harina: las diferencias reales</h2>
          <p className="text-sm leading-relaxed">
            Son dos productos completamente distintos que comparten nombre y función básica — envolver comida — pero que en textura, sabor, historia y uso son mundos aparte. Entender las diferencias te ayuda a saber cuándo usar cada una y por qué.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-carbon text-white">
                  <th className="text-left py-3 px-3 font-bold">Característica</th>
                  <th className="text-left py-3 px-3 font-bold">De maíz</th>
                  <th className="text-left py-3 px-3 font-bold">De harina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                <tr><td className="py-2.5 px-3 font-bold">Ingrediente base</td><td className="py-2.5 px-3">Masa de maíz nixtamalizado</td><td className="py-2.5 px-3">Harina de trigo + grasa + agua</td></tr>
                <tr className="bg-gray-50"><td className="py-2.5 px-3 font-bold">Color</td><td className="py-2.5 px-3">Amarillo/blanco según variedad</td><td className="py-2.5 px-3">Blanca o crema</td></tr>
                <tr><td className="py-2.5 px-3 font-bold">Sabor</td><td className="py-2.5 px-3">Terroso, con umami del maíz y la cal</td><td className="py-2.5 px-3">Suave, neutro, ligeramente mantecoso</td></tr>
                <tr className="bg-gray-50"><td className="py-2.5 px-3 font-bold">Textura</td><td className="py-2.5 px-3">Más firme, ligeramente granulosa</td><td className="py-2.5 px-3">Suave, flexible, elástica</td></tr>
                <tr><td className="py-2.5 px-3 font-bold">Se rompe al doblar</td><td className="py-2.5 px-3">Más fácilmente si se enfría</td><td className="py-2.5 px-3">Casi nunca si está fresca</td></tr>
                <tr className="bg-gray-50"><td className="py-2.5 px-3 font-bold">Tamaño típico</td><td className="py-2.5 px-3">12–15 cm</td><td className="py-2.5 px-3">20–30 cm (o más, estilo Sonora)</td></tr>
                <tr><td className="py-2.5 px-3 font-bold">Calorías aprox.</td><td className="py-2.5 px-3">60–70 kcal (tamaño taquero)</td><td className="py-2.5 px-3">140–160 kcal (25 cm)</td></tr>
                <tr className="bg-gray-50"><td className="py-2.5 px-3 font-bold">Proteína</td><td className="py-2.5 px-3">~1.5 g</td><td className="py-2.5 px-3">~4 g</td></tr>
                <tr><td className="py-2.5 px-3 font-bold">Sin gluten</td><td className="py-2.5 px-3">✅ Sí (natural)</td><td className="py-2.5 px-3">❌ No</td></tr>
                <tr className="bg-gray-50"><td className="py-2.5 px-3 font-bold">Mejor para</td><td className="py-2.5 px-3">Al pastor, carnitas, enchiladas, quesadillas</td><td className="py-2.5 px-3">Carne asada, burritos, machaca, fajitas</td></tr>
                <tr><td className="py-2.5 px-3 font-bold">Región dominante</td><td className="py-2.5 px-3">Centro, sur y sureste de México</td><td className="py-2.5 px-3">Norte de México (NL, Sonora, Chihuahua, Coahuila)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-900">En sabor y textura son completamente diferentes</h2>
          <p className="text-sm leading-relaxed">
            La tortilla de maíz tiene un sabor propio, intenso y particular — ese sabor a cal y maíz tostado que es inconfundible. No es un sabor neutro. Por eso las tortillas de maíz funcionan tan bien con rellenos de sabor fuerte: el chile guajillo de la barbacoa, la salsa de tomatillo del al pastor, el sabor profundo de la carnita sudada. El maíz compite con los rellenos y los complementa al mismo tiempo.
          </p>
          <p className="text-sm leading-relaxed">
            La tortilla de harina, en cambio, tiene un sabor mucho más suave y neutro con un ligero toque mantecoso. No compite con el relleno — lo deja brillar. Por eso va tan bien con la carne asada: la arrachera tiene suficiente sabor propio y la tortilla de harina la acompaña sin interferir. Además, la textura suave y elástica de la harina aguanta mucho mejor el peso de la carne con salsa, guacamole y todo lo que le eches encima.
          </p>
          <div className="bg-brasa-light border border-brasa/20 rounded-xl p-4 space-y-1">
            <p className="text-xs font-bold text-brasa">El veredicto de Yeyito:</p>
            <p className="text-sm text-gray-700 italic">&ldquo;La tortilla de maíz tiene su lugar y lo respeto completamente. Pero para carne asada norteña, la de harina es la única opción. No hay debate.&rdquo;</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-900">¿Por qué el norte eligió la harina y el sur el maíz?</h2>
          <p className="text-sm leading-relaxed">
            Esto no fue una decisión arbitraria ni una cuestión de gusto — fue resultado de geografía, historia y disponibilidad de ingredientes. El maíz prospera en climas húmedos y tropicales, que son precisamente las condiciones del centro y sur de México, donde las civilizaciones mesoamericanas lo desarrollaron durante miles de años. En esas regiones el maíz siempre abundó y se convirtió en el centro de la alimentación.
          </p>
          <p className="text-sm leading-relaxed">
            El norte de México tiene un clima completamente diferente: más seco, más frío en invierno, con lluvias escasas y estacionales. El maíz se puede cultivar, pero el trigo lo hace mucho mejor en esas condiciones. Cuando los españoles llegaron en el siglo XVI y comenzaron a establecerse en el norte, trajeron el trigo y las misiones franciscanas lo sembraron a lo largo del camino que hoy conocemos como el Camino Real. El trigo prosperó, se convirtió en abundante y accesible, y la población norteña aprendió a hacer tortillas con él.
          </p>
          <p className="text-sm leading-relaxed">
            Así, mientras el sur mantuvo su tradición milenaria del maíz — que nunca tuvo razón para cambiar porque el maíz seguía siendo perfecto para sus condiciones — el norte desarrolló su propia tradición con la harina de trigo. Hoy, más de 400 años después, esa diferencia sigue siendo uno de los rasgos más claros que dividen la gastronomía del norte y del sur de México.
          </p>
        </section>

        <AdBanner />

        {/* ── SECCIÓN 2: HISTORIA GENERAL ── */}
        <section className="space-y-4">
          <div className="border-l-4 border-brasa pl-4">
            <h2 className="text-xl font-black text-gray-900">La historia de las tortillas en México</h2>
            <p className="text-xs text-brasa font-semibold mt-1">Más de 10,000 años de historia</p>
          </div>

          <p className="text-sm leading-relaxed">
            La tortilla es, sin exageración, el alimento más antiguo y más persistente de México. Ha estado en la mesa de esta tierra — en distintas formas y con distintos granos — por más tiempo que cualquier otro alimento que aún se consume hoy en el mundo occidental. Civilizaciones enteras se levantaron, florecieron y cayeron mientras la tortilla siguió siendo el centro de cada comida.
          </p>
          <p className="text-sm leading-relaxed">
            La palabra "tortilla" es española — es el diminutivo de "torta" y significa literalmente "tortita pequeña". Los conquistadores españoles la usaron para describir lo que veían hacer a las mujeres indígenas: una masa aplastada y cocida en comal. Pero el alimento en sí tiene un nombre en náhuatl mucho más antiguo: <em>tlaxcalli</em>. Era el alimento básico del Imperio Azteca y de decenas de culturas anteriores a él.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-3">
            <p className="text-sm font-black text-gray-900">La nixtamalización: el descubrimiento que lo cambió todo</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              El proceso que hace posible la tortilla de maíz se llama nixtamalización — una palabra que viene del náhuatl <em>nextli</em> (ceniza de cal) y <em>tamalli</em> (masa). Consiste en cocer el maíz seco en agua con cal viva (hidróxido de calcio) durante horas, luego dejarlo reposar toda la noche y finalmente molerlo para obtener masa.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Este proceso no es solo culinario — es uno de los descubrimientos científicos más importantes de la humanidad, aunque nunca se le reconoce como tal. La cal libera la niacina (vitamina B3) que el maíz tiene atrapada en su estructura química y que el cuerpo humano no puede absorber sin este proceso. Las civilizaciones que consumían maíz sin nixtamalizar sufrían de pelagra — una enfermedad por deficiencia de niacina. Las que nixtamalizaban, no.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cuando los europeos llevaron el maíz de América a Europa y África en el siglo XVI, lo llevaron sin el conocimiento de la nixtamalización. El resultado fue una epidemia de pelagra que mató a millones de personas en el Mediterráneo y África subsahariana durante siglos, hasta que se descubrió la causa. Los pueblos indígenas de México habían resuelto ese problema 8,000 años antes.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            La tortilla no era solo comida — era moneda, ofrenda y símbolo social. En el mundo azteca las mujeres que sabían hacer tortillas perfectas tenían un estatus especial. Las tortillas se ofrecían a los dioses en ceremonias. Los tributos al Imperio incluían maíz por toneladas, precisamente porque el maíz era la base de la tortilla que era la base de todo. Un guerrero sin tortillas no podía guerrear. Un pueblo sin maíz no podía existir.
          </p>
          <p className="text-sm leading-relaxed">
            La llegada de los españoles en 1519 intentó reemplazar la tortilla con el pan de trigo — considerado más "civilizado" por los europeos. Fracasaron. Quinientos años después el pan de trigo existe en México, sí, pero la tortilla sigue siendo el alimento nacional indiscutible. Sobrevivió la conquista, la colonia, la independencia, la revolución y la industrialización. Eso dice todo.
          </p>
        </section>

        <AdBanner />

        {/* ── SECCIÓN 3: HISTORIA TORTILLA DE HARINA ── */}
        <section className="space-y-4">
          <div className="border-l-4 border-brasa pl-4">
            <h2 className="text-xl font-black text-gray-900">La historia de la tortilla de harina</h2>
            <p className="text-xs text-brasa font-semibold mt-1">400 años de identidad norteña</p>
          </div>

          <p className="text-sm leading-relaxed">
            La tortilla de harina es mucho más joven que la de maíz — nació en el siglo XVI, directamente del encuentro entre la tradición indígena de cocinar en comal y el trigo que llegó con los conquistadores españoles. Es, en ese sentido, uno de los pocos alimentos del mundo que puede llamarse genuinamente mestizo: técnica indígena, ingrediente europeo, identidad completamente mexicana.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <p className="text-sm font-black text-gray-900">El trigo llega al norte de México</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Hernán Cortés fue el primero en sembrar trigo en México — según las crónicas, un esclavo negro llamado Juan Garrido encontró granos de trigo entre un cargamento de arroz y los sembró cerca de la capital en 1523. Pero fue en el norte donde el trigo realmente se asentó. Las misiones franciscanas y jesuitas que se extendieron por Sonora, Chihuahua, Coahuila y Nuevo León a lo largo del siglo XVI y XVII necesitaban harina para el pan eucarístico y comenzaron a cultivar trigo sistemáticamente.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              El clima norteño — frío en invierno, con lluvias concentradas — resultó perfecto para el trigo. En pocos años la producción fue tan abundante que el trigo se convirtió en un ingrediente accesible para todos, no solo para los religiosos. Las mujeres indígenas y mestizas del norte, que ya tenían el comal y la técnica de aplastar y cocer masa, simplemente adaptaron su método al nuevo ingrediente. Así nació la tortilla de harina.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            Hay un detalle técnico fundamental que diferencia la masa de harina de la de maíz: la grasa. La harina de trigo por sí sola no forma una masa que se pueda trabajar fácilmente — necesita grasa para que el gluten se relaje y la masa sea suave y elástica. En el norte colonial esa grasa era la manteca de cerdo, que los españoles también trajeron consigo. La fórmula clásica — harina, manteca, agua tibia y sal — se estableció hace cuatro siglos y prácticamente no ha cambiado desde entonces.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <p className="text-sm font-black text-gray-900">Sonora y la tortilla sobaquera</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Si hay un estado en México que puede reclamar la tortilla de harina como símbolo de identidad más que ningún otro, ese es Sonora. La tortilla sobaquera sonorense es legendaria — puede medir hasta 50 o 60 centímetros de diámetro, del tamaño de una llanta de bicicleta. Se llama "sobaquera" porque para estirarla bien hay que apoyarla en el antebrazo (el sobaco, en lenguaje coloquial) mientras se le da la vuelta con las manos.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              La técnica de hacer tortillas de harina a mano es un arte que se aprende en familia, de madres a hijas, y que todavía hoy distingue a las tortilleras expertas de las principiantes. Una buena tortilla de harina hecha a mano tiene un color irregular con manchas de tostado, una textura ligeramente esponjosa por dentro y una flexibilidad que la máquina no puede replicar exactamente. En muchos pueblos del norte la tortilla hecha a mano sigue siendo el estándar de calidad.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            En Nuevo León, la tortilla de harina es tan central a la identidad culinaria como la carne asada misma. No se puede imaginar una carne asada regiomontana sin tortillas de harina — la combinación lleva generaciones siendo inseparable. Cuando alguien del norte de México visita el centro o sur del país y le sirven tortillas de maíz con la carne, es casi un choque cultural. No es que la tortilla de maíz esté mal — es que sencillamente no es la que va.
          </p>
          <p className="text-sm leading-relaxed">
            Hoy la tortilla de harina ha cruzado fronteras y es la base del burrito estadounidense, el wrap internacional y decenas de fusiones en todo el mundo. Pero el original — la tortilla de harina delgada, ligeramente tostada y suave, hecha en comal de hierro — sigue siendo lo que se hace en las cocinas del norte de México, exactamente como se hacía hace cuatro siglos.
          </p>
        </section>

        <AdBanner />

        {/* ── SECCIÓN 4: HISTORIA TORTILLA DE MAÍZ ── */}
        <section className="space-y-4">
          <div className="border-l-4 border-brasa pl-4">
            <h2 className="text-xl font-black text-gray-900">La historia de la tortilla de maíz</h2>
            <p className="text-xs text-brasa font-semibold mt-1">10,000 años de civilización</p>
          </div>

          <p className="text-sm leading-relaxed">
            La historia de la tortilla de maíz es, en muchos sentidos, la historia de México. No hay otro alimento en el mundo que haya acompañado a una civilización de manera tan continua y tan central durante tanto tiempo. Antes de que existiera Teotihuacán, antes de que existieran los mayas, antes de que existiera el Imperio Azteca — ya había tortillas de maíz.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <p className="text-sm font-black text-gray-900">Los orígenes: el maíz como primer cultivo</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              El maíz no existía en la naturaleza tal como lo conocemos hoy — fue creado por los pueblos indígenas de Mesoamérica a través de un proceso de selección y domesticación que tardó miles de años. Su ancestro es el teocintle, una planta silvestre de tallos pequeños y espigas delgadas con apenas unos granos. A través de 9,000 a 10,000 años de selección intencional — escogiendo siempre las plantas con mejores granos, más grandes y más nutritivos — los agricultores mesoamericanos transformaron el teocintle en el maíz que conocemos hoy.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Las evidencias más antiguas de consumo de maíz procesado en forma de masa datan de alrededor del 8700 a.C. en Guerrero, México. No son tortillas exactamente — son residuos de masa en utensilios de piedra — pero prueban que el procesamiento del maíz para hacer masa tiene casi 11,000 años. El comal de barro, el utensilio sobre el que se cuece la tortilla, aparece en el registro arqueológico alrededor del 700 a.C., momento a partir del cual la tortilla como la conocemos hoy ya existía de manera reconocible.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            Para los aztecas y los pueblos que los precedieron, el maíz no era solo un cultivo — era sagrado. El maíz era Centeotl, dios del maíz, y la leyenda del Quinto Sol cuenta que los humanos fueron creados de masa de maíz por Quetzalcóatl. No es una metáfora menor: en la cosmología mesoamericana, el ser humano y el maíz son literalmente la misma cosa, hechos del mismo material. Ninguna otra cultura en la historia ha integrado un alimento a su cosmología de manera tan profunda y literal.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <p className="text-sm font-black text-gray-900">La tortilla en el mundo azteca</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              En el Códice Mendoza — un documento azteca del siglo XVI — aparece una de las referencias más detalladas sobre las tortillas en el mundo prehispánico. A los niños de 3 años se les daba media tortilla al día. A los 13 años ya recibían una tortilla y media. Los adultos consumían entre 2 y 3 tortillas por comida. Las tortillas también funcionaban como moneda de intercambio en los tianguis (mercados): se vendían en pilas y eran una unidad de medida de valor.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Las mujeres pasaban una parte enorme de su día haciendo tortillas — los cálculos históricos estiman que una mujer azteca podía pasar entre 4 y 6 horas diarias en el proceso de nixtamalizar, moler y cocer. Era un trabajo agotador y altamente valorado. La habilidad de hacer buenas tortillas era considerada una de las cualidades más importantes de una mujer, equivalente en estatus social a las habilidades de guerra en los hombres.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            La Conquista española intentó desplazar el maíz por el trigo — el pan era símbolo de civilización cristiana para los europeos, y el maíz era símbolo de lo "salvaje" que querían erradicar. No lo lograron. El maíz era demasiado productivo, demasiado adaptado al clima mexicano y demasiado central a la vida cotidiana para desaparecer. Los pueblos indígenas siguieron cultivándolo y comiéndolo. Las clases populares mestizas lo adoptaron. Y eventualmente, el maíz y la tortilla se convirtieron en símbolo de resistencia cultural e identidad nacional.
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <p className="text-sm font-black text-gray-900">La tortilladora: la máquina que cambió México</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Hasta mediados del siglo XX, todas las tortillas de México se hacían a mano — el proceso manual que llevaba horas cada día. La industrialización cambió eso con la invención de la máquina tortilladora. La primera patente de una máquina para hacer tortillas fue registrada en México en 1904 por Everardo Rodríguez Arce, aunque las máquinas industriales masivas llegaron en los años 1940s y 1950s.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              La tortilladora liberó a las mujeres de horas de trabajo diario y democratizó el acceso a la tortilla — de repente cualquiera podía comprar tortillas frescas en la esquina sin tener que hacerlas desde cero. Pero también creó una nostalgia por la tortilla hecha a mano que existe hasta hoy. La tortilla de máquina es uniforme, conveniente y barata; la de mano es irregular, con manchas de tostado, ligeramente más gruesa y con una textura que la máquina no puede replicar exactamente.
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            Hoy México produce aproximadamente 12 millones de toneladas de tortillas al año — suficientes para que cada mexicano consuma en promedio medio kilo de tortillas diarias. La tortilla de maíz es el alimento más consumido en México, por encima de cualquier otro. Y hay alrededor de 60 variedades de maíz nativo en México — blanco, azul, rojo, amarillo, morado, jaspeado — cada uno con su propio sabor y sus propias tortillas. Esa biodiversidad de maíz es única en el mundo y es el resultado directo de 10,000 años de cultivo selectivo en este territorio.
          </p>
        </section>

        <AdBanner />

        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-900">Preguntas frecuentes sobre tortillas</h2>
          <div className="space-y-3">
            {[
              {
                q: "¿Cuál es mejor para carne asada, tortilla de maíz o de harina?",
                a: "En el norte de México la respuesta es unánime: tortilla de harina. Es más suave, más flexible y aguanta mejor el peso de la carne, la salsa y el guacamole sin romperse. La tortilla de maíz es perfecta para tacos al pastor, carnitas o barbacoa, pero para carne asada norteña la de harina es la correcta."
              },
              {
                q: "¿Por qué en el norte de México comen tortillas de harina y en el sur de maíz?",
                a: "Por el clima y la historia. El norte tiene un clima más seco que favorece el trigo. Las misiones franciscanas del siglo XVI sembraron trigo en el norte y éste prosperó. El sur mantuvo el maíz porque el clima tropical lo favorece y la tradición prehispánica era más profunda ahí."
              },
              {
                q: "¿Cuántas tortillas de harina necesito por persona en una carne asada?",
                a: "Calcula entre 3 y 4 tortillas por adulto para una carne asada normal. La calculadora de Calcuasada te da la cantidad exacta ajustada al número de personas y al nivel de apetito de tu grupo."
              },
              {
                q: "¿La tortilla de harina tiene más calorías que la de maíz?",
                a: "Sí. Una tortilla de harina de 25 cm tiene aproximadamente 140-160 calorías. Una tortilla de maíz del mismo tamaño tiene alrededor de 60-70. La diferencia es la manteca o aceite que lleva la masa de harina."
              },
              {
                q: "¿Qué es la nixtamalización?",
                a: "El proceso de cocinar el maíz seco en agua con cal (hidróxido de calcio). Ablanda el maíz, lo hace más fácil de moler, aumenta su valor nutritivo liberando la niacina, y le da el sabor característico a la tortilla. Tiene más de 10,000 años y es uno de los descubrimientos gastronómicos más importantes de la humanidad."
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
                <p className="text-sm font-bold text-gray-900">{q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
          <p className="font-black text-base">¿Cuántas tortillas necesitas para tu carne asada?</p>
          <p className="text-sm text-white/80">La calculadora te dice exactamente cuántas tortillas, cuánta carne y todo lo demás para tu número de personas.</p>
          <Link
            href="/"
            className="inline-block bg-white text-brasa font-bold text-sm px-6 py-2.5 rounded-full hover:bg-brasa-light transition-colors"
          >
            Calcular cuánto necesito →
          </Link>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-black text-gray-900">También te puede interesar</h2>
          <div className="grid gap-3">
            <Link href="/guias/carne-asada-perfecta-monterrey" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
              <p className="text-sm font-bold text-gray-900">🥩 Cómo hacer una carne asada perfecta al estilo Monterrey</p>
              <p className="text-xs text-gray-500 mt-1">Cortes, carbón mesquite, técnica de sellado y errores comunes</p>
            </Link>
            <Link href="/guias/guacamole-para-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
              <p className="text-sm font-bold text-gray-900">🥑 Guacamole para carne asada</p>
              <p className="text-xs text-gray-500 mt-1">Receta clásica y el secreto para que no se ponga negro</p>
            </Link>
            <Link href="/guias/salsa-verde-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
              <p className="text-sm font-bold text-gray-900">🟢 Salsa verde para carne asada</p>
              <p className="text-xs text-gray-500 mt-1">Tatemada directo en el asador, lista en 15 minutos</p>
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
