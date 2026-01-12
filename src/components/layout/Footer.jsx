import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        <img src={IMAGES.logo} alt="APXLBS" className="h-8" />
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#hero" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.home}
          </a>
          <a href="#bento" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.feature}
          </a>
          <a href="#benefits" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.benefit}
          </a>
          <a href="#pricing" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#testimonials" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.testimonials}
          </a>
          <a href="#faq" className="text-text-secondary text-sm hover:text-text transition-colors">
            {t.nav.faq}
          </a>
        </div>
        <p className="text-text-muted text-sm">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
