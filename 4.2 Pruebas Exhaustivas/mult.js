function multiplicacionDos(a,b){
    return a * b;
}

console.group('Pruebas manuales');
    console.log('Caso normal', multiplicacion(2, 3));
    console.log('Caso con decimales', multiplicacion(1.5, 4.5));
    console.log('Caso frontera', multiplicacion(0, 5));
    console.log('Caso frontera', multiplicacion(Number.MAX_SAFE_INTEGER, 2))
    console.log('Caso frontera inválido',multiplicacion(18014398509481982, 2));
    console.log('Caso inválido por letra', multiplicacion('a', 2));
    console.log('Caso inválido por indefinido', multiplicacion(undefined, 2));
    console.log('Caso sin argumentos', multiplicacion());
    console.log('Caso coersión de tipo', multiplicacion('2', '3'));
    console.log('Caso nulo', multiplicacion(null, 2));
    console.log('Caso negativo-postivo', multiplicacion(-3, 2));
    console.log('Caso negativo-negativo', multiplicacion(-3, -2));
console.groupEnd();

function multiplicacion(a,b){
    if (typeof  a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b) || !Number.isSafeInteger(a) || !Number.isSafeInteger(b)){
        return NaN;
    }else {
        return a * b;
    }
}

module.exports = multiplicacion;