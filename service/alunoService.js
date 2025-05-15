const Aluno = require('../model/entity/aluno') //Estou importando a entidade aluno para utilizar os metodos.
const {Op} = require('sequelize')

const AlunoService = {
    cadastrar:async (aluno) =>{
        try{
            const user = await Aluno.create(aluno);
            return user;

        } catch(erro){
            console.log(`O ERRO ESTOUROU AQUI ${erro}`)
        }     
    },

    editar:async(aluno)=> {
        return await Aluno.update(aluno,{
            where:{
                id:aluno.id
            }
        })
    },

    excluir:async(chave) => {
        return await Aluno.destroy({
            where:{
                id:chave
            }
        })

    },
    listar:async() => {
        return await Aluno.findAll()
    },
    buscar:async(id) => {
        return await Aluno.findAll({
            where:{
                nome:{
                    [Op.iLike]: `%${id}%`
                }
            }
        })
    }


}

module.exports = Object.create(AlunoService);
