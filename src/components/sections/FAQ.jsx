import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card } from '../ui/Card';

export function FAQ() {
  const { t } = useLanguage();
  const [faqOpen, setFaqOpen] = useState(-1);

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
        {t.faq.title}
      </h2>

      <div className="space-y-3">
        {t.faq.items.map((item, i) => (
          <Card
            key={i}
            className="cursor-pointer"
            onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">{item.q}</span>
              <span className="text-2xl text-text-secondary">
                {faqOpen === i ? '−' : '+'}
              </span>
            </div>
            {faqOpen === i && (
              <div className="mt-4 pt-4 border-t border-border text-text-secondary">
                {item.a}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
