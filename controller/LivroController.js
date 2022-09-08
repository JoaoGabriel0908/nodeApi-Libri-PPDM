// Importa o módulo do Express
const express = require('express')

const livroModel = require('../model/livroModel')

// Configurar um recurso de roteamento (Router())
const router = express.Router();

// Rota de Listagem de livros
router.get('/listarLivros', (req,res)=>{
    // res.send('ROTA DE LISTAGEM DE LIVROS');

    // FindAll traz tudo do livroModel
    livroModel.findAll()
    .then(
        (livros) => {res.status(200).send(livros)}
    )
    .catch(
        (error) => {res.status(500).json({"MSG":error})}
    )
})

// Rota de Listagem de livros por ID(cod_livro)
router.get('/listarLivros/:cod_livro', (req, res)=>{

    let {cod_livro} = req.params;

    livroModel.findAll({
        where:{cod_livro}
    })
    .then(
        (livros) => {res.status(200).send(livros)}
    )
    .catch(
        (error) => {res.status(500).json({"MSG":error})}
    )

    // POR CHAVE PRIMÁRIA
    // FindAll traz por Primary Key do livroModel
    // livroModel.findByPk(cod_livro)
    // .then(
    //     (livros) => {res.status(200).send(livros)}
    // )
    // .catch(
    //     (error) => {res.status(500).json({"MSG":error})}
    // )
})

// Rota de Cadastro de livros
router.post('/cadastrarLivros', (req,res)=>{
    // Requisição do corpo 
    // console.log(req.body)
    // res.send('ROTA DE CADASTRO DE LIVROS');

    // Pegando essa estrutura dentro do corpo
    let {titulo, descricao, imagem} = req.body;
    // console.log(req.body)
    livroModel.create({
        titulo,
        descricao,
        imagem,
    }).then(
        () => {res.status(201).json("MSG: Livro cadastrado com sucesso")}
    ).catch(
        (error) => {res.status(500).json({"MSG":error})}
    )
})

// Rota de Alteração de livros
router.put('/alterarLivros', (req,res)=>{
    // res.send('ROTA DE EDIÇÃO DE LIVROS');
    let {titulo, descricao, imagem, cod_livro} = req.body

    livroModel.update(
        {
        titulo,
        descricao,
        imagem
        },
        {where:{cod_livro}}
    )
    .then(
        () => {res.status(201).json("MSG: Livro alterado com sucesso")}
    )
    .catch(
        (error) => {res.status(500).json({"MSG":error})}
    )
})

// Rota de Exclusão de livros
router.delete('/excluirLivros/:cod_livro', (req,res)=>{
    // res.send('ROTA DE EXCLUIR DE LIVROS');

    let {cod_livro} = req.params

    livroModel.destroy({
        where:{cod_livro}
    })
    .then(
        () => {res.status(200).json({"MSG":"Livro excluído com sucesso."})}
    )
    .catch(
        (error) => {res.status(500).json({"MSG": error})}
    )
})

module.exports = router;