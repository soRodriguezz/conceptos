// Es mas facil de entender que trabajar con promesas y callbacks
// await solo esta disponible cuando la funcion tenga un async al inicio
async function requestHandler(req, res) {
    // try para manejar los errores de los await
    try {
        // el await dice que la consulta que se hara tomara tiempo
        // cuando termine la consulta el usuario que retorne lo guardara en la variable 'user'.
        // si no devuelve nada la consulta no es necesario declarar una variable
        const user = await User.findById(req.userId);
        let tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        // Como cuando finalice no devuelve nada se puede solo poner await para indicar que llevara tiempo la consulta
        // se escribe el await para que siga con el codigo que esta escrito mas abajo
        await tasks.save();
        res.send('Task completed');
    } catch (err) {
        res.send(err);
    }
}