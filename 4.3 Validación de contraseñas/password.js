/*function validarPassword(pass){
    if(pass.length >= 8){
        return true;
    }
    
    return false;
}*/

function validarPassword(password) {
    const mayus = /[A-Z]/.test(password);
    const minus = /[a-z]/.test(password);
    const num = /[0-9]/.test(password);
    const esp = /[!@#$%^&*()]/.test(password);
    const sinEspacios = !/\s/.test(password);
    const palabraClave = /FariD/i.test(password);

    if (typeof password == 'string' && password.length >= 8  && mayus && minus && num && esp && sinEspacios && palabraClave){
        return true
    }else{
        return false
    }
}

module.exports = validarPassword;