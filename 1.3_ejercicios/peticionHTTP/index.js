import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('<h1>Hola Mundo</h1>');
    res.sendStatus(200);
});

app.post('/registro', (req, res) =>{
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) =>{
    res.sendStatus(202);
});

app.patch('/usuario/modificar', (req, res) =>{
    res.sendStatus(203);
});

app.delete('/usuario/eliminar', (req, res) =>{
    res.sendStatus(204);
});

app.listen(port, () =>{
   console.log(`Servidor ejecutandose en el puerto ${port}`); 
});