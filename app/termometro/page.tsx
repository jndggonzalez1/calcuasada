import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Temperaturas internas de cocción para carne — Guía con termómetro | Calcuasada",
  description:
    "Consulta las temperaturas internas ideales para res, pollo, cerdo y cordero. Términos de cocción, punto exacto y referencia rápida para usar con termómetro de cocina.",
};

export default function TermometroPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">Referencia rápida</p>
        <div className="text-3xl">🌡️</div>
        <h1 className="text-xl font-black text-gray-900 leading-tight">
          Temperaturas internas de cocción
        </h1>
        <p className="text-sm text-gray-500">La guía del parrillero que sí sabe lo que está haciendo</p>
      </div>

      {/* Intro */}
      <section className="space-y-2">
        <p className="text-sm leading-relaxed">
          La forma más segura de saber si una carne está lista es usar un termómetro. El color, los jugos o el tiempo de cocción ayudan como referencia, pero no son tan confiables como medir la temperatura interna.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 leading-relaxed">
          <strong>Importante:</strong> estas son temperaturas <em>internas</em> de la carne, no la temperatura del asador. Inserta el termómetro en la parte más gruesa evitando hueso, grasa o la parrilla.
        </div>
      </section>

      {/* Las 3 que debes recordar */}
      <section className="space-y-3">
        <h2 className="text-base font-black text-gray-900">Las 3 temperaturas que debes recordar</h2>
        <div className="grid gap-3">
          <div className="bg-white border-l-4 border-brasa rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className="text-center min-w-[70px]">
              <p className="text-xl font-black text-brasa">145°F</p>
              <p className="text-xs text-gray-500">63°C</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Res, cerdo y cordero</p>
              <p className="text-xs text-gray-500">Cortes enteros + 3 min de reposo</p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-orange-400 rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className="text-center min-w-[70px]">
              <p className="text-xl font-black text-orange-500">160°F</p>
              <p className="text-xs text-gray-500">71°C</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Carne molida y salchichas</p>
              <p className="text-xs text-gray-500">Hamburguesas, chorizo, salchicha fresca</p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-yellow-400 rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className="text-center min-w-[70px]">
              <p className="text-xl font-black text-yellow-600">165°F</p>
              <p className="text-xs text-gray-500">74°C</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Pollo y aves</p>
              <p className="text-xs text-gray-500">Sin excepción — siempre bien cocido</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          Tip: la carne puede seguir subiendo 2–5°F después de retirarla del fuego (carryover cooking). En cortes gruesos, puedes sacarla unos grados antes y dejarla reposar.
        </p>
      </section>

      <AdBanner />

      {/* ── RES ── */}
      <section id="temperaturas" className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">🥩 Res — términos de cocción</h2>
        <p className="text-xs text-gray-500 leading-relaxed">
          Aplica para arrachera, costilla, ribeye, New York, sirloin, vacío, picaña, filete, T-bone, porterhouse y cortes similares.
        </p>

        <div className="space-y-2">
          {/* Azul */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-900 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Azul / bleu</p>
              <p className="text-xs text-gray-500">Sellado por fuera, muy rojo y tibio al centro</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">110°F</p>
              <p className="text-xs text-gray-400">43°C</p>
            </div>
          </div>
          {/* Rojo */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Rojo / rare</p>
              <p className="text-xs text-gray-500">Centro rojo, muy jugoso</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">120–130°F</p>
              <p className="text-xs text-gray-400">49–54°C</p>
            </div>
          </div>
          {/* Medio rojo */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Medio rojo / medium rare</p>
              <p className="text-xs text-gray-500">Centro rojo cálido, textura jugosa</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">130–135°F</p>
              <p className="text-xs text-gray-400">54–57°C</p>
            </div>
          </div>
          {/* Medio */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-pink-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Medio / medium</p>
              <p className="text-xs text-gray-500">Centro rosado, más firme</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">135–145°F</p>
              <p className="text-xs text-gray-400">57–63°C</p>
            </div>
          </div>
          {/* AL PUNTO — favorito de Yeyito */}
          <div className="bg-brasa-light border-2 border-brasa/30 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-brasa flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <p className="text-sm font-black text-gray-900">Al punto</p>
                <span className="text-xs bg-brasa text-white px-2 py-0.5 rounded-full font-bold">⭐ favorito de Yeyito</span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">Entre medio y tres cuartos — rosado con firmeza, jugoso sin ser rojo</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-brasa">145–150°F</p>
              <p className="text-xs text-gray-500">63–65°C</p>
            </div>
          </div>
          {/* Tres cuartos */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-200 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Tres cuartos / medium well</p>
              <p className="text-xs text-gray-500">Poco rosado, más seco</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">150–155°F</p>
              <p className="text-xs text-gray-400">65–68°C</p>
            </div>
          </div>
          {/* Bien cocido */}
          <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-300 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Bien cocido / well done</p>
              <p className="text-xs text-gray-500">Sin rosado, firme y más seco</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-black text-gray-800">155°F+</p>
              <p className="text-xs text-gray-400">68°C+</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 rounded-xl p-3">
          Seguridad: los cortes enteros de res deben llegar al menos a <strong>145°F / 63°C</strong> y reposar 3 minutos. La carne molida (hamburguesas) debe llegar a <strong>160°F / 71°C</strong>.
        </p>
      </section>

      <AdBanner />

      {/* ── POLLO ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">🍗 Pollo y aves</h2>
        <p className="text-xs text-gray-500 leading-relaxed">
          El pollo no tiene términos — siempre debe cocinarse completamente. Sin excepción.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Corte</th>
                <th className="text-right py-3 px-3 font-bold">Temperatura</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Pechuga", "165°F / 74°C"],
                ["Muslos / piernas", "165°F / 74°C mín."],
                ["Alas", "165°F / 74°C"],
                ["Pollo entero", "165°F / 74°C"],
                ["Pollo molido", "165°F / 74°C"],
              ].map(([corte, temp]) => (
                <tr key={corte} className="hover:bg-gray-50">
                  <td className="py-2.5 px-3 font-medium">{corte}</td>
                  <td className="py-2.5 px-3 text-right font-black text-yellow-600">{temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 rounded-xl p-3">
          Los muslos y piernas suelen quedar mejor a <strong>175–185°F / 79–85°C</strong> — tienen más colágeno y aguantan más calor sin secarse.
        </p>
      </section>

      {/* ── CERDO ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">🐷 Cerdo</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-carbon text-white">
                <th className="text-left py-3 px-3 font-bold">Producto</th>
                <th className="text-right py-3 px-3 font-bold">Temperatura</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Chuletas", "145°F / 63°C + 3 min"],
                ["Lomo", "145°F / 63°C + 3 min"],
                ["Filete", "145°F / 63°C + 3 min"],
                ["Pierna fresca", "145°F / 63°C + 3 min"],
                ["Cerdo molido", "160°F / 71°C"],
                ["Salchicha fresca", "160°F / 71°C"],
                ["Chorizo fresco", "160°F / 71°C"],
              ].map(([prod, temp]) => (
                <tr key={prod} className="hover:bg-gray-50">
                  <td className="py-2.5 px-3 font-medium">{prod}</td>
                  <td className="py-2.5 px-3 text-right font-black text-orange-500">{temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 rounded-xl p-3">
          Los cortes enteros de cerdo pueden quedar ligeramente rosados y ser seguros si llegan a <strong>145°F / 63°C</strong> con 3 min de reposo. El cerdo molido y las salchichas frescas necesitan <strong>160°F / 71°C</strong>.
        </p>
      </section>

      <AdBanner />

      {/* ── CORDERO ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">🐑 Cordero</h2>

        <div className="space-y-2">
          {[
            { term: "Rojo / rare", temp: "125–130°F", c: "52–54°C", desc: "Centro rojo, muy jugoso", color: "bg-red-600" },
            { term: "Medio rojo / medium rare", temp: "130–135°F", c: "54–57°C", desc: "Rosado intenso, jugoso", color: "bg-red-400" },
            { term: "Medio / medium", temp: "135–145°F", c: "57–63°C", desc: "Rosado, más firme", color: "bg-pink-400" },
            { term: "Tres cuartos / medium well", temp: "145–155°F", c: "63–68°C", desc: "Apenas rosado", color: "bg-rose-200" },
            { term: "Bien cocido / well done", temp: "155°F+", c: "68°C+", desc: "Sin rosado, firme", color: "bg-gray-300" },
          ].map(({ term, temp, c, desc, color }) => (
            <div key={term} className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">{term}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-black text-gray-800">{temp}</p>
                <p className="text-xs text-gray-400">{c}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 rounded-xl p-3">
          Cortes enteros de cordero: mínimo <strong>145°F / 63°C</strong> con 3 min de reposo. Cordero molido: <strong>160°F / 71°C</strong>.
        </p>
      </section>

      {/* ── TÉCNICA DE LA MANO ── */}
      <section id="tecnica-mano" className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">✋ Técnica de la mano (finger test)</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Si no tienes termómetro, puedes estimar el término de la carne comparando su firmeza con la parte carnosa de tu palma, justo debajo del pulgar. Junta suavemente el pulgar con cada dedo y toca esa zona — esa firmeza corresponde a un término aproximado.
        </p>
        <div className="space-y-2">
          {[
            { gesto: "Mano relajada",         termino: "Crudo / raw",                color: "bg-red-900",  text: "text-white" },
            { gesto: "Pulgar + índice",        termino: "Rojo / rare",                color: "bg-red-600",  text: "text-white" },
            { gesto: "Pulgar + dedo medio",    termino: "Medio rojo / medium rare",   color: "bg-red-400",  text: "text-white" },
            { gesto: "Pulgar + dedo anular",   termino: "Medio / medium",             color: "bg-pink-400", text: "text-white" },
            { gesto: "Pulgar + meñique",       termino: "Bien cocido / well done",    color: "bg-gray-300", text: "text-gray-800" },
          ].map(({ gesto, termino, color, text }) => (
            <div key={gesto} className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">{gesto}</p>
              </div>
              <div className={`text-xs font-semibold px-2.5 py-1 rounded-full ${color} ${text}`}>
                {termino}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 leading-relaxed">
          <strong>Importante:</strong> esta técnica es una referencia rápida, no sustituye un termómetro. La firmeza puede variar según el grosor del corte, la cantidad de grasa y la temperatura del asador. Para mayor precisión y seguridad, usa siempre un termómetro de cocina.
        </div>
      </section>

      {/* Nota de seguridad */}
      <div className="bg-gray-900 text-white rounded-2xl p-5 space-y-2">
        <p className="font-black text-sm">🌡️ Nota de seguridad</p>
        <p className="text-xs text-white/75 leading-relaxed">
          Estas temperaturas son referencias prácticas. Mide siempre en la parte más gruesa del alimento, evitando hueso o grasa. No confíes solo en el color o el tiempo de cocción — un termómetro es la única forma confiable de saber que la carne está lista.
        </p>
      </div>

      <div className="bg-brasa text-white rounded-2xl p-5 text-center space-y-3">
        <p className="font-black text-base">¿Ya sabes cómo vas a cocinar? Ahora calcula cuánto necesitas.</p>
        <Link
          href="/"
          className="inline-block bg-white text-brasa font-bold text-sm px-6 py-2.5 rounded-full hover:bg-brasa-light transition-colors"
        >
          Ir a la calculadora →
        </Link>
      </div>

    </article>
  );
}
