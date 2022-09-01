//Recebe uma importação do próprio express
const express = require('express')

// Criando uma instância e passa para o APP que executa o express
const app = express();

app.use(express.json())

// IMPORTAÇÃO DO ARQUIVOS DE ROTAS LIVROS
const livrosController = require('./controller/LivroController');

app.use('/', livrosController)

// Colocando o serviço para rodar na porta 3000
app.listen(3000, () => {console.log('Aplicação rodando em - http://localhost:3000')});