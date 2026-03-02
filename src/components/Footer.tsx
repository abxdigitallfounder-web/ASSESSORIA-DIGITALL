import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = {
    'Quem Ajudamos': [
      'Grupos Multi-Unidades',
      'Saúde Mental',
      'Clínicas Odontológicas',
      'Sistemas de Saúde',
      'Atenção Primária',
      'Medicina Veterinária',
      'Private Equity',
      'Dermatologia'
    ],
    'Serviços': [
      'Mídia Paga',
      'Creative de Performance',
      'SEO & AISO',
      'Design de Sites',
      'Estratégia de Aquisição',
      'Business Intelligence',
      'RevRx™'
    ],
    'Empresa': [
      'Sobre Nós',
      'Blog',
      'Estudos de Caso',
      'Webinars & Eventos',
      'Podcast',
      'Carreiras',
      'Estágios',
      'Contato'
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 px-5% py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow flex items-center justify-center text-black font-bold">P</div>
              <span className="font-bebas text-2xl text-yellow tracking-wider">PERFORMANCE</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Agência especializada em marketing de performance em saúde, focada em impulsionar o crescimento para grupos de provedores com múltiplas unidades.
            </p>
          </div>

          {/* Columns */}
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-barlow-condensed text-sm font-bold uppercase tracking-widest text-yellow mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={title === 'Empresa' && link === 'Contato' ? '#contato' : '#'}
                      onClick={(e) => {
                        if (title === 'Empresa' && link === 'Contato') {
                          scrollToSection(e, '#contato');
                        }
                      }}
                      className="text-sm text-white/50 hover:text-yellow transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/30">
            Copyright © 2026 Performance Marketing. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <div className="flex gap-3">
              {['in', '▶', '♪'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 bg-gray-800 border border-gray-700 flex items-center justify-center text-white/50 hover:bg-yellow hover:text-black hover:border-yellow transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
