import { useState, useEffect } from 'react';
import en from '../i18n/en.json';
import pt from '../i18n/pt.json';
import es from '../i18n/es.json';

const translations = { en, pt, es };
const langNames = { en: 'English', pt: 'Português', es: 'Español' };

export function useLanguage() {
  const [lang, setLang] = useState('en');
  const [langOpen, setLangOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const close = () => setLangOpen(false);
    if (langOpen) {
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [langOpen]);

  return {
    lang,
    setLang,
    langOpen,
    setLangOpen,
    t,
    langNames,
  };
}
