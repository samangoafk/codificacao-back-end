import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlunoService } from "./alunos.service.js";
import { AlunosController } from "./alunos.controller.js";
import { Aluno, AlunoSchema } from "./schemas/aluno.schema.js";

@Module({
    imports:[MongooseModule.forFeature([{
        name: Aluno.name, schema:AlunoSchema
    }
    ])],
    controllers:[ AlunosController],
    providers: [ AlunoService],
})
export class AlunosModule{}
