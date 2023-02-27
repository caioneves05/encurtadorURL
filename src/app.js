import express from "express";
import db from "./config/dbConnnect.js";


db.on("error", console.log.bind("Houve um erro na conexão com o banco de dados."));

db.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso.");
})


const app = express();

app.use(express.json())
 

export default app;