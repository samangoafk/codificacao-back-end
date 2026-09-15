# Aula 06: Criando um Servidor Web HTTP Nativo no Node.js

Este README contém o código prático e a documentação para a **Aula 06**, focada na criação de um servidor web HTTP nativo utilizando o módulo `http` do Node.js, roteamento básico, manipulação de status HTTP e inclusão de cabeçalhos de segurança.

---

##  Objetivos da Aula

- Compreender o funcionamento do protocolo HTTP no Node.js através do módulo nativo `http`.
- Aprender a criar um servidor utilizando `http.createServer()`.
- Processar requisições (`req.method`, `req.url`) e enviar respostas com códigos de status apropriados.
- Manipular cabeçalhos HTTP de segurança (`X-Content-Type-Options`, `X-Frame-Options`).
- Retornar dados no formato JSON (`application/json`).

---

## 📂 Estrutura do Projeto

```text
aula06-servidor-web-http/
├── servidor.js            # Código-fonte do servidor HTTP
├── README.md              # Documentação da aula
└── package.json           # Manifesto do projeto e scripts de execução 