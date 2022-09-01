// Importa o módulo do Express
const express = require('express')

const livroModel = require('../model/livroModel')

// Configurar um recurso de roteamento (Router())
const router = express.Router();

// Rota de Listagem de livros
router.get('/listarLivros', (req,res)=>{
    res.send('ROTA DE LISTAGEM DE LIVROS');
})

// Rota de Cadastro de livros
router.post('/cadastrarLivros', (req,res)=>{
    // Requisição do corpo 
    console.log(req.body)
    res.send('ROTA DE CADASTRO DE LIVROS');
})

// Rota de Alteração de livros
router.put('/alterarLivros', (req,res)=>{
    res.send('ROTA DE EDIÇÃO DE LIVROS');
})

// Rota de Exclusão de livros
router.delete('/excluirLivros', (req,res)=>{
    res.send('ROTA DE EXCLUIR DE LIVROS');
})

module.exports = router;