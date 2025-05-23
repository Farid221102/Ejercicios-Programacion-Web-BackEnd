import { MongoClient } from 'Mongodb';
import { ObjectId } from 'Mongodb';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexión a MongoDB
const uri = process.env.uri;
const client = new MongoClient(uri);
let db;
let usuarios;

//Función de conexión
async function conn() {
  try {
    await client.connect(); // Conectar el cluster
    db = client.db('test'); // Conectar a la base de datos
    usuarios = db.collection('usuarios'); // Obtener la colección
    console.log("Conexión exitosa a la base de datos")
  } catch (error) {
    console.error("Error al conectar la base de datos: ", error);
  }
}
conn();

//Rutas
app.get('/usuarios', async (req, res) => {
    try{
        const result = await usuarios.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

app.get('/usuario/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await usuarios.findOne({ _id: new ObjectId(id) });
        
        if (!result) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

app.post('/usuarios', async (req, res) => {
    try{
        const doc = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            correo: req.body.correo,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await usuarios.insertOne(doc);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.put('/usuario/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await usuarios.updateOne({_id: new ObjectId(id)}, {$set: req.body});

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

app.delete('/usuario/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = usuarios.deleteOne({ _id: new ObjectId(id)});

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
})