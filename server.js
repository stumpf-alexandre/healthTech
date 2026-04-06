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