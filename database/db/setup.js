const {database,check}=require("./dbconfig");
const {dbleitura,checkLeitura}=require("./dbconfig");
const {dbescrita,checkEscrita}=require("./dbconfig");
const Agenda=require("../models/agenda");
const Denuncia=require("../models/denuncias");
const Locais=require("../models/locais");

const AgendaEscrita=require("../models/agenda-escrita");
const AgendaLeitura=require("../models/agenda-leitura");

const LocaisLeitura=require("../models/locais-leitura");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
}

async function initLeitura() {
    console.log("Sincronizando modelo...");
    await checkLeitura();
    await dbleitura.sync();
}

async function initEscrita() {
    console.log("Sincronizando modelo...");
    await checkEscrita();
    await dbescrita.sync();
}


module.exports={init,initLeitura,initEscrita};