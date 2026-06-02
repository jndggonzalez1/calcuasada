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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1068311584605438" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit(){if(window.__calcuasadaWantsEn){new google.translate.TranslateElement({pageLanguage:'es',includedLanguages:'en',autoDisplay:false},'google_translate_element');}}` }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </head>
      <body className="min-h-screen">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <header
          className="pb-4 pt-2 px-4 print:hidden relative"
          style={{
            background: '#FAF7F2',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <div className="absolute top-2 right-3">
            <TranslateButton />
          </div>
          <div className="max-w-lg mx-auto flex flex-col items-center gap-2">
            <Image
              src="/logo.png"
              alt="Calcuasada logo"
              width={180}
              height={180}
              priority
              className="-mt-4 -mb-9"
            />
            <p className="text-sm font-medium" style={{ color: '#1A1A1A', opacity: 0.55 }}>
              Calculadora de carne asada para México
            </p>
          </div>
        </header>
        <nav
          className="border-b print:hidden"
          style={{
            background: '#2D2D2D',
            borderColor: 'rgba(0,0,0,0.25)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          <div className="max-w-lg mx-auto px-2 flex justify-center gap-1 py-2">
            <NavLink href="/">Calculadora</NavLink>
            <NavLink href="/guias">Guías</NavLink>
            <NavLink href="/termometro">🌡️ Temps</NavLink>
            <NavLink href="/acerca">Acerca</NavLink>
          </div>
        </nav>
        <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {children}
        </main>
        <CookieBanner />
        <footer className="text-center text-xs py-8 print:hidden space-y-2" style={{ background: '#1A1A1A', color: 'rgba(255,255,255,0.55)' }}>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/guias" className="hover:text-white transition-colors">Guías</Link>
            <Link href="/acerca" className="hover:text-white transition-colors">Acerca</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
          <p>Hecho con 🥩 en México · Calcuasada 2026</p>
        </footer>
      </body>
    </html>
  );
}
