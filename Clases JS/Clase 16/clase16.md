# Clase 16
1. addEventListener: escuchan eventos, y un evento es una accion q ocurre.
1. Cuando una funcion tiene q como parametro otra funcion se le dedomina callback. 
1. Se pueden crear objetos html en js.
1. ademas del "click" hay "mouseover" (al pasar el mouse), "mousemove" (por el solo hecho de moverte)  
1. Window: manejo de la ventana tambien con el navegador. 
1. Window.close() => cierra la ventana. 
1. SetTImeout : ejecuto la funcion q esta dentro dsp de 5 segundos. setTimeout( () =>{ console.log(3)}, "5000"); 2do parametro esta en ms.
1. Buscar afuera un elemento (salir del mundo) usamos el objeto XMLHTTPRequest. Recuperar datos sin tener q actualizar la pagina completa, Usa mucho programacion AJAX. Como un cartero, busca un recurso lo mandas y vuelve.  
1. Creamos un objeto XMLHttpRequeust con:  new XMLHttpRequeust [Nos permite hacer pedidos en la web]   
1. Un request es un requerimiento y hay disitntos tipos. 
1. const xhr = new XMLHttpRequest()
1. xhr(") soliciutd es asincronica, se envia  
1. vos llamas y debes considerar la sincronia por eso pones el setTimeout.
1. La solicitud tiene todo el tiempo un estado, 0, 1, 2, 3 UNSET, OPENED, HEADER_RECEIVED, LOADING, DONE. 
1. Podemos poenr un addEvenetListener("readyStatechange")  tambien lo podemos hacer con load. 
1. plantilla una porcion de hmtl. 
1. unXHR.open("get", "./plantilla.html")
    unXHR.send() // nos falta disprar el cartero  NO OLVIDAR DISPARAR AL CARTERO !!.
1. hacer el combo open-set-addEventListener("load"...).
1. Servidor gratuito falso. -> backend de mentira. 
1. jsonPlaceHolder es un 
1. lo q alguien carga sus datos se lo envia a traves de json y cuando alquien solicita informacion 
1. Va a llegar como un json lo q nosotros traigamos. es un recurso 
1. JSON.parse() -> parsea el json y me devuelve objetos de javascript.

