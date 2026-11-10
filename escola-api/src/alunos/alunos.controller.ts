import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AlunoService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create.aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.js";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService: AlunoService){}

    @Post()
    @ApiOperation({
        summary: 'Cria a matrícula do aluno.',
    })
    @ApiResponse({
        status: 201,
        description: 'Dados Inválidos fornecidos ou mal formatados.'
    })
     @ApiResponse({
        status: 400,
        description: 'A matrícula do aluno foi criada com sucesso.'
    })
    @ApiResponse({
        status:500,
        description:'Erro Interno no servidor, matrícula duplicada ou serviço indisponível.'
    })

    create(@Body() createAlunoDto:CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }

    @Get()
    @ApiOperation({
        summary: 'Localiza todos os alunos matrículados.',
    })
    @ApiResponse({
        status:200,
        description: 'Lista de alunos retornada com sucesso.',
    })
     @ApiResponse({
        status:404,
        description: 'Nenhum Aluno Encontrado.',

    })
    @ApiResponse({
        status:500,
        description:'Erro Interno no servidor, matrícula duplicada ou serviço indisponível.',
    })

    findall(){
        return this.alunoService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary:'Retorna Aluno pelo ID.'
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno retornado com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo _id',
    })
     @ApiResponse({
        status: 500,
        description: 'Erro Interno ou servidor não disponível',
    })

    findOne(@Param('id')id:string){
        return this.alunoService.findOne(id);
    }
    @Patch(':id')
    @ApiOperation({
        summary: 'Atualiza os dados de um aluno específico pelo _id.',
    })
    @ApiResponse({
        status:200,
        description:'Aluno Atualizado com sucesso',
    })
    @ApiResponse({
        status:404,
        description:'Aluno não encontrado pelo _id',
    })
       @ApiResponse({
        status: 500,
        description: 'Erro Interno ou servidor não disponível',
    })
    update(@Param('id')id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.alunoService.update(id, updateAlunoDto);
    }
    @Delete(':id')
     @ApiOperation({
        summary: 'Remove um Aluno específico pelo _id.',
    })
    @ApiResponse({
        status:200,
        description:'Aluno removido com sucesso.',
    })
     @ApiResponse({
        status:404,
        description:'Aluno não encontrado pelo _id',
    })
       @ApiResponse({
        status: 500,
        description: 'Erro Interno ou servidor não disponível',
    })

    remove(@Param('id') id: string){
        return this.alunoService.remove(id);
    }
}