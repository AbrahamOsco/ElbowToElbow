## Clase JavaScript:
1. Hacer js en linea ej: 
    1. <button onclick="alert('hola mundo')" type="prueba"> Boton  </button>

1. JS al ultimo para poder cargar todos los elementos por eso no va arriba del body o en el head. Si lo ponga antes
    no va a conocer lo que se cargo. 
1. Variables: (var):
    1. tipos string ("pepe", "lolo"), numericos (entero o reales), booleanos (true o false)
    1. se declara una sola vez. var lolo;   lolo = "lolito";
    1.  
1. son todoas sentencias. 
1. var fue reemplazo por let. ahora debes usar let para VARIABLES. 
1. const para constantes no podes cambiarle valor; 
1. Expresion. = , + , - , /, %
1. Comparativas: >=, <=,  >, <, != , ==.  (== Comparativo).
    1. compa =  5 == 5 || 8 == 8;
       noCompa = !compa;
1. Ojo el === compara el contenido asi que:
    1. num= 3; 
    num2= "3"; 
    valor = num == num2; dara true
    1. valor = num === num2; dara false.

1. expresiones logicas. AND (&&) , OR( || ),  
1. let nombreCompleto = `${nombre} ${apellido} ` cuando tiene ` ` todo es texto y cuando vamos a pasar una variable 
    ponemos llaves. Esto es un template string. 
1. otra es concadenando strings: let nombreCompleto1 = "La alumna" + nombre + "" + apellido + "aprobo la materia";
1. para inputs:  let nom = prompt("Ingrese su nombre: ");
1. para hacer prints:  //console.log("Buenas tardes" + nom + apel);
1. console log podes pasa los argumentos con ",".
1. todo el documento es una variable, en la console podes poner .document y acceder al head por ej: con document.head.
1. clear() limpias todo en la terminal. 
1. window.prompt("ingresa tu nombre") te abre una ventanita para que ingreses tu nombre. 
1. Si el parseint() si no puedo castear a int devuleve un NaN  

