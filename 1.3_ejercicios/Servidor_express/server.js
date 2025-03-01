import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const __dirname = path.resolve();

// Servir archivos estáticos desde "public"
app.use(express.static('public'));

// Rutas para servir los archivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});