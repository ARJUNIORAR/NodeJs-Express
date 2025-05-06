const AlunoService = {
    cadastrar:() =>{console.log('1')},
    editar:()=> {console.log('2')},
    excluir:() => {console.log ('3')},
    listar:() => {return [1,2,3,4,5]},
    buscar: () => {console.log('5')}


}

module.exports = Object.create(AlunoService);
