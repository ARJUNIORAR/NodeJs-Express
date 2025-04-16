//const Routes = require("express").Router;
const {Router} = require("express");
const router = Router();

router.get("/atendimentos", (req, res) => {
    res.json({"Nome":[1, 2, 3, 4, 5, 6, 7, 8, 9,10]});

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