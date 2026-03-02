import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Features: React.FC = () => {
  const headerRef = useScrollReveal();
  const feature1Ref = useScrollReveal();
  const feature2Ref = useScrollReveal();
  const feature3Ref = useScrollReveal();
  const feature4Ref = useScrollReveal();

  const features = [
    {
      icon: '📢',
      title: 'Mídia Paga',
      desc: 'Domine o espaço de anúncios. Google Ads, Meta Ads, Display, TikTok e mais.',
      ref: feature1Ref,
      delay: ''
    },
    {
      icon: '🔍',
      title: 'SEO & AISO',
      desc: 'Domine os resultados de busca. Estratégias otimizadas por IA para visibilidade máxima.',
      ref: feature2Ref,
      delay: 'reveal-delay-1'
    },
    {
      icon: '💻',
      title: 'Design de Sites',
      desc: 'Engaje as pessoas. Crie sites escaláveis que os pacientes adoram.',
      ref: feature3Ref,
      delay: 'reveal-delay-2'
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      desc: 'Supere a concorrência. Análises avançadas e Media Mix Modeling.',
      ref: feature4Ref,
      delay: 'reveal-delay-3'
    }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="bg-black px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-20 max-w-2xl mx-auto">
          <div className="section-pretitle text-center">O Que Fazemos</div>
          <h2 className="section-title text-center">
            Abandone o Mito de que <span>Uma Agência</span> Faz Tudo
          </h2>
          <p className="section-desc text-center mx-auto">
            Se você está procurando o discurso comum de agência, provavelmente não somos a combinação certa. A estratégia de aquisição de pacientes é a nossa única estratégia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-700">
          {features.map((feature, index) => (
            <div key={index} ref={feature.ref} className={`reveal ${feature.delay} bg-gray-mid p-12 text-center hover:bg-gray-mid/20 hover:translate-y-[-4px] transition-all duration-300`}>
              <div className="w-20 h-20 bg-yellow rounded-none flex items-center justify-center text-4xl mx-auto mb-6"></div>
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-barlow-condensed text-xl font-bold uppercase tracking-wide text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">{feature.desc}</p>
              <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="text-yellow text-xs font-bold uppercase tracking-widest hover:border-b hover:border-yellow transition-all">
                Saiba Mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
