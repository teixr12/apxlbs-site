# APXLBS Site

Site landing page pixel-perfect com suporte multi-idioma (EN/PT/ES).

## 🚀 Guia Completo: Cursor + GitHub + Vercel

### PASSO 1: Instalar Cursor

1. Acesse [cursor.sh](https://cursor.sh)
2. Baixe para seu sistema (Mac/Windows/Linux)
3. Instale e abra o Cursor
4. Faça login (pode usar conta GitHub)

### PASSO 2: Abrir o Projeto no Cursor

1. No Cursor: `File > Open Folder`
2. Selecione a pasta `apxlbs-final`
3. Abra o terminal integrado: `View > Terminal` (ou Ctrl+`)

### PASSO 3: Instalar Dependências

No terminal do Cursor:

```bash
npm install
```

### PASSO 4: Testar Localmente

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### PASSO 5: Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome: `apxlbs-site` (ou outro de sua preferência)
3. Deixe **público** ou **privado**
4. **NÃO** marque "Add a README file"
5. Clique "Create repository"

### PASSO 6: Push para GitHub

**Opção 1: Usando o script automático (Recomendado)**

No terminal do Cursor:

```bash
# Execute o script (substitua SEU_USERNAME e NOME_DO_REPOSITORIO)
./setup-github.sh SEU_USERNAME NOME_DO_REPOSITORIO

# Exemplo:
# ./setup-github.sh rodrigoteixeira apxlbs-site
```

**Opção 2: Manualmente**

Se preferir fazer manualmente:

```bash
# Conectar ao repositório (SUBSTITUA pelo seu username e nome do repositório)
git remote add origin https://github.com/SEU_USERNAME/NOME_DO_REPOSITORIO.git

# Enviar para GitHub
git push -u origin main
```

> **Nota:** O Git já está inicializado e o commit inicial já foi feito! Você só precisa conectar ao seu repositório GitHub.

### PASSO 7: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique **"Add New..."** > **"Project"**
3. Selecione o repositório `apxlbs-site`
4. Configurações (automáticas, não precisa mudar):
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique **"Deploy"**
6. Aguarde ~1 minuto
7. ✅ Seu site estará em `https://apxlbs-site.vercel.app` (ou nome similar)

---

## 🔄 Workflow de Desenvolvimento

Depois do setup inicial, o workflow fica assim:

```bash
# 1. Fazer alterações no código (usando Cursor)

# 2. Salvar arquivos (Ctrl+S)

# 3. Ver preview local (npm run dev já rodando)

# 4. Quando satisfeito, commitar:
git add .
git commit -m "Descrição da mudança"
git push

# 5. Vercel faz deploy automático! 🎉
```

---

## 📁 Estrutura do Projeto

```
apxlbs-final/
├── index.html          # HTML principal
├── package.json        # Dependências
├── vite.config.js      # Config do Vite
├── public/
│   └── favicon.svg     # Ícone do site
└── src/
    ├── main.jsx        # Entry point
    ├── App.jsx         # Componente principal
    ├── App.css         # Todos os estilos
    └── i18n/
        ├── en.json     # Inglês
        ├── pt.json     # Português
        └── es.json     # Espanhol
```

---

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS no início do `src/App.css`:

```css
:root {
  --primary: #FF6B35;        /* Laranja principal */
  --primary-dark: #E55A2B;   /* Laranja escuro */
  --bg: #0A0A0A;             /* Fundo */
  /* ... */
}
```

### Alterar Textos

Edite os arquivos JSON em `src/i18n/`:
- `en.json` - Inglês
- `pt.json` - Português  
- `es.json` - Espanhol

### Adicionar Novo Idioma

1. Crie `src/i18n/fr.json` (exemplo: francês)
2. Em `App.jsx`, importe: `import fr from './i18n/fr.json'`
3. Adicione ao objeto: `const translations = { en, pt, es, fr }`
4. Adicione ao langNames: `const langNames = { ..., fr: 'Français' }`

---

## 🛠 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Preview do build local |

---

## 💡 Dicas para Cursor

### Usar IA do Cursor

1. Selecione código que quer modificar
2. Pressione `Cmd+K` (Mac) ou `Ctrl+K` (Windows)
3. Descreva o que quer fazer
4. Cursor gera o código automaticamente

### Exemplos de Prompts

- "Adicione um efeito hover neste botão"
- "Torne esta seção responsiva para mobile"
- "Crie uma nova seção de parceiros"
- "Mude a cor primária para azul"

---

## 🌐 Domínio Personalizado

Depois do deploy na Vercel:

1. Vá em Settings > Domains
2. Clique "Add"
3. Digite seu domínio (ex: `apxlbs.com`)
4. Configure os DNS conforme instruções
5. SSL é automático ✅

---

## 📞 Suporte

- [Documentação Vite](https://vitejs.dev)
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Cursor](https://cursor.sh/docs)

---

Desenvolvido com ❤️ para APXLBS
