const AlunoDTO = {


    muitos: (alunos) => {
        return alunos.map(al => {
            return {
                id: al.id,
                nome: al.nome,
                foto: al.foto == undefined ? null : `http://localhost:3000/${al.foto}`
            }
        })

    },

}

module.exports = Object.create(AlunoDTO);
