import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Console } from 'console';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();
const PORT = 3000;

var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended:true }));

app.use(registrador);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Datos recibidos");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});

function registrador(req, res, next){
    console.log(req.body);
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
    next();
}