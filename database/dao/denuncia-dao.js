const database = require("../db/dbconfig");
const Denuncia = require("../models/denuncias");

async function gravarDenuncia(dados){
    try {
        const novaDenuncia = await Denuncia.create({
            titulo: dados.titulo,
            local: dados.local,
            email: dados.email,
            mensagem: dados.mensagem,
        });
        return true;
    } catch (error) {
        console.log("Erro ao incluir uma agenda: "+error)
        return false;
    }
}

module.exports = {
    gravarDenuncia
}