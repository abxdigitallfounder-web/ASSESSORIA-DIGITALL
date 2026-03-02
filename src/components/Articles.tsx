import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Articles: React.FC = () => {
  const titleRef = useScrollReveal();
  const article1Ref = useScrollReveal();
  const article2Ref = useScrollReveal();
  const article3Ref = useScrollReveal();
  const article4Ref = useScrollReveal();

  const articles = [
    {
      tag: 'Artigo',
      title: 'A Estratégia Meta que Reduziu Custos de Aquisição em 73%',
      excerpt: 'A geração de leads no Meta mudou, mas a maioria dos funis não. Este estudo de caso mostra como a reestruturação para intenção e qualificação reduziu custos significativamente.',
      placeholder: 'A Estratégia Meta',
      ref: article1Ref,
      delay: ''
    },
    {
      tag: 'Artigo',
      title: 'Estratégia de Mídia Paga em 5 Passos para Atrair Pacientes Ideais',
      excerpt: 'Táticas avançadas e dicas para melhorar o desempenho de mídia paga e aumentar o volume de leads qualificados em saúde.',
      placeholder: 'Estratégia de Mídia Paga',
      ref: article2Ref,
      delay: 'reveal-delay-1'
    },
    {
      tag: 'Artigo',
      title: 'Privacidade em Primeiro Lugar: Tecnologias de Marketing com Conformidade LGPD',
      excerpt: 'Profissionais de marketing em saúde devem encontrar o equilíbrio entre estratégias eficazes e regras rígidas de privacidade.',
      placeholder: 'Conformidade LGPD',
      ref: article3Ref,
      delay: 'reveal-delay-2'
    },
    {
      tag: 'Artigo',
      title: 'Por que o Marketing Orientado por Capacidade é Inegociável',
      excerpt: 'Se você está fazendo marketing sem visibilidade da capacidade do provedor, não está apenas desperdiçando orçamento — está frustrando pacientes.',
      placeholder: 'Marketing por Capacidade',
      ref: article4Ref,
      delay: 'reveal-delay-3'
    }
  ];

  return (
    <section className="bg-gray-900 px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-pretitle">Recursos Educacionais</div>
          <h2 className="section-title">
            <span>Insights</span> e Estratégias para Impulsionar seu Crescimento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-700">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={article.ref}
              className={`reveal ${article.delay}`}
            >
              <a
                href="#"
                className={`bg-gray-mid overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 block`}
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="font-bebas text-4xl text-yellow/15 uppercase tracking-widest text-center px-4">
                    {article.placeholder}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-yellow mb-3">
                    {article.tag}
                  </div>
                  <h3 className="font-barlow-condensed text-xl font-bold text-white mb-3 leading-snug uppercase tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <div className="text-xs font-bold text-yellow uppercase tracking-widest">
                    Ler Mais →
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
