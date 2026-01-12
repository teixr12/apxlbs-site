import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { trustLogos } from '../../utils/constants';

export function TrustLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <p className="text-center text-text-secondary text-sm mb-8">{t.trust.title}</p>
      <div className="overflow-hidden">
        <div className="flex gap-12 animate-marquee-left whitespace-nowrap">
          {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
            <span key={i} className="text-text-secondary text-lg font-medium">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
