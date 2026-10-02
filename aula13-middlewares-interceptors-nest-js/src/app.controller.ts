import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
@Get()
getPublic(){
return {
  mensagem: 'Rota pública acessada com sucesso!',
  data: new Date(),
}
}  
@Get('admin')
getAdmin(){
return {
  message: 'Bem-vindo ao painel admnistrativo!',
  data: new Date(),
 }
}
@Get('segredinho')
getSegredinho(){
return {
  mensagem: 'Bem-vindo ao nosso segredinho!',
  data: new Date(),
 }
}
  }

