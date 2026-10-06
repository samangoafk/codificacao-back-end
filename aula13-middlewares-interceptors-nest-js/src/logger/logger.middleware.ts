import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const rotaAdmin = req.originalUrl || req.url;
    console.log(`[LOG] Metódo: ${req.method} | Rota: ${rotaAdmin}`);

    if(rotaAdmin.startsWith('/admin')){

      const role  = req.headers['api-key-admin']
      if(role !== 'admnistrador'){
        return res.status(403).json({
          statusCode: 403,
          mensagem: 'Acesso Negado: Privilégio de administrador necessário.',
          log: new Date(),
        });
      }
    }
  
    //nova rota de teste
    const rotaSegredinho = req.originalUrl || req.url;
    console.log(`[LOG] Metódo: ${req.method} | Rota: ${rotaSegredinho}`);

    if(rotaSegredinho.startsWith('/segredinho')){

      const role  = req.headers['api-key-segredinho']
      if(role !== 'curioso'){
        return res.status(403).json({
          statusCode: 403,
          mensagem: 'Acesso Negado: Privilégio de segredinho necessário.',
          log: new Date(),
        });
      }

  }next();
};
}