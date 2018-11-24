const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea',{
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            description: 'Marca como pendiente o completado'
        }
    })
    .command('borrar', 'eliminar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}