# 🎯 Próximos Passos - Deploy Automático

Você já conectou o GitHub ao Cursor! Agora vamos conectar o repositório e configurar o deploy automático.

## ✅ Passo 1: Autenticar GitHub CLI no Terminal

No terminal do Cursor, execute:

```bash
gh auth login
```

**Quando aparecer o código (ex: `2068-E6A0`):**
1. Copie o código
2. Abra o link no navegador: https://github.com/login/device
3. Cole o código
4. Autorize o acesso

---

## ✅ Passo 2: Criar ou Conectar Repositório GitHub

### Opção A: Criar novo repositório no GitHub

```bash
gh repo create apxlbs-site --public --source=. --remote=origin --push
```

Isso vai:
- Criar um repositório público chamado `apxlbs-site`
- Conectar ao seu projeto local
- Fazer push de todo o código

**Para criar privado:**
```bash
gh repo create apxlbs-site --private --source=. --remote=origin --push
```

### Opção B: Conectar a repositório existente

Se você já criou o repositório no GitHub manualmente:

```bash
git remote add origin https://github.com/SEU_USERNAME/NOME_DO_REPO.git
git push -u origin main
```

---

## ✅ Passo 3: Configurar Vercel para Deploy Automático

### 3.1 Autenticar na Vercel

```bash
vercel login
```

Escolha **"Login with GitHub"** e autorize.

### 3.2 Configurar projeto

```bash
vercel
```

Siga as instruções (geralmente só pressione Enter para aceitar padrões).

### 3.3 Conectar GitHub para Deploy Automático

1. Acesse: **https://vercel.com/dashboard**
2. Clique no seu projeto (`apxlbs-site` ou o nome que você escolheu)
3. Vá em **Settings** → **Git**
4. Clique em **"Connect Git Repository"**
5. Selecione seu repositório GitHub
6. Escolha a branch **`main`**
7. Clique em **"Save"**

---

## 🎉 Pronto!

Agora, sempre que você fizer:

```bash
git add .
git commit -m "Minha mudança"
git push
```

O Vercel fará deploy automático! ✨

---

## 🔍 Verificar Status

```bash
# Verificar GitHub
gh auth status
gh repo view

# Verificar Vercel
vercel whoami
vercel ls
```

---

## 📝 Resumo Rápido

1. ✅ GitHub conectado ao Cursor (já feito!)
2. ⏳ Autenticar `gh auth login` no terminal
3. ⏳ Criar/conectar repositório: `gh repo create ...`
4. ⏳ Autenticar Vercel: `vercel login`
5. ⏳ Configurar projeto: `vercel`
6. ⏳ Conectar Git no dashboard Vercel
