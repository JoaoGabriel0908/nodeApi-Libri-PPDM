// INPORTAÇÃO DO SEQUELIZE
const Sequelize = require('sequelize')

// IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require('../database/database.js')

/* REPRESENTAÇÃO DO MODELO DE DADOS tbl_livros
PARAMETROS
1 - NOME DA TABELA
2 - OBJETO JSON CONTENDO:
    NOME DO CAMPO
    TIPO DO CAMPO
    REGRAS DO CAMPO
 */

// Definindo o json 
const livroModel = connection.define(
    'tbl_livro',
    {
        cod_livro:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type: Sequelize.STRING(100),
            allowNull: true
        },
        descricao:{
            type: Sequelize.TEXT,
            allowNull: true
        },
        imagem:{
            type: Sequelize.STRING(500),
            allowNull: true
        }
    }
);

// livroModel.sync({force:true})

module.exports = livroModel