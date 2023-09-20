/*
let nombre = "pepe"
let nombreCompleto = nombre + " 123"
*/

// ejercicio Jubilacion 
// Mujeres con 60 , hombres con 65
/*
let genero, edadJubilatoria;
genero = window.prompt("Ingrese su genero , F/M");
edadJubilatoria = parseInt(window.prompt("Ingrese su edad actual: ")); 
if( (genero == "F" && edadJubilatoria >= 60) || (genero == "M" && edadJubilatoria >= 65) ){
    console.log("Se puede jubilar")
} else {
    console.log("No se puede jubilar")
}
*/

let edad = 10;
if (edad < 20){
    console.log("Edad menor a 20");
} else if (edad >=20 && edad <= 40 ) { 
    console.log("Edad menor a 40, mayor a 20")
} else { 
    console.log("Edad mayor a 40");
}

let num1 = 30, num2 = 50, mayor;

mayor = num1 > num2 ? num1 : num2;
console.log("mayor V2: ", mayor);
console.log("mayor V3: ", num1 > num2 ? num1 : num2);

let numero = 30;

switch(numero){
    case 1: console.log("Uno"); break;
    case 2: console.log("Dos"); break;
    case 3: console.log("Tres"); break;
    case 4: console.log("Cuatro"); break;
    case 5: console.log("CInco"); break ;
}

let cont = 1;
while (cont < 5){
    console.log("Hola en while");
    cont++;
}

for (let i = 0; i < 10; i++){
    console.log("Hola en for " + i );    
}


