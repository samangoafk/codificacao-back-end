import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
@Get()
getPublic(){
return {
  message: 'Rota pública acessada com sucesso!',
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
  }

