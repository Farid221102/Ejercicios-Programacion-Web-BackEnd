const multiplicacion = require('./mult');

describe('Casos pruebas Jest', () => {
    //Caso normal
    test('Mult de 2x3', () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    //Caso con decimales
    test('Mult de 1.5 x 4.5', () => {
        expect(multiplicacion(1.5, 4.5)).toBe(6.75);
    });

    //Caso frontera
    test('Mult de 0x5', () => {
        expect(multiplicacion(0, 5)).toBe(0);
    });

    //Caso frontera', multiplicacion(Number.MAX_SAFE_INTEGER, 2))
    test('Mult de Number.MAX_SAFE_INTEGER * 2', () => {
        expect(multiplicacion(Number.MAX_SAFE_INTEGER, 2)).toBe(18014398509481982);
    });

    //Caso frontera inválido
    test('Mult de 18014398509481982 * 2', () => {
        expect(multiplicacion(18014398509481982, 2)).toBeNaN();
    });
    
    //Caso inválido por letra
    test('Mult de a * 2', () => {
        expect(multiplicacion('a', 2)).toBeNaN();
    });

    //Caso inválido por indefinido
    test('Mult de undefined * 2', () => {
        expect(multiplicacion(undefined, 2)).toBeNaN();
    });

    //Caso sin argumentos
    test('Mult sin argumentos', () => {
        expect(multiplicacion()).toBeNaN();
    });

    //Caso coersión de tipo
    test('Mult de coersión de tipo', () => {
        expect(multiplicacion('2', '3')).toBe(6);
    });

    //Caso nulo
    test('Mult de null * 2', () => {
        expect(multiplicacion(null, 2)).toBe(0);
    });

    //Caso negativo-postivo
    test('Mult de -3 x 2', () => {
        expect(multiplicacion(-3, 2)).toBe(-6);
    });

    //Caso negativo-negativo
    test('Mult de -3 x -2', () => {
        expect(multiplicacion(-3, -2)).toBe(6);
    });
});