"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 print:hidden">
      <div className="max-w-lg mx-auto bg-carbon text-white rounded-2xl px-5 py-4 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-xs text-white/80 leading-relaxed flex-1">
          Este sitio usa cookies de <strong className="text-white">Google AdSense</strong> para mostrar anuncios personalizados.{" "}
          <a href="/privacidad" className="underline text-white/60 hover:text-white transition-colors">
            Aviso de privacidad
          </a>
        </p>
        <button
          onClick={accept}
          className="bg-brasa text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-brasa-hover transition-colors flex-shrink-0"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
