"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "calcuasada_voto_tortilla";

type Pct = { maiz: number; harina: number };

export default function VotosTortilla() {
  const [votado, setVotado] = useState<"maiz" | "harina" | null>(null);
  const [pct, setPct] = useState<Pct | null>(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "maiz" || saved === "harina") setVotado(saved);

    fetchPct();
    const interval = setInterval(fetchPct, 30000);
    return () => clearInterval(interval);
  }, []);

  async function fetchPct() {
    try {
      const res = await fetch("/api/votar-tortilla");
      const data = await res.json();
      setPct({ maiz: data.maiz, harina: data.harina });
    } catch {
      // silencioso — si falla, simplemente no actualiza
    }
  }

  async function votar(tipo: "maiz" | "harina") {
    if (votado || cargando) return;
    setCargando(true);
    try {
      const res = await fetch("/api/votar-tortilla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, hp: "" }),
      });
      const data = await res.json();
      setPct({ maiz: data.maiz, harina: data.harina });
      setVotado(tipo);
      localStorage.setItem(STORAGE_KEY, tipo);
    } catch {
      // silencioso
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="text-center space-y-1">
        <p className="text-sm font-black text-gray-900">¿Tú qué tortilla prefieres para la carne asada?</p>
        <p className="text-xs text-gray-500">Vota y mira qué prefiere la comunidad de Calcuasada</p>
      </div>

      {/* Honeypot: invisible para humanos, los bots de formularios suelen rellenarlo */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="absolute opacity-0 h-0 w-0 -z-10"
        aria-hidden="true"
      />

      {!votado ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => votar("maiz")}
            disabled={cargando}
            className="flex flex-col items-center gap-1 bg-brasa-light border border-brasa/20 rounded-xl py-4 hover:bg-brasa/10 hover:border-brasa/40 transition-all disabled:opacity-50"
          >
            <span className="text-2xl">🌽</span>
            <span className="text-sm font-bold text-gray-900">De maíz</span>
          </button>
          <button
            onClick={() => votar("harina")}
            disabled={cargando}
            className="flex flex-col items-center gap-1 bg-brasa-light border border-brasa/20 rounded-xl py-4 hover:bg-brasa/10 hover:border-brasa/40 transition-all disabled:opacity-50"
          >
            <span className="text-2xl">🫓</span>
            <span className="text-sm font-bold text-gray-900">De harina</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-center text-brasa font-semibold">
            ¡Gracias por votar! Elegiste {votado === "maiz" ? "de maíz 🌽" : "de harina 🫓"}
          </p>
          {pct && (
            <div className="space-y-2.5">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span>🌽 De maíz</span>
                  <span>{pct.maiz}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brasa rounded-full transition-all duration-500" style={{ width: `${pct.maiz}%` }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span>🫓 De harina</span>
                  <span>{pct.harina}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-carbon rounded-full transition-all duration-500" style={{ width: `${pct.harina}%` }} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
