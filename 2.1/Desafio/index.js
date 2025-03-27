import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const PORT = 3000;

const temasJSON = `[
    {
      "id": "0001",
      "nombre": "Estructuras de Datos",
      "descripcion": "Conceptos y aplicación de estructuras como listas, pilas, colas y árboles.",
      "palabras_clave": ["Listas", " Árboles", " Pilas", " Colas"],
      "practicas": {
        "titulo": "Implementación de Pilas y Colas",
        "descripcion": "Desarrollar un programa que implemente pilas y colas en C++.",
        "objetivo": "Comprender el almacenamiento y manejo de datos en estructuras dinámicas."
      }
    },

    {
      "id": "0002",
      "nombre": "Bases de Datos",
      "descripcion": "Modelado, diseño e implementación de bases de datos relacionales y no relacionales.",
      "palabras_clave": ["SQL", " NoSQL", " bases de datos", " modelado"],
      "practicas": {
        "titulo": "Creación de una base de datos MySQL",
        "descripcion": "Definir un esquema de base de datos y realizar consultas básicas con SQL.",
        "objetivo": "Manejar correctamente bases de datos relacionales con MySQL."
      }
    },

    {
      "id": "0003",
      "nombre": "Desarrollo Web",
      "descripcion": "Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y frameworks.",
      "palabras_clave": ["HTML", " CSS", " JavaScript", " Frameworks"],
      "practicas": {
        "titulo": "Creación de un sitio web responsivo",
        "descripcion": "Diseñar una página web utilizando HTML, CSS y Bootstrap.",
        "objetivo": "Aplicar estilos y diseño responsivo en páginas web."
      }
    },

    {
      "id": "0004",
      "nombre": "Redes",
      "descripcion": "Fundamentos de redes de computadoras y estrategias de seguridad informática.",
      "palabras_clave": ["Seguridad", " Firewall", " Cifrado"],
      "practicas": {
        "titulo": "Configuración de una red LAN",
        "descripcion": "Establecer una red local con dispositivos conectados y seguridad básica.",
        "objetivo": "Comprender la configuración básica de redes y seguridad."
      }
    }
  ] `;

const temas = JSON.parse(temasJSON);

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/temas/:type', (req, res) => {

    const elegirTema = temas.find(r => r.nombre.toLowerCase() === req.params.type.toLowerCase());

    res.json(elegirTema || {error: "Tema no encontrado"});
});

app.listen(PORT, () => console.log('Servidor corriendo en ' + PORT));