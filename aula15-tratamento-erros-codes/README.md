# Aula 15 — Tratamento de Erros com NestJS

Nesta aula foi criada uma nova aplicação utilizando **NestJS**, com foco em:

- Criação de uma aplicação utilizando `nest new`;
- Organização da aplicação em Services e Controllers;
- Criação de uma lista de produtos;
- Utilização de parâmetros de rota;
- Conversão e validação de parâmetros;
- Tratamento de erros com Exceptions do NestJS;
- Utilização de `BadRequestException`;
- Utilização de `NotFoundException`;
- Implementação de logs com `Logger`;
- Testes das rotas utilizando o Thunder Client.

---

## 1. Criando a aplicação

A aplicação foi criada utilizando o Nest CLI:

```bash
nest new aula15-tratamento-erros-codes

Após a criação, acessamos o diretório do projeto:

cd aula15-tratamento-erros-codes

Para iniciar a aplicação em modo de desenvolvimento:

npm run start:dev

Por padrão, a aplicação fica disponível em:

http://localhost:3000


# 5. Testes com Thunder Client
Os endpoints foram validados via Thunder Client executando os seguintes testes:

GET http://localhost:3000/products

Status Esperado: 200 OK

Resultado: Retorna a lista completa de produtos.

GET http://localhost:3000/products/1

Status Esperado: 200 OK

Resultado: Retorna os dados do produto com ID 1.

GET http://localhost:3000/products/99

Status Esperado: 404 Not Found

Resultado: Retorna a mensagem de erro do NotFoundException.

GET http://localhost:3000/products/abc

Status Esperado: 400 Bad Request

Resultado: O ParseIntPipe intercepta a conversão e falha antes de chegar ao Service.

GET http://localhost:3000/products/-5

Status Esperado: 400 Bad Request

Resultado: A validação customizada no ProductsService dispara o BadRequestException.