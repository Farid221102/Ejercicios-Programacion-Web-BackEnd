import express from 'express';

const app = express();
const PORT = 3000;

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error('Respuesta del servidor fallida' + respuesta.statusText);
        }

        return respuesta.json();
    })
    .then(datos => {
        console.log('Datos recibidos:', datos);
    })
    .catch(error => {
        console.error('Error al hacer la solictud:', error);
    });


app.listen(PORT, () => console.log('Servidor corriendo en ' + PORT));