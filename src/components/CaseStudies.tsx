import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CaseStudies: React.FC = () => {
  const titleRef = useScrollReveal();
  const case1Ref = useScrollReveal();
  const case2Ref = useScrollReveal();
  const case3Ref = useScrollReveal();

  const cases = [
    {
      num: '77%',
      metric: 'aumento na taxa de conversão',
      desc: 'O maior grupo de fisioterapia do país atinge metas de capacidade com estratégia de PPC baseada em dados.',
      brand: 'ATI Physical Therapy',
      ref: case1Ref,
      delay: ''
    },
    {
      num: '54%',
      metric: 'aumento total de leads ano a ano',
      desc: 'Estratégia de mídia paga escalável para rede veterinária com mais de 400 localizações.',
      brand: 'SVP Veterinary',
      ref: case2Ref,
      delay: 'reveal-delay-1'
    },
    {
      num: '116%',
      metric: 'aumento no volume de leads',
      desc: 'DSO em crescimento aumenta volume de leads com nova estratégia holística de marketing de performance.',
      brand: 'Peak Dental',
      ref: case3Ref,
      delay: 'reveal-delay-2'
    }
  ];

  return (
    <section id="casos" className="bg-gray-900 px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-pretitle text-center">Estudos de Caso</div>
          <h2 ref={titleRef} className="reveal section-title text-center">
            Histórias de Crescimento em Saúde para <span>Inveja</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-700">
          {cases.map((caseItem, index) => (
            <div key={index} ref={caseItem.ref} className={`reveal ${caseItem.delay} bg-gray-mid p-12 relative hover:translate-y-[-6px] transition-transform duration-300 cursor-pointer`}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow"></div>
              <div className="font-bebas text-6xl text-yellow leading-none mb-1">{caseItem.num}</div>
              <div className="text-xs uppercase text-white/50 tracking-wider mb-6">{caseItem.metric}</div>
              <p className="text-base leading-relaxed text-white/75 mb-6">{caseItem.desc}</p>
              <div className="font-barlow-condensed text-lg font-bold text-yellow uppercase tracking-widest">{caseItem.brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
