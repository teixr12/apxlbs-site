import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IMAGES } from '../../utils/constants';
import { Card } from '../ui/Card';

export function BentoGrid() {
  const { t } = useLanguage();

  return (
    <section id="bento" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
        {t.bento.mainTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
        {/* Card 1 - Chart */}
        <Card className="md:row-span-2 hover" hover>
          <h3 className="text-xl font-semibold mb-2.5 tracking-tight">{t.bento.card1Title}</h3>
          <p className="text-sm text-text-secondary mb-6">{t.bento.card1Desc}</p>
          <div className="relative">
            <svg viewBox="0 0 400 160" className="w-full h-40">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,140 L0,120 Q40,125 70,100 T140,85 T210,70 T280,50 T350,40 T400,25 L400,140 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,120 Q40,125 70,100 T140,85 T210,70 T280,50 T350,40 T400,25"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="280" cy="50" r="6" fill="#fff" stroke="#0a0a0a" strokeWidth="3" />
            </svg>
            <div className="absolute top-8 right-8">
              <span className="text-lg font-semibold">$12,450</span>
              <div className="h-px w-full bg-primary mt-1"></div>
            </div>
          </div>
        </Card>

        {/* Card 2 - Dot Matrix */}
        <Card hover>
          <h3 className="text-xl font-semibold mb-2.5 tracking-tight">{t.bento.card2Title}</h3>
          <p className="text-sm text-text-secondary mb-4">{t.bento.card2Desc}</p>
          <img src={IMAGES.bento.dotMatrix} alt="Diversified Assets" className="w-full rounded-lg" />
        </Card>

        {/* Card 3 - Orbital */}
        <Card hover>
          <h3 className="text-xl font-semibold mb-2.5 tracking-tight">{t.bento.card3Title}</h3>
          <p className="text-sm text-text-secondary mb-4">{t.bento.card3Desc}</p>
          <img src={IMAGES.bento.orbital} alt="Real-Time Optimization" className="w-full rounded-lg" />
        </Card>

        {/* Card 4 - Lightning */}
        <Card hover>
          <h3 className="text-xl font-semibold mb-2.5 tracking-tight">{t.bento.card4Title}</h3>
          <p className="text-sm text-text-secondary mb-4">{t.bento.card4Desc}</p>
          <div className="flex justify-center items-center h-32">
            <svg viewBox="0 0 100 140" className="w-20 h-28">
              <defs>
                <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="40%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#E55A2B" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M60 0 L25 55 L42 55 L18 140 L85 50 L60 50 L85 0 Z"
                fill="url(#lightningGrad)"
                filter="url(#glow)"
              />
            </svg>
          </div>
        </Card>
      </div>
    </section>
  );
}
