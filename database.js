//====================================================
//Passo-1, importar sqlite(cerebro) e sqlite3(musculo)
//====================================================
const sqlite3 = require('aqlite3');
const {open} = require('sqlite');

//====================================================
//Passo-2, criando função assincrona
//====================================================
const criarBanco = async() => {

//====================================================
//Passo-3, cria o banco de dados
//====================================================
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

//====================================================
//Passo-4, criar tabela do BD
//=========v==========================================

    await db.exec("PRAGMA foreign_keys = ON;");

    //Tabela pai
    await db.exec(`
        CREATE TABLE IF NOT EXISTS pacientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_paciente TEXT,
            endereco_paciente TEXT,
            nome_responsavel TEXT,
            telefone_responsavel TEXT,
            medicação_paciente TEXT,
            hora_medicacao TEXT,
            exercicio_especifico TEXT,
            tipo_banho TEXT,
            higiene_bucal BOOLEAN,
            troca_fralda BOOLEAN,
            hidratacao_pele TEXT,
            observacoes TEXT  DEFAULT 'Sem observações',
        )
    `);

    console.log('Banco de dados configurado!!!');
};
