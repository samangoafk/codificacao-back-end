# Aula 02: Arquitetura de Módulos no Node.js (CommonJS vs. ES Modules) e Persistência em Sistema de Arquivos

## Descrição do Projeto

Esta aula aborda a organização e estruturação de aplicações Node.js por meio da modularização do código. O projeto exemplifica as diferenças fundamentais entre o modelo de módulos tradicional (CommonJS) e o padrão moderno do JavaScript (ES Modules / ESM). 

Para consolidar o aprendizado na prática, o código implementa um serviço assíncrono de registros de sistema (logging), demonstrando como importar e exportar utilitários, resolver caminhos de diretórios no sistema operacional e manipular arquivos e pastas no disco rígido sem bloquear a execução da aplicação.

---

## Objetivos de Aprendizagem

* Compreender os conceitos de modularização e a importância de dividir responsabilidades em múltiplos arquivos.
* Configurar o ambiente do Node.js via `package.json` para suportar nativamente a sintaxe de **ES Modules (ESM)**.
* Identificar as diferenças de sintaxe, escopo e execução entre os padrões **CommonJS** e **ES Modules**.
* Recriar e manipular variáveis globais de contexto de caminho (`__dirname` e `__filename`) em ambientes que utilizam ESM.
* Aplicar o módulo nativo `fs/promises` para operações de leitura, criação e gravação assíncrona de arquivos de texto.
* Analisar a criação e o comportamento de persistência de dados em arquivos no formato de log em tempo de execução.

---

## Estrutura do Projeto
.
├── index.js          # Ponto de entrada do sistema e controle de persistência de logs
├── utils.js          # Módulo utilitário focado em formatação de strings e datas
├── package.json      # Metadados do projeto, dependências e definição do tipo de módulo
└── logs/
    └── system.Log    # Arquivo de saída gerado dinamicamente para armazenamento dos logs