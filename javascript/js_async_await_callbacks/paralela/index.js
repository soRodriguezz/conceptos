// Al ser paralela deberia demorar 4 segundos ya que ambas se ejecutan al mismo tiempo
const { taskOne, tasksTwo } = require('./tasks');

async function main() {
    try {
        console.time('Measuring time');
        /* Toma ambas funciones y las ejecuta al mismo tiempo, se crea una variable para guardar el arreglo de ejecuciones
        dentro de la variable results y obtener los resultados de ambos */
        const results = await Promise.all([taskOne(), tasksTwo()]);
        console.timeEnd('Measuring time');

        console.log('Se ejecuto el valor 1', results[0]); // el valor del primer resultado en el arreglo 
        console.log('Se ejecuto el valor 2', results[1]); // el valor del segundo resultado en el arreglo
    } catch (e) {
        console.log(e);
    }
}

main();