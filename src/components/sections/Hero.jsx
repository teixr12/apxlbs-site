import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center px-6 pt-24 pb-20 relative">
      {/* Ticker */}
      <div className="absolute top-16 left-0 right-0 overflow-hidden bg-gradient-to-r from-primary/2 via-primary/8 to-primary/2 border-y border-primary/12 py-3">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 text-primary text-[11px] font-semibold uppercase tracking-wider">
              <span className="text-[6px] opacity-50">●</span> {t.hero.ticker}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl text-center mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-9">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap mb-16">
          <Button variant="primary">{t.hero.cta}</Button>
          <Button variant="secondary">{t.hero.ctaSecondary}</Button>
        </div>

        <div className="mb-12">
          <img src={IMAGES.dashboard} alt="Dashboard" className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl animate-fade-in" />
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {IMAGES.heroAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-bg"
                style={{ zIndex: 5 - i }}
              />
            ))}
          </div>
          <span className="text-sm text-text-secondary">{t.hero.trustedBy}</span>
        </div>
      </div>
    </section>
  );
}
