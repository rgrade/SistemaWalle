const {database,check}=require("./dbconfig");
const Agenda=require("../models/agenda");
const Denuncia=require("../models/denuncias");
const Locais=require("../models/locais");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
   
}

module.exports={init};