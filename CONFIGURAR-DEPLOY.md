# 🚀 Guia: Configurar Deploy Automático GitHub + Vercel

## ✅ Passo 1: Autenticar no GitHub CLI

Execute no terminal do Cursor:

```bash
gh auth login
```

Siga as instruções:
1. Escolha **GitHub.com**
2. Escolha **HTTPS**
3. Escolha **Login with a web browser**
4. Copie o código que aparecer
5. Pressione Enter para abrir o navegador
6. Cole o código e autorize

## ✅ Passo 2: Conectar Repositório ao GitHub

**Opção A: Criar novo repositório e conectar**

```bash
# Execute este comando (substitua NOME_DO_REPO pelo nome do seu repositório)
gh repo create NOME_DO_REPO --public --source=. --remote=origin --push
```

**Opção B: Conectar a repositório existente**

```bash
# Se você já criou o repositório no GitHub, apenas conecte:
git remote add origin https://github.com/SEU_USERNAME/NOME_DO_REPO.git
git push -u origin main
```

## ✅ Passo 3: Autenticar no Vercel CLI

Execute no terminal:

```bash
vercel login
```

Siga as instruções:
1. Escolha **Login with GitHub**
2. Autorize no navegador

## ✅ Passo 4: Configurar Deploy Automático na Vercel

Execute no diretório do projeto:

```bash
vercel
```

Siga as instruções:
1. **Set up and deploy?** → Digite `Y`
2. **Which scope?** → Escolha sua conta
3. **Link to existing project?** → Digite `N` (primeira vez)
4. **What's your project's name?** → Digite o nome (ex: `apxlbs-site`)
5. **In which directory is your code located?** → Pressione Enter (./)
6. **Want to override the settings?** → Digite `N`

## ✅ Passo 5: Conectar ao GitHub para Deploy Automático

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique no seu projeto
3. Vá em **Settings** → **Git**
4. Clique em **Connect Git Repository**
5. Selecione seu repositório GitHub
6. Escolha a branch `main`
7. Clique em **Save**

**Pronto!** Agora, sempre que você fizer `git push`, o Vercel fará deploy automático! 🎉

## 🔄 Workflow de Desenvolvimento

Agora seu workflow é simples:

```bash
# 1. Fazer alterações no código

# 2. Commitar mudanças
git add .
git commit -m "Descrição da mudança"

# 3. Push para GitHub
git push

# 4. Vercel faz deploy automático! ✨
```

## 📝 Comandos Úteis

```bash
# Ver status do deploy
vercel ls

# Ver logs do deploy
vercel logs

# Fazer deploy de produção
vercel --prod

# Remover projeto da Vercel
vercel remove
```

## 🆘 Troubleshooting

**Problema: "Repository not found"**
- Verifique se o repositório existe no GitHub
- Verifique se você tem permissão de acesso

**Problema: "Authentication failed"**
- Execute `gh auth login` novamente
- Execute `vercel login` novamente

**Problema: Deploy não está acontecendo automaticamente**
- Verifique se conectou o Git no Settings do projeto Vercel
- Verifique se está fazendo push para a branch `main`
