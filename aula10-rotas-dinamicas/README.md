# Aula 10: Rotas Dinâmicas, Tratamento de Erros e Testes no NestJS 🚀

Este repositório contém o código desenvolvido na **Aula 10**, onde exploramos **rotas dinâmicas**, injeção de dependência via **Services**, tratamento de exceções com `NotFoundException` e testes de requisições utilizando o **Insomnia**.

---

## 📋 Conteúdo da Aula

- **Parâmetros de Rota (`:id`)**: Captura de dados dinâmicos diretamente da URL com o decorator `@Param()`.
- **Camada de Serviço (`Service`)**: Regra de negócio isolada para busca de itens em acervo.
- **Tratamento de Exceções HTTP**: Disparo de erros padronizados com `NotFoundException`.
- **Registro no Módulo**: Vinculação correta de Controllers e Services no `AppModule`.
- **Testes com Insomnia**: Validação dos códigos de status (`200 OK` e `404 Not Found`) e respostas JSON.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **NestJS Framework**
- **Insomnia** (Cliente HTTP)

---

## 💻 Código da Aplicação

### 1. `livros.service.ts`
Gerencia a lista de livros em memória e aplica a validação de existência:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LivrosService {
  private livros = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien' },
    { id: 2, titulo: '1984', autor: 'George Orwell' },
    { id: 3, titulo: 'Sonhonauta', autor: 'Shun Izumi' },
    { id: 4, titulo: 'Batman: O Cavaleiro das Trevas', autor: 'Frank Miller' },
    { id: 5, titulo: 'Homem-Animal', autor: 'Grant Morrison' },
  ];

  encontrarPorId(id: number) {
    const livro = this.livros.find((livro) => livro.id === id);
    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo.`);
    }
    return livro;
  }
}
2. livros.controller.ts
Recebe as requisições HTTP, converte o parâmetro recebido para número e repassa ao serviço:

TypeScript
import { Controller, Get, Param } from '@nestjs/common';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const numeroId = +id;
    return this.livrosService.encontrarPorId(numeroId);
  }
}
3. app.module.ts
Registra as dependências na raiz da aplicação:

TypeScript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
🧪 Testes de API (Insomnia)
🟢 1. Livro Encontrado (200 OK)
Método: GET

URL: http://localhost:3000/livros/3

Resposta:

JSON
{
  "id": 3,
  "titulo": "Sonhonauta",
  "autor": "Shun Izumi"
}
🔴 2. Livro Não Encontrado (404 Not Found)
Método: GET

URL: http://localhost:3000/livros/99

Resposta:

JSON
{
  "message": "Livro com ID 99 não localizado em nosso acervo.",
  "error": "Not Found",
  "statusCode": 404
}
🚀 Como Executar
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run start:dev
Execute os testes:
Abra o Insomnia e faça requisições para http://localhost:3000/livros/{id}.