// importar modulo util para usar setTimeout
const util = require('util');
// convierte funciones callbacks a funciones con promesas o async-await
// se guarda dentro de una variable para hacer uso de la funcion
const sleep = util.promisify(setTimeout);

// exportar dos funciones
module.exports = {
    // creacion de dos metodos para simular tareas asincronas 
    async taskOne() {
        try {
            // crear un error
            throw new Error('Problema');
            // se le da el parametro de tiempo que pide el setTimeout
            await sleep(4000);
            return 'One value';
        } catch (err) {
            console.log(err);
        }
    },
    async tasksTwo() {
        await sleep(2000);
        return 'Two value';
    }
}