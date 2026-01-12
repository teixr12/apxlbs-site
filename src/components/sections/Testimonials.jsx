import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';
import { Card } from '../ui/Card';

export function Testimonials() {
  const { t } = useLanguage();

  const leftItems = [...t.testimonials.items.slice(0, 4), ...t.testimonials.items.slice(0, 4)];
  const rightItems = [...t.testimonials.items.slice(4, 8), ...t.testimonials.items.slice(4, 8)];

  return (
    <section id="testimonials" className="py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-4">
        {t.testimonials.title}
      </h2>
      <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
        {t.testimonials.subtitle}
      </p>

      <div className="overflow-hidden">
        <div className="flex gap-6">
          <div className="flex gap-6 animate-marquee-left whitespace-nowrap">
            {leftItems.map((item, i) => (
              <Card key={i} className="min-w-[320px] inline-block">
                <p className="text-sm text-text-secondary mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={IMAGES.testimonials[i % 4]}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="text-xs text-text-secondary">{item.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="flex gap-6 animate-marquee-right whitespace-nowrap">
            {rightItems.map((item, i) => (
              <Card key={i} className="min-w-[320px] inline-block">
                <p className="text-sm text-text-secondary mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={IMAGES.testimonials[(i % 4) + 4]}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="text-xs text-text-secondary">{item.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
