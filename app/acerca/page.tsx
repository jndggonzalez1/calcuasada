import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Acerca de Calcuasada",
  description: "Conoce la historia detrás de Calcuasada, la calculadora de carne asada hecha en Nuevo León para toda México.",
};

export default function AcercaPage() {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="text-center space-y-2">
        <span className="text-5xl">🥩🔥</span>
        <h1 className="text-2xl font-black text-gray-900">Acerca de Calcuasada</h1>
        <p className="text-gray-500 text-sm">Hecha en Nuevo León con amor, carbón y mucha arrachera</p>
      </div>

      <section className="bg-brasa-light rounded-2xl p-5 space-y-3">
        <h2 className="text-base font-black text-gray-900">¿Qué es Calcuasada?</h2>
        <p className="text-sm leading-relaxed">
          Calcuasada es una herramienta gratuita que te dice exactamente cuánta carne, tortillas, limones, aguacates, carbón, hielo, cerveza y más necesitas para tu carne asada — sin importar si son 5 personas o 50.
        </p>
        <p className="text-sm leading-relaxed">
          La misión es simple: que nunca te vuelva a faltar carne a mitad de la parrillada. Ni que sobre tanto que estés comiendo sobras de costilla toda la semana. Bueno, eso último igual está bien.
        </p>
      </section>

      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-base font-black text-gray-900">Una nota personal 🤙</h2>
        <p className="text-sm leading-relaxed">
          Qué onda, soy <strong>Yeyito</strong>, de Nuevo León. Y si hay algo que me apasiona en esta vida — además del fútbol y las papas Sabritas — es la carne asada. La arrachera, la costilla, el filete, la campechana, el brisket bien ahumado. Todo. Si huele a carbón y sal de grano, ya me tienes.
        </p>
        <p className="text-sm leading-relaxed">
          Hice Calcuasada porque en cada asada familiar terminábamos con el mismo debate de siempre: ¿cuánta carne compramos? Unos decían 3 kilos, otros 5, mi tío juraba que con 2 era suficiente para 15 personas (spoiler: no era suficiente). Al final siempre había drama, o nos faltaba o desperdiciábamos.
        </p>
        <p className="text-sm leading-relaxed">
          Un día dije: ya, voy a hacer algo que calcule esto bien, en español, pensado para México, y que cualquiera pueda usar sin necesidad de ser ingeniero. Así nació esto.
        </p>
        <p className="text-sm leading-relaxed">
          Hoy la calculadora ya tiene de todo: proteínas a escoger (res, pollo, salchicha, queso), acompañantes calibrados, cerveza en six-packs, frijoles, estimador de costos, distribuidor de lista entre los cuates y hasta guías para hacer un brisket o una asada al estilo Monterrey. Todo gratis, todo en español, todo pensado para que te puedas enfocar en lo que importa: convivir y comer bien.
        </p>
        <p className="text-sm leading-relaxed">
          Si te sirvió, cuéntaselo a alguien que esté planeando una asada. Y si tienes sugerencias, con gusto las escucho.
        </p>
        <p className="text-sm font-bold text-brasa">— Yeyito, Nuevo León 🤘🥩</p>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-base font-black text-gray-900">¿Qué puedes hacer con Calcuasada?</h2>
        <ul className="text-sm space-y-2 leading-relaxed">
          <li className="flex gap-2"><span>🥩</span><span><strong>Calcular proteínas:</strong> res, pollo, salchicha y queso — con lógica diferente para hombres, mujeres y niños.</span></li>
          <li className="flex gap-2"><span>🌮</span><span><strong>Acompañantes exactos:</strong> tortillas, cebolla, limones, aguacates, salsa, carbón, hielo y frijoles.</span></li>
          <li className="flex gap-2"><span>🍺</span><span><strong>Cerveza calculada:</strong> en latas, six-packs o cajas según cuántos sean y qué tan tragones estén.</span></li>
          <li className="flex gap-2"><span>💸</span><span><strong>Estimador de costo:</strong> cuánto va a salir todo, con precio promedio o los precios que tú pongas.</span></li>
          <li className="flex gap-2"><span>👥</span><span><strong>Distribuidor de lista:</strong> divide quién compra qué entre los cuates, sin peleas.</span></li>
          <li className="flex gap-2"><span>📲</span><span><strong>Compartir por WhatsApp:</strong> manda la lista completa con un toque, con emojis y todo.</span></li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-black text-gray-900">¿Por qué es gratis?</h2>
        <p className="text-sm leading-relaxed">
          Calcuasada es completamente gratuita y siempre lo será. El sitio se sostiene con publicidad discreta de Google AdSense. Sin suscripciones, sin datos personales, sin rollo. Solo entra, calcula y a comprar.
        </p>
      </section>

      <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
        <p className="font-black text-base">¿Ya tienes todo planeado?</p>
        <p className="text-sm text-white/80">Usa la calculadora y en menos de 15 segundos tienes la lista completa.</p>
        <Link
          href="/"
          className="inline-block bg-white text-brasa font-bold text-sm px-6 py-2.5 rounded-full hover:bg-brasa-light transition-colors"
        >
          Ir a la calculadora →
        </Link>
      </div>

      <AdBanner />
    </div>
  );
}
