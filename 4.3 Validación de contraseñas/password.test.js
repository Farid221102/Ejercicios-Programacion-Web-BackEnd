const validarPassword = require('./password');

describe('Pruebas para validar contraseñas', () => {
    
    test('Contraseña válida completa', () => {
        expect(validarPassword('FariD2002$')).toBe(true);
    });

    test('Falla por no tener mayúscula', () => {
        expect(validarPassword('farid2002$')).toBe(false);
    });

    test('Falla por no tener minúscula', () => {
        expect(validarPassword('FARID2002$')).toBe(false);
    });

    test('Falla por no tener número', () => {
        expect(validarPassword('FariD$$$')).toBe(false);
    });

    test('Falla por no tener carácter especial', () => {
        expect(validarPassword('FariD2002')).toBe(false);
    });

    test('Falla por menos de 8 caracteres', () => {
        expect(validarPassword('Far2$')).toBe(false);
    });

    test('Falla por contener espacios', () => {
        expect(validarPassword('FariD 2002$')).toBe(false);
    });

    test('Falla por no contener palabra significativa', () => {
        expect(validarPassword('Hola1234$')).toBe(false);
    });

    test('Falla si es undefined', () => {
        expect(validarPassword(undefined)).toBe(false);
    });

    test('Falla si no es string (número)', () => {
        expect(validarPassword(12345678)).toBe(false);
    });

    test('Falla si cadena vacía', () => {
        expect(validarPassword('')).toBe(false);
    });

});