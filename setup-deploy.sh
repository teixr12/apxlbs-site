#!/bin/bash

# Script para configurar deploy automático GitHub + Vercel
# Uso: ./setup-deploy.sh

set -e

echo "🚀 Configurando Deploy Automático GitHub + Vercel"
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se GitHub CLI está instalado
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI não encontrado. Instalando..."
    brew install gh
fi

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

echo ""
echo "${YELLOW}=== PASSO 1: Autenticação GitHub ===${NC}"
echo "Vamos autenticar no GitHub..."
echo ""

# Verificar se já está autenticado
if gh auth status &> /dev/null; then
    echo "✅ GitHub já está autenticado!"
    gh auth status
else
    echo "Por favor, autentique-se no GitHub:"
    gh auth login
fi

echo ""
echo "${YELLOW}=== PASSO 2: Conectar Repositório GitHub ===${NC}"
echo ""

# Verificar se já tem remote
if git remote get-url origin &> /dev/null; then
    echo "✅ Repositório já conectado:"
    git remote -v
    echo ""
    read -p "Deseja criar um novo repositório no GitHub? (s/N): " create_repo
    if [[ $create_repo =~ ^[Ss]$ ]]; then
        read -p "Nome do repositório: " repo_name
        read -p "Repositório público? (S/n): " is_public
        if [[ $is_public =~ ^[Nn]$ ]]; then
            gh repo create "$repo_name" --private --source=. --remote=origin --push
        else
            gh repo create "$repo_name" --public --source=. --remote=origin --push
        fi
    fi
else
    read -p "Nome do repositório no GitHub: " repo_name
    read -p "Repositório público? (S/n): " is_public
    if [[ $is_public =~ ^[Nn]$ ]]; then
        gh repo create "$repo_name" --private --source=. --remote=origin --push
    else
        gh repo create "$repo_name" --public --source=. --remote=origin --push
    fi
fi

echo ""
echo "${YELLOW}=== PASSO 3: Autenticação Vercel ===${NC}"
echo ""

# Verificar se já está autenticado na Vercel
if vercel whoami &> /dev/null; then
    echo "✅ Vercel já está autenticado!"
    vercel whoami
else
    echo "Por favor, autentique-se na Vercel:"
    vercel login
fi

echo ""
echo "${YELLOW}=== PASSO 4: Configurar Projeto na Vercel ===${NC}"
echo ""
echo "Vamos configurar o projeto na Vercel..."
echo "Siga as instruções na tela:"
echo ""

vercel

echo ""
echo "${GREEN}✅ Configuração concluída!${NC}"
echo ""
echo "📝 Próximos passos:"
echo "1. Acesse https://vercel.com/dashboard"
echo "2. Clique no seu projeto"
echo "3. Vá em Settings → Git"
echo "4. Clique em 'Connect Git Repository'"
echo "5. Selecione seu repositório GitHub"
echo "6. Escolha a branch 'main'"
echo "7. Clique em 'Save'"
echo ""
echo "🎉 Agora, sempre que você fizer 'git push', o Vercel fará deploy automático!"
