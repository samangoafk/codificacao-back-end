# Aula 13: Middlewares e Interceptors com NestJS

Nesta aula, exploramos o conceito de **Middlewares** no NestJS para interceptar requisições HTTP antes que elas cheguem aos manipuladores de rota (*Controllers*). Implementamos um middleware personalizado de log e controle de acesso baseado em *headers*, atualizamos a estrutura principal do módulo da aplicação e realizamos testes de validação via **Insomnia**.

---

## 🛠️ Tecnologias e Conceitos Utilizados

- **NestJS**: Framework Node.js progressivo.
- **Middlewares**: Funções executadas antes do manipulador de rota ter acesso ao objeto de requisição (`req`) e resposta (`res`).
- **Express / TypeScript**: Tipagem de `Request`, `Response` e `NextFunction`.
- **Insomnia**: Cliente HTTP para testes de API.


## 🧪 Testes no Insomnia

Para validar o funcionamento da validação do middleware, foram testados os seguintes cenários de requisição no Insomnia:

### ❌ Cenário 1: Acesso Negado (Sem Header ou Role Incorreta)
- **Requisição**: `GET http://localhost:3000/`
- **Headers**: Nenhum ou `x-user-role: user`
- **Status Esperado**: `403 Forbidden`
- **Resposta**:
  ```json
  {
    "statusCode": 403,
    "message": "Acesso Negado: Privilégio de supervisor necessário.",
    "log": "2026-09-29T19:50:00.000Z"
  }
  ```

### ✅ Cenário 2: Acesso Permitido
- **Requisição**: `GET http://localhost:3000/`
- **Headers**: `x-user-role: supervisor`
- **Status Esperado**: `200 OK`
- **Resultado no Console**: `[LOG] Método: GET | Rota: /`

---
## 🧪 Testes de Validação

### 🔒 Nova Rota `/segredinho` (Testada via Thunder Client)

A rota `/segredinho` exige o header customizado `api-key-segredinho` com o valor `curioso`.

#### ❌ Cenário 1: Acesso Negado (Sem Header ou Valor Incorreto)
- **Requisição**: `GET http://localhost:3000/segredinho`
- **Headers**: Nenhum ou `api-key-segredinho: outro_valor`
- **Status Esperado**: `403 Forbidden`
- **Resposta**:
  ```json
  {
    "statusCode": 403,
    "mensagem": "Acesso Negado: Privilégio de segredinho necessário.",
    "log": "2026-10-02T19:50:00.000Z"
  }

## 🚀 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```
3. Abra o **Insomnia** e envie as requisições informando o header `x-user-role`.