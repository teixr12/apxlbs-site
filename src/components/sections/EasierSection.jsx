import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function EasierSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 flex justify-center">
      <Card className="max-w-[580px] px-14 py-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">{t.easier.title}</h2>
        <p className="text-base text-text-secondary leading-relaxed mb-7">{t.easier.desc}</p>
        <Button variant="outline">{t.easier.cta} →</Button>
      </Card>
    </section>
  );
}
