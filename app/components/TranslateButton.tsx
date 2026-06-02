'use client';

import { useState, useEffect } from 'react';

export default function TranslateButton() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    try {
      if (localStorage.getItem('calcuasada_lang_en')) setLang('en');
    } catch {}
  }, []);

  const switchLanguage = () => {
    const hostname = window.location.hostname;
    if (lang === 'es') {
      document.cookie = `googtrans=/es/en; domain=.${hostname}; path=/`;
      document.cookie = `googtrans=/es/en; path=/`;
      try { localStorage.setItem('calcuasada_lang_en', '1'); } catch {}
      setLang('en');
    } else {
      const past = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = `googtrans=; ${past}; domain=.${hostname}; path=/`;
      document.cookie = `googtrans=; ${past}; path=/`;
      try { localStorage.removeItem('calcuasada_lang_en'); } catch {}
      setLang('es');
    }
    window.location.reload();
  };

  return (
    <button
      onClick={switchLanguage}
      className="text-xs font-semibold px-2 py-1 whitespace-nowrap rounded-full border"
      style={{
        background: '#2D2D2D',
        color: 'rgba(255,255,255,0.88)',
        borderColor: 'rgba(0,0,0,0.2)',
      }}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      🌐 {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
