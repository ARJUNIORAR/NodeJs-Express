const Professor = require('../model/entity/professor') //Estou importando a entidade aluno para utilizar os metodos.

const ProfessorService = {
    login:async (professor) => {
        console.log(professor.email, professor.senha)
        try{
            const user = await Professor.login( professor.email, professor.senha );
            return true;

        } catch(erro){
            console.log(`O ERRO ESTOUROU AQUI ${erro}`)
        }   
    }
    
}

module.exports = Object.create(ProfessorService);