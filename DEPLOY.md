# 🚀 Guia de Deployment no Vercel

## Preparação

### 1. Verificar Requisitos
- ✅ Node.js 18+ (recomendado 20.11.0)
- ✅ npm ou yarn
- ✅ Conta Vercel (criar em [vercel.com](https://vercel.com))
- ✅ Repositório Git (GitHub, GitLab, Bitbucket)

### 2. Verificar Build Local
```bash
npm install
npm run build
npm run preview
```

Se tudo funcionar localmente, está pronto para deploy.

---

## 3 Formas de Deploy

### 📌 FORMA 1: GitHub + Vercel (Recomendado)

Mais fácil e automatizado com CI/CD.

#### Passo 1: GitHub
```bash
# Inicializar repositório (se não existir)
git init
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub e fazer push
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/seu-repositorio.git
git push -u origin main
```

#### Passo 2: Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Escolha seu repositório
5. Framework será detectado automaticamente
6. Clique em "Deploy"

**Pronto! 🎉 Seu site estará em https://seu-dominio.vercel.app**

---

### 📌 FORMA 2: Vercel CLI

Alternativa rápida sem GitHub.

#### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

#### Passo 2: Deploy
```bash
vercel
```

#### Passo 3: Responder Prompts
```
? Set up and Deploy? Yes
? Which scope? [Seu nome]
? Link to existing project? No
? What's your project's name? performance-marketing-agency
? In which directory is your code? ./
? Want to make modifications to vercel.json? No
? Deploy? Yes
```

**Pronto! 🎉 URL do projeto será exibida**

---

### 📌 FORMA 3: Arrastar e Soltar (Mais Rápido)

Para testes rápidos ou deploy único.

#### Passo 1: Build Local
```bash
npm run build
```

#### Passo 2: Fazer Upload
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em "Drag and Drop"
3. Arraste a pasta `dist/` gerada
4. Aguarde o upload

**Pronto! 🎉 URL será exibida após upload**

---

## ⚙️ Configuração Vercel

### vercel.json
O arquivo `vercel.json` já contém:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Cache headers otimizados
- ✅ SPA rewrites (para React Router)

### .nvmrc
Especifica Node.js 20.11.0 para:
- ✅ Consistência entre dev e produção
- ✅ Compatibilidade garantida

### package.json
- ✅ Scripts build otimizados
- ✅ Dependências sem vulnerabilidades
- ✅ Version versionado para produção

---

## 🔍 Verificações Pré-Deploy

```bash
# 1. Instalar dependências limpas
rm -rf node_modules package-lock.json
npm install

# 2. Build de produção
npm run build

# 3. Verificar se dist/ foi criado
ls dist/

# 4. Verificar tamanho
du -sh dist/

# 5. Preview local
npm run preview
```

**Esperado:**
- ✅ Build sem erros
- ✅ Pasta `dist/` criada
- ✅ index.html em `dist/`
- ✅ Tamanho do bundle < 500KB

---

## 📊 Uma Vez Deployed

### Acessar Dashboard Vercel
1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto
3. Visualize:
   - 📈 Logs de build
   - 📊 Performance
   - 🌍 Deployment regions
   - 🔧 Environment variables

### Domínio Customizado
1. Settings → Domains
2. Adicione seu domínio personalizado
3. Siga as instruções de DNS

### Redeploy
```bash
# Com Vercel CLI
vercel --prod

# Com GitHub: push para main e Vercel faz automaticamente
git push origin main
```

---

## 🐛 Troubleshooting

### ❌ Erro: "Build failed"
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### ❌ Erro: "Module not found"
- Verificar imports em componentes
- Rodar `npm install` novamente
- Verificar se vendas Vercel tem Node.js v20+

### ❌ Site em branco
- Abrir DevTools (F12)
- Verificar Console para erros
- Verificar Network tab para assets

### ❌ CSS não carrega
- Verificar `dist/assets/` existe
- Verificar vercel.json está correto
- Hard refresh (Ctrl+Shift+R)

---

## ✅ Checklista Final

- [ ] Build local funciona: `npm run build`
- [ ] Projeto no GitHub
- [ ] Conta Vercel criada
- [ ] vercel.json configurado
- [ ] .nvmrc com versão Node.js
- [ ] Nenhum erro in console
- [ ] Imagens/assets carregam
- [ ] Responsivo em mobile
- [ ] Links funcionam
- [ ] Formulário funciona

---

## 📝 Próximos Passos

Após deploy bem-sucedido:
1. Testar em múltiplos browsers
2. Adicionar Google Analytics
3. Configurar domínio customizado
4. Ativar HTTPS (automático no Vercel)
5. Configurar CI/CD
6. Monitorar performance

---

## 🆘 Suporte Vercel

- Docs: https://vercel.com/docs
- Community: https://vercel.com/community
- Status: https://www.vercelstatus.com/

**Bom deployment! 🚀**
