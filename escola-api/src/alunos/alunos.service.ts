import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create.aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.js";
import { Aluno, AlunoDocument } from "./schemas/aluno.schema.js";

@Injectable()
export class AlunoService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>){}

    async create (createAlunoDto:CreateAlunoDto):Promise<Aluno>{
        const createdAluno = new this.alunoModel(createAlunoDto)
        return createdAluno.save(); //! post
    }
    async findAll(): Promise<Aluno[]>{
        return this.alunoModel.find().exec();
    } //! get

    async findOne(id:string): Promise <Aluno | null>{
         return this.alunoModel.findById(id).exec();
    } //! get

    async Update(id: string, uptadeAlunoDto: UpdateAlunoDto): Promise<Aluno| null>{
         return this.alunoModel.findByIdAndUpdate(id, UpdateAlunoDto).exec();
        } //! patch

    async remove(id:string):Promise<Aluno | null>{
        return this.alunoModel.findByIdAndDelete(id).exec();
    } //! delete
    //! crud
}