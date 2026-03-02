import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contact: React.FC = () => {
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="bg-black px-5% py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Contact Info */}
          <div ref={infoRef} className="reveal">
            <div className="section-pretitle">Vamos Começar</div>
            <h2 className="section-title">
              Preparado, <span>Vamos Crescer.</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/70 mb-5">
              Crescimento não precisa ser difícil. Deixe-nos ajudar você a escalar sua organização com serviços de marketing de performance que eliminam as suposições do crescimento.
            </p>
            <p className="text-lg leading-relaxed text-white/70 mb-10">
              Começaremos com suas metas de negócios e orçamento, depois ajudaremos a encontrar a estratégia digital certa para gerar resultados reais.
            </p>

            <div className="space-y-4">
              {[
                'Estratégia personalizada para seu mercado e objetivos',
                'Expertise profunda em saúde e marketing digital',
                'Conformidade LGPD e segurança de dados garantida',
                'Resultados mensuráveis e relatórios transparentes'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-sm text-white/70">
                  <div className="w-10 h-10 bg-yellow text-black flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="reveal">
            <form className="bg-gray-mid p-12 border-t-4 border-yellow" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  Nome*
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  Sobrenome*
                </label>
                <input
                  type="text"
                  placeholder="Seu sobrenome"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  E-mail Corporativo*
                </label>
                <input
                  type="email"
                  placeholder="seu@empresa.com.br"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  Telefone*
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  Empresa*
                </label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                  Site*
                </label>
                <input
                  type="text"
                  placeholder="www.suaempresa.com.br"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                Orçamento Mensal de Marketing Digital*
              </label>
              <select required className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm">
                <option value="">Selecione o orçamento</option>
                <option>R$ 10.000 – R$ 50.000</option>
                <option>R$ 50.001 – R$ 150.000</option>
                <option>R$ 150.001 – R$ 500.000</option>
                <option>R$ 500.001 – R$ 1.000.000</option>
                <option>R$ 1.000.000+</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                Como podemos ajudar?*
              </label>
              <textarea
                placeholder="Descreva seus objetivos e desafios..."
                required
                className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm h-32 resize-none"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                Como nos encontrou?
              </label>
              <input
                type="text"
                placeholder="Google, indicação, etc."
                className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-3 focus:border-yellow focus:outline-none transition-colors text-sm"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 font-bold text-base uppercase tracking-widest transition-all duration-200 ${
                submitted
                  ? 'bg-green-600 text-white'
                  : 'bg-yellow text-black hover:bg-yellow/90 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-yellow/30'
              }`}
            >
              {submitted ? 'Mensagem Enviada! ✓' : 'Enviar Mensagem'}
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
