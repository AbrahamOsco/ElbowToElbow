// Funcion tradicional
function sumar(num1, num2){
    valorSuma = num1 + num2
    return valorSuma;
}

function saludar(nombre){
    console.log("Hola " + nombre + " !!!" );
}

// Funcion anonima:
let saludar2 = function(nombre){
    console.log("Saludar 2 hola " + nombre + " !!");
}


// Funcion anonima- de flecha:
let saludar3 = (nombre) => {
    console.log("Saludar 3 hola " + nombre + " !!");
}

// cuando es solo  un parametro me puede evitar los parentesis. y si solo devuelvo un valor puedo sacar las {} del final 

let saludar4 = nombre => "Hola" + nombre


let cuenta = 30;

function modifCuenta(unaCuenta){
    unaCuenta = 50;
    return unaCuenta;
}
modifCuenta(cuenta)
console.log("cuenta" + cuenta);

//------------Callback


function saludar5(){
    return "Saludando";
}

function caminar(){
    return "Caminando";
}

function dormir(){
    return "Durmiendo";
}

function action(foo){
    return foo();
}

// ------------Arreglos: 

let nombres = []
nombres = ["Juan", "Maria", "Perlas", "Nicolas", "Juana"] // le damos valores asi. 

nombres[0] = "Juan"
nombres[0] = "Maria"
nombres[0] = "Perlas"
nombres[0] = "Nicolas"
nombres[0] = "Juana"

nombres.pop()
nombres.toString()  //  paso el array a string separado por espacio " "
nombres.join("@")   //  paso el array a string separado por @. 

document.getElementById("idDeP").innerHTML = nombres.toString();


