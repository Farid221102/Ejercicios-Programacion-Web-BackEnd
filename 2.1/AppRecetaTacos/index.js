import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const PORT = 3000;

const recetaJSON = `[
    {
      "id": "0001",
      "tipo": "taco",
      "nombre": "Taco de Carne Asada",
      "precio": 25.00,
      "ingredientes": {
        "proteina": {
        "nombre": "Res",
        "preparacion": "Asada"
        },
        "salsa": {
          "nombre": "Salsa roja",
          "picor": "Alto"
        },
        "acompañamientos": [
          {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": ["Cebolla morada", "Cilantro", "Limón", "Sal"]
          },
          {
            "nombre": "Pico de gallo",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Tomate", "Cebolla", "Cilantro", "Jalapeño", "Limón", "Sal"]
          }
        ]
      }
    },
        
    {
      "id": "0002",
      "tipo": "taco",
      "nombre": "Taco de Chicharra",
      "precio": 28.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Puerco",
          "preparacion": "Carne de cerdo frita"
        },
        "salsa": {
          "nombre": "Salsa verde",
          "picor": "Alto"
        },
        "acompañamientos": [
          {
            "nombre": "Salpicón",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Cebolla blanca", "Cilantro", "Tomate", "Rábano", "Limón", "Sal"]
          },
          {
            "nombre": "Aguacate",
            "cantidad": "1 cucharada"
          }
        ]
      }
    },
        
    {
      "id": "0003",
      "tipo": "taco",
      "nombre": "Taco de Pollo Pibil",
      "precio": 26.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Pollo",
          "preparacion": "Cocinado con achiote y especias"
        },
        "salsa": {
          "nombre": "Salsa de habanero",
          "picor": "Alto"
        },
        "acompañamientos": [
          {
            "nombre": "Cebolla morada encurtida",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Cebolla morada", "Vinagre", "Sal", "Naranja agria"]
          },
          {
            "nombre": "Frijoles negros colados",
            "cantidad": "1 cucharada"
          }
        ]
      }
    },

    {
      "id": "0004",
      "tipo": "taco",
      "nombre": "Taco de Salpicón de Venado",
      "precio": 30.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Venado",
          "preparacion": "Deshebrado y marinado en cítricos"
        },
        "salsa": {
          "nombre": "Salsa de chile xcatic",
          "picor": "Medio"
        },
        "acompañamientos": [
          {
            "nombre": "Salpicón",
            "cantidad": "3 cucharadas",
            "ingredientes": ["Cebolla blanca", "Cilantro", "Tomate", "Rábano", "Naranja agria", "Sal"]
          },
          {
            "nombre": "Aguacate",
             "cantidad": "1 rebanada"
          }
        ]
      }
    }
  ]`;

const recetaTacos = JSON.parse(recetaJSON);

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {

    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());

    res.json(elegirTaco || {error: "Receta no encontrada"});
});

app.listen(PORT, () => console.log('Servidor corriendo en ' + PORT));
