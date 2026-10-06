# Aula 05: Variáveis de Ambiente e Configuração no Node.js

Este repositório contém o código de exemplo e o material prático para a **Aula 05**, focada no gerenciamento seguro de configurações e variáveis de ambiente em aplicações backend com **Node.js** e a biblioteca **dotenv**.

---

##  Objetivos da Aula

- Compreender a importância de separar configurações do código-fonte (Twelve-Factor App).
- Aprender a utilizar variáveis de ambiente com `process.env`.
- Configurar o pacote `dotenv` para ambientes de desenvolvimento.
- Aplicar o padrão **Fail-Fast** na validação de credenciais e chaves de API críticas.
- Configurar corretamente o `.gitignore` para proteger dados sensíveis e credenciais.

---

##  Estrutura do Projeto

```text
aula05-variaveis-ambiente-configuracao/
├── node_modules/          # Dependências instaladas (ignorado pelo git)
├── package.json           # Manifesto do projeto e dependências
├── package-lock.json      # Trava de versões exatas das dependências
├── .env                   # Variáveis locais (IGNORADO pelo git - NÃO COMITAR)
├── .env.example           # Modelo de variáveis de ambiente (comitado)
├── .gitignore             # Arquivo de exclusão do Git
└── README.md              # Documentação da aula