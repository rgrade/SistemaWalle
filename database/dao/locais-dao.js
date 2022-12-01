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

function gerar(){
    let nomes = ["Diego", "Gabriel", "Lucas"];
    let lista = document.getElementById('lista');
    for(var i = 0; i < nomes.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(nomes[i]));
        lista.appendChild(item);
    }
}

module.exports = {
    gravarLocal,
    buscaLocais,
    gerar,
}; 