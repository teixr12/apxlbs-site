import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';
import { Card } from '../ui/Card';

export function SmarterSection() {
  const { t } = useLanguage();

  const cards = [
    { title: t.smarter.card1Title, desc: t.smarter.card1Desc, img: IMAGES.smarter[0] },
    { title: t.smarter.card2Title, desc: t.smarter.card2Desc, img: IMAGES.smarter[1] },
    { title: t.smarter.card3Title, desc: t.smarter.card3Desc, img: IMAGES.smarter[2] },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
        {t.smarter.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <Card key={i} hover className="flex flex-col">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img src={card.img} alt={card.title} className="w-full h-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-text-secondary mb-4 flex-grow">{card.desc}</p>
            <a href="#" className="text-primary text-sm font-semibold hover:underline">
              {t.smarter.cta} →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
