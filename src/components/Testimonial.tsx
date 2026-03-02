import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Testimonial: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div className="bg-yellow px-5% py-28">
      <div ref={ref} className="max-w-4xl mx-auto text-center reveal">
        <div className="relative">
          <div className="absolute -top-16 -left-8 text-black/10 text-9xl leading-none font-serif">"</div>
          <blockquote className="font-bebas text-3xl md:text-5xl text-black leading-tight tracking-wide mb-12">
            "Temos uma equipe tão unida. Somos uma equipe impulsionando o crescimento juntos."
          </blockquote>
        </div>
        <div className="font-bold text-lg text-black uppercase tracking-widest mb-2">
          Rachelle Kuebler-Weber
        </div>
        <div className="text-sm text-black/60">
          CMO — AEG
        </div>
      </div>
    </div>
  );
};
