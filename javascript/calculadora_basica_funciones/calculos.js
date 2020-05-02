// function sumaNumeros(numero1, numero2) {
//     return numero1 + numero2;
// }
// //sumaNumeros(3, 4);

// function greeThePlanet() {
//     return "Hola mundo";
// }
// //greenThePlanet();

// function cuadrado(numero) {
//     return numero * numero;
// }

// //cuadrado(3);

// function sumaTresNumeros() {
//     return 3 + 2 + 1;
// }

// (numero1, numero2) => { return numero1, numero2 }

/* CALCULOS PARA CALCULADORA */

function multiplicar() {
    let valorUno = parseInt(document.getElementById("campoUno").value);
    let valorDos = parseInt(document.getElementById("campoDos").value);

    return document.getElementById("resultado").value = valorUno * valorDos;
}

function sumar() {
    let valorUno = parseInt(document.getElementById("campoUno").value);
    let valorDos = parseInt(document.getElementById("campoDos").value);

    return document.getElementById("resultado").value = valorUno + valorDos;
}

function borrarCampos() {
    return document.getElementById("campoUno").value = "", document.getElementById("campoDos").value = "", document.getElementById("resultado").value = "";
}

let d = new Date();
document.getElementById("hora").value = "Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()