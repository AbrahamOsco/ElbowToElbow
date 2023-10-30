
function sumar(num1, num2){
    return num1 + num2;
}

let restar = function(num1, num2){
    return num1 - num2;
}

let multiplicar = (num1, num2) => {
    return num1 * num2
}

let dividir = (num1, num2) => num1/num2;

const pi = 3.141519;

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
exports.pi = pi;


module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    pi,
    operacionLoca : (num1, num2) => (num1 * num2) + (num1 + num2)
}

