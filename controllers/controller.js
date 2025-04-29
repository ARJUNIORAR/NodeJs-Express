class controllers {
    buscar() {
        return "Buscando atendimentos..."
    }
    criar() {
        return"Criando atendimento..."
    }
    alterar(id) {
        return "Alterando atendimento número" + id + "..."

    }
    apagar(id){
        "Deletando atendimento número" + id + "..."
    }
}

module.export = new AtendimentoController();