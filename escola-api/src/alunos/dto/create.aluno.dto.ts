import { 
    IsString, 
    IsNotEmpty, 
    IsInt, 
    IsArray,
    Min,
    ArrayMinSize
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({
        example: 'João da Silva',
        description: 'Nome completo do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message: 'O Nome do Aluno é obrigatório e não pode ser vazio'
    })
    nome: string;

    @ApiProperty({
        example: 25,
        description: 'Idade do aluno',
    })
    @IsInt({
        message: 'A Idade deve ser um número inteiro.'
    })
    @Min(0, {
        message: 'A Idade não pode ser negativa.'
    })
    idade: number;

    @ApiProperty({
        example: '1234',
        description: 'Matrícula do Aluno',
    })
    @IsString()
    @IsNotEmpty({
        message: 'A Matrícula é obrigatória e não pode ser vazia.'
    })
    matricula: string;

    @ApiProperty({
        example: ['Ciência da Computação', 'Recursos Humanos'],
        description: 'Cursos em que o aluno está matriculado',
    })
    @IsArray()
    @IsString({
        each: true,
        message: 'Cada Curso deve ter um Nome.'
    })
    @ArrayMinSize(1, {
        message: 'O aluno deve estar matriculado em pelo menos um curso.'
    })
    cursos: string[];
}