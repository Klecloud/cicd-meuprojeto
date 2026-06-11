# CI/CD Pipeline — Portfólio

Pipeline de deploy automatizado usando GitHub Actions, Amazon ECR e EC2.

##  Fluxo do pipeline

`Push no GitHub` → `Testes automatizados` → `Docker build` → `Push ECR` → `Deploy EC2`

## Tecnologias

- **Node.js / Express** — API REST
- **Docker** — containerização
- **GitHub Actions** — CI/CD
- **Amazon ECR** — registry de imagens
- **Amazon EC2** — servidor de produção (free tier)

## O que o pipeline faz

1. A cada push na branch `main`, o pipeline é disparado automaticamente
2. Roda os testes unitários com Jest (com relatório de cobertura)
3. Faz build da imagem Docker e envia para o ECR
4. Conecta via SSH no EC2 e faz o deploy da nova versão
5. Verifica se a aplicação subiu corretamente via health check

## rodar localmente

```bash
npm install
npm test
npm start
# ou com Docker:
docker build -t cicd-portfolio .
docker run -p 3000:3000 cicd-portfolio
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/health` | Health check |
| GET | `/api/hello` | Mensagem de boas-vindas |
| GET | `/api/info` | Informações da aplicação |


-------------------------------------------------------------------------------------------------------------------------------



![erros ao realizar "commits" como se trata de um projeto grande alguns erros passaram mas logo foram corrigidos]

![A ideia final de criar um deploy automatizado deu certo e queria saber na prática como isso funcionava]src\image-1.png

![Aqui está o passo a passo ao realizar o deploy e esperar que todas as etapas estejam corretas]src\image.png

![Bastidores de um iniciante]src\ERROS.png


