//const Routes = require("express").Router;
const {Router} = require("express");
const router = Router();
const alunoService = require("../service/alunoService")

router.get("/service/alunosService", (req, res) => {
    alunoService.cadastrar();
    res.send(alunoService.listar()); // chama a função para obter uma lista de alunos.

});

router.put("/service/alunosService", (req, res) => {
    alunoService.editar();
    res.send(AlunoService.listar()); // Utilizando a mesma função padrão, verificar com james.
});
router.get("/service/alunosService:id", (req, res) => {
    alunoService.buscar();
    res.send(alunosService.listar()); // Utilizando a mesma função padrão, verificar com james.
});
router.delete("/service/alunosService", (req, res) => {
    alunoService.excluir();
    res.send(alunos.Service.listar());
});
router.get("/service/alunosService", (req, res) => {
    alunoService.listar();
    res.send(alunos.Service.listar());
});


module.exports = router;