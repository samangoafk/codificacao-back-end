# API de Colaboradores — NestJS + Zod

Projeto desenvolvido utilizando Node.js, NestJS, TypeScript, NPM e Zod, com o objetivo de criar uma API para cadastro de colaboradores utilizando validação de dados.

---

## Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- NPM
- Zod

---

## Sobre o projeto

A aplicação possui uma API para cadastro de colaboradores.
Os dados enviados para a API passam por uma validação utilizando Zod antes de serem processados pelo controller.

O projeto utiliza:
- Controllers;
- Services;
- Modules;
- Pipes personalizados;
- Validação com Zod;
- Tratamento de erros HTTP;
- Tipagem baseada no schema.

---

## Estrutura do projeto

```text
aula16-validacao-schemas-com-zod-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── colaborador.controller.ts
│   ├── colaborador.schema.ts
│   └── zod-validation.pipe.ts
├── package.json
└── README.md
```

---

## Funcionamento

A aplicação possui uma rota para criação de colaboradores:

`POST /colaboradores`

O endpoint utiliza o `ZodValidationPipe` para validar os dados recebidos no corpo da requisição.

### 👤 Cadastro de colaborador

Para cadastrar um colaborador, envie uma requisição `POST /colaboradores` com um JSON semelhante a:

```json
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "idade": 25,
  "departamento": "TI"
}
```

Se os dados forem válidos, a API retorna:

```json
{
  "message": "Colaborador criado com sucesso!",
  "colaborador": {
    "nome": "João da Silva",
    "email": "joao@email.com",
    "idade": 25,
    "departamento": "TI"
  }
}
```

---

## ✅ Validações

O schema utiliza o Zod para validar os campos do colaborador.

* **Nome**
  * O nome deve possuir no mínimo 3 caracteres.
  * *Mensagem:* `"O nome deve conter no mínimo 3 letras!"`

* **E-mail**
  * O e-mail precisa possuir um formato válido.
  * *Mensagem:* `"O email é inválido!"`

* **Idade**
  * Ser um número;
  * Ser maior ou igual a 18 anos;
  * Ser menor ou igual a 65 anos.
  * *Mensagens
  * **Departamento**
  * O departamento deve ser uma das opções: `TI`, `RH` ou `Financeiro`.
  * Caso seja informado outro departamento, a validação será rejeitada.

---

## 🛡️ ZodValidationPipe

O projeto possui um pipe personalizado chamado `ZodValidationPipe`.

Ele recebe um schema Zod e realiza a validação do body da requisição. Caso os dados sejam inválidos, o pipe gera uma resposta HTTP 400.

Os erros são organizados informando:

```json
{
  "statusCode": 400,
  "erros": [
    {
      "campo": "nome",
      "mensagem": "O nome deve conter no mínimo 3 letras!"
    }
  ]
}
```

### ❌ Exemplo de requisição inválida

```json
{
  "nome": "Jo",
  "email": "email-invalido",
  "idade": 16,
  "departamento": "Marketing"
}
```

Nesse caso, a API rejeitará a requisição devido às regras definidas no schema.

---

## 🔎 Tipagem

O tipo `Colaborador` é criado automaticamente a partir do schema utilizando:

```typescript
z.infer<typeof colaboradorSchema>
```

Isso permite manter a validação e a tipagem dos dados baseadas na mesma estrutura.

---

## 📦 AppModule

O `AppModule` registra:
- `AppController`
- `ColaboradoresController`
- `AppService`
- `ZodValidationPipe`

---

## 💻 Instalação

1. Clone o repositório:
```bash
git clone URL_DO_SEU_REPOSITORIO
```

2. Entre na pasta:
```bash
cd nome-do-projeto
```

3. Instale as dependências:
```bash
npm install
```

---

## ▶️ Executando o projeto

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação utiliza a variável de ambiente `PORT`. Caso ela não esteja definida, o servidor será iniciado na porta 3000 por padrão: `http://localhost:3000`

---

## 🧪 Testando com Insomnia

Você pode utilizar o Insomnia para testar o endpoint.

**Criar colaborador:**
- **Rota:** `POST http://localhost:3000/colaboradores`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "idade": 30,
  "departamento": "RH"
}
```

**Teste de erro:**
```json
{
  "nome": "Ma",
  "email": "email",
  "idade": 15,
  "departamento": "Marketing"
}
```
A API deverá retornar `400 Bad Request` com os erros encontrados durante a validação.

---

## 📌 Objetivos do projeto

Este projeto foi desenvolvido para praticar:
- Criação de APIs REST com NestJS;
- Controllers;
- Services;
- Modules;
- Pipes personalizados;
- Validação com Zod;
- Tipagem com TypeScript;
- Tratamento de exceções;
- Status HTTP;
- Validação de dados recebidos em requisições.

---

## 👨‍💻 Autor

Projeto desenvolvido para estudos e prática de desenvolvimento backend com Node.js, NestJS e Zod.