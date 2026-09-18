# AULA 08/09 - MÉTODOS GET, POST, PUT, PATCH E DELETE 

Este projeto foi desenvolvido durante a Aula 08 do curso para praticar a criação de API Routes, a implementação e manipulação das requisições HTTP do tipo GET e POST. E posteriormente adicionamos os métodos: DELETE, PUT e PATCH.

- Adiciona endpoints GET, POST, PATCH e DELETE no ConvidadosController
- Implementa metodos de busca, criacao, edicao e remocao no ConvidadosService
- Corrige inconsistencias de IDs e parametros de rota

# API de Gerenciamento de Convidados

API RESTful desenvolvida em NestJS para gerenciamento de listas de convidados, utilizando arquitetura em camadas (Controllers e Services) e operações completas via verbos HTTP.


### Tecnologias Utilizadas

* Node.js
* NestJS Framework
* TypeScript


### Endpoints e Funcionalidades

| Método | Rota | Descrição | Status HTTP |
| :--- | :--- | :--- | :--- |
| **GET** | `/convidados` | Listagem de todos os convidados cadastrados | 200 OK |
| **POST** | `/convidados` | Cadastro de um novo convidado na lista | 201 Created |
| **PATCH** | `/convidados/:id` | Atualização pontual da idade do convidado pelo ID | 200 OK |
| **DELETE** | `/convidados/:id` | Remoção de um convidado específico pelo ID | 204 No Content |

---

### Estrutura dos Dados

Exemplo do objeto trafegado na aplicação:

```json
{
  "id": 1,
  "nome": "Alice",
  "idade": 23
}