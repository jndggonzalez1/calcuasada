import type { Metadata } from "next";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Acerca de Calcuasada",
  description: "Conoce la historia detrás de Calcuasada, la calculadora de carne asada hecha en Nuevo León para toda México.",
};

export default function AcercaPage() {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="text-center space-y-2">
        <span className="text-5xl">🥩</span>
        <h1 className="text-2xl font-black text-gray-900">Acerca de Calcuasada</h1>
        <p className="text-gray-500 text-sm">La calculadora de carne asada hecha en México, para México</p>
      </div>

      <section className="bg-orange-50 rounded-2xl p-5 space-y-3">
        <h2 className="text-base font-black text-gray-900">¿Qué es Calcuasada?</h2>
        <p className="text-sm">
          Calcuasada es una herramienta gratuita que te ayuda a calcular exactamente cuánta carne, tortillas, limones, carbón, hielo y más necesitas para tu carne asada, sin importar si son 5 personas o 200.
        </p>
        <p className="text-sm">
          La idea es simple: que nunca te vuelva a faltar carne a mitad de la parrillada, ni que te sobre tanto que no sepas qué hacer con ella. Nada más y nada menos.
        </p>
      </section>

      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-base font-black text-gray-900">Una nota personal 🤙</h2>
        <p className="text-sm leading-relaxed">
          Qué onda, soy <strong>Yeyito</strong>, de Nuevo León. Hice Calcuasada porque siempre que organizábamos una carne asada en la familia terminábamos con el clásico dilema: ¿cuánta carne compramos? Unos decían que con 3 kilos, otros que con 5, y al final siempre había drama.
        </p>
        <p className="text-sm leading-relaxed">
          Un día dije: ya, voy a hacer algo que calcule esto bien y que cualquiera pueda usar, sin complicaciones. Así nació Calcuasada — una herramienta sencilla, en español, pensada para la gente de México.
        </p>
        <p className="text-sm leading-relaxed">
          Mi meta es que organizar una carne asada sea lo más fácil posible, ya sea para una reunión chica de amigos o un evento grande. Que te enfocas en convivir y disfrutar, no en andar haciendo cuentas.
        </p>
        <p className="text-sm leading-relaxed">
          Si te sirvió, cuéntaselo a alguien más. Y si tienes alguna sugerencia, con gusto la escucho.
        </p>
        <p className="text-sm font-bold text-orange-500">— Yeyito, Nuevo León 🤘</p>
      </section>

      <AdBanner />

      <section className="space-y-2">
        <h2 className="text-base font-black text-gray-900">¿Por qué es gratis?</h2>
        <p className="text-sm">
          Calcuasada es completamente gratuita y siempre lo será. El sitio se sostiene con publicidad de Google AdSense. Eso es todo — sin suscripciones, sin datos personales, sin rollo.
        </p>
      </section>

      <AdBanner />
    </div>
  );
}
