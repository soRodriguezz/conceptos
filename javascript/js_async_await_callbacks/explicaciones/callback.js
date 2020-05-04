/* La piramide a la izquierda se conoce como callback hell, ya que es dificil de leer en EM5 */
function requestHandler(req, res) {
    // Consulta a la base de datos de una busqueda por ID
    // El callback se escribe luego de la coma, es una funcion que se ejecuta luego que termine la consulta a la base de datos.
    // se puede ocupar una funcion normal o una funcion en flecha para ejecutar un callback
    User.findById(req.userId, (err, user) => {
        if (err) {
            // Se encarga de enviar en caso que la funcion reenvie un error.
            res.send(err);
        } else {
            // en caso que pase buscar todas las tareas que tenga ese usuario
            // Como la consulta task igual lleva tiempo se puede hacer otro callback
            Tasks.findById(user.tasksId, function(err, tasksId) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    // save tambien es una consulta a la base de datos, el cual tambien demora tiempo
                    // se puede volver a integrar un callback, pero esta vez con un solo parametro
                    tasks.save((err) => {
                        if (err) {
                            // se puede volver a enviar un error
                            return res.send(err);
                        } else {
                            // ó en caso contrario enviar el mensaje de que ya se completo la tarea
                            res.send('Task comppleted')
                        }
                    });
                }
            });
        }
    });
    // Demas condigo que se escriba desde aqui esta fuera del callback y se puede ejecutar antes que llame a la consulta
}