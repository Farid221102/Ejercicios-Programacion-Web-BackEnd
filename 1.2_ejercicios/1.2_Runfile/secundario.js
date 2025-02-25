//secundario.js

// Requerir el módulo 'index.js'
const mate = require('./index');

// Usar las funciones del módulo
let rs = mate.suma(5, 3);
let rr = mate.resta(10, 4);
let rm = mate.mult(7, 6);
let rd = mate.div(20, 5);

console.log("Resultado de la suma:", rs);
console.log("Resultado de la resta:", rr);
console.log("Resultado de la multiplicación:", rm); 
console.log("Resultado de la división:", rd);