import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Pricing() {
  const { t } = useLanguage();
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-4">
        {t.pricing.title}
      </h2>
      <p className="text-center text-text-secondary mb-12">{t.pricing.subtitle}</p>

      <div className="flex justify-center gap-2 mb-12">
        <button
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
            billing === 'monthly'
              ? 'bg-primary text-black'
              : 'bg-transparent text-text-secondary border border-border-light'
          }`}
          onClick={() => setBilling('monthly')}
        >
          {t.pricing.monthly}
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
            billing === 'yearly'
              ? 'bg-primary text-black'
              : 'bg-transparent text-text-secondary border border-border-light'
          }`}
          onClick={() => setBilling('yearly')}
        >
          {t.pricing.yearly}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">{t.pricing.plan1.name}</h3>
          <div className="text-4xl font-bold mb-1">
            {billing === 'monthly' ? t.pricing.plan1.price : t.pricing.plan1.priceYearly}
          </div>
          <div className="text-sm text-text-secondary mb-6">
            {billing === 'monthly' ? t.pricing.plan1.period : t.pricing.plan1.periodYearly}
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            {t.pricing.plan1.features.map((f, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full">{t.pricing.plan1.cta}</Button>
        </Card>

        <Card featured className="flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-semibold px-3 py-1 rounded-full">
            {t.pricing.plan2.badge}
          </div>
          <h3 className="text-xl font-semibold mb-4 mt-2">{t.pricing.plan2.name}</h3>
          <div className="text-4xl font-bold mb-1">
            {billing === 'monthly' ? t.pricing.plan2.price : t.pricing.plan2.priceYearly}
          </div>
          <div className="text-sm text-text-secondary mb-6">
            {billing === 'monthly' ? t.pricing.plan2.period : t.pricing.plan2.periodYearly}
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            {t.pricing.plan2.features.map((f, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full">{t.pricing.plan2.cta}</Button>
        </Card>
      </div>
    </section>
  );
}
