import app from "./src/app.js";
import dotenv from "dotenv";
import urlsController from "./src/controller/urls.controller.js";

const urls = new urlsController()

dotenv.config()

const porta = process.env.PORT;

console.log(porta)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get("/urls", urls.listarURLS);
app.post('/shorten', urls.shorten);
app.get('/:hash', urls.redirect);