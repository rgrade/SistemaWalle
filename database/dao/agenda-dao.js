const database = require("../db/dbconfig");
const Agenda = require("../models/agenda");

async function gravarAgenda(dados){
    try {
        const novaAgenda = await Agenda.create({
            nome: dados.nome,
            telefone: dados.telefone,
            endereco: dados.endereco,
            data: dados.data,
            hora: dados.hora,
            equipamentos: dados.equipamentos,
            observacao: dados.observacao,
        });
        return true;
    } catch (error) {
        console.log("Erro ao incluir uma agenda: "+error)
        return false;
    }
}

module.exports = {
    gravarAgenda
}