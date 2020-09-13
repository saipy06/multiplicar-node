const fs = require('fs');
const colors = require('colors');
rojo = colors.red;


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}



// module.exports.crearArchivo = (base)=>               Seria otra forma de exportar el archivo
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`La base no es un número`);
            return;
        }


        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(rojo(`tabla-${base}-al${limite}.txt`));
        });

    });
}

module.exports = {
    listarTabla,
    crearArchivo,
}