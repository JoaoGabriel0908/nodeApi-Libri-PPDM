const express = require('express')

const app = express();

// Rota GET de teste
app.get('/', function(req, res) {
    res.send('RESPOSTA DA ROTA RAIZ')
})

// Rota GET de listagem de dentistas
app.get('/listagemDentistas', function(req, res) {
    res.send('RESPOSTA DA ROTA DE LISTAGENS DE DENTISTAS')
})

// Colocando o serviço para rodar na porta 3000
app.listen(3000, () => {console.log('Aplicação rodando em - http://localhost:3000')});