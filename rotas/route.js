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

router.put("/aluno/", upload.single('foto'),(req, res) => {
    res.send(alunoService.editar(req.body)); // linha serve para retornar o dado 
});

router.get("/aluno/:id", async(req, res) => {
    res.send(await alunoService.buscar(req.params.id));
});

router.delete("/aluno/:id", (req, res) => {
    res.send(alunoService.excluir(req.params.id));
});

router.get("/alunos/", async (req, res) => {
    res.send(await alunoService.listar());
});

// Rota abaixo serve para o login do usuario.

router.post("/professor/login", async(req, res) => {
    res.send(await professorService.login(req,body));
});

module.exports = router;