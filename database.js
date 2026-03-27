//====================================================
//Passo-1, importar sqlite(cerebro) e sqlite3(musculo)
//====================================================
const sqlite3 = require('aqlite3');
const {open} = require('sqlite');

//====================================================
//Passo-2, criando função assincrona
//====================================================
const createBank = async() => {

//====================================================
//Passo-3, cria o banco de dados
//====================================================
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });
};
