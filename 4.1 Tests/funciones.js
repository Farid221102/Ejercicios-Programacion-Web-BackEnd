// a) Igualdad exacta
function suma(a, b) {
    return a + b;
}

// b) Comparación de objetos
function crearPersona(nombre, edad) {
    return { nombre, edad };
}

// c) Verificación de valores nulos y definidos
function obtenerValores() {
    return {
        nulo: null,
        indefinido: undefined,
        definido: "algo"
    };
}

// d) Comparaciones numéricas
function obtenerNumero() {
    return 10;
}

// e) Coincidencia de cadena con Expresiones regulares
function obtenerTexto() {
    return "Hola, este es un mensaje de prueba.";
}

// f) Verifiación de contenido en Arrays
function obtenerColores() {
    return ["rojo", "amarillo", "azul"];
}

// g) Negación de Matchers
function obtenerValor2() {
    return 5;
}

// h) Pruebas asincrónicas con Promesas
async function obtenerUsuario(autenticado) {
    if (autenticado) {
        return { nombre: "Ana", rol: "admin" };
    } else {
        throw "No autenticado";
    }
}

module.exports = {
    suma,
    crearPersona,
    obtenerValores,
    obtenerNumero,
    obtenerTexto,
    obtenerColores,
    obtenerValor2,
    obtenerUsuario
};