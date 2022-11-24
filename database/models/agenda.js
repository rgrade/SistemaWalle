const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Agenda=database.define('agenda',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING(100),
    },
    telefone:{
        type:Sequelize.STRING(15),
    },
    endereco:{
        type:Sequelize.STRING(200),
    },
    data:{
        type:Sequelize.DATE,
    },
    hora:{
        type:Sequelize.STRING(6),
    },
    equipamentos:{
        type:Sequelize.STRING(100),
    },
    observacao:{
        type:Sequelize.STRING(200),
    },
});

module.exports=Agenda;