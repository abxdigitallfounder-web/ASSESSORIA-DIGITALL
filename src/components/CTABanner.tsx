import React from 'react';

export const CTABanner: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-yellow px-5% py-20 text-center relative overflow-hidden">
      {/* Background play icon */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 text-black/5 text-8xl md:text-9xl leading-none pointer-events-none font-bold">
        ►
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-bebas text-4xl md:text-5xl text-black tracking-wide mb-8">
          Pronto para reimaginar sua estratégia de aquisição de pacientes? Vamos conversar.
        </h2>
        <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-black">
          Começar Agora
        </a>
      </div>
    </div>
  );
};
