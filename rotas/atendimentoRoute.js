//const Routes = require("express").Router;
const {Router} = require("express");
const router = Router();
//const controller = require("../controller")

router.get("/atendimentos", (req, res) => {
    const reposta = controller.buscar();
    res.send(reposta);

});

router.post("/atendimentos", (req, res) => {
    res.send("Chegou aqui, estamos criando um novo atendimento...");
});
router.put("/atendimentos/:id", (req, res) => {
    const {id} = req.params;
    res.send(`´Chegou aqui, estamos atualizando o atendimento  ${id}...`);
});
router.delete("/atendmentos:id", (req, res) => {
    const {id} = req.params;
    res.send(`Chegou aqui, estamos criando um novo atendimento. ${id}..`);
});
module.exports = router;