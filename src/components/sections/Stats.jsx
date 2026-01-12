import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
        {t.stats.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {t.stats.items.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
              <span className="block text-sm text-text-secondary">{stat.label}</span>
            </div>
            {i < 2 && (
              <div className="hidden md:block w-px h-16 bg-border"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
