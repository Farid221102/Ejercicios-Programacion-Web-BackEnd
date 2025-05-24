const {
    suma,
    crearPersona,
    obtenerValores,
    obtenerNumero,
    obtenerTexto,
    obtenerColores,
    obtenerValor2,
    obtenerUsuario
} = require('./funciones');

// a) Igualdad exacta con toBe
test('10 + 10 es igual a 20', () => {
    expect(suma(10, 10)).toBe(20);
});

// b) Comparación de objetos con toEqual
test('Dos objetos con las misma propiedades y valores', () => {
    expect(crearPersona("Juan", 20)).toEqual({ nombre: "Juan", edad: 20 });
});

// c) Valores null, undefined y definidos
test('valor nulo', () => {
    const valores = obtenerValores();
    expect(valores.nulo).toBeNull();
});

test('valor indefinido', () => {
    const valores = obtenerValores();
    expect(valores.indefinido).toBeUndefined();
});

test('valor definido', () => {
    const valores = obtenerValores();
    expect(valores.definido).toBeDefined();
});

// d) Comparaciones numéricas
test('El número es mayor que 5', () => {
    expect(obtenerNumero()).toBeGreaterThan(5);
});

test('El número es menor que 20', () => {
    expect(obtenerNumero()).toBeLessThan(20);
});

test('El número es mayor o igual que 10', () => {
    expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});

// e) Coincidencia de cadenas con Expresiones regulares
test('El texto contiene la palabra mensaje', () => {
    expect(obtenerTexto()).toMatch(/mensaje/);
});

// f) Verificación de contenido en Arrays
test('El array colores contiene amarillo', () => {
    expect(obtenerColores()).toContain("amarillo");
});

// g) Negación de Matchers
test('El valor no es igual a 10', () => {
    expect(obtenerValor2()).not.toBe(10);
});

// h) Pruebas asincrónicas con Promesas
test('Usuario resolve', () => {
    return expect(obtenerUsuario(true)).resolves.toEqual({ nombre: "Ana", rol: "admin" });
});

test('Usuario reject', () => {
    return expect(obtenerUsuario(false)).rejects.toBe("No autenticado");
});