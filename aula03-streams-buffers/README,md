# Aula 03: Processamento de Grandes Volumes de Dados com Streams e Buffers no Node.js

Este repositório contém uma demonstração prática de como manipular grandes volumes de dados no Node.js com alto desempenho e baixo consumo de memória, utilizando os conceitos de **Streams**, **Buffers** e **Async Iterators**.

---

## Objetivo

Demonstrar a diferença na eficiência computacional ao processar arquivos gigantes utilizando leitura e escrita sob demanda (*Data Streaming*) em comparação à abordagem tradicional de carregar todo o conteúdo na memória RAM (`fs.readFile`).

---

## Arquitetura do Fluxo

```text
[servidor.log] (Entrada)
      │
      ▼
┌───────────────────────────┐
│  fs.createReadStream()    │  --> Lê o arquivo em pequenos chunks
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│ readline.createInterface()│  --> Processa o fluxo linha a linha
└─────────────┬─────────────┘
              │ (Filtra 'ERROR')
              ▼
┌───────────────────────────┐
│  fs.createWriteStream()   │  --> Grava no disco sem sobrecarregar a RAM
└─────────────┬─────────────┘
              │
              ▼
[apenas_erros.log] (Saída)