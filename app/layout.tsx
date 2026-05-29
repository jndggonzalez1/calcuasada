import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calcuasada — Calculadora de Carne Asada",
  description:
    "Calcula exactamente cuánta carne, tortillas, limones, carbón y más necesitas para tu carne asada. Gratis, en español, para México.",
  keywords: "carne asada, calculadora, cuánta carne, carne asada para 20 personas, México",
  openGraph: {
    title: "Calcuasada — Calculadora de Carne Asada",
    description:
      "Calcula cuánta carne, tortillas y más necesitas para tu carne asada.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="min-h-screen">
        <header className="bg-orange-500 text-white py-4 px-4 shadow-md print:hidden">
          <div className="max-w-lg mx-auto flex items-center gap-3">
            <span className="text-3xl">🥩</span>
            <div>
              <p className="text-xl font-black leading-tight">Calcuasada</p>
              <p className="text-orange-100 text-xs">Calculadora de carne asada para México</p>
            </div>
          </div>
        </header>
        <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {children}
        </main>
        <footer className="text-center text-xs text-gray-400 py-8 print:hidden">
          Hecho con 🥩 en México · Calcuasada 2025
        </footer>
      </body>
    </html>
  );
}
