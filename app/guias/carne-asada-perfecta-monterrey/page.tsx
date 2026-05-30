import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Cómo hacer una carne asada perfecta al estilo Monterrey — Calcuasada",
  description:
    "Guía completa para hacer carne asada estilo Monterrey: los mejores cortes, carbón mesquite, sal de grano, temperatura ideal y errores que debes evitar.",
};

export default function CarneAsadaMonterreyPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Guía completa</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          Cómo hacer una carne asada perfecta al estilo Monterrey
        </h1>
        <p className="text-sm text-gray-500">10 min de lectura · Actualizado mayo 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">Lo más importante de esta guía:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Usa arrachera o costilla de res como proteína principal</li>
          <li>El carbón mesquite marca la diferencia en sabor</li>
          <li>Sal de grano 20 minutos antes de poner la carne</li>
          <li>La parrilla lista cuando no puedas aguantar la mano a 10 cm por más de 2 segundos</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Por qué Monterrey es la capital de la carne asada en México</h2>
        <p className="text-sm leading-relaxed">
          No es exagerado decir que Monterrey y la carne asada son lo mismo. En el noreste de México, la carne asada no es solo una comida — es un ritual social que se repite cada fin de semana en millones de hogares. La tradición viene de la ganadería que por generaciones ha caracterizado a Nuevo León, Coahuila y Tamaulipas, donde el ganado de calidad y la cultura ranchera construyeron una forma de comer carne directamente en las brasas que no se parece a nada en el resto del país.
        </p>
        <p className="text-sm leading-relaxed">
          Mientras en el centro del país la carne asada puede referirse a cualquier carne cocinada de cualquier forma, en Monterrey tiene reglas no escritas pero universalmente respetadas: carbón mesquite, cortes específicos, sal de grano, y una convivencia que puede durar horas. Es una práctica tan arraigada que hay familias que tienen su propio asador desde hace décadas, heredado de generación en generación.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Los mejores cortes para carne asada regiomontana</h2>
        <p className="text-sm leading-relaxed">
          Elegir el corte correcto es la decisión más importante que vas a tomar. No todas las carnes se comportan igual en la parrilla, y en Monterrey hay favoritos claros.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-base font-black text-gray-900">Arrachera — la reina de la parrilla</h3>
            <p className="text-sm leading-relaxed">
              La arrachera es el corte por excelencia en el norte de México. Corresponde al diafragma del res, un músculo que trabaja constantemente y que por eso tiene mucho sabor. Es relativamente delgada, se cocina rápido (5 a 7 minutos por lado a fuego alto) y bien preparada queda jugosa y llena de sabor. Su precio es medio-alto — espera pagar entre $180 y $280 pesos el kilo dependiendo de si es nacional o importada. Pide arrachera "suavizada" en la carnicería, que ya viene lista para la parrilla sin tener que marinar.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-base font-black text-gray-900">Costilla de res — para los que saben</h3>
            <p className="text-sm leading-relaxed">
              La costilla es el corte favorito de los carnívoros serios. Tiene más grasa intramuscular que la arrachera, lo que se traduce en más sabor y más jugosidad. La desventaja es que requiere más tiempo en la parrilla — entre 15 y 25 minutos dependiendo del grosor — y hay que saber manejar el fuego para que no se queme por fuera y quede cruda por dentro. El precio es similar o ligeramente menor al de la arrachera. Pide costilla "corta" o "short rib" en la carnicería para piezas manejables.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-base font-black text-gray-900">Agujas norteñas — el secreto del barrio</h3>
            <p className="text-sm leading-relaxed">
              Las agujas son el corte más económico de los tres y también el menos conocido fuera del norte. Vienen del cuello del animal y tienen bastante grasa y hueso, lo que les da un sabor intenso cuando se hacen a las brasas. Son perfectas para complementar una campechana sin romper el presupuesto. Precio: entre $90 y $150 pesos el kilo.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-black text-gray-900">Tabla de comparación de cortes</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-3 font-bold text-gray-700">Corte</th>
                  <th className="text-left py-2 pr-3 font-bold text-gray-700">Precio aprox.</th>
                  <th className="text-left py-2 pr-3 font-bold text-gray-700">Tiempo parrilla</th>
                  <th className="text-left py-2 font-bold text-gray-700">Dificultad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-3 font-medium">Arrachera</td>
                  <td className="py-2 pr-3">$180–$280/kg</td>
                  <td className="py-2 pr-3">5–7 min/lado</td>
                  <td className="py-2">Fácil</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-medium">Costilla de res</td>
                  <td className="py-2 pr-3">$160–$250/kg</td>
                  <td className="py-2 pr-3">15–25 min</td>
                  <td className="py-2">Media</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-medium">Agujas norteñas</td>
                  <td className="py-2 pr-3">$90–$150/kg</td>
                  <td className="py-2 pr-3">10–15 min</td>
                  <td className="py-2">Fácil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">La campechana: la mezcla perfecta</h2>
        <p className="text-sm leading-relaxed">
          En Monterrey, "hacer campechana" significa mezclar dos o más cortes en la misma parrillada. La combinación clásica es arrachera con costilla — la arrachera aporta suavidad y rapidez, la costilla aporta sabor intenso y grasa que cae al carbón y crea ese humo característico que todos reconocen.
        </p>
        <p className="text-sm leading-relaxed">
          La regla general es 60% arrachera y 40% costilla para un balance perfecto. Si el presupuesto es ajustado, sustituye parte de la arrachera por agujas norteñas. El resultado sigue siendo excelente y le bajas al costo sin sacrificar experiencia.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Carbón mesquite vs carbón normal: no hay comparación</h2>
        <p className="text-sm leading-relaxed">
          El carbón de mezquite es madera de un árbol nativo del norte de México que produce un carbón de altísima densidad, temperatura superior y ese aroma ahumado inconfundible que distingue la carne asada regiomontana. Arde más lento, dura más tiempo y las brasas mantienen temperatura pareja por mucho más tiempo que el carbón industrial.
        </p>
        <p className="text-sm leading-relaxed">
          El carbón industrial o de encino (más común en el centro del país) no es malo, pero produce menos calor, se consume más rápido y no aporta el mismo perfil de sabor. Si no consigues mesquite, el carbón de encino es la segunda mejor opción.
        </p>
        <p className="text-sm leading-relaxed">
          El carbón en briquetas (tipo Kingsford) es el que definitivamente debes evitar — contiene aglutinantes y químicos que pueden afectar el sabor de la carne. Tampoco duran tanto en temperatura alta como el carbón natural.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Cómo encender el carbón sin químicos</h2>
        <p className="text-sm leading-relaxed">
          Evita los líquidos encendedores a toda costa — dejan residuos químicos que se transfieren a la carne y arruinan el sabor, además de ser peligrosos. El método correcto:
        </p>
        <ol className="text-sm space-y-2 list-decimal list-inside leading-relaxed">
          <li>Haz una pirámide con el carbón en el centro del asador — no lo extiendas plano desde el inicio.</li>
          <li>Coloca dos o tres cuadritos de "combustible sólido" (pastillas blancas de parafina, se venden en cualquier ferretería) entre el carbón.</li>
          <li>Enciende las pastillas y deja que el fuego suba naturalmente sin soplar.</li>
          <li>Espera entre 20 y 30 minutos hasta que el carbón se vea gris/blanco con brasas naranjas — ese es el momento correcto para extenderlo y poner la carne.</li>
        </ol>
        <p className="text-sm leading-relaxed">
          Si no tienes pastillas, arruga tres hojas de periódico, colócalas abajo del carbón y enciéndelas. Funciona igual de bien.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Temperatura ideal: cómo saberla sin termómetro</h2>
        <p className="text-sm leading-relaxed">
          La prueba de la mano es el método que usa todo asador experimentado: coloca la palma a unos 10 centímetros de la parrilla y cuenta los segundos que puedes aguantar.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="text-xs space-y-1.5">
            <div className="flex justify-between"><span className="font-bold">1–2 segundos</span><span className="text-gray-600">Fuego muy alto — ideal para sellar arrachera</span></div>
            <div className="flex justify-between"><span className="font-bold">3–4 segundos</span><span className="text-gray-600">Fuego alto — para costilla y agujas</span></div>
            <div className="flex justify-between"><span className="font-bold">5–6 segundos</span><span className="text-gray-600">Fuego medio — para mantener calor y cocer por dentro</span></div>
            <div className="flex justify-between"><span className="font-bold">7+ segundos</span><span className="text-gray-600">Fuego bajo — ya se está apagando, necesitas más carbón</span></div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Sal de grano: el único condimento que necesitas</h2>
        <p className="text-sm leading-relaxed">
          La carne asada de Monterrey no necesita marinadas complicadas. La sal de grano es todo lo que necesitas — y bien aplicada hace más por el sabor que cualquier mezcla de especias.
        </p>
        <p className="text-sm leading-relaxed">
          Aplica sal de grano generosamente por ambos lados de la carne unos 20 minutos antes de poner a la parrilla. La sal extrae levemente la humedad superficial, forma una costra cuando toca el calor y crea ese caramelizado exterior que es el sello de una buena carne asada. No uses sal fina de cocina — se disuelve demasiado rápido y no forma la costra.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Errores comunes que arruinan la carne asada</h2>
        <ul className="text-sm space-y-2 leading-relaxed list-disc list-inside">
          <li><strong>Poner la carne antes de que el carbón esté listo.</strong> Si el carbón todavía tiene llama amarilla, la carne se cuece al vapor y no sella. Espera siempre a las brasas blancas.</li>
          <li><strong>Mover la carne constantemente.</strong> Ponla, déjala, dale vuelta una sola vez. Cada vez que la mueves pierdes jugos.</li>
          <li><strong>Pinchar la carne con tenedor.</strong> Usa pinzas siempre. Pinchar hace que los jugos escapen y la carne quede seca.</li>
          <li><strong>Cortarla inmediatamente al sacarla.</strong> Deja reposar la carne 2 a 3 minutos antes de cortar — los jugos se redistribuyen y queda más jugosa.</li>
          <li><strong>Usar líquido encendedor en el carbón.</strong> Ya lo dijimos, pero vale la pena repetirlo: nunca.</li>
          <li><strong>Calcular poco carbón.</strong> Siempre compra más del que crees que necesitas. Quedarte sin carbón a la mitad es el error más caro.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Utensilios que no pueden faltar</h2>
        <div className="bg-gray-50 rounded-xl p-4">
          <ul className="text-sm space-y-1.5 leading-relaxed">
            <li>✅ <strong>Pinzas largas</strong> — mínimo 40 cm para no quemarte</li>
            <li>✅ <strong>Tabla de corte grande</strong> — para rebanar la carne sin que se escurra todo al suelo</li>
            <li>✅ <strong>Cuchillo filoso</strong> — un cuchillo malo aplasta la carne en lugar de cortarla</li>
            <li>✅ <strong>Brocha de silicón</strong> — para aceitar la parrilla y que no se pegue</li>
            <li>✅ <strong>Asador con tapa</strong> — permite controlar mejor el calor, especialmente para costilla</li>
            <li>✅ <strong>Cubeta con arena o agua</strong> — para emergencias con el fuego</li>
            <li>✅ <strong>Guantes de horno</strong> — porque sí, el asador quema</li>
            <li>✅ <strong>Ventilador o cartón</strong> — para reavivar las brasas si bajan</li>
          </ul>
        </div>
      </section>

      <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
        <p className="font-black text-base">¿Ya sabes cuánta carne vas a comprar?</p>
        <p className="text-sm text-white/80">Usa la calculadora para saber exactamente cuántos kilos necesitas según el número de personas.</p>
        <Link
          href="/"
          className="inline-block bg-white text-brasa font-bold text-sm px-6 py-2.5 rounded-full hover:bg-brasa-light transition-colors"
        >
          Calcular cuánta carne necesito →
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-black text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/cuanto-carbon-necesito-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
            <p className="text-sm font-bold text-gray-900">🔥 ¿Cuánto carbón necesito para mi carne asada?</p>
            <p className="text-xs text-gray-500 mt-1">Fórmula exacta por número de personas y horas de evento</p>
          </Link>
          <Link href="/guias/lista-compras-carne-asada-completa" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
            <p className="text-sm font-bold text-gray-900">🛒 Lista de compras completa para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Todo lo que necesitas comprar sin olvidar nada</p>
          </Link>
        </div>
      </section>

    </article>
  );
}
