import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 flex justify-center">
      <Card className="max-w-2xl text-center px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-base text-text-secondary mb-8">{t.cta.subtitle}</p>
        <Button variant="primary">{t.cta.button}</Button>
      </Card>
    </section>
  );
}
