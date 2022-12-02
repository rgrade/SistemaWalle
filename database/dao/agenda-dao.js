const dbescrita = require("../db/dbconfig");
const AgendaEscrita = require("../models/agenda-escrita");

async function gravarAgenda(dados){
    try {
        const novaAgenda = await AgendaEscrita.create({
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