// Importação do módulo do sequelize
const Sequelize = require('sequelize')

/* CRIAÇÃO DE UMA INSTANCIA DO SEQUELIZE E CONEXÃO COM BANCO DE DADOS MYSQL
PARAMETROS DE CONEXOES COM O BANCO DE DADOS

1 - NOME DO BANCO DE DADOS - STRING
2 - USUÁRIO DO BANCO DE DADOS - STRING 
3 - SENHA DO BANCO DE DADOS - STRING

4 - OBJETO JSON - DETERMINA AS CONFIGURAÇÕES DE USO NO BANCO DE DADOS
    4.1 - LOCAL DA INSTANCIA DO BANCO DE DADOS (localhost)
    4.2 - TIPO DE BANCO DE DADOS (mysql) 
    4.3 - DEFINIÇÃO DO FUSO HORARIO DO BANCO DE DADOS
*/

const connection = new Sequelize(
    'librids3t',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;