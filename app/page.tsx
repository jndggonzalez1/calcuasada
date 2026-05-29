import type { Metadata } from "next";
import Calculadora from "./components/Calculadora";
import AdBanner from "./components/AdBanner";

export const metadata: Metadata = {
  title: "Calcuasada — Calculadora de Carne Asada para México",
  description:
    "¿Cuánta carne asada necesitas? Calcula carne, tortillas, limones, carbón, hielo y más según el número de personas. Gratis, rápido y en español.",
};

export default function HomePage() {
  return (
    <>
      {/* Top ad banner */}
      <AdBanner />

      <div className="text-center">
        <h1 className="text-2xl font-black text-gray-900">
          Calculadora de Carne Asada
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Ingresa cuántos van y te decimos exactamente qué comprar
        </p>
      </div>

      <Calculadora />

      {/* Bottom ad banner */}
      <AdBanner />
    </>
  );
}
