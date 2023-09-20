1. Sentencias
1. if, else, else if en js: 
    1. if (edad < 20){
        console.log("Edad menor a 20");
    } else if (edad >=20 && edad <= 40 ) { 
        console.log("Edad menor a 40, mayor a 20");
    }
    else { 
        console.log("Edad mayor a 40");
    }

1. Comentarios en bloques y de lineas: 
    1. /*
        let nombre = "pepe"
        let nombreCompleto = nombre + " 123"
       */
    1. // ejercicio Jubilacion 
       // Mujeres con 60 , hombres con 65

1. Operador ternario: 
    1. let num1 = 30, num2 = 50, mayor;
       mayor = num1 > num2 ? num1 : num2;
       console.log("mayor V2: ", mayor);
       console.log("mayor V3: ", num1 > num2 ? num1 : num2);
    1. 
1. Poner ";" para poner otra instruccion al lado de otra instruccion. 
1. Condicional switch: cuando tenemos una cantidad de casos acotado: 
    1.  let numero = 30;
        switch(numero){
        case 1: console.log("Uno"); break;
        case 2: console.log("Dos"); break;
        case 3: console.log("Tres"); break;
        case 4: console.log("Cuatro"); break;
        case 5: console.log("CInco"); break ;
    }

1. Variables son parte del programa
1. Incrementos:
    let cont = 1; 
    cont ++;
    cont +=1;
1. Ciclos en javascript:
    1. Con while:  let cont = 1;
        while (cont < 5){
            console.log("Hola");
            cont++;
        }
    1. Con for: 
        for (let i = 0; i < 10; i++){
            console.log("Hola en for " + i );    
        }

