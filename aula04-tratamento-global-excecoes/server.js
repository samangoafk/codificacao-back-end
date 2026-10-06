import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]:', err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PRENISSE REJEITADA - unhandledRejection]:', reason);
});

app.get('/sucesso', (req, res) => {
    res.json({success:true, message: 'Operação realizada com sucesso!'});
});

app.get('/erro-sincrono', (req, res, next) => {
    try{
        throw new Error('Falha ap processar a regra de negócio!'); 
    }catch(erro){
        next(erro);
    }
});
app.get('/erro-assicrono', async(req, res, next) =>{
    try{
        await Promisse.reject(new Error('Erro ao consultar banco de dados Esterno!'));
    }catch(erro){
        next(erro);
    }
});
app.use((err, req, next) => {
    console.error(`[LOG DE ERRO INTERNO] ${err.stack}`);

    const status = err.status || 500;
    req.status(status).json ({
        success: false,
        message: err.message || 'ERRO INTERNO NO SERVIDOR'
    });
});
app.listen(3000, () => {
    console.log('Servidor Imortal rodando na porta 3000')
    console.log('Teste 1: localhost: 3000/sucesso');
    console.log('Teste 2: localhost: 3000/erro-sincrono');
    console.log('Teste 2: localhost: 3000/erro-assincrono');
});