const express = require("express");
const app = express();
const port = 3000;
const router = require("./rotas/index")

router(app);

app.listen(port,(error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Aplicação rodando");
});