import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useScrollReveal();
  const visualRef = useScrollReveal();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'O que é marketing em saúde?',
      a: 'O marketing em saúde tem como objetivo aumentar a conscientização sobre condições médicas e tratamentos, construir confiança com os pacientes e guiá-los em sua jornada para encontrar cuidado. Por meio de campanhas eficientes de busca paga, estratégias sociais centradas no paciente e uma abordagem full-funnel de busca orgânica, o marketing em saúde pode aumentar o engajamento, construir confiança e fortalecer sua marca.'
    },
    {
      q: 'Como aumentar o volume de pacientes?',
      a: 'Uma estratégia digital de marketing full-funnel é uma forma eficaz de aumentar o volume de pacientes. Conecte-se com eles em cada etapa de sua jornada com anúncios sociais envolventes e campanhas de PPC direcionadas. Para fomentar o crescimento orgânico, combine essas estratégias com um site responsivo e escalável totalmente otimizado para busca.'
    },
    {
      q: 'Quais são as principais estratégias de marketing em saúde?',
      a: 'As principais estratégias de marketing em saúde giram em torno da excelência digital e do engajamento do paciente. Fornecer uma experiência digital de alta qualidade por meio do seu site é crucial para atrair novos pacientes à sua prática. Aproveitar o SEO local e executar uma campanha eficiente do Google Ads aumentará sua visibilidade na web.'
    },
    {
      q: 'Por que médicos precisam de SEO e marketing digital?',
      a: 'O mercado de saúde é altamente competitivo; portanto, ter uma forte presença online é essencial. À medida que os pacientes dependem mais de fontes online do que de referências tradicionais, o marketing digital é crucial para médicos atraírem e reterem novos consumidores.'
    },
    {
      q: 'O que é uma jornada do paciente?',
      a: 'A jornada do paciente é o caminho do "cliente" de saúde — cada etapa que um paciente percorre, desde a pesquisa de sintomas e busca por um provedor de saúde online até marcar uma consulta, receber tratamento e acompanhamento pós-cuidado.'
    }
  ];

  return (
    <section className="bg-black px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* FAQ List */}
          <div>
            <div ref={titleRef} className="reveal mb-12">
              <div className="section-pretitle">Perguntas Frequentes</div>
              <h2 className="section-title mb-0">Tire Suas <span>Dúvidas</span></h2>
            </div>

            <div className="space-y-0 border-t border-gray-700">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-700 py-6 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center gap-4 hover:text-yellow transition-colors">
                    <button className="font-barlow-condensed text-lg font-bold uppercase tracking-wide text-left text-white hover:text-yellow transition-colors">
                      {faq.q}
                    </button>
                    <div className={`w-6 h-6 bg-yellow flex items-center justify-center text-black text-xs font-bold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="mt-4 text-sm leading-relaxed text-white/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div ref={visualRef} className="reveal bg-gray-mid p-12 border-l-4 border-yellow sticky top-20">
            <h3 className="font-bebas text-3xl text-yellow mb-4 tracking-wide">
              RevRx™
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Planejamento Estratégico que Parece Mágica, Funciona como Ciência. Pronto para passar do erro e acerto para o crescimento confiante?
            </p>
            <p className="text-sm leading-relaxed text-white/60 mb-8">
              RevRx™ é sua ferramenta definitiva de business intelligence para crescer o número de pacientes enquanto reduz custos de aquisição. Combinamos Media Mix Modeling (MMM) com profunda expertise em saúde.
            </p>
            <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-primary">
              Veja Como Funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
