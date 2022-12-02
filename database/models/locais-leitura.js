const Sequelize=require('sequelize');
const {dbleitura}=require('../db/dbconfig.js');

const LocaisLeitura=dbleitura.define('locais',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    identificador:{
        type:Sequelize.STRING(50),
    },
    endereco:{
        type:Sequelize.STRING(200),
    },
    latitude:{
        type:Sequelize.STRING(20),
    },
    longitude:{
        type:Sequelize.STRING(20),
    }
});

module.exports=LocaisLeitura;