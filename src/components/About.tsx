import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About: React.FC = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="bg-gray-800 px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Visual Section */}
          <div ref={ref1} className="reveal">
            <div className="bg-yellow p-16 mb-0.5 flex items-center justify-center min-h-48">
              <div className="font-bebas text-4xl md:text-5xl text-black text-center leading-tight tracking-wide">
                ESTRATÉGIAS<br/>DE PRÓXIMO<br/>NÍVEL
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0.5 bg-gray-700">
              {[
                { num: '400+', label: 'Localizações Atendidas' },
                { num: '15', label: 'Anos de Experiência' },
                { num: '100%', label: 'Foco em Saúde' },
                { num: 'MMM', label: 'Media Mix Modeling' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-mid border-b border-r border-gray-700 last:border-r-0 p-7">
                  <div className="font-bebas text-3xl text-yellow leading-none mb-1">{item.num}</div>
                  <div className="text-xs uppercase text-white/60 tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div ref={ref2} className="reveal reveal-delay-2">
            <div className="section-pretitle">Sobre Nós</div>
            <h2 className="section-title">Estratégias de <span>Próximo Nível</span> para Crescimento de Pacientes</h2>
            <p className="text-lg leading-relaxed text-white/70 mb-5">
              Descubra o futuro do marketing em saúde. Nossa combinação única de estratégias baseadas em dados, profunda expertise no setor e ferramentas de ponta como Media Mix Modeling capacita você a otimizar investimentos, impulsionar o crescimento e conectar pacientes ao cuidado — com confiança.
            </p>
            <p className="text-lg leading-relaxed text-white/70 mb-8">
              Não aceitamos o lugar-comum das agências. A estratégia de aquisição de pacientes é nossa única estratégia. Com a nossa agência, você recebe expertise profunda em saúde, estratégias de mídia personalizadas e inovação incansável.
            </p>
            <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-primary">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
