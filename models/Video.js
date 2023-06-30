const Sequelize = require('sequelize');
const database = require("../db/db");

const Video = database.define('video',{
id_video:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
autor:{
    type: Sequelize.STRING,
    allowNull: false
},
titulo:{
    type: Sequelize.STRING,
    allowNull: false
},
assunto:{
    type: Sequelize.STRING,
    allowNull: false
},

descricao:{
    type: Sequelize.STRING,
    allowNull: false
},

link:{
    type: Sequelize.STRING,
    allowNull: false
}



}, {database, modelname:'video', tablename:'videos'});
module.exports = Video;
