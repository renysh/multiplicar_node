const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir en la consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo txt con la tabla de multiplicar de los parametros especificados', opts)
    .help()
    .argv;

module.exports = {
    argv
}