function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('El segundo numero no puede ser cero');
    } else {
        return x1 / x2;
    }
}

module.exports = {
    add,
    substract,
    multiply,
    divide
}