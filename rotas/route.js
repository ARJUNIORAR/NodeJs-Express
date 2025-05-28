const { Router } = require("express");
const router = Router();//Buscar a instancia da variavel acima
const alunoService = require("../service/alunoService");
const professorService = require("../service/professorService");
const upload = require('../util/upload');
const alunoDTO = require('../model/dto/alunodto')

router.post("/aluno/", upload.single('foto'), (req, res) => {
    const aluno = {...req.body,foto:req.file?.filename}
    console.log(aluno)
    res.send(alunoService.cadastrar(aluno));

});

router.put("/aluno/", upload.single('foto'), (req, res) => {
    let aluno = req.body;
    if (req.file) aluno = {...aluno,foto:req.file?.filename}
    res.send(alunoService.editar(aluno)); // linha serve para retornar o dado
});

router.get("/aluno/:id", async (req, res) => {
    res.send(await alunoService.buscar(req.params.id));
});

router.delete("/aluno/:id", (req, res) => {
    res.send(alunoService.excluir(req.params.id));
});

router.get("/alunos/", async (req, res) => {
    const alunos = await alunoService.listar();
    res.send(alunoDTO.muitos(alunos));
});

// Rota abaixo serve para o login do usuario.

router.post("/professor/login", async (req, res) => {
    const professor = await professorService.login(req.body)
    if (professor)
        return res.status(200).json()
    return res.status(404).json()

});

module.exports = router;