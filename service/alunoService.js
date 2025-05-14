const Aluno = require('../model/entity/aluno') //Estou importando a entidade aluno para utilizar os metodos.

const AlunoService = {
    cadastrar:async (aluno) =>{
        try{
            const user = await Aluno.create(aluno);
            //user.save()
            return user;

        } catch(erro){
            console.log(erro)
        }     
    },

    editar:(aluno)=> {console.log('2')},
    excluir:async(chave) => {
        Aluno.destroy({
            where:{
                id:chave
            }
        })

    },
    listar:async() => {
        return await Aluno.findAll()
    },
    buscar: (id) => {console.log('5')}


}

module.exports = Object.create(AlunoService);
