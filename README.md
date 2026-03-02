# Performance Marketing Agency Website

Um site moderno de agência de marketing de performance em saúde, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para criar interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - Gerenciamento de estado e efeitos

## 📋 Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navbar fixa com menu mobile interativo
- ✅ Hero section com estatísticas
- ✅ Seção de clientes
- ✅ Informações sobre a agência
- ✅ Estudos de caso
- ✅ Serviços oferecidos
- ✅ CTA banner
- ✅ Processo de trabalho
- ✅ Depoimento de cliente
- ✅ FAQ com interatividade
- ✅ Artigos educacionais
- ✅ Formulário de contato
- ✅ Footer com links
- ✅ Scroll reveal animations
- ✅ Smooth scroll navigation

## 🛠️ Setup

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O projeto rodará em `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## � Deploy no Vercel

### Opção 1: Deploy com Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Opção 2: Deploy com GitHub

1. Fazer push para um repositório GitHub
2. Ir para [vercel.com](https://vercel.com)
3. Conectar repositório do GitHub
4. Vercel detectará automaticamente o Vite e fará deploy

### Opção 3: Deploy com Drag & Drop

1. Build local: `npm run build`
2. Ir para [vercel.com/new](https://vercel.com/new)
3. Arrastar a pasta `dist/` para deploy

### Configurações do Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`
- **Node.js Version**: 20.11.0

O arquivo `vercel.json` contém configurações principais de cache e rewrites.

## �📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LogosBar.tsx
│   ├── About.tsx
│   ├── CaseStudies.tsx
│   ├── Features.tsx
│   ├── CTABanner.tsx
│   ├── Process.tsx
│   ├── Testimonial.tsx
│   ├── FAQ.tsx
│   ├── Articles.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/               # React Hooks customizados
│   └── useScrollReveal.ts
├── App.tsx             # Componente principal
├── index.css           # Estilos Tailwind
└── main.tsx            # Entry point
```

## 🎨 Cores do Projeto

- **Amarelo**: #FFD100
- **Preto**: #000000
- **Branco**: #FFFFFF
- **Gray Mid**: #222222
- **Gray Dark**: #111111

## 📱 Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuração

### Tailwind CSS

As cores e fontes customizadas estão configuradas em `tailwind.config.js`:

- **Fonte Bebas Neue** - Títulos principais
- **Fonte Barlow** - Corpo do texto
- **Fonte Barlow Condensed** - Textos em caps

### PostCSS

Arquivo `postcss.config.js` com Tailwind CSS e Autoprefixer.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verifica erros com ESLint

## 🎯 Componentes Principais

### Header
Menu de navegação fixa com logo e links de navegação. Menu mobile responsivo ao ativar o hamburger.

### Hero
Seção de destaque com título, descrição e botões CTA. Inclui card com estatísticas importantes.

### FAQ
Sistema de perguntas frequentes com toggle de respostas. Inclui seção visual com informações sobre RevRx™.

### Contact Form
Formulário completo de contato com validação. Feedback visual ao enviar.

### Scroll Reveal
Animações de revelação ao scroll usando IntersectionObserver API.

## 🌐 Navegação

Links de navegação com scroll suave (smooth scroll) para as seções:
- Quem Ajudamos
- Serviços  
- Casos
- Sobre
- Contato

## 📧 Contato

Para dúvidas sobre o projeto, entre em contato através do formulário no site.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
