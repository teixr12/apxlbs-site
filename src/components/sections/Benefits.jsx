import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card } from '../ui/Card';

export function Benefits() {
  const { t } = useLanguage();
  const icons = ['📈', '⚙️', '👁️', '⚡', '🛡️', '📊'];

  return (
    <section id="benefits" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
        {t.benefits.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.benefits.items.map((item, i) => (
          <Card key={i} hover>
            <div className="text-3xl mb-4">{icons[i]}</div>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-text-secondary">{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
