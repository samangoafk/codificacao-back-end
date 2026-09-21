import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode } from "@nestjs/common";
import { ConvidadosService } from "./convidados.service.js";
import { CriarConvidadoDto } from "./dto/criar-convidado.dto.js";

@Controller('convidados')
export class ConvidadosController {
    constructor(private readonly convidadosService: ConvidadosService){}
    @Get()
    listar(){
        return this.convidadosService.findAll();
    }
    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto){
        console.log(`[OPERADOR]: Novo Convidado recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} adicionado com sucesso!`,
            dados: CriarConvidadoDto,
        }
    }

    @Patch(':id')
    atualizarIdade(@Param('id') id: number, @Body('idade') idade: number){
        console.log(`[ADMNISTRADOR]: Atualizando a Idade do ID ${id}`);
        return this.convidadosService.atualizarIdade(+id, idade);
    }
    @Delete(':id')
    @HttpCode(204)
    remover (@Param ('id') id: string){
        console.log(`[ADMNISTRADOR]: Removendo convidado ID: ${id}`)
        this.convidadosService.removerConvidado(+id);
    }
}

