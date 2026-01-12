#!/bin/bash

# Script para conectar o projeto ao repositório GitHub
# Uso: ./setup-github.sh SEU_USERNAME NOME_DO_REPOSITORIO

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "❌ Erro: Você precisa fornecer seu username do GitHub e o nome do repositório"
  echo ""
  echo "Uso: ./setup-github.sh SEU_USERNAME NOME_DO_REPOSITORIO"
  echo ""
  echo "Exemplo: ./setup-github.sh rodrigoteixeira apxlbs-site"
  exit 1
fi

USERNAME=$1
REPO_NAME=$2

echo "🔗 Conectando ao repositório GitHub..."
git remote add origin https://github.com/$USERNAME/$REPO_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$USERNAME/$REPO_NAME.git

echo "📤 Enviando código para o GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Sucesso! Seu projeto está no GitHub:"
  echo "   https://github.com/$USERNAME/$REPO_NAME"
  echo ""
  echo "🚀 Próximos passos:"
  echo "   1. Acesse https://vercel.com e faça login com GitHub"
  echo "   2. Clique em 'Add New Project'"
  echo "   3. Selecione o repositório '$REPO_NAME'"
  echo "   4. Clique em 'Deploy'"
  echo ""
else
  echo ""
  echo "⚠️  Erro ao fazer push. Verifique se:"
  echo "   - O repositório existe no GitHub"
  echo "   - Você tem permissão para fazer push"
  echo "   - Você está autenticado no GitHub (git config ou GitHub CLI)"
  echo ""
fi
