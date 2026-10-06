# Aula 12: Request e Response Avançados no NestJS 🔒

Este repositório contém o projeto desenvolvido na **Aula 12**, onde exploramos o controle avançado de requisições e respostas HTTP no NestJS. Utilizamos os decorators `@Headers()` e `@Res()` para ler cabeçalhos personalizados e manipular diretamente a resposta do Express (definindo status code e headers customizados).

---

## 📋 Conteúdo da Aula

- **Leitura de Headers (`@Headers`)**: Extração e validação do cabeçalho customizado `x-api-key`.
- **Manipulação Direta da Resposta (`@Res`)**: Injeção da interface `Response` do Express para controle total sobre a resposta HTTP.
- **Cabeçalhos de Resposta (`res.setHeader`)**: Definição do cabeçalho de resposta personalizado `x-auth-status`.
- **Controle de Status Code**: Retorno manual de respostas HTTP `200 OK` (Acesso Autorizado) e `403 Forbidden` (Acesso Negado).
- **Registro de Controllers**: Atualização do `AppModule` para mapear a nova rota `/secreto`.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js & TypeScript**
- **NestJS Framework**
- **Express** (via `@Res()` do NestJS)
- **Insomnia** (Cliente HTTP para testes de API)


# Testes no Insomnia
🟢 1. Acesso Concedido (200 OK)
Método: GET

URL: http://localhost:3000/secreto

Headers:

x-api-key: BOMBA-PATCH-2007

Response Header: x-auth-status: verificado

Response Body:

JSON
{
  "mensagem": "Acesso concedido",
  "timestamp": "2026-09-28T15:00:00.000Z"
}
🔴 2. Chave Inválida ou Ausente (403 Forbidden)
Método: GET

URL: http://localhost:3000/secreto

Headers: (Sem header ou com valor incorreto)

Response Body:

JSON
{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}
🚀 Como Executar
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run start:dev
Realize os testes no Insomnia:
Envie requisições para http://localhost:3000/secreto passando o header x-api-key.