//====================================================
//Passo-5, Importando Express e BD
//====================================================
const express = require ('express');
const {criarBanco} = require('./database');

//====================================================
//Passo-6, inicializando e configurando express
//====================================================
const app = express();
app.use(express.json());
const PORT = 3000;

//====================================================
//Passo-7, Rota principal
//====================================================
app.get('/', (req, res) => {
    res.send(`
            <body>
                <h1>Health Tech</h1>
                <h2>Gestão de cuidados para idosos</h2>
                <p>Endpoint que leva aos pacientes cadastrados: <a href="http://localhost:${PORT}/pacientes">/pacientes</a></p>
                <p>Endpoint que leva aos paciente cadastrados: <a href="http://localhost:${PORT}/pacientes/3">/paciente especifico</a></p>
            </body>
        `);
});

//====================================================
//Passo-8, Ligando servidor
//====================================================
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//====================================================
//Passo-9, Rota de listagem
//====================================================
app.get('/pacientes', async (req, res) => {
    const db = await criarBanco();
    const listarPacientes = await db.all(`SELECT * FROM pacientes`);
    res.json(listarPacientes);
});

//====================================================
//Passo-14, Rota de listagem especifica
//====================================================
app.get('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const db = await criarBanco();
    const pacienteEspecifico = await db.all(`
        SELECT * FROM pacientes WHERE id = ?
    `,[id]);
    res.json(pacienteEspecifico);
});

//====================================================
//Passo-15, Rota POST
//====================================================
app.post('pacientes', async (req, res) => {
    const {nome_paciente, endereco_paciente, nome_responsavel, telefone_responsavel, medicação_paciente, hora_medicacao, exercicio_especifico, tipo_banho, higiene_bucal, troca_fralda, hidratacao_pele} = req.body;
    const db = await criarBanco();
    await db.run(`
        INSERT INTO pacientes(nome_paciente, endereco_paciente, nome_responsavel, telefone_responsavel, medicação_paciente, hora_medicacao, exercicio_especifico, tipo_banho, higiene_bucal, troca_fralda, hidratacao_pele) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [nome_paciente, endereco_paciente, nome_responsavel, telefone_responsavel, medicação_paciente, hora_medicacao, exercicio_especifico, tipo_banho, higiene_bucal, troca_fralda, hidratacao_pele]);

    res.send(`Paciente ${nome_paciente} com seu responsavel ${nome_responsavel}, cadastrado com sucesso`)
});

//====================================================
//Passo-16, Rota PUT
//====================================================
app.put('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const {endereco_paciente, medicação_paciente, hora_medicacao, observacoes} =req.body;
    const db = await criarBanco();
    await db.run(`
        UPDATE pacientes
        SET endereco_paciente = ?, medicação_paciente = ?, hora_medicacao = ?, observacoes = ?
        WHERE id = ?
    `, [endereco_paciente, medicação_paciente, hora_medicacao, observacoes, id]);
    res.send(`Os dados do paciente de id ${id}, foram atualizados com sucesso`);
});

//====================================================
//Passo-17, Rota DELETE
//====================================================
app.delete('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const db = await criarBanco();
    await db.run(`
        DELETE FROM pacientes WHERE id = ?    
    `, [id]);
    res.send(`O paciente de id ${id}, foi removido com sucesso`);
});
