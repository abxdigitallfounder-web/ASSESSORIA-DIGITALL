import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-yellow px-5% h-[70px] flex items-center justify-between transition-all">
      <a href="#" className="flex items-center gap-3">
        <div className="w-11 h-11 bg-yellow flex items-center justify-center text-black font-bold">P</div>
        <span className="font-bebas text-2xl text-yellow tracking-wider">PERFORMANCE</span>
      </a>

      <nav className="hidden md:flex gap-8 items-center">
        <a href="#quem-ajudamos" onClick={(e) => scrollToSection(e, '#quem-ajudamos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">
          Quem Ajudamos
        </a>
        <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">
          Serviços
        </a>
        <a href="#casos" onClick={(e) => scrollToSection(e, '#casos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">
          Casos
        </a>
        <a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">
          Sobre
        </a>
        <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-primary !py-2 !px-5 !text-xs">
          Fale Conosco
        </a>
      </nav>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col gap-1 p-1"
      >
        <span className={`w-7 h-1 bg-yellow transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-7 h-1 bg-yellow transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-7 h-1 bg-yellow transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {mobileMenuOpen && (
        <nav className="absolute top-[70px] left-0 right-0 flex flex-col bg-black/98 border-b-2 border-yellow p-8 gap-4">
          <a href="#quem-ajudamos" onClick={(e) => scrollToSection(e, '#quem-ajudamos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow">Quem Ajudamos</a>
          <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow">Serviços</a>
          <a href="#casos" onClick={(e) => scrollToSection(e, '#casos')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow">Casos</a>
          <a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')} className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow">Sobre</a>
          <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="btn-primary !py-2 !px-5 !text-xs">Fale Conosco</a>
        </nav>
      )}
    </header>
  );
};
