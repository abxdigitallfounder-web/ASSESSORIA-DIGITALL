import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-black flex items-center px-5% pt-32 pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-yellow text-black font-bold text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
              Agência de Marketing em Saúde
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide mb-6 text-white">
              Marketing de Performance que Gera <span className="text-yellow block">Resultados.</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/75 mb-10 max-w-md">
              Construímos estratégias personalizadas de marketing de performance para grupos de saúde prontos para crescer em escala. Se existe uma forma mais inteligente de crescer, nós encontramos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-primary">
                Solicitar Consultoria
              </a>
              <a href="#casos" onClick={(e) => scrollToSection(e, '#casos')} className="btn-outline">
                Ver Resultados
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="hidden md:flex justify-center">
            <div className="bg-gray-mid border border-yellow/20 rounded-sm p-10 w-full max-w-xs relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow"></div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bebas text-4xl text-yellow leading-none mb-1">77%</div>
                  <div className="text-xs uppercase text-white/60 tracking-wider">Aumento na Taxa de Conversão</div>
                </div>
                <div>
                  <div className="font-bebas text-4xl text-yellow leading-none mb-1">54%</div>
                  <div className="text-xs uppercase text-white/60 tracking-wider">Mais Leads Ano a Ano</div>
                </div>
                <div>
                  <div className="font-bebas text-4xl text-yellow leading-none mb-1">116%</div>
                  <div className="text-xs uppercase text-white/60 tracking-wider">Crescimento de Volume</div>
                </div>
                <div>
                  <div className="font-bebas text-4xl text-yellow leading-none mb-1">15+</div>
                  <div className="text-xs uppercase text-white/60 tracking-wider">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
