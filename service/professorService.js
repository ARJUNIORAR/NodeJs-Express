const Professor = require('../model/entity/professor') //Estou importando a entidade aluno para utilizar os metodos.

const ProfessorService = {
    login:async (professor) => {
        try{
            const user = await Professor.login( email, senha );
            return true;

        } catch(erro){
            console.log(`O ERRO ESTOUROU AQUI ${erro}`)
        }   
    }
    
}

module.exports = Object.create(ProfessorService);