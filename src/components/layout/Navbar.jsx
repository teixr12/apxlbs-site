import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';
import { Button } from '../ui/Button';

export function Navbar() {
  const { lang, setLang, langOpen, setLangOpen, t, langNames } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/92 backdrop-blur-xl border-b border-border px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={IMAGES.logo} alt="APXLBS" className="h-9" />
        </a>

        <div className={`flex items-center gap-7 max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:flex-col max-md:bg-bg max-md:border-b max-md:border-border max-md:py-4 max-md:gap-4 ${
          mobileMenu ? 'max-md:flex' : 'max-md:hidden'
        }`}>
          <a href="#hero" className="text-text-secondary text-sm font-medium hover:text-text transition-colors">
            {t.nav.home}
          </a>
          <a href="#bento" className="text-text-secondary text-sm font-medium hover:text-text transition-colors">
            {t.nav.feature}
          </a>
          <a href="#benefits" className="text-text-secondary text-sm font-medium hover:text-text transition-colors">
            {t.nav.benefit}
          </a>
          <a href="#pricing" className="text-primary text-sm font-semibold bg-primary/10 px-3.5 py-1.5 rounded-full">
            {t.nav.pricing}
          </a>
          <a href="#testimonials" className="text-text-secondary text-sm font-medium hover:text-text transition-colors">
            {t.nav.testimonials}
          </a>
          <a href="#faq" className="text-text-secondary text-sm font-medium hover:text-text transition-colors">
            {t.nav.faq}
          </a>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="relative">
            <button
              className="bg-transparent border border-border-light text-text-secondary px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 hover:text-text transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
            >
              🌐 {langNames[lang]} <span className="text-[10px]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border border-border rounded-lg p-1.5 min-w-[130px] shadow-glow-lg">
                {Object.entries(langNames).map(([code, name]) => (
                  <button
                    key={code}
                    className={`block w-full px-3.5 py-2.5 text-xs text-left rounded-md transition-all ${
                      lang === code
                        ? 'bg-primary/15 text-primary'
                        : 'text-text-secondary hover:bg-white/5 hover:text-text'
                    }`}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button variant="primary" className="max-md:hidden">
            {t.nav.getStarted}
          </Button>
          <button
            className="hidden max-md:block bg-transparent border-none text-text text-2xl cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
