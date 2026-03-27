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
//Passo-4, criar tabelas do BD
//=========v==========================================

    await db.exec("PRAGMA foreign_keys = ON;");

    //Tabela pai
    await db.exec(`
        CREATE TABLE IF NOT EXISTS pacientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_paciente TEXT,
            endereco_paciente TEXT,
            mobilidade_paciente TEXT,
            nome_responsavel TEXT,
            telefone_responsavel TEXT,
            historico_saude TEXT,
        )
    `);

    //Tabela filho, registro_saude
    await db.exec(`
        CREATE TABLE IF NOT EXISTS registro_saude (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            paciente_id INTEGER,
            data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
            medicacao TEXT,
            hora_medicacao TEXT,
            exercicio_especifico TEXT,
            humor TEXT,
            sinais_vitais TEXT,
            apetite TEXT,
            FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE
        )
    `);

    //Tabela filho registro_higiene
    await db.exec(`
        CREATE TABLE IF NOT EXISTS registro_higiene (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            paciente_id INTEGER,
            data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
            tipo_banho TEXT,
            higiene_bucal BOOLEAN,
            troca_fralda BOOLEAN,
            hidratacao_pele TEXT,
            observacoes TEXT  DEFAULT 'Sem observações',
            FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE
        )
    `);
    console.log('Banco de dados configurado!!!');

};
