# 🩺 Health Tech (Sistema de Gestão de Rotinas para Cuidadores Autônomos)

## 📌 Sobre o Projeto
A API **Health Tech** é desenvolvida para facilitar o dia a dia de cuidadores de idosos que gerenciam múltiplos pacientes simultaneamente. A aplicação centraliza informações vitais, garantindo que cada idoso receba o atendimento personalizado que sua condição exige, como:
- Histórico médico
- Contatos de emergência
- Lista de medicamentos.

Essa API nos permite criar, visualizar, atualizar e deletar tanto os dados dos pacientes, como suas rotinas diárias.

---

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- SQLite
- SQLite3
- Nodemon
- Postman

---

## 📦 Instalação
- `npm init -y` => Comando para iniciar um novo projeto Java Script.
- `npm install express` => Comando para instalar o Express.
- `npm install nodemon --save-dev` => Comando para instalar o nodemon.
- `npm install sqlite3 sqlite` => Comando para instalar o SQLite e o SQLite3.

---

## ▶️ Como Executar

```bash
npm run dev

```

`http://localhost:3000`

[Clique Aqui](http:localhost:3000)

---

## 🗄️ Banco de Dados
O Banco de Dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

---

## 🧾 Tabela

|Campo                    |Descrição                                               |
|-------------------------|--------------------------------------------------------|
|id                       |Identificador único                                     |
|nome_paciente            |Nome do Paciente                                        |
|endereco_paciente        |Onde o paciente vive                                    |
|nome_responsavel         |Nome da pessoa responsavel pelo paciente                |
|telefone_responsavel     |Telefone para contato com responsavel do paciente       |
|medicacao                |Nome da medicação diária do paciente                    |
|hora_medicacao           |Horario da administração do medicamento ao paciente     |
|exercicio_especifico     |Qual o tipo de exercicio que o paciente vai receber     |
|tipo_banho               |Qual o tipo de banho que o paciente necessita           |
|higiene_bucal            |Identifica se o paciente necessita de higiene bucal     |
|troca_fralda             |Identifica se o paciente necessita de troca de fralda   |
|hidratacao_pele          |Necessidade de hidratação na pele do paciente           |
|observacao               |Observações (Padrão: Sem observações)                   |

---

## 🔗 Endpoints

### Rota Inicial

```http
GET /
```
Retorna uma página HTML simples com informações da API.


### Rota para listar todos os pacientes

```http
GET /pacientes
```
Retorna todos os registros do banco de dados


### Rota para buscar um paciente específico (ID)

```http
GET /pacientes/:id
```
Ex.: /pacientes/1

Retorna os dados de um paciente especifico.


### Rota para criar um novo paciente

```http
POST /pacientes
```

#### - Body (JSON)

```json
{},
```


### Rota para atualizar um paciente

```json
PUT /paciente/:id
```

#### - Body (JSON)

```json
{}
```

### Rota para deletar um paciente

```http
DELETE /pacientes/:id
```
---

## 🔐 Segurança

A API utiliza `?` nas queries SQL:

```sql
WHERE id = ?
```

Isso evita o SQL Injection

---

## 📚 Conceitos

- CRUD (Create, Read, Update e Delete)
- Rotas com Express
- Métodos/Verbos HTTP

---

## 👩‍💻 Projeto Educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js, por Alexandre

---
