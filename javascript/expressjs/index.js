/* Se ejecuta con node index.js */

// Requiere express en una variable para usarlo
const express = require('express');
// ejecutar express que devuelve un objeto que es el servidor guardandolo en una variable
const app = express();
// Para que express ahora pueda entender los formatos JSON (es iun middleware)
app.use(express.json());

// Funcion de express, no es un metodo el 'all', es un middleware
// Es para hacer algo siempre antes de entrar a cualquier otro metodo, para todos las consultas.
// next es para que luego que ejecute el console log siga con el siguiente metodo a ejecutar
app.all('/user', (req, res, next) => {
    console.log('Por aqui paso');
    // Para llamar al tercer parametro y pasar a la siguienet ejecucion
    next();
});

// Cuando se hace una peticion GET a la raiz del servidor responder con: (Es un ruta o route)
app.get('/', (req, res) => {
    //enviar una respuesta
    res.send('Hello World')
});

// Ejemplo envio de JSON por el metodo GET
app.get('/user', (req, res) => {
    //especificar que voy a mandar un objeto de java script
    res.json({
        username: 'Sebastian',
        lastname: 'Rodriguez'
    });
});

// Ejemplo de envio de formulario por POST, no importa que tenga el mismo nombre la ruta, importa el motodo.
// :id, es una ruta dinamica, es un tipo de variable
app.post('/user/:id', (req, res) => {
    // Recibe los datos que envia la aplicacion FrontEnd
    console.log(req.body);
    // Para capturar los parametros enviados en la url
    console.log(req.params);
    // Especificar que voy a mandar un objeto de javascript
    res.send('POST REQUEST RECEIVED');
});

// Ejemplo de metodo PUT, necesita una ID y los datos que necesitamos reemplazar en el body
app.put('/user/:id', (req, res) => {
    // Recibe los datos que envia la aplicacion FrontEnd
    console.log(req.body);
    res.send(`User ${req.params.id} Updated`);
});

// Ejemplo de ruta para borrar 
app.delete('/user/:userId', (req, res) => {
    // Se usa esa forma de comentario para poner variables dentro, en este caso llama el resultado de lo que trae el userId
    res.send(`User ${req.params.userId} deleted`);
});

// Rut de prueba con POST
app.post('/about', (req, res) => {
    res.send('ABOUT ME')
});

// Ruta de prueba con PUT
app.put('/contact', (req, res) => {
    res.send('FORM CONTACT')
});

// Ruta de prueba con DELETE
app.put('/delete', (req, res) => {
    res.send('delete')
});

// Indicar donde se ejecutara el servidor
app.listen(5000, () => {
    console.log('Server on http://localhost:5000');
});

/*  CREACION DE SERVIDOR CON NODEJS puro

//Modulo para crear servidor web o HTTP
const http = require('http');

//Metodo para llamar el servidor
// Funcion para dar configuracion al servidor (res,res)
const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

//indicar por el puerto que se ejecuta el servidor
server.listen(3000, () => {
    console.log('Server on http://localhost:3000');
});
*/