import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Process: React.FC = () => {
  const headerRef = useScrollReveal();
  const step1Ref = useScrollReveal();
  const step2Ref = useScrollReveal();
  const step3Ref = useScrollReveal();
  const step4Ref = useScrollReveal();

  const processSteps = [
    {
      num: '01',
      title: 'Alinhar com Seus Objetivos',
      desc: 'Não apenas metas de aquisição de pacientes, mas metas para suas linhas de serviço, regiões e localizações específicas. Nos aprofundamos desde o primeiro dia.',
      ref: step1Ref,
      delay: ''
    },
    {
      num: '02',
      title: 'Auditar Campanhas Existentes',
      desc: 'Fazer inventário de oportunidades de melhoria em todo o seu mix de mídia. Identificamos todos os problemas e desperdícios de orçamento.',
      ref: step2Ref,
      delay: 'reveal-delay-1'
    },
    {
      num: '03',
      title: 'Previsão & Análise',
      desc: 'Usamos metodologias avançadas de previsão para estruturar seus investimentos de marketing. Mostramos os próximos passos mais eficientes.',
      ref: step3Ref,
      delay: 'reveal-delay-2'
    },
    {
      num: '04',
      title: 'Criar Estratégia Personalizada',
      desc: 'Combinamos descobertas da auditoria, previsões e 15 anos de experiência em saúde para desenvolver uma estratégia digital única.',
      ref: step4Ref,
      delay: 'reveal-delay-3'
    }
  ];

  return (
    <section id="quem-ajudamos" className="bg-gray-900 px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-16">
          <div className="section-pretitle">Nosso Processo</div>
          <h2 className="section-title">Estratégias Personalizadas que <span>Impulsionam o Crescimento</span></h2>
          <p className="section-desc">
            Nunca aceite uma solução padronizada. Acelere o crescimento rápido com uma estratégia de marketing que guia o investimento no mix de mídia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-700">
          {processSteps.map((step, index) => (
            <div key={index} ref={step.ref} className={`reveal ${step.delay} bg-gray-mid p-12 relative`}>
              <div className="absolute top-4 right-6 font-bebas text-6xl text-yellow/15 leading-none pointer-events-none">
                {step.num}
              </div>
              <h3 className="font-barlow-condensed text-lg font-bold text-yellow uppercase tracking-wide mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
