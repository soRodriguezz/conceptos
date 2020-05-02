/* Se ejecuta con node index.js */

// Requiere express en una variable para usarlo
const express = require('express');
// ejecutar express que devuelve un objeto que es el servidor guardandolo en una variable
const app = express();
// Cuando se hace una peticion GET a la raiz del servidor responder con: (Es un ruta o route)
app.get('/', (req, res) => {
    //enviar una respuesta
    res.send('Hello World')
});

// Rut de prueba con about
app.get('/about', (req, res) => {
    res.send('ABOUT ME')
});

// Ruta de prueba con contact
app.get('/contact', (req, res) => {
    res.send('FORM CONTACT')
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