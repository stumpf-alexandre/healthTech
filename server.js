//====================================================
//Passo-5, Importando Express e BD
//====================================================
const express = require ('express');
const createBanck = require('./database');

//====================================================
//Passo-6, inicializando servidor e configurando express
//====================================================
const app = express();
app.use(express.json());
const PORT = 3000;

//====================================================
//Passo-7, Criando rota principal
//====================================================
app.get('/', (req, res) => {
    res.send(`
            <body>
                <h1>Health Tech</h1>
                <h2>Gestão de cuidados para idosos</h2>
                <p>Endpoint que leva aos pacientes cadastrados: <a href="http://localhost:3000/pacientes">/pacientes</a></p>
                <p>Endpoint que leva aos incidentes cadastrados: <a href="http://localhost:3000/pacientes/4">/pacientes especifico</a></p>
            </body>
        `);
});

