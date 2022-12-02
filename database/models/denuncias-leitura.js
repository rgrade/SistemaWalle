const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Denuncia=database.define('denuncia',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    titulo:{
        type:Sequelize.STRING(50),
    },
    local:{
        type:Sequelize.STRING(200),
    },
    email:{
        type:Sequelize.STRING(100),
    },
    mensagem:{
        type:Sequelize.STRING(200),
    },
});

module.exports=Denuncia;