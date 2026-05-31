import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Cómo hacer brisket ahumado paso a paso — Guía completa | Calcuasada",
  description:
    "Aprende a hacer brisket ahumado desde cero: temperatura ideal, cuánto tiempo tarda, cómo envolver, cuándo está listo y cómo cortarlo. Guía completa en español.",
};

export default function BrisketPage() {
  return (
    <article className="space-y-6 text-gray-700">

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/smoker.png"
        alt="Offset smoker para brisket ahumado"
        className="w-48 mx-auto block"
      />

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Guía completa</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          Cómo hacer brisket ahumado paso a paso
        </h1>
        <p className="text-sm text-gray-500">12 min de lectura · Actualizado mayo 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">La regla más importante:</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Ahumado indirecto a <strong>250°F / 121°C</strong>, bark oscura antes de envolver, temperatura final de <strong>200–205°F / 93–96°C</strong> y reposo largo antes de cortar contra la fibra. El brisket no se cocina por reloj — se cocina por temperatura, corteza y ternura.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Qué es un brisket</h2>
        <p className="text-sm leading-relaxed">
          El brisket viene del pecho de la res. Es un corte con mucho tejido conectivo porque esa parte del animal trabaja bastante — por eso si se cocina rápido queda duro. Pero cocinado lentamente con humo y calor indirecto, queda suave, jugoso y con mucho sabor.
        </p>
        <p className="text-sm leading-relaxed">
          Un brisket entero (también llamado <em>full packer</em>) tiene dos partes:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Parte</th>
                <th className="text-left py-3 px-3 font-bold">Característica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-bold">Flat</td>
                <td className="py-2.5 px-3">Más magra, ideal para rebanadas parejas. Se puede secar más fácil.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Point</td>
                <td className="py-2.5 px-3">Más grasosa y jugosa. Más noble y con más sabor.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-relaxed">
          Para empezar, compra un brisket entero bien marmoleado. No necesitas obsesionarte con marcas ni grados de competencia — lo más importante es que tenga buena grasa intramuscular y una forma razonablemente uniforme.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Qué equipo puedes usar</h2>
        <p className="text-sm leading-relaxed">
          Lo importante no es el equipo — es lograr calor indirecto, temperatura estable y humo limpio. Con cualquiera de estas opciones puedes hacer un buen brisket:
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🔥 Offset smoker — el clásico de Texas</h3>
            <p className="text-sm text-gray-600">Tiene una cámara principal para la carne y una caja lateral para la leña o carbón. Da muy buen sabor, pero requiere más atención para mantener la temperatura estable.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🪵 Ahumador de pellets — el más práctico</h3>
            <p className="text-sm text-gray-600">Controla la temperatura de forma automática. Ideal para quien quiere buen resultado sin estar ajustando el fuego constantemente.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🟢 Kamado tipo Big Green Egg</h3>
            <p className="text-sm text-gray-600">Funciona muy bien con un deflector de calor que convierte el equipo en un horno ahumador. Da resultados excelentes.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🍖 Asador con tapa — la opción accesible</h3>
            <p className="text-sm text-gray-600">También funciona si puedes cocinar en indirecto: pon el fuego de un lado y la carne del otro. Agrega una charola con agua para estabilizar la temperatura y mantener humedad.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Temperaturas clave</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Momento</th>
                <th className="text-left py-3 px-3 font-bold">Temperatura</th>
                <th className="text-left py-3 px-3 font-bold">Qué significa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-bold">Ahumador — mínimo</td>
                <td className="py-2.5 px-3">225°F / 107°C</td>
                <td className="py-2.5 px-3">Bajo y lento clásico</td>
              </tr>
              <tr className="bg-brasa-light">
                <td className="py-2.5 px-3 font-bold">Ahumador — recomendado</td>
                <td className="py-2.5 px-3 font-bold text-brasa">250°F / 121°C</td>
                <td className="py-2.5 px-3">El punto ideal para empezar</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Ahumador — máximo</td>
                <td className="py-2.5 px-3">275°F / 135°C</td>
                <td className="py-2.5 px-3">Más rápido, todavía seguro</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Momento de envolver</td>
                <td className="py-2.5 px-3">150–175°F / 66–79°C</td>
                <td className="py-2.5 px-3">Cuando la bark esté oscura y firme</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Temperatura final</td>
                <td className="py-2.5 px-3">200–205°F / 93–96°C</td>
                <td className="py-2.5 px-3">Confirma con ternura (probe tender)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Reposo</td>
                <td className="py-2.5 px-3">1–4 horas</td>
                <td className="py-2.5 px-3">Mejora jugosidad y textura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Preparación antes de ahumar</h2>
        <p className="text-sm leading-relaxed">
          Antes de sazonar, recorta el brisket. Quita la grasa dura y excesiva — los pedazos gruesos que no se van a derretir bien durante la cocción. En el lado de la grasa deja una capa delgada de aproximadamente <strong>1/4 de pulgada / 6 mm</strong>.
        </p>
        <p className="text-sm leading-relaxed">
          Para sazonar, lo más clásico al estilo Texas es:
        </p>
        <ul className="text-sm space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Sal</strong></li>
          <li><strong>Pimienta negra gruesa</strong></li>
          <li>Ajo en polvo (opcional)</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Puedes usar mostaza como aglutinante para que el sazonador se pegue mejor, pero no es obligatorio. El sazonador no define si el brisket sale bien — el fuego y la paciencia sí.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Cómo ahumar el brisket paso a paso</h2>

        <ol className="space-y-4">
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">1. Precalienta el ahumador</p>
            <p className="text-sm text-gray-600">Busca temperatura estable de 250°F / 121°C. El humo debe verse ligero y limpio — no una nube blanca densa. Demasiado humo puede dejar sabor amargo.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">2. Coloca el brisket en indirecto</p>
            <p className="text-sm text-gray-600">En offset: en la cámara principal, lejos del fuego. En kamado o asador: asegúrate de que haya un deflector o zona sin brasas debajo de la carne. Coloca una sonda en la parte más gruesa del flat, evitando la grasa.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">3. Deja formar la bark</p>
            <p className="text-sm text-gray-600">La primera fase es dejar que el brisket tome humo y forme corteza (bark). Debe verse oscura, firme y bien formada. No abras la tapa a cada rato — pierdes calor, humo y estabilidad.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">4. Envuelve cuando la bark esté lista</p>
            <p className="text-sm text-gray-600">Normalmente entre 150 y 175°F / 66 y 79°C, pero la señal más importante es visual: la bark debe estar oscura y firme. Si todavía se ve pálida o blanda, espera un poco más.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">5. Termina por ternura</p>
            <p className="text-sm text-gray-600">Sigue cocinando hasta ~200–205°F / 93–96°C. Pero no te cases solo con el número: el brisket está listo cuando la sonda entra con poca resistencia, casi como si entraras a mantequilla suave. Eso se llama <em>probe tender</em>.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">6. Reposa antes de cortar</p>
            <p className="text-sm text-gray-600">El reposo es parte de la receta. Mínimo 1 hora, idealmente 2–4 horas. Déjalo envuelto en una hielera limpia o en un horno apagado/tibio. Si lo cortas de inmediato, pierde jugos.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <p className="text-sm font-black text-gray-900">7. Corta contra la fibra</p>
            <p className="text-sm text-gray-600">Empieza por el flat y corta en rebanadas <em>contra</em> la dirección de las fibras. Cuando llegues al point, la fibra cambia de dirección — gira la pieza y ajusta el corte.</p>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">¿Butcher paper o papel aluminio?</h2>
        <p className="text-sm leading-relaxed">Los dos sirven para envolver, pero dan resultados distintos:</p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Material</th>
                <th className="text-left py-3 px-3 font-bold">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-brasa-light">
                <td className="py-2.5 px-3 font-bold">Butcher paper</td>
                <td className="py-2.5 px-3">Conserva mejor la bark y deja respirar la carne. <strong>La mejor opción.</strong></td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold">Papel aluminio</td>
                <td className="py-2.5 px-3">Acelera la cocción y protege de resequedad, pero suaviza más la corteza.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">El aluminio es más fácil de conseguir y funciona, pero si consigues butcher paper vale la pena.</p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Qué madera usar para ahumar</h2>

        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1">
            <h3 className="text-sm font-black text-gray-900">🌳 Oak / encino — el clásico para brisket</h3>
            <p className="text-sm text-gray-600">Equilibrado, humo limpio, no domina el sabor de la carne. La mejor opción para empezar.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1">
            <h3 className="text-sm font-black text-gray-900">🌰 Pecan — suave y ligeramente dulce</h3>
            <p className="text-sm text-gray-600">Muy buena opción. Más suave que el oak, sabor agradable, difícil de pasarte de humo.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1">
            <h3 className="text-sm font-black text-gray-900">🪵 Hickory — sabor fuerte</h3>
            <p className="text-sm text-gray-600">Ahumado intenso y pronunciado. Úsalo con moderación o mézclalo con oak.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1">
            <h3 className="text-sm font-black text-gray-900">🌵 Mezquite — con cuidado</h3>
            <p className="text-sm text-gray-600">Muy potente. Puede amargar fácilmente en cocciones largas. No es la primera opción para brisket.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">¿Cuánto tiempo tarda?</h2>
        <p className="text-sm leading-relaxed">
          La referencia común es <strong>1 hora por libra</strong>, pero es solo eso — una referencia. En la práctica depende del tamaño del corte, la cantidad de grasa, el tipo de equipo, el clima y cuántas veces abres la tapa.
        </p>
        <p className="text-sm leading-relaxed">
          Planea entre <strong>8 y 14 horas de cocción</strong>, más el reposo. Es mejor terminar antes y mantenerlo caliente que apurarte al final.
        </p>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-sm font-black text-gray-900 mb-1">Consejo práctico</p>
          <p className="text-sm text-gray-600">Empieza temprano — un brisket bien envuelto se mantiene caliente en una hielera hasta por 4 horas sin problema. Terminar a las 2 pm y comer a las 5 pm es perfectamente válido.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Errores más comunes</h2>
        <ul className="text-sm space-y-2.5 leading-relaxed">
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Cocinar con calor directo.</strong> El brisket se quema por fuera antes de suavizarse por dentro.</span></li>
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Abrir la tapa a cada rato.</strong> Pierdes temperatura y alargas la cocción.</span></li>
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Envolver demasiado pronto.</strong> Si la bark no está formada, queda suave y pálida.</span></li>
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Sacarlo solo por temperatura.</strong> La temperatura es guía, no ley. Confirma con ternura.</span></li>
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>No reposarlo.</strong> Pierde jugos y queda más seco. El reposo no es opcional.</span></li>
          <li className="flex gap-2"><span className="text-brasa font-bold flex-shrink-0">✗</span><span><strong>Demasiado humo.</strong> Humo blanco denso durante horas deja sabor amargo. El humo debe ser limpio y moderado.</span></li>
        </ul>
      </section>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-3">
        <p className="text-sm font-black text-gray-900">Resumen en 9 pasos</p>
        <ol className="text-sm space-y-1.5 list-decimal list-inside leading-relaxed text-gray-700">
          <li>Compra un brisket bien marmoleado</li>
          <li>Recorta la grasa dura</li>
          <li>Sazona con sal y pimienta</li>
          <li>Cocina en indirecto a 250°F / 121°C</li>
          <li>Deja formar buena bark (oscura y firme)</li>
          <li>Envuelve entre 150–175°F / 66–79°C</li>
          <li>Termina cerca de 200–205°F / 93–96°C — confirma con ternura</li>
          <li>Reposa mínimo 1 hora</li>
          <li>Corta contra la fibra</li>
        </ol>
      </div>

      <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
        <p className="font-black text-base">¿Ya tienes el brisket? Planea el resto de la carne asada.</p>
        <p className="text-sm text-white/80">La calculadora te dice exactamente cuánta carne, tortillas y más necesitas para tu grupo.</p>
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
          <Link href="/guias/carne-asada-perfecta-monterrey" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
            <p className="text-sm font-bold text-gray-900">🥩 Cómo hacer una carne asada perfecta al estilo Monterrey</p>
            <p className="text-xs text-gray-500 mt-1">Los mejores cortes, técnica y errores que debes evitar</p>
          </Link>
          <Link href="/guias/cuanto-carbon-necesito-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
            <p className="text-sm font-bold text-gray-900">🔥 ¿Cuánto carbón necesito para mi carne asada?</p>
            <p className="text-xs text-gray-500 mt-1">Fórmula exacta según personas, tamaño de asador y horas</p>
          </Link>
        </div>
      </section>

    </article>
  );
}
