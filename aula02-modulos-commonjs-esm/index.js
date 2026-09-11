import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatLog } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarLogSystem(mensagemLog){
    try {
        const pastaLog = path.join(__dirname, 'logs');
        const arquivoLog = path.join(pastaLog, 'system.Log');

        await fs.mkdir(pastaLog, {recursive:true});
        const registroLog = formatLog(mensagemLog);
        await fs.appendFile(arquivoLog, registroLog, 'utf-8');

        console.log ('Log registrado com sucesso!');
    } catch (erro){
        console.error('Erro ao registrar Log: ', erro);
    }
}
salvarLogSystem('Inicialização do servidor concluida com sucesso!\n');
salvarLogSystem('Conexão com Banco de dados Estabelecida!\n');
