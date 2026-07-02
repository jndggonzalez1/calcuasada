import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Lista de compras completa para carne asada: no olvides nada — Calcuasada",
  description:
    "Lista de compras completa para carne asada: carnes, acompañantes, bebidas, carbón, utensilios y lo que siempre se olvida. Checklist imprimible incluido.",
};

export default function ListaComprasPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Guía completa</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Lista de compras completa para carne asada: no olvides nada
        </h1>
        <p className="text-sm text-gray-500">7 min de lectura · Actualizado mayo 2026</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <p className="text-sm font-semibold text-gray-900">Lo que más se olvida:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Servilletas — siempre faltan</li>
          <li>Bolsas de basura — nadie las piensa hasta que hacen falta</li>
          <li>Papel de aluminio — para envolver lo que no se termina</li>
          <li>Encendedor extra — el primero siempre se pierde</li>
          <li>Sal de grano — no sirve la sal fina de cocina</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Las carnes: cómo pedirlas en la carnicería</h2>
        <p className="text-sm leading-relaxed">
          La carnicería es la primera parada y la más importante. Llega con tiempo — los sábados por la mañana hay fila en cualquier carnicería buena. Si puedes, llama un día antes para apartar la carne y asegurarte de que tienen lo que necesitas.
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <h3 className="text-sm font-semibold text-gray-900">Arrachera</h3>
            <p className="text-sm text-gray-600">Pide "<strong>arrachera suavizada</strong>" — ya viene lista para la parrilla sin tener que marinar. Calcula 250–300g por adulto hombre, 180–230g por mujer. Si no sabes exactamente cuántos son, usa la calculadora de Calcuasada para el número exacto.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <h3 className="text-sm font-semibold text-gray-900">Costilla de res</h3>
            <p className="text-sm text-gray-600">Pide "<strong>costilla corta</strong>" o "short rib". Si la quieres más manejable en la parrilla, pide que la corten en trozos individuales. Agrega esta opción a la campechana para darle más sabor.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-1.5">
            <h3 className="text-sm font-semibold text-gray-900">Pollo, salchicha y queso</h3>
            <p className="text-sm text-gray-600">Si vas a incluir más opciones: el pollo en piezas o en trozos marinados. La salchicha regular o de pavo en presentación de paquete. El queso: panela o Oaxaca para derretir en tortilla, queso para asar (tipo "asadero" o queso de parrilla).</p>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Acompañantes esenciales</h2>
        <p className="text-sm leading-relaxed">
          Los acompañantes son lo que convierte la carne asada en una experiencia completa. Aquí no hay atajos — compra de buena calidad y en cantidad suficiente.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-start gap-2">
              <span className="font-bold">Tortillas de harina</span>
              <span className="text-gray-600 text-right">3–4 tortillas por persona. Cómpralas en tortillería, no en bolsa de super.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Cebolla</span>
              <span className="text-gray-600 text-right">1 cebolla grande cada 4–5 personas. Para la parrilla y para las cebollas cambray.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Limones</span>
              <span className="text-gray-600 text-right">Al menos 1 kg por cada 10 personas. Siempre compra de más.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Aguacates</span>
              <span className="text-gray-600 text-right">1 aguacate por cada 2–3 personas. Revisa que estén maduros al tacto.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Salsa</span>
              <span className="text-gray-600 text-right">Salsa roja casera o de tianguis, salsa verde, y una botella de Valentina por las dudas.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Frijoles</span>
              <span className="text-gray-600 text-right">1 olla de frijoles negros o pintos por cada 8–10 personas. Complemento perfecto.</span>
            </div>
            <div className="flex justify-between items-start gap-2 border-t border-gray-200 pt-2">
              <span className="font-bold">Papas</span>
              <span className="text-gray-600 text-right">1 bolsa de papas fritas (Sabritas o Ruffles) por cada 5 personas — para picar mientras espera la carne.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Las bebidas: cuánto comprar según el grupo</h2>
        <p className="text-sm leading-relaxed">
          Las bebidas son el segundo mayor gasto después de la carne. La regla general para bebidas alcohólicas es que los adultos consumen en promedio 2–3 cervezas en las primeras 2 horas y 1–2 más por cada hora adicional. Para grupos de trabajo o eventos mixtos, baja estas estimaciones.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Bebida</th>
                <th className="text-left py-3 px-3 font-bold">Por persona (3h)</th>
                <th className="text-left py-3 px-3 font-bold">Para 10</th>
                <th className="text-left py-3 px-3 font-bold">Para 20</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-medium">Cerveza (latas 355ml)</td>
                <td className="py-2.5 px-3">4–5 latas</td>
                <td className="py-2.5 px-3">2 six-packs × 4</td>
                <td className="py-2.5 px-3">1 caja + extra</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium">Agua natural</td>
                <td className="py-2.5 px-3">500 ml</td>
                <td className="py-2.5 px-3">2 litros × 2-3</td>
                <td className="py-2.5 px-3">2 garrafones</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium">Refresco / agua fresca</td>
                <td className="py-2.5 px-3">350–500 ml</td>
                <td className="py-2.5 px-3">2 botellas 2L</td>
                <td className="py-2.5 px-3">4 botellas 2L</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium">Hielo</td>
                <td className="py-2.5 px-3">1 kg</td>
                <td className="py-2.5 px-3">10 kg</td>
                <td className="py-2.5 px-3">20 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">Ajusta según si hay más niños, si es evento familiar conservador, o si tus amigos son muy tomadores.</p>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Lo que siempre se olvida</h2>
        <p className="text-sm leading-relaxed">
          Esta sección es la razón principal de esta guía. Todo el mundo recuerda la carne y las tortillas. Pero estas cosas siempre se olvidan y cuando hacen falta ya no hay tiempo de ir al super:
        </p>
        <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-2">
          <div className="text-sm space-y-2">
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Servilletas</strong> — Al menos 1 paquete por cada 5 personas. Las de papel de cocina (tipo Viva) son mejores que las de napkin regular.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Bolsas de basura</strong> — Mínimo 5 bolsas grandes. La basura de una carne asada es enorme: botellas, latas, huesos, servilletas.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Papel de aluminio</strong> — Para envolver carne que sobra, para calentar tortillas, para tapar lo que no se termina.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Platos desechables</strong> — Si no tienes suficientes platos, 2 por persona. Los de foam aguantan mejor la carne con jugo.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Vasos o copas desechables</strong> — 3 por persona mínimo (siempre se pierden o se rompen).</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Encendedores</strong> — Lleva dos. El primero siempre desaparece misteriosamente.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-brasa font-bold flex-shrink-0">!</span>
              <span><strong>Tazas o cucharas para servir</strong> — Para los frijoles, la salsa y el guacamole.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Condimentos que no pueden faltar</h2>
        <ul className="text-sm space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Sal de grano</strong> — La estrella. No uses sal fina para la carne.</li>
          <li><strong>Pimienta negra molida</strong> — Complemento sencillo para la carne antes de parrilla.</li>
          <li><strong>Salsa Valentina</strong> — La clásica, para quienes quieren más picante.</li>
          <li><strong>Salsa negra Worcestershire</strong> — Un chorrito sobre la carne ya asada le da profundidad.</li>
          <li><strong>Jugo Maggi</strong> — En el norte muchos lo usan sobre la carne o mezclado con limón.</li>
          <li><strong>Chile de árbol o piquín</strong> — Para los que les gusta con kick.</li>
          <li><strong>Aceite vegetal</strong> — Para aceitar la parrilla antes de poner la carne.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">El carbón y el equipo de parrilla</h2>
        <ul className="text-sm space-y-1.5 list-disc list-inside leading-relaxed">
          <li><strong>Carbón mesquite</strong> — 1 a 1.5 kg por persona para un evento de 3–4 horas. Siempre compra 20% extra.</li>
          <li><strong>Pastillas de parafina o combustible sólido</strong> — Para encender sin químicos.</li>
          <li><strong>Pinzas largas</strong> — Mínimo 40 cm para no quemarte.</li>
          <li><strong>Espátula de parrilla</strong> — Para piezas más delicadas como el queso.</li>
          <li><strong>Brocha de silicón</strong> — Para aceitar la parrilla.</li>
          <li><strong>Guantes de horno o de parrilla</strong> — Los de silicón aguantan mejor el calor.</li>
          <li><strong>Tabla de corte y cuchillo</strong> — Imprescindibles para rebanar antes de servir.</li>
        </ul>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Qué comprar el día anterior vs el mismo día</h2>
        <div className="grid gap-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">📅 El día anterior</h3>
            <ul className="text-sm space-y-1 list-disc list-inside text-gray-600">
              <li>Carbón — no se echa a perder y es lo más pesado</li>
              <li>Bebidas — para que enfríen bien en hielo</li>
              <li>Condimentos y salsas</li>
              <li>Todo lo desechable (platos, vasos, servilletas, bolsas)</li>
              <li>Papel de aluminio y cubiertos</li>
              <li>Frijoles (si los vas a hacer desde cero)</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">🌅 El mismo día (en la mañana)</h3>
            <ul className="text-sm space-y-1 list-disc list-inside text-gray-600">
              <li>La carne — para que esté fresca</li>
              <li>Tortillas de harina — cómpralas en la tortillería</li>
              <li>Aguacates — revisa que estén maduros al tacto</li>
              <li>Limones — cuántos más mejor</li>
              <li>Hielo — compra el último, que no se derrita</li>
              <li>Verduras para la parrilla (cebolla cambray, chiles)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Checklist completo — para imprimir o guardar</h2>
        <div className="bg-gray-50 rounded-xl p-4 space-y-4 text-sm">
          <div>
            <p className="font-semibold text-gray-900 mb-2">🥩 CARNES</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Arrachera (suavizada)</p>
              <p>☐ Costilla de res (corta)</p>
              <p>☐ Agujas norteñas (opcional)</p>
              <p>☐ Pollo (opcional)</p>
              <p>☐ Salchicha (opcional)</p>
              <p>☐ Queso para asar (opcional)</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-gray-900 mb-2">🌮 ACOMPAÑANTES</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Tortillas de harina</p>
              <p>☐ Cebolla (blanca y cambray)</p>
              <p>☐ Limones</p>
              <p>☐ Aguacates</p>
              <p>☐ Chiles (jalapeño, serrano o de tu preferencia)</p>
              <p>☐ Frijoles</p>
              <p>☐ Salsa roja / verde</p>
              <p>☐ Botanas (papas, chicharrón)</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-gray-900 mb-2">🍺 BEBIDAS</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Cerveza</p>
              <p>☐ Agua natural</p>
              <p>☐ Refresco / agua fresca</p>
              <p>☐ Hielo</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-gray-900 mb-2">🔥 PARRILLA Y CARBÓN</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Carbón mesquite</p>
              <p>☐ Pastillas de parafina / combustible sólido</p>
              <p>☐ Encendedor (×2)</p>
              <p>☐ Pinzas largas</p>
              <p>☐ Brocha de silicón</p>
              <p>☐ Aceite vegetal</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-gray-900 mb-2">🧂 CONDIMENTOS</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Sal de grano</p>
              <p>☐ Pimienta negra</p>
              <p>☐ Salsa Valentina</p>
              <p>☐ Salsa negra (Worcestershire)</p>
              <p>☐ Jugo Maggi (opcional)</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-gray-900 mb-2">🗑️ LO QUE SE OLVIDA</p>
            <div className="space-y-1 text-gray-700">
              <p>☐ Servilletas (muchas)</p>
              <p>☐ Platos desechables</p>
              <p>☐ Vasos desechables</p>
              <p>☐ Cubiertos desechables</p>
              <p>☐ Bolsas de basura</p>
              <p>☐ Papel de aluminio</p>
              <p>☐ Tabla de corte</p>
              <p>☐ Cuchillo para rebanar</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center space-y-3">
        <p className="text-sm font-semibold text-gray-900">¿Cuánta carne exactamente necesitas?</p>
        <p className="text-xs text-gray-500">Usa la calculadora para saber los kilos exactos según cuántos son y qué tan tragones son.</p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:opacity-90 transition-colors"
        >
          Calcular exactamente cuánto necesito →
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">También te puede interesar</h2>
        <div className="grid gap-3">
          <Link href="/guias/carne-asada-perfecta-monterrey" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🥩 Cómo hacer una carne asada perfecta al estilo Monterrey</p>
            <p className="text-xs text-gray-500 mt-1">Los mejores cortes, técnica y errores que debes evitar</p>
          </Link>
          <Link href="/guias/cuanto-carbon-necesito-carne-asada" className="block bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
            <p className="text-sm font-bold text-gray-900">🔥 ¿Cuánto carbón necesito para mi carne asada?</p>
            <p className="text-xs text-gray-500 mt-1">Fórmula exacta por número de personas y horas de evento</p>
          </Link>
        </div>
      </section>

    </article>
  );
}
