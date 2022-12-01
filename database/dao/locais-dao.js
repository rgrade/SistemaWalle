const database = require("../db/dbconfig");
const Local = require("../models/locais");

async function gravarLocal(dados){
    try {
        const novoLocal = await Local.create({
            identificador: dados.identificador,
            endereco: dados.endereco,
            latitude: dados.latitude,
            longitude: dados.longitude
        });
        return true;
    } catch (error) {
        console.log("Erro ao incluir uma agenda: "+error)
        return false;
    }
}

async function buscaLocais() {
    return await Local.findAll();
}

module.exports = {
    gravarLocal,
    buscaLocais
};