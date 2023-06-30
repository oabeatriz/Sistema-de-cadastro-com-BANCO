const database = require("./db/db");
const express = require("express");
const app = express()
const porta = 8080
const Video = require("./models/Video");
const hand = require("express-handlebars");
//MODELS

const VideoRoutes = require("./routes/routesVideo");
//CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");


app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", VideoRoutes);

try{
    database.sync().then(() => {
    app.listen(porta, () => {console.log("SERVIDOR RODANDO")});
    })
} catch(erro) {
    console.log("ERRO DE SINCRONISMO", erro);
}
