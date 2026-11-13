import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, QueryFilter } from "mongoose";
import { MongoServerError } from "mongodb";
import { CreateAlunoDto } from "./dto/create.aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.js";
import { Aluno, AlunoDocument } from "./schemas/aluno.schema.js";

@Injectable()
export class AlunoService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>){}

    async create (createAlunoDto:CreateAlunoDto):Promise<Aluno>{

        try{
            const createdAluno = new this.alunoModel(createAlunoDto);
              return await createdAluno.save(); //! post
        }catch(error){
            if(
                error instanceof MongoServerError
                &&
                error.code === 11000
            ){
                throw new ConflictException('Já existe um aluno Matrículado com este número de Matrícula')
            }
            throw new InternalServerErrorException('Erro ao processar cadastro do aluno. Por favor, tente novamente mais tarde.')
        }
       
    }
    async findAllPageFilter(
        page: number, 
        limit: number, 
        nome?:string, 
        curso?:string,
        orderBy?: string,
        orderDirection?: 'asc' | 'desc',
    ){

        const skip = (page -1) * limit;
        const filtro: any = {ativo: true};

           if(nome){
            filtro.nome = {
                $regex: new RegExp(nome, 'i'),
            };
        }

        if(curso){
            filtro.cursos = curso;
        }

        const sort: any = {};
        if(orderBy){ 
            sort [orderBy]= orderDirection === 'desc' ? -1 : 1;
        }

        const [data, total] = await Promise.all([
            this.alunoModel.find(filtro).sort(sort).skip(skip).limit(limit).exec(),
            this.alunoModel.countDocuments(filtro).exec()
        ]);
        //! GET - nome
     

        return{
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };

        return this.alunoModel.find().exec();
    } //!get

    async findAll(): Promise<Aluno[]>{
     return this.alunoModel.find().exec();
    } 

    async findOne(id:string): Promise <Aluno>{
         const aluno = await this.alunoModel.findOne({
            _id: id, ativo: true });

         if(!aluno){
            throw new NotFoundException(`Aluno com id ${id} não encontrado.`)
         }

         return aluno;
    } //!get

    async update(id: string, uptadeAlunoDto: UpdateAlunoDto): Promise<Aluno >{
         const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, uptadeAlunoDto).exec();
         if(!alunoAtualizado){

            throw new NotFoundException(`Aluno com id ${id} não encontrado.`)
         }
         return alunoAtualizado;

        } //!patch

    async remove(id:string):Promise<Aluno>{
        const alunoRemovido = await this.alunoModel.findByIdAndUpdate(id, 
            { ativo: false}, {new: true} ).exec();
                if(!alunoRemovido){
                     throw new NotFoundException(`Aluno com Id ${id} não encontrado.`)
                } return alunoRemovido;
       
    } //! delete
    //! crud
    async restore(id:string): Promise <Aluno>{
        const alunoRestaurado = await this.alunoModel.findByIdAndUpdate(
            id, {ativo: true}, {new: true}
        ).exec();
        if(!alunoRestaurado){
            throw new NotFoundException(`Aluno com Id ${id} não encontrado`)
        }
        return alunoRestaurado;
    }
}