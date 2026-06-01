'use client';

import { useState, useEffect } from 'react';

function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : '';
}

export default function TranslateButton() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const cookie = getCookie('googtrans');
    if (cookie && cookie.includes('/en')) setLang('en');
  }, []);

  const switchLanguage = () => {
    const hostname = window.location.hostname;
    if (lang === 'es') {
      document.cookie = `googtrans=/es/en; domain=.${hostname}; path=/`;
      document.cookie = `googtrans=/es/en; path=/`;
      sessionStorage.setItem('calcuasada_lang_en', '1');
      setLang('en');
    } else {
      const past = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = `googtrans=; ${past}; domain=.${hostname}; path=/`;
      document.cookie = `googtrans=; ${past}; path=/`;
      sessionStorage.removeItem('calcuasada_lang_en');
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
