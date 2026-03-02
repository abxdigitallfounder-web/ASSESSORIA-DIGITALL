# 🚀 Quick Start Guide

## Começar Rapidamente

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar Dev Server
```bash
npm run dev
```

Abra `http://localhost:5173` no seu navegador.

### 3. Fazer Alterações
Os arquivos dos componentes estão em `src/components/`

## 📝 Adicionando Novo Conteúdo

### Adicionar Seção
1. Crie um novo arquivo em `src/components/NovaSecao.tsx`
2. Importe em `App.tsx`
3. Adicione o componente no JSX

Exemplo:
```tsx
// src/components/NovaSecao.tsx
import React from 'react';

export const NovaSecao: React.FC = () => {
  return (
    <section className="px-5% py-20 md:py-28">
      {/* Conteúdo */}
    </section>
  );
};
```

### Usar Scroll Reveal
```tsx
import { useScrollReveal } from '../hooks/useScrollReveal';

const ref = useScrollReveal();
return <div ref={ref} className="reveal">Conteúdo</div>;
```

## 🎨 Tailwind Classes Customizadas

### Botões
- `.btn-primary` - Botão amarelo com background
- `.btn-outline` - Botão com borda amarela
- `.btn-black` - Botão preto com texto amarelo

### Textos
- `.section-pretitle` - Subtítulo pequeno em amarelo
- `.section-title` - Título grande em Bebas Neue
- `.section-desc` - Descrição com cor cinza

### Animações
- `.reveal` - Classe base para scroll reveal
- `.reveal.visible` - Aplicado ao scroll reveal
- `.reveal-delay-1/2/3/4` - Delays para animações em cascata

## 🔍 Variáveis de Tailwind

Cores disponíveis:
- `bg-yellow` / `text-yellow`
- `bg-black` / `text-black`
- `bg-white` / `text-white`
- `bg-gray-mid` / `bg-gray-800` / `bg-gray-900`

Fontes:
- `font-bebas` - Títulos
- `font-barlow` - Corpo
- `font-barlow-condensed` - Textos em caps

## 📱 Responsividade

- Use `md:` para tablets (768px+)
- Use `lg:` para desktop (1024px+)

Exemplo:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🐛 Troubleshooting

### Tailwind Classes não funcionam
- Verifique se o arquivo está em `src/`
- Restarted dev server é às vezes necessário

### Scroll Reveal não funciona
- Certifique-se que useScrollReveal() foi importado
- Adicione `className="reveal"` ao elemento div

## 📦 Build para Produção

```bash
npm run build
```

Arquivos compilados em `dist/`

## 🚢 Deploy

A pasta `dist/` pode ser enviada para qualquer hosting estático:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

---

**Bom desenvolvimento! 🎉**
