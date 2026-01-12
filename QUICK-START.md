# ⚡ Quick Start - Deploy Automático

## 🎯 Método Rápido (Recomendado)

Execute este comando no terminal do Cursor:

```bash
./setup-deploy.sh
```

O script vai guiá-lo através de todo o processo!

---

## 📋 Método Manual (Passo a Passo)

### 1️⃣ Autenticar no GitHub

```bash
gh auth login
```

**Escolha:**
- `GitHub.com`
- `HTTPS`
- `Login with a web browser`
- Copie o código e autorize no navegador

### 2️⃣ Criar/Conecar Repositório

**Criar novo:**
```bash
gh repo create apxlbs-site --public --source=. --remote=origin --push
```

**Ou conectar existente:**
```bash
git remote add origin https://github.com/SEU_USERNAME/NOME_DO_REPO.git
git push -u origin main
```

### 3️⃣ Autenticar na Vercel

```bash
vercel login
```

Escolha **Login with GitHub** e autorize.

### 4️⃣ Configurar Projeto Vercel

```bash
vercel
```

Siga as instruções (geralmente só pressione Enter para aceitar padrões).

### 5️⃣ Conectar GitHub para Deploy Automático

1. Acesse: https://vercel.com/dashboard
2. Clique no seu projeto
3. **Settings** → **Git**
4. **Connect Git Repository**
5. Selecione seu repositório
6. Branch: `main`
7. **Save**

**Pronto!** 🎉 Agora cada `git push` faz deploy automático!

---

## 🔍 Verificar Status

```bash
# GitHub
gh auth status
gh repo view

# Vercel
vercel whoami
vercel ls
```
