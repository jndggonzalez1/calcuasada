import type { Metadata } from "next";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Calcuasada",
  description: "Aviso de privacidad de Calcuasada. Conoce cómo manejamos tu información y el uso de cookies de Google AdSense.",
};

export default function PrivacidadPage() {
  return (
    <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
      <h1 className="text-2xl font-black text-gray-900">Aviso de Privacidad</h1>
      <p className="text-xs text-gray-400">Última actualización: mayo 2026</p>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">1. Responsable del sitio</h2>
        <p className="text-sm">
          Calcuasada (<strong>calcuasada.com</strong>) es un sitio web operado de manera personal desde Nuevo León, México. Si tienes alguna duda sobre este aviso, puedes escribirnos a{" "}
          <a href="mailto:hola@calcuasada.com" className="text-brasa underline">hola@calcuasada.com</a>{" "}
          o visitar nuestra página de <a href="/contacto" className="text-brasa underline">contacto</a>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">2. Información que recopilamos</h2>
        <p className="text-sm">
          Calcuasada <strong>no recopila datos personales</strong> de forma directa. No hay formularios de registro, ni inicio de sesión, ni bases de datos con información de usuarios.
        </p>
        <p className="text-sm">
          Sin embargo, como cualquier sitio web, se pueden recopilar de forma automática datos técnicos como dirección IP, tipo de navegador y páginas visitadas a través de los servicios de terceros que utilizamos.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">3. Cookies y publicidad</h2>
        <p className="text-sm">
          Este sitio utiliza <strong>Google AdSense</strong> para mostrar anuncios. Google puede usar cookies para personalizar los anuncios que ves según tu historial de navegación. Esto está regulado por la política de privacidad de Google.
        </p>
        <p className="text-sm">
          Puedes consultar la política de privacidad de Google en:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline"
          >
            policies.google.com/privacy
          </a>
        </p>
        <p className="text-sm">
          Si no deseas ver anuncios personalizados, puedes ajustar tu configuración en:{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline"
          >
            adssettings.google.com
          </a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">4. Uso de los datos</h2>
        <p className="text-sm">
          Los datos técnicos recopilados por servicios de terceros se usan únicamente para mejorar el funcionamiento del sitio y mostrar publicidad relevante. Calcuasada no vende ni comparte información personal con terceros.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">5. Tus derechos</h2>
        <p className="text-sm">
          De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México, tienes derecho de Acceso, Rectificación, Cancelación y Oposición (derechos ARCO) sobre tus datos personales. Al no recopilar datos personales directamente, estos derechos aplican principalmente ante los terceros mencionados en este aviso.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">6. Cambios a este aviso</h2>
        <p className="text-sm">
          Podemos actualizar este aviso de privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente.
        </p>
      </section>

      <AdBanner />
    </div>
  );
}
