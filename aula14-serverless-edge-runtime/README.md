# Aula 14: Serverless, Edge e Runtime

Este repositório contém o material e o código desenvolvido na **Aula 14**, focada nos conceitos de arquitetura **Serverless**, computação na **Edge** e na configuração de **Runtimes** de execução.

---

## 🎯 Objetivos da Aula

* Compreender a diferença entre servidores tradicionais, **Serverless** e **Edge Functions**.
* Configurar uma função para executar no *Edge Runtime* (`runtime: 'edge'`).
* Identificar a região do servidor de execução através dos *headers* HTTP (`x-vercel-id`).
* Testar requisições em ambiente local (`localhost`) e com a extensão **Thunder**.

---

## 💻 Código Implementado (`hora.servidor.ts`)

Criámos a rota API no ficheiro `hora.servidor.ts` utilizando os padrões nativos da Web API (`Request` e `Response`)s
⚙️ Conceitos Chave
runtime: 'edge': Instruímos a plataforma (como a Vercel) a executar esta função na Edge Network — uma rede global de servidores mais próxima do utilizador final —, reduzindo a latência.

x-vercel-id: Header fornecido pela infraestrutura que indica a região geográfica e os dados do ponto de presença (PoP) onde a função foi processada.

Métricas de Execução: O código calcula a latência interna medindo a diferença de tempo (Date.now() - inicio) em milissegundos.

🧪 Como Testar
1. Servidor Local (localhost)
Inicie a aplicação localmente:

Bash
npm run dev
# ou
ng serve
Aceda ao endpoint através do navegador ou ferramenta de testes na rota correspondente.

2. Teste com a extensão Thunder
Abra a extensão Thunder (Thunder Client no VS Code / Figma).

Configure um novo pedido GET para o URL local (ex: http://localhost:3000/api/hora.servidor).

Clique em Send e verifique a resposta em formato JSON:

JSON
{
  "mensagem": "Função executada com sucesso!",
  "horarioServidor": "06/10/2026, 16:00:00",
  "regiao": "local-dev",
  "tempoExecucao": "1"
}