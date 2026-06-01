"use client";

import { useState } from "react";

const pasos = [
  {
    num: "1",
    titulo: "Pon cuántos van",
    desc: "Escribe cuántos adultos y niños van. Ajusta el slider para indicar cuántos son hombres y cuántas mujeres.",
  },
  {
    num: "2",
    titulo: "Elige el tipo de carne asada",
    desc: "Selecciona si tu raza come ligero, normal o si son tragones. La lista cambia automáticamente.",
  },
  {
    num: "3",
    titulo: "Escoge las proteínas y extras",
    desc: "Activa res, pollo, salchicha o queso según lo que vayas a poner. También puedes agregar cerveza, botanas y más.",
  },
  {
    num: "4",
    titulo: "Comparte o distribuye la lista",
    desc: "Descarga la imagen, imprime o manda la lista por WhatsApp. También puedes dividir quién compra qué entre tus amigos.",
  },
];

export default function ComoUsarAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-brasa/20 overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-center gap-3 px-5 py-3.5 bg-brasa-light hover:bg-brasa/10 transition-colors"
      >
        <span className="text-base">📋</span>
        <span className="font-bold text-gray-800 text-sm">¿Cómo usar la calculadora?</span>
        <span className="text-brasa text-lg font-black leading-none">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="bg-brasa-light border-t border-brasa/15 px-5 py-4">
          <ol className="space-y-3">
            {pasos.map((paso) => (
              <li key={paso.num} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brasa text-white text-sm font-black flex items-center justify-center">
                  {paso.num}
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{paso.titulo}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
