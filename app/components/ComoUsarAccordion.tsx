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
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-700">¿Cómo usar la calculadora?</span>
        <span className="text-gray-400 text-xs">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="border-t border-gray-100 px-4 py-4 bg-gray-50">
          <ol className="space-y-3">
            {pasos.map((paso) => (
              <li key={paso.num} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brasa text-white text-xs font-bold flex items-center justify-center">
                  {paso.num}
                </span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{paso.titulo}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
