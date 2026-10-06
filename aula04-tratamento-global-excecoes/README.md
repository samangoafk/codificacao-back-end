# Aula 04: Tratamento Global de Exceções e Resiliência no Express

Repositório da Aula 04 focado no gerenciamento centralizado de erros em aplicações Node.js e Express. O projeto demonstra a diferença entre capturar falhas na camada da aplicação (middlewares) e tratar exceções não capturadas no nível de processo (`uncaughtException` e `unhandledRejection`).

---

## Objetivo

Implementar uma arquitetura de tratamento de erros defensiva capaz de:

* Retornar respostas HTTP estruturadas em JSON para o cliente.
* Centralizar o log de depuração e *stack traces* no servidor.
* Interceptar falhas graves síncronas e assíncronas para evitar a interrupção repentina do serviço.

---

## Arquitetura de Tratamento de Erros

```text
                       Requisição HTTP
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
    GET /sucesso       GET /erro-sincrono   GET /erro-assincrono
   (Resposta 200)       (try / catch)       (async / await)
                              │                    │
                              └──────────┬─────────┘
                                         │
                                     next(err)
                                         │
                                         ▼
                         ┌──────────────────────────────┐
                         │ Middleware de Erros Express  │
                         │    (err, req, res, next)     │
                         └──────────────┬───────────────┘
                                        │
                                        ▼
                             Resposta HTTP 500 JSON

──────────────────────────────────────────────────────────────────────────

                         Exceções não capturadas
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        ▼                                                       ▼
process.on('uncaughtException')         process.on('unhandledRejection')