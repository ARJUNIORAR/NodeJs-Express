//const Routes = require("express").Router;
const {Router} = require("express");
const router = Router();//Buscar a instancia da variavel acima
const alunoService = require("../service/alunoService");
const professorService = require("../service/professorService");
const upload = require('../util/upload')

router.post("/aluno/",upload.single('foto'), (req, res) => {
    console.log(req.body)
    res.send(alunoService.cadastrar(req.body));

});

router.put("/aluno/", (req, res) => {
    alunoService.editar();
    res.send(alunoService.editar()); // linha serve para retornar o dado 
});

router.get("/aluno/:id", (req, res) => {
    alunoService.buscar();
    res.send(alunoService.buscar());
});

router.delete("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    res.send(alunoService.excluir(req.params.id));
});

router.get("/alunos/", async (req, res) => {
    alunoService.listar();
    res.send(await alunoService.listar());
});

// Rota abaixo serve para o login do usuario.

router.post("/professor/login", (req, res) => {
    professorService.login();
    res.send(professorService.login()); //chama a função para obter uma lista de alunos.

});

module.exports = router;