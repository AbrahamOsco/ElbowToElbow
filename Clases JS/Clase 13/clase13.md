# Clase 13
1. Existe el do while en js: do{} while( i < 10); etc. 
1. Funciones en JS: 
    1. Es un variable -> de tipo funcionej: 
        1. function sumar(num1, num2){
               suma = num1 + num2;
               console.log(sum);
               return suma
            }   
    1. Si colocamos solo la funcion es una variable ej: sumar , si invocamos ej sumar(3,4) es una invocacion.  
1. // Funcion anonima:
    let saludar2 = function(nombre){
        console.log("Saludar 2 hola " + nombre + " !!");
    }
1. // Funcion anonima- de flecha:
    let saludar3 = (nombre) => {
        console.log("Saludar 2 hola " + nombre + " !!");
    }
1. Cuando es solo  un parametro me puede evitar los parentesis. y si solo devuelvo un valor puedo sacar las {} del final 
    let saludar4 = nombre => "Hola" + nombre
1. Funcion proviene de algo que hace la funcion y ese algo se llama objeto. 

1. Call back: Funcion enviada como parametro. Existe otra funcion que recibe como argumento una funcion ej:
    1. function caminar(){
    return "Caminando";
    }

    function dormir(){
        return "Durmiendo";
    }

    function action(foo){
        return foo();
    }
    action(caminar); // "Caminando"

1. Para conocer los metodos de los objetos colocar en el console y luego la flechita y ves todo los metodos del prototipo. 
1. Arrays, los indices donde van desde 0 a n. 
    1. Se usan el arreglo para traer por ej un arreglo de producto de la BD y mostrarlo en el html. 
    1. Para ingresar elementos lo hacemos con un push y no usar el operador []. (lo ingresa al ultimo).
    1. Pop -> elimina el ultimo elemento y lo devuelve. Si esta vacio devuelve undefined.  
    1. nombres.toString()  //  paso el array a string separado por espacio " "
    1. nombres.join("@")   //  paso el array a string separado por @. 
    1. shift: borra el primero dle array y devuelve.


1. Propiedad caracteristica de un objeto. 
1. clear -> metodo del prototipo Window.
1. objeto y variable se parecen bastante. 
1. accedemos al documento html con "document" escrbirlo en la consola. 
1. Document -> toma el html,  
    1. getElementById("idDeP"): tomo un elemento del document cuya id sea "idDeP".
        1. Hay distintas maneras de buscar un elemento como era el identificador en CSS.
    1. innerHTML: todo elemento html tiene esta propiedad.
    1. document.getElementById("idDeP").innerHTML = nombres.toString(); // pasar 
    1. DOM : document objet model -> es document esta variable atraves de distinto metodos nos permite cambiar el css 
    y poder cambiar el contenido. 
1. 