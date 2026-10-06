# API de Manipulação de Arquivos e Mídias (Aula 11)

Projeto desenvolvido em NestJS focado na construção de fluxo de upload e validação de arquivos e mídias via requisições HTTP, utilizando o **Insomnia** para testes e simulação de envio de arquivos.

---

### Tecnologias Utilizadas

* Node.js
* NestJS Framework
* TypeScript
* Multer (Módulo de upload de arquivos)
* Insomnia (Testes de API)

---

### Funcionalidades e Regras de Validação

A API expõe o endpoint de upload configurado com os seguintes filtros de segurança:

1. **Formato do Arquivo**: Aceita apenas extensões e MIME types suportados (ex: imagens/documentos válidos).
2. **Tamanho Limite**: Define o tamanho máximo permitido por arquivo de até **2MB**.
3. **Armazenamento**: Arquivos validados e aceitos são salvos automaticamente no diretório local `/uploads`.

---

### Testes Realizados via Insomnia

Durante a aula, foram realizados testes práticos com o envio de 3 arquivos para validar as regras de negócio e filtros de upload:

| Arquivo | Condição / Teste | Resultado | Salvo em `/uploads`? |
| :--- | :--- | :--- | :--- |
| **validacao 1** | Formato de arquivo não suportado | **Rejeitado** (Erro de formato) | Não |
| **lembe** | Formato válido e tamanho < 2MB | **Aprovado** (Sucesso) | **Sim** |
| **validacao 2** | Formato válido e tamanho < 2MB | **Aprovado** (Sucesso) | **Sim** |
| **validacao 3** | Formato válido, porém tamanho > 2MB | **Rejeitado** (Limite excedido) | Não |

---

### Como Executar a Aplicação

**1. Instalar as dependências:**
```bash
npm install
2. Executar o servidor em modo de desenvolvimento:

Bash
npm run start:dev
Guia para Reproduzir os Testes no Insomnia
1- Abra o Insomnia e crie uma nova requisição do tipo POST.

2- Defina a URL para http://localhost:3000/upload (ou a rota configurada no seu controller).

3- No corpo da requisição (Body), selecione a opção Multipart Form.

4- Defina a chave (Name) como file (ou o nome do campo esperado pelo @UseInterceptors(FileInterceptor('file'))).

5- Altere o tipo do valor para File e selecione o arquivo na sua máquina.

6- Clique em Send para verificar as respostas do servidor conforme o formato e tamanho do arquivo enviado.