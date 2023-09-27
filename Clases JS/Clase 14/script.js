nombres = [];
nombres.push("ana");
nombres.push("pepe");
nombres.push("lolo");
nombres.push("Nicolas");
nombres.push("Juana");
nombres.push("Nacho");

// Recorrer el arreglo: 
function concadenarNombres(unArray){
    let cadenaConcadenada = "";
    for(let i = 0; i < unArray.length; i++){
        cadenaConcadenada += unArray[i];
    }
    return cadenaConcadenada;
}


let frutas = ["Manzana", "Banana"];

function printearFruta(elemento, indice, array){
    console.log("Elemento: " + elemento + "  Indice: " + indice) 
 }

frutas.forEach(printearFruta);

let nums = [3,4,7,10,20,40, 80];

function duplicar(valor){
    return valor*2;
}
let dobles = nums.map(duplicar);


//let dobles = nums.map( (elemento) => {return elemento * 2} ); //Funcion de flecha. parametr y lo que retorna

let frase = "hola que onda";
frase.includes('a');
frase.substring(3,6);


const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

const result = words.filter( (unWord) => {return unWord.length < 6 } );

let productos = [
    {
        id:123,
        nombre: "Peina Fibra 1",
        descripcion: "peine para pelos finos",
        precio: 2300
    },
    {
        id:412,
        nombre: "Peina Fibra 2",
        descripcion: "peine para pelos finos---",
        precio: 2900
    }
]

