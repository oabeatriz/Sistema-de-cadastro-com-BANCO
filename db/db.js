const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './videoteca.sqlite'
});

//tratando tentativas e erros
 try {
    sequelize.authenticate();
    console.log("BANCO CRIADO");
 } catch(erro){
    console.log("ERRO DE CRIAÇÃO", erro);
 }

 module.exports = sequelize;
