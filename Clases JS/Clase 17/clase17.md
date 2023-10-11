# Clase 17
1. Backend desarollado para atender requerimiento del front.
1. Front la vista de un sistema web. (sistema web porq tiene una parte centralizada y a otra parte q se dedica a mostrar interfaces de vista) 
1. Backend atiende a muchos frontend.
1. Cuando una levanta la pagina web levanta un servidor, cuando levanta un servidor   
1. Servidor que cuerno es? -> Conjunto de maquina que brinda un servicio, manera de comunicarse entre si es con distintos protocolos.  
1. A medida q surgio internet todo se volvio distribuido, servicios que se necesito para el envio de archivos de manera segura.
1. Servidor web. No son todos servidores iguales. 
1. A medida q salimos del html, hay un sistema por debajo que es el backend.
1. Entre el front y el back se comunica por un protocolo HTTP. (en general). 
1. Un objeto q tiene la tecnologia para acceder a un servidor (lo presento la clase pasada como un xhr (XmlHttpRequest)).
1. tiene metodos el xhr como open, send,etc. 
    1. El get un verbo HTTP, pide un recurso, (para traer algo) 
    1. Cuando haces una peticion eso demora tiempo, eso no hace que js depende la operatividad de la pagina. 
    1. La pagina sigue funcioando. La Asincronia q tarda en volver, es algo que hay q considerar porque si necsito lo que fui a buscar y si trato de usarlo antes "No lo voy a tener". para eso usamos el addEvenetListener.
1. "otroXHR.addEventListener("load", () =>{...}" Cuando detecta el evento "load" cargo la rspt si el estado de esa respuesta
es 200 rspt ok, y la mostramos, sino lanzamos error.
1. xhr puede traer otro html (una plantilla se le dice cuando no es un html entero).      
1. jsonPlaceHolder: es un free fake API, servidor web, para testear y prototipear. 
1. En general cuando en xhr cuando obtenemos un recurso lo tomamos con load y queremos hacer otro requerimiento q vaya a buscar en la web y nos generamos otro get. Nos comienza aparecer un callback HELL un callback adentro de otro.  
1. Por lo tanto laburar con XHR es problematico. 
1. Promesas: 
    1. Lo que quiere hacer siempre es buscar recursos a un servidor y siempre se busca de manera asincrona.
    1. Promesa es una variable q queda pendiente hasta que no se resuelve.
    1. Promesa es "aquello que voy a hacer que se puede demorar". Tiene 2 opciones: se resuelve o rechaza.
    1. Promesa tiene una funcion de callback adentro, tiene 2 funciones de parametro? resuelta o rechazada (Result, rejected)   
    1. Promesa mientras no se cumpla no es nada.
    1. El estado de la promesa mientras compuesta esta en un estado de "Pendiente".
    1. Dentro de la promesa o llamos a resuelta y rechazada con un unico argumeto en el parametro SI O SI.
    1. Si salio todo ok va por then (funcion de flecha q recibe un argumento) y operamos con el valor q retornamos en la promesa resuelta(objetoARetornar). Idem con catch recibe un unico argumento y es lo q retornamos con rechazada(objetoARetornarError).
1. Fetch es una promesa con una api mas simple le pasamos el recurso y luego ya nos devuelve un objeto cargado le aplicamos 
    .then() para usar el objeto luego de q recibamos la respuesta.
    1. Fetch vino a simplificar el orignal XHR. 
    1. Get es el default en el fetch. por eso no lo ponemos.Otra manera de hacer lo mismo.
    1. En el ejemplo hacemos un fetch obtenemos el json y con .then(response => response.json() ) lo pasamos a un array de objeto de JS. Y en el siguiente then lo imprimimos .then( json => console.log(json) ). 
    1. Es un encadenamiento de thens con funciones de callback adentro. 
    1. Luego con document.write(datos[0].firstname + datos[0].lastname) escrbimos en html el dato q hicimos fetch.      
1. Usamos funciones q existen y devuelven una promesa, y si devuelve una promesa lo tengo que esperar.
1. traerUsuarios (nuestra arrow function) devuelve una promesa, cuando alguien llama a esa funcion altoke devlolvera pendiente.
1. Si llamo a una funcion q devuelve una promesa tengo q saber q esto puede demorar.
1. Cuando algo devuelve una promesa la funcion donde esta ese llamado hay que ponerle async.y await en la funcion q retorna la promesa. 
1. Luego llamamos por ej a "principal()" y si printeamos luego "usuarios" veremos todo el array de objetos.
1. Base de datos, por q un arreglo? por q hay muchos productos. 
1. Si las claves llevan "" es porque es un json, si no lleva nada es por q ya es un objeto de JS.
1. Los registros de la BD viajaran como json y llega a javascript para ser mostratado en el viewport.    
1. Una base de datos es un conjunto de elementos aglomerado para guardar datos. Lenguaje universal de las BD: sql. 
1.  
