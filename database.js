//====================================================
//Passo-1, importar sqlite(cerebro) e sqlite3(musculo)
//====================================================
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

//====================================================
//Passo-2, criando função assincrona
//====================================================
const criarBanco = async () => {

//====================================================
//Passo-3, cria o banco de dados
//====================================================
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

//====================================================
//Passo-4, criar tabela do BD
//====================================================
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
            higiene_bucal INTEGER,
            troca_fralda INTEGER,
            hidratacao_pele TEXT,
            observacoes TEXT DEFAULT 'Sem observações'
        )
    `);

    console.log('Banco de dados configurado!!!');

//====================================================
//Passo-10, Insert (C_rud 'CREATE')
//====================================================
    const checagem = await db.get('SELECT COUNT(*) AS total FROM pacientes');

    if(checagem.total === 0) {
        await db.exec(`
            INSERT INTO pacientes(nome_paciente, endereco_paciente, nome_responsavel, telefone_responsavel, medicação_paciente, hora_medicacao, exercicio_especifico, tipo_banho, higiene_bucal, troca_fralda, hidratacao_pele) VALUES 
                ('João Banguela', 'Rua Aparecida, 3422, bairro: Centro', 'João Banguela Filho', '(22)929292929', 'Lorazepa, 1 comprimido', '8:00', 'Fortalecimento muscular', 'Banho de asperção', 1, 0,'sem hidratação'),
                ('Lurdez Munhoz', 'Rua Principal, 244, bairro: Morro da peruca', 'Ivone Munhoz Retzz', '(21)932231233', 'Pantoprazol, 1 comprimido', '12:00', 'Atividade cognitiva', 'Banho parcial', 0, 0,'hidratação de pernas'),
                ('Raul Assunção', 'Rua Nova, 102, bairro: Praia Grande', 'Rubia Assunção', '(21)989898980', 'Atenolol, 1 1/2 comprimido', '10:00', 'Exercicio Passivo Ativo', 'Banho de leito', 1, 1,'hidratação de membros posteriores e inferiores'),
                ('Bianca Fortuna', 'Rua Aurelio Paz, 1567, bairro: Centro', 'Alison Fortuna', '(21)988877220', 'Vertix, 1 comprimido', '13:45', 'Exercicio Cognitivo e Funcional', 'Banho de leito', 1, 1,'hidratação de articulações')
        `);
    } else {
        console.log(`Banco de dados pronto com ${checagem.total} pacientes`);
    }

//====================================================
//Passo-11, Select (c_R_ud 'READ')
//====================================================
    const todosPacientes = await db.all(`
        SELECT * FROM pacientes
    `);
    console.table(todosPacientes);

//====================================================
//Passo-12, Update (cr_U_d 'UPDATE')
//====================================================
    await db.run(`
        UPDATE pacientes 
        SET observacoes = 'Pressão arterial 21 por 11 batimentos 120', 
        telefone_responsavel = '(43)898922224' 
        WHERE id = 3
    `);
    console.log(`Dados atualizados`);

//====================================================
//Passo-13, Delete (cru_D 'DELETE')
//====================================================
    await db.run(`
        DELETE FROM pacientes WHERE id = 4    
    `);

    return db;
};

module.exports = {criarBanco};
