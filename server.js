import app from "./src/app.js";
import dotenv from "dotenv";
import urlsController from "./src/controller/urls.controller.js";

dotenv.config()

const porta = process.env.PORT;

console.log(porta)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.post('/shorten', urlsController.shorten);
app.get('/:hash', urlsController.redirect);