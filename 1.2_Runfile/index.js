//Ejercicio 1. Comentarios en línea y multilínea--------------------------------------------------------------------------------------------------------------
//Este es un comentario en línea
/*
Este es un
comentario
en muiltilínea
*/

//Ejercicio 2. Declarar diferentes tipos de variables y mostrar sus valores por consola-----------------------------------------------------------------------
/*let edad = 25; // Número
const nombre = "Juan"; // String
let esEstudiante = true; // Booleano

console.log("Edad:", edad); 
console.log("Nombre:", nombre); 
console.log("¿Es estudiante?", esEstudiante);*/


//Ejercicio 3. Crear un array con al menos cinco elementos de diferentes tipos--------------------------------------------------------------------------------
/*const vector = ["Negro", "Blanco", 22, 11, true];
console.log(vector[0]);
console.log(vector[1]);
console.log(vector[2]);
console.log(vector[3]);
console.log(vector[4]);*/

//Ejercicio 4. Escribe una función que tome dos números y aplique una operación-------------------------------------------------------------------------------
/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mult() {
    rl.question("Ingresa el primer número: ", (x) => {
        rl.question("Ingresa el segundo número: ", (y) => {
            let resultado = parseFloat(x) * parseFloat(y);

            console.log("Resultado de la multiplicación: " + resultado);
            rl.close();
        });
    });
}

mult();*/

//Ejercicio 5. Crea una función flecha que reciba un string y lo imprima en mayúsculas------------------------------------------------------------------------
/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertirMayusculas = (msg) => {
    console.log(msg.toUpperCase());
};

rl.question("Ingresa un texto: ", (txt) => {
    convertirMayusculas(txt);
    rl.close();
});*/

//Ejercicio 6. Implementa un bucle que imprima los números del 1 al 10
/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

//Ejercicio 7. Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades---------------------------------------------------------
/*const persona = {
    nombre: "Ana",
    edad: 30,
    esEstudiante: false
  };

console.log("Información de la persona:", persona);*/

//Ejercicio 8. Agrega un método al objeto creado anteriormente e imprima una descripción del mismo------------------------------------------------------------
/*const persona = {
    nombre: "Pedro",
    edad: 15,
    pais: "México",

    describirse: function(){
        console.log("Mi nombre es " + this.nombre);
        console.log("Tengo " + this.edad + " años");
        console.log("Vivo en " + this.pais);
    }
  };

persona.describirse();*/

//Ejercicio 9. Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo.-------------------------------------
/*const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

// Exportar funciones
module.exports = { suma, resta, mult, div};*/

//Ejercicio 10. Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resulado en un callback----------------------------
/*function operacionAsincronica(callback) {
    console.log("Operación iniciada...");
    
    setTimeout(() => {
        const resultado = "Operación completada con éxito!";
        
        //Callback con el resultado
        callback(resultado);
    }, 2000); // Simula retraso de 2 segundos
}

// Función de callback que maneja el resultado
function manejarResultado(resultado) {
    console.log("Callback:", resultado);
}

operacionAsincronica(manejarResultado);*/

//Ejercicio 11. Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir-----------------------
/*function convertirCadenaANumero(cadena) {
    try {
        let numero = parseFloat(cadena);
        let comprobar = 10;

        //Si la cadena contiene un valor que no puede convertirse en un número, parseInt() devolverá NaN (Not a Number).
        if (isNaN(numero)) {
            throw new Error("La cadena no puede ser convertida a un número válido.\n");
        }else{
            comprobar += numero;
        }

        console.log("La conversión fue exitosa. El número es: " + numero);
        console.log("Comprobación de que se puede usar en una operación: " + comprobar + "\n");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

convertirCadenaANumero("123");
convertirCadenaANumero("abc");
convertirCadenaANumero("46");*/