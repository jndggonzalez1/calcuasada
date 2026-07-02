import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner";
import NavLink from "./components/NavLink";
import TranslateButton from "./components/TranslateButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calcuasada.com"),
  title: "Calcuasada — Calculadora de Carne Asada",
  description:
    "Calcula exactamente cuánta carne, tortillas, limones, carbón y más necesitas para tu carne asada. Gratis, en español, para México.",
  keywords: "carne asada, calculadora, cuánta carne, carne asada para 20 personas, México",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
        {/* Limpia el cookie de traducción y bloquea init de GT si el usuario no eligió inglés */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var w=false;try{w=!!localStorage.getItem('calcuasada_lang_en');}catch(e){}window.__calcuasadaWantsEn=w;if(!w){var ex='expires=Thu, 01 Jan 1970 00:00:00 GMT';document.cookie='googtrans=; '+ex+'; path=/';document.cookie='googtrans=; '+ex+'; domain=.'+location.hostname+'; path=/';}})();` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1VZBVG477" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-G1VZBVG477');` }} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1068311584605438" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit(){if(window.__calcuasadaWantsEn){new google.translate.TranslateElement({pageLanguage:'es',includedLanguages:'en',autoDisplay:false},'google_translate_element');}}` }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </head>
      <body className="min-h-screen">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <div className="sticky top-0 z-30 print:hidden">
          <header style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E2D9' }}>
            <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-3 py-2">
                <div style={{ width: 52, height: 52, position: 'relative', flexShrink: 0 }}>
                  <Image src="/logo.png" alt="Calcuasada" fill style={{ objectFit: 'contain' }} priority />
                </div>
                <span className="font-bold text-xl tracking-tight" style={{ color: '#1A1A1A' }}>
                  Calcuasada
                </span>
              </Link>
              <TranslateButton />
            </div>
          </header>
          <nav translate="no" style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E2D9' }}>
            <div className="max-w-lg mx-auto px-1 flex">
              <NavLink href="/">Calculadora</NavLink>
              <NavLink href="/guias">Guías</NavLink>
              <NavLink href="/termometro">Temps</NavLink>
              <NavLink href="/acerca">Acerca</NavLink>
            </div>
          </nav>
        </div>
        <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {children}
        </main>
        <CookieBanner />
        <footer className="print:hidden" style={{ background: '#1A1A1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-lg mx-auto px-4 py-8 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6 flex-wrap" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <Link href="/guias" className="text-xs hover:text-white transition-colors">Guías</Link>
              <Link href="/acerca" className="text-xs hover:text-white transition-colors">Acerca</Link>
              <Link href="/contacto" className="text-xs hover:text-white transition-colors">Contacto</Link>
              <Link href="/privacidad" className="text-xs hover:text-white transition-colors">Privacidad</Link>
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Hecho con 🥩 en México · Calcuasada 2026</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
