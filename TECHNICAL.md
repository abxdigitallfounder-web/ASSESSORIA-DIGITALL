# Performance Marketing Agency - Documentação Técnica

## 📖 Visão Geral

Este é um site moderno para uma agência de marketing de performance em saúde, desenvolvido com React 18, TypeScript, Vite como bundler e Tailwind CSS para estilização.

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│         App.tsx (Main Component)        │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┴──────────┬────────────┬─────────────┬─────────────┐
    │                     │            │             │             │
┌───▼────────────┐  ┌───▼──┐  ┌──────▼──┐  ┌──────▼───┐  ┌──────▼──┐
│    Header      │  │ Hero │  │LogosBar │  │  About   │  │ CaseStudies
└────────────────┘  └──────┘  └─────────┘  └──────────┘  └─────────┘
```

## 📂 Estrutura de Pastas

```
src/
├── components/          # 13 componentes React
│   ├── Header.tsx       # Navegação fixa com menu mobile
│   ├── Hero.tsx         # Seção hero com CTA
│   ├── LogosBar.tsx     # Bar de logos de clientes
│   ├── About.tsx        # Informações sobre agência
│   ├── CaseStudies.tsx  # Estudos de caso (3 cards)
│   ├── Features.tsx     # Serviços (4 cards)
│   ├── CTABanner.tsx    # Banner CTA amarelo
│   ├── Process.tsx      # Processo (4 steps)
│   ├── Testimonial.tsx  # Depoimento de cliente
│   ├── FAQ.tsx          # FAQ com toggle
│   ├── Articles.tsx     # Artigos educacionais
│   ├── Contact.tsx      # Formulário de contato
│   ├── Footer.tsx       # Footer com links
│   └── index.ts         # Barrel export
├── hooks/
│   └── useScrollReveal.ts # Hook para scroll animations
├── App.tsx              # Componente raiz
├── index.css            # Estilos Tailwind
├── main.tsx             # Entry point
└── vite-env.d.ts        # Tipos Vite
```

## 🎯 Componentes Principais

### Header
- **Props**: Nenhuma
- **Estado**: `mobileMenuOpen` (boolean)
- **Funcionalidades**: 
  - Menu de navegação responsivo
  - Hamburger menu para mobile
  - Smooth scroll para seções

### Hero
- **Props**: Nenhuma
- **Funcionalidades**:
  - Hero content com título e descrição
  - Card com estatísticas
  - Gradientes de fundo (decorativos)

### FAQ
- **Props**: Nenhuma
- **Estado**: `openIndex` (number | null)
- **Funcionalidades**:
  - Toggle de respostas com animação
  - Card sticky com RevRx™ info

### Contact
- **Props**: Nenhuma
- **Estado**: `submitted` (boolean)
- **Funcionalidades**:
  - Formulário com validação HTML
  - Feedback visual após submissão

## 🎨 Sistema de Design

### Cores
```css
--yellow: #FFD100
--black: #000000
--white: #ffffff
--gray-mid: #222222
--gray-dark: #111111
--gray-900: #050505
--gray-800: #0a0a0a
--gray-700: #1a1a1a
```

### Tipografia
- **Bebas Neue**: Títulos principais, números
- **Barlow**: Corpo do texto
- **Barlow Condensed**: Textos em caps, labels

### Espaçamento
- Seções: `py-20 md:py-28` (80px - 112px)
- Lateral: `px-5%` (5% do viewport)
- Grid gap: `gap-0.5` (2px), `gap-4`, `gap-6`

## 🔄 Animações

### Scroll Reveal
```tsx
import { useScrollReveal } from '../hooks/useScrollReveal';

const ref = useScrollReveal();
return <div ref={ref} className="reveal">Conteúdo</div>;
```

**Como funciona**:
- Hook usa IntersectionObserver API
- Adiciona classe `.visible` ao scroll
- CSS define animação (opacity + translate)

### Classes de Delay
```css
.reveal-delay-1 { --tw-transition-delay: 0.1s; }
.reveal-delay-2 { --tw-transition-delay: 0.2s; }
.reveal-delay-3 { --tw-transition-delay: 0.3s; }
.reveal-delay-4 { --tw-transition-delay: 0.4s; }
```

## 🖱️ Interatividade

### Smooth Scroll
```tsx
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Mobile Menu Toggle
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
```

## 📱 Responsive Design

```
Mobile: max-width: 767px
├── Single column layouts
├── Hidden visual elements
└── Responsive typography

Tablet: 768px - 1023px
├── 2-column grids
├── Modified spacing
└── Adjusted font sizes

Desktop: min-width: 1024px
├── 3-4 column grids
├── Full spacing
└── Optimized layout
```

## 🔗 Navegação

**Links principais de scroll**:
- `#inicio` - Hero
- `#quem-ajudamos` - Process
- `#servicos` - Features
- `#casos` - Case Studies
- `#sobre` - About
- `#contato` - Contact form

## 🛠️ Customização

### Adicionar Nova Seção

1. Crie arquivo: `src/components/NovaSeccao.tsx`
```tsx
import React from 'react';

export const NovaSeccao: React.FC = () => {
  return <section className="px-5% py-20 md:py-28">{/* Conteúdo */}</section>;
};
```

2. Importe em `App.tsx`:
```tsx
import { NovaSeccao } from './components/NovaSeccao';
```

3. Adicione ao JSX:
```tsx
<NovaSeccao />
```

### Modificar Cores

**tailwind.config.js**:
```js
extend: {
  colors: {
    yellow: '#FFD100',
    // Adicione cores aqui
  }
}
```

### Adicionar Fonte

**tailwind.config.js**:
```js
fontFamily: {
  bebas: ['Bebas Neue', 'sans-serif'],
  // Adicione fontes aqui
}
```

**index.css** (atualizar @import):
```css
@import url('https://fonts.googleapis.com/css2?family=NovaFonte:wght@400;700&display=swap');
```

## 🚀 Performance

### Otimizações
- Tailwind CSS purge automático (production)
- Code splitting com Vite
- Lazy loading implícito com IntersectionObserver
- Minimal JavaScript (~225KB gzipped)

### Bundle Size
```
CSS:  21.56 kB (gzipped: 4.39 kB)
JS:   225.64 kB (gzipped: 68.45 kB)
HTML: 0.50 kB (gzipped: 0.33 kB)
```

## 🔒 Type Safety

- TypeScript strict mode ativado
- Props tipadas em todos os componentes
- Hooks customizados com tipagem completa
- Sem `any` types

## 📋 Checklist de Manutenção

- [ ] Atualizar React regularmente
- [ ] Revisar Tailwind CSS updates
- [ ] Testar responsividade em novos breakpoints
- [ ] Validar acessibilidade (a11y)
- [ ] Testar em múltiplos browsers
- [ ] Otimizar imagens quando adicionadas
- [ ] Manter tipos TypeScript atualizados

## 🐛 Common Issues

### Tailwind classes não funcionam
**Solução**: Certifique-se que o arquivo está em `src/` e configurado em `tailwind.config.js` content

### Scroll reveal não funciona
**Solução**: Verifique se `useScrollReveal()` foi importado e ref foi passado ao div

### Mobile menu não fecha
**Solução**: Verifique se `setMobileMenuOpen(false)` é chamado em links

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## 📧 Contato / Suporte

Por questões técnicas, consulte a documentação dos frameworks ou abra uma issue.

---

**Versão**: 1.0.0  
**Última atualização**: Março 2026  
**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
