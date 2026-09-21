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

### Testes Realizados via Insomnia

As rotas da API foram validadas utilizando a ferramenta **Insomnia**, executando os fluxos dos métodos HTTP:

* **GET (`/convidados`)**: Consulta da lista inicial de convidados.
* **POST (`/convidados`)**: Adição de um novo participante (**Adam**).
* **PATCH (`/convidados/:id`)**: Atualização pontual do parâmetro idade.
* **DELETE (`/convidados/:id`)**: Remoção efetuada com sucesso para os IDs:
  * **ID 1** (Alice)
  * **ID 5** (Hudson)

---

### Guia para Execução dos Testes no Insomnia

Siga os passos abaixo para reproduzir a mesma sequência de testes na sua máquina:

#### 1. Listar Convidados (GET)
* **Método**: `GET`
* **URL**: `http://localhost:3000/convidados`
* **Descrição**: Clique em **Send** para visualizar o array com todos os convidados cadastrados.

#### 2. Adicionar Convidado Adam (POST)
* **Método**: `POST`
* **URL**: `http://localhost:3000/convidados`
* **Header**: `Content-Type: application/json`
* **Body** (`JSON`):
  ```json
  {
    "nome": "Adam",
    "idade": 25
  }

### 3. Atualizar Idade (PATCH)
Método: PATCH

URL: http://localhost:3000/convidados/2 (substitua o final pelo ID que desejar)

Header: Content-Type: application/json

Body (JSON):

JSON
{
  "idade": 30
}
Descrição: Altera apenas o campo de idade do convidado correspondente ao ID informado na URL.

### 4. Remover Convidados (DELETE)
Método: DELETE

URL: http://localhost:3000/convidados/1

Descrição: Envie a requisição para remover a convidada Alice (ID 1).

Repetição: Altere a URL para http://localhost:3000/convidados/5 e envie novamente para remover o convidado Hudson (ID 5).

Resposta esperada: Status HTTP 204 No Content sem corpo de resposta.