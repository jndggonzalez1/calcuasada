import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "¿Cuánto carbón necesito para mi carne asada? Guía completa — Calcuasada",
  description:
    "Aprende cuánto carbón comprar para tu carne asada según el número de personas, el tipo de asador y cuántas horas va a durar el evento. Con tabla práctica.",
};

export default function CuantoCarbonPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Guía completa</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          ¿Cuánto carbón necesito para mi carne asada? Guía completa
        </h1>
        <p className="text-sm text-gray-500">8 min de lectura · Actualizado mayo 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">Regla rápida:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Asador chico (hasta 8 personas): <strong>3–4 kg en total</strong></li>
          <li>Asador mediano (hasta 15 personas): <strong>4–6 kg en total</strong></li>
          <li>Asador grande (hasta 25 personas): <strong>6–9 kg en total</strong></li>
          <li>Más de 25 personas: necesitas dos asadores</li>
          <li>Compra siempre un kilo extra por las dudas</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Por qué es difícil calcular el carbón exacto</h2>
        <p className="text-sm leading-relaxed">
          El carbón es de esas cosas que todos calculan "a ojo" y casi siempre calculan mal — o les sobra mucho o se quedan cortos a la mitad del evento. La cantidad correcta depende de varios factores que pocas guías explican bien: el tipo de carbón que usas, el tamaño del asador, cuánta carne vas a cocinar, cuántas horas va a durar la reunión y el clima (en días de viento el carbón se consume mucho más rápido).
        </p>
        <p className="text-sm leading-relaxed">
          Esta guía te da las fórmulas reales para que no te quedes sin carbón en la mera hora buena.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">El asador manda, no el número de personas</h2>
        <p className="text-sm leading-relaxed">
          El error más común al calcular carbón es pensar que se escala directamente con el número de personas. No funciona así. El carbón lo consume el asador — su tamaño determina cuánto necesitas para alcanzar y mantener temperatura. Si tienes 8 o 15 personas con el mismo asador mediano, el consumo de carbón es prácticamente igual porque la superficie que calentar es la misma.
        </p>
        <p className="text-sm leading-relaxed">
          Lo que sí cambia con más personas es el tiempo de cocción — tienes que hacer más tandas — y eso sí consume más carbón. Pero la base siempre es el asador, no la cuenta de invitados.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Cuánto carbón según el tamaño de tu asador</h2>
        <p className="text-sm leading-relaxed">Con carbón mesquite de buena calidad, estos son los rangos reales:</p>

        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-sm font-black text-gray-900">Asador chico — hasta 8 personas</h3>
            <p className="text-sm text-gray-600">Una parrillada estándar de 2–3 horas consume <strong>3–4 kg</strong> de mesquite. Si van a seguir echando carne hasta la noche, sube a 5–6 kg.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-sm font-black text-gray-900">Asador mediano — 8 a 15 personas</h3>
            <p className="text-sm text-gray-600">El más común en casas. Para una tarde de 3–4 horas necesitas <strong>4–6 kg</strong>. Si la reunión se extiende o hay muchos cortes gruesos como costilla, lleva 7–8 kg.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-sm font-black text-gray-900">Asador grande — 15 a 25 personas</h3>
            <p className="text-sm text-gray-600">Requiere más carbón para calentar toda la superficie. Calcula <strong>6–9 kg</strong> para una sesión normal. Ten un costal de respaldo.</p>
          </div>
          <div className="bg-brasa-light border border-brasa/20 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-black text-gray-900">Más de 25 personas — dos asadores</h3>
            <p className="text-sm text-gray-600">Con más de 25 personas un solo asador se convierte en un cuello de botella. Lo correcto es tener dos asadores medianos funcionando en paralelo. Cada uno consume lo suyo — suma los kilos de cada uno por separado.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Tabla de referencia rápida</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Personas</th>
                <th className="text-left py-3 px-3 font-bold">Asador</th>
                <th className="text-left py-3 px-3 font-bold">2–3 horas</th>
                <th className="text-left py-3 px-3 font-bold">4–5 horas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-2.5 px-3 font-bold">hasta 8</td>
                <td className="py-2.5 px-3">Chico</td>
                <td className="py-2.5 px-3">3–4 kg</td>
                <td className="py-2.5 px-3">5–6 kg</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2.5 px-3 font-bold">8 a 15</td>
                <td className="py-2.5 px-3">Mediano</td>
                <td className="py-2.5 px-3">4–6 kg</td>
                <td className="py-2.5 px-3">7–8 kg</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2.5 px-3 font-bold">15 a 25</td>
                <td className="py-2.5 px-3">Grande</td>
                <td className="py-2.5 px-3">6–9 kg</td>
                <td className="py-2.5 px-3">9–12 kg</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2.5 px-3 font-bold">25 a 40</td>
                <td className="py-2.5 px-3">2 medianos</td>
                <td className="py-2.5 px-3">8–12 kg</td>
                <td className="py-2.5 px-3">12–16 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">Con carbón mesquite. Si usas carbón de encino suma ~15%. Si es carbón industrial suma ~40%.</p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Carbón mesquite vs encino vs industrial</h2>

        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🌵 Carbón de mezquite — el mejor</h3>
            <p className="text-sm text-gray-600">Alta densidad, larga duración, temperatura superior y ese sabor ahumado característico del norte. Es más caro pero necesitas menos cantidad. Búscalo en mercados tradicionales, carnicerías del barrio o tiendas como Costco. En Monterrey lo encuentras en casi cualquier ferretería de colonia.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🌳 Carbón de encino — segunda opción</h3>
            <p className="text-sm text-gray-600">Muy buena calidad, ligeramente menos denso que el mesquite. Más común en el centro del país. Si no consigues mesquite, el encino es perfectamente válido. Aumenta la cantidad calculada en un 15% porque se consume un poco más rápido.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-sm font-black text-gray-900">🏭 Carbón industrial o en briquetas — evítalo</h3>
            <p className="text-sm text-gray-600">Menor temperatura, se consume más rápido y puede afectar el sabor de la carne. Si no tienes otra opción, aumenta la cantidad calculada en un 40%. Las briquetas tipo Kingsford son cómodas pero definitivamente no son la opción para una carne asada seria.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Cómo encender el carbón correctamente paso a paso</h2>
        <ol className="text-sm space-y-2.5 leading-relaxed list-decimal list-inside">
          <li><strong>Forma una pirámide.</strong> Apila el carbón en forma de cono en el centro del asador. Nunca lo extiendas plano desde el inicio — así no prende bien.</li>
          <li><strong>Coloca el encendedor.</strong> Pon 2 o 3 pastillas de parafina (combustible sólido) entre las piezas de carbón. También funciona papel periódico arrugado.</li>
          <li><strong>Enciéndelo por abajo.</strong> Prende las pastillas o el papel desde la base de la pirámide para que el calor suba naturalmente.</li>
          <li><strong>No soples, no le pongas aire forzado todavía.</strong> Deja que el fuego tome con calma los primeros 5 minutos.</li>
          <li><strong>Después de 5 minutos, aviva con cartón.</strong> Abanica suavemente para dar oxígeno. En 15 a 20 minutos el carbón estará gris por fuera.</li>
          <li><strong>Extiende cuando esté listo.</strong> Cuando el carbón se vea blanco/gris con brasas naranjas visibles, extiéndelo de manera uniforme. Ya está listo para cocinar.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Cómo mantener el calor sin desperdiciar carbón</h2>
        <p className="text-sm leading-relaxed">
          Una vez que tienes las brasas, mantenerlas es más fácil de lo que parece. El error más común es agregar carbón nuevo directamente sobre las brasas viejas — el nuevo carbón baja la temperatura y tarda en encender.
        </p>
        <p className="text-sm leading-relaxed">
          El método correcto: cuando notes que las brasas están bajando, coloca carbón nuevo <em>al lado</em> de las brasas existentes. El calor de las brasas encenderá el carbón nuevo lentamente. Cuando el nuevo ya esté gris, empuja todo junto. Así mantienes temperatura constante sin caídas bruscas.
        </p>
        <p className="text-sm leading-relaxed">
          También puedes usar la tapa del asador para controlar el oxígeno: más oxígeno = más calor. Cierra parcialmente los venteos si las brasas están muy altas, ábrelos si necesitas más calor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Señales de que te está faltando carbón</h2>
        <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
          <li>La carne ya no sella — queda gris en lugar de dorarse rápido</li>
          <li>El carbón se ve completamente gris sin partes naranjas visibles</li>
          <li>La mano aguanta más de 6 segundos a 10 cm de la parrilla</li>
          <li>La grasa de la carne ya no produce humo al caer</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Si llegas a este punto, agrega carbón nuevo <em>ya</em> al lado de las brasas viejas. Si ya no tienes carbón de reserva, es el momento de ir corriendo a comprar más — por eso siempre recomendamos comprar el 20% extra.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Dónde comprar carbón mesquite en Monterrey</h2>
        <p className="text-sm leading-relaxed">
          En Monterrey el carbón mesquite es fácil de conseguir. Los mejores lugares:
        </p>
        <ul className="text-sm space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Mercado de abastos.</strong> El más económico, lo venden por kilo o por costal. Aquí consigues el mejor precio.</li>
          <li><strong>Carnicerías de barrio.</strong> Muchas venden carbón mesquite de buena calidad junto con la carne.</li>
          <li><strong>Ferreterías de colonia.</strong> Casi siempre tienen carbón en costales de 5 kg o más.</li>
          <li><strong>Costco y Sam's Club.</strong> Venden costales grandes de 10–15 kg, buen precio por volumen.</li>
          <li><strong>Tiendas de conveniencia (OXXO, 7-Eleven).</strong> Venden paquetes pequeños de emergencia — más caros por kilo pero sirven si te quedaste corto.</li>
        </ul>
      </section>

      <AdBanner />

      <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
        <p className="font-black text-base">¿Ya tienes el carbón listo? Ahora calcula la carne.</p>
        <p className="text-sm text-white/80">La calculadora te dice exactamente cuántos kilos de cada corte necesitas para tu grupo.</p>
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
          <Link href="/guias/lista-compras-carne-asada-completa" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-brasa/30 transition-all">
            <p className="text-sm font-bold text-gray-900">🛒 Lista de compras completa para carne asada</p>
            <p className="text-xs text-gray-500 mt-1">Todo lo que necesitas comprar sin olvidar nada</p>
          </Link>
        </div>
      </section>

    </article>
  );
}
