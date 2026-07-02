import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Calcuasada",
  description: "¿Tienes alguna duda, sugerencia o comentario sobre Calcuasada? Escríbenos, con gusto te leemos.",
};

export default function ContactoPage() {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="text-center space-y-2">
        <div className="text-3xl">✉️</div>
        <h1 className="text-2xl font-bold text-gray-900">Contacto</h1>
        <p className="text-sm text-gray-400">¿Tienes un comentario, sugerencia o encontraste algo raro?</p>
      </div>

      <section className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
        <h2 className="text-base font-semibold text-gray-900">Escríbenos directamente</h2>
        <p className="text-sm leading-relaxed">
          Calcuasada es un proyecto personal hecho con cariño en Nuevo León. No hay un equipo grande detrás — solo Yeyito revisando los mensajes. Si tienes alguna duda sobre la calculadora, quieres reportar un error, o simplemente quieres decir que te sirvió, puedes escribirle aquí:
        </p>
        <a
          href="mailto:hola@calcuasada.com"
          className="inline-block border border-brasa text-brasa font-medium text-sm px-6 py-3 rounded-lg hover:bg-brasa/5 transition-colors"
        >
          hola@calcuasada.com
        </a>
        <p className="text-xs text-gray-400">Respondemos en un plazo de 1 a 3 días hábiles.</p>
      </section>

      <section className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
        <h2 className="text-base font-semibold text-gray-900">¿En qué te puedo ayudar?</h2>
        <ul className="text-sm space-y-1.5 list-disc list-inside text-gray-600 leading-relaxed">
          <li>Dudas sobre cómo usar la calculadora</li>
          <li>Sugerencias para mejorar los cálculos</li>
          <li>Reportar un error o algo que no funciona bien</li>
          <li>Propuestas de colaboración o contenido</li>
          <li>Cualquier otra cosa relacionada con carne asada 🥩</li>
        </ul>
      </section>
    </div>
  );
}
