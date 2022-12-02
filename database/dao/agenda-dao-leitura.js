const dbescrita = require("../db/dbconfig");
const AgendaLeitura = require("../models/agenda-leitura");

async function buscaLocais() {
    return await AgendaLeitura.findAll();
}
module.exports = {
    buscaLocais
}