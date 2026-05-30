import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Calcuasada",
  description: "¿Tienes alguna duda, sugerencia o comentario sobre Calcuasada? Escríbenos, con gusto te leemos.",
};

export default function ContactoPage() {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="text-center space-y-2">
        <span className="text-5xl">✉️</span>
        <h1 className="text-2xl font-black text-gray-900">Contacto</h1>
        <p className="text-sm text-gray-500">¿Tienes un comentario, sugerencia o encontraste algo raro?</p>
      </div>

      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-base font-black text-gray-900">Escríbenos directamente</h2>
        <p className="text-sm leading-relaxed">
          Calcuasada es un proyecto personal hecho con cariño en Nuevo León. No hay un equipo grande detrás — solo Yeyito revisando los mensajes. Si tienes alguna duda sobre la calculadora, quieres reportar un error, o simplemente quieres decir que te sirvió, puedes escribirle aquí:
        </p>
        <a
          href="mailto:hola@calcuasada.com"
          className="inline-block bg-brasa text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-brasa-hover transition-colors"
        >
          hola@calcuasada.com
        </a>
        <p className="text-xs text-gray-400">Respondemos en un plazo de 1 a 3 días hábiles.</p>
      </section>

      <section className="bg-brasa-light rounded-2xl p-5 space-y-2">
        <h2 className="text-base font-black text-gray-900">¿En qué te puedo ayudar?</h2>
        <ul className="text-sm space-y-1.5 list-disc list-inside text-gray-700 leading-relaxed">
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
