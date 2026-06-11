# Imagem base leve
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia dependências primeiro (aproveita cache do Docker)
COPY package*.json ./
RUN npm ci --only=production

# Copia o código
COPY src/ ./src/

# Expõe a porta
EXPOSE 3000

# Usuário não-root (boa prática de segurança)
USER node

# Inicia a aplicação
CMD ["node", "src/server.js"]