// importo dos funciones desde tasks.js
// ejecutar de forma paralela, el tiempo total de ejecucion son 6 segundos porque la primera tarea demora 4 y la segunda 2
const { taskOne, tasksTwo } = require('./tasks');

async function main() {
    try {
        // el console.time mide cuanto tiempo se demora lo que esta en medio del time y el endTime en ejecutarse
        console.time('Measuring time');
        // await para que termine el primero codigo y ejecute el resto
        const valueOne = await taskOne();
        const valueTwo = await tasksTwo();
        console.timeEnd('Measuring time');

        console.log('Se ejecuto el valor 1', valueOne);
        console.log('Se ejecuto el valor 2', valueTwo);
    } catch (e) {
        console.log(e);
    }
}

main();