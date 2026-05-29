import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Calculadora from "../../components/Calculadora";
import AdBanner from "../../components/AdBanner";
import { calcularResultados } from "../../lib/calculator";

const PERSONAS_VALIDAS = [10, 15, 20, 25, 30, 40, 50];

export function generateStaticParams() {
  return PERSONAS_VALIDAS.map((n) => ({ personas: String(n) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ personas: string }>;
}): Promise<Metadata> {
  const { personas } = await params;
  const n = parseInt(personas);
  return {
    title: `¿Cuánta carne asada para ${n} personas? — Calcuasada`,
    description: `Descubre exactamente cuánta carne, tortillas, limones, aguacates, carbón e hielo necesitas para una carne asada de ${n} personas en México.`,
  };
}

export default async function PersonasPage({
  params,
}: {
  params: Promise<{ personas: string }>;
}) {
  const { personas } = await params;
  const n = parseInt(personas);

  if (!PERSONAS_VALIDAS.includes(n)) {
    notFound();
  }

  const results = calcularResultados(n, 0, "normal");

  return (
    <>
      <AdBanner />

      <div>
        <h1 className="text-2xl font-black text-gray-900 leading-snug">
          ¿Cuánta carne asada para {n} personas?
        </h1>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          Para una carne asada de <strong>{n} personas</strong> en modo Normal
          necesitas aproximadamente{" "}
          <strong>{results.carne} kg de carne de res</strong>,{" "}
          {results.tortillas} tortillas, {results.limones} limones,{" "}
          {results.aguacates} aguacates, {results.carbon} kg de carbón y{" "}
          {results.hielo} kg de hielo. Ajusta las cantidades según si comes
          ligero o son unos tragones con la calculadora de abajo.
        </p>
      </div>

      <Calculadora defaultAdultos={n} defaultNinos={0} defaultTipo="normal" />

      <AdBanner />
    </>
  );
}
