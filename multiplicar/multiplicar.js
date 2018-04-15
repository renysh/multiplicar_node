/**
 * requireds
 */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('========================'.green);
    console.log(`tabla de ${base}`.red);
    console.log('========================'.green);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${+ base * i}\n`;
        }

        resolve(data);
    });
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${+ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla_${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}