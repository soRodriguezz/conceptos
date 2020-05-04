// Es un callback pero manejado con promesas (el mismo que el ejemoplo de los callbacks) de EM6
function requestHandler(req, res) {
    User.findById(req.userId)
        // then es una promesa, que entonces...cuando termine la ejecucion de la consulta continue con la funcion
        // es el caso en que pase correctamente
        .then(function(user) {
            return Tasks.findById(user.tasksId)
        })
        // Una vez encuentre la tarea que haga lo siguiente
        .then(function(task) {
            tasks.completed = true;
            // se retorna para tareas que llevan tiempo en ejecutarse y pueda continuar con la siguiente en caso de...
            return tasks.save();
        })
        // cuando ya se guarde puede devolver tareas completadas
        .then(() => {
            res.send('Tareas completadas');
        })
        // cuando cualquier funcion de arriba de error, cae aqui en el catch
        // en caso que de error va a esta funcion
        .catch((errors) => {
            res.send(errors);
        })
}