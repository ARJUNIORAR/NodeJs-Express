const express = require("express");
const app = express();
const port = 3000;
const router = require("./rotas/index")
const seque = require('./rotas/conexao')

router(app);

app.listen(port,async(error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Aplicação rodando");
    try {
        await seque.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});

