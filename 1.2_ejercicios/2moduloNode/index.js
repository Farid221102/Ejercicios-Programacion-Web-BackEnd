const fs = require("fs");

/*/usar el metodo writeaFile para escribir un archivo
//fs.writeFile(file, data[, options], callback)

fs.writeFile("archivo.txt" , "texto-contenido del archivo", (err)=>{
    if(err)throw err;
    console.log("El archivo se ha creado");
});
*/
//Modifica el archivo
//escribe aqui abajo el metodo correspondiente para leer el arvhivo.txt y obtener el texto nuevo

fs.readFile("archivo.txt", "utf8", (err, data)=>{
    if(err)throw err;
    console.log(data);
});