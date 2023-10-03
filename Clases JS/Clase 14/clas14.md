# Clase 14
1. el callback es muyy comun. 
1. Funcion depende de un objeto. (depende algo que lo hace).
1. nombres.length para obtener el largo del array. 
1. Todo prototipo heredan de object. el array por lo tanto puede usar los metodos del object. 
1. push te retorna la # final de elementos del arreglo. 
1. unShift: agrega al inicio del arrray.
1. shift: elimna el primer elemento del array.
1. Recorrer arreglos: 
    1. for clasico //     for(let i = 0; i < array.length; i++){
    1. forEach: . con callbacks  //  primer valor elemento y segundo indice.
        1. frutas.forEach( function(elemento, indice, array){
            console.log("Elemento: " + elemento + "  Indice: " + indice) 
            });
        1. frutas.forEach(printearFruta);
1. Map: 
    1. let dobles = nums.map( (elemento) => {return element * 2} ); //Funcion de flecha. parametr y lo que retorna
    1. function duplicar(valor){
            return valor*2;
        }
        let dobles = nums.map(duplicar);
1. Filter: Funciona idem al map le pasamos una funcion nos quedamos con los elementos que cumple la condicion.  
    const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

    const result = words.filter( (unWord) => {return unWord.length < 6 } );
1. Objetos: (de verdad xd) 
        1. const persona = {
        id: 1,
        nombre: "Pablo",
        apellido: "Gomez",
        edad: 45,
        movil: "12424124",
        nombreCompleto: function(){
        return this.nombre + this.apellido;}   
        }         
1. Si me cargo todo un proucto para ofrecer, en realidad me traigo todo una array de objetos.
1.  


