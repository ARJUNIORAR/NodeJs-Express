const express = require("express");
const app = express();
const port = 3000;
const router = require("./rotas/index")
const seque = require('./model/connection/conexao')
const Pofessor = require('./model/entity/professor') // Importa a variavel para gerar a tabela no banco
const Aluno = require('./model/entity/aluno')// Importa a variavel para gerar a tabela no banco

router(app);

app.listen(port,async(error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Aplicação rodando");
    try {
        await seque.authenticate();
        await seque.sync({force: true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});

