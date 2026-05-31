import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner";
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1VZBVG477" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-G1VZBVG477');` }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1068311584605438" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <header
          className="py-5 px-4 print:hidden"
          style={{
            background: 'linear-gradient(180deg, #5DBE8A 0%, #3A9E6A 40%, #267A4E 100%)',
            boxShadow: '0 4px 14px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.45)',
          }}
        >
          <div className="max-w-lg mx-auto flex flex-col items-center gap-2">
            <Image
              src="/logo.png"
              alt="Calcuasada logo"
              width={140}
              height={140}
              priority
              className="-mb-7"
            />
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Calculadora de carne asada para México
            </p>
          </div>
        </header>
        <nav
          className="border-b print:hidden"
          style={{
            background: 'linear-gradient(180deg, #C84030 0%, #A83020 100%)',
            borderColor: 'rgba(0,0,0,0.2)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.18)',
          }}
        >
          <div className="max-w-lg mx-auto px-4 flex justify-center gap-2 py-2">
            <Link href="/" className="nav-pill-3d px-5 py-1.5 text-sm font-semibold">Calculadora</Link>
            <Link href="/guias" className="nav-pill-3d px-5 py-1.5 text-sm font-semibold">Guías</Link>
            <Link href="/acerca" className="nav-pill-3d px-5 py-1.5 text-sm font-semibold">Acerca</Link>
          </div>
        </nav>
        <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {children}
        </main>
        <CookieBanner />
        <footer className="text-center text-xs text-gray-400 py-8 print:hidden space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/guias" className="hover:text-brasa transition-colors">Guías</Link>
            <Link href="/acerca" className="hover:text-brasa transition-colors">Acerca</Link>
            <Link href="/contacto" className="hover:text-brasa transition-colors">Contacto</Link>
            <Link href="/privacidad" className="hover:text-brasa transition-colors">Privacidad</Link>
          </div>
          <p>Hecho con 🥩 en México · Calcuasada 2026</p>
        </footer>
      </body>
    </html>
  );
}
