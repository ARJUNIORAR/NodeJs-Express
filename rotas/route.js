//const Routes = require("express").Router;
const {Router} = require("express");
const router = Router();//Buscar a instancia da variavel acima
const alunoService = require("../service/alunoService");
const professorService = require("../service/professorService");

router.post("/aluno/", (req, res) => {
    alunoService.cadastrar();
    res.send(alunoService.listar()); //chama a função para obter uma lista de alunos.

});

router.put("/aluno/", (req, res) => {
    alunoService.editar();
    res.send(alunoService.editar()); // linha serve para retornar o dado 
});

router.get("/aluno/:id", (req, res) => {
    alunoService.buscar();
    res.send(alunoService.buscar());
});

router.delete("/aluno/", (req, res) => {
    alunoService.excluir();
    res.send(alunoService.excluir());
});

router.get("/alunos/", (req, res) => {
    alunoService.listar();
    res.send(alunoService.listar());
});

// Rota abaixo serve para o login do usuario.

router.post("/professor/login", (req, res) => {
    professorService.login();
    res.send(professorService.login()); //chama a função para obter uma lista de alunos.

});

module.exports = router;