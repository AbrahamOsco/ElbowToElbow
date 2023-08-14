1. El <nav> va dentro del header? ->  En general el header va dentro del header.
   si y podes ponerlo en otras partes tambien.  
1. CSS son hojas de estilo en cascada. 
1. Cualquier elemento puede tener una propiedad style. 
1. CSS se compone de una propiedad y de un valor. 
1. Tomo un elemento y le aplico una propiedad style. Si quiero hacerlo por afuera, entonces en el header
    creamos una etiqueta style 

1. Hay distintas maneras de seleccionar elementos. 
1. color : cambiar el color a un elemento. 
    background color: cambia el fondo. 
1. En la etiqueta style adentro en el h1 siempre va a ser precedene. 
1. Hay muchas propiedades para tocar un elemento. 
1. Lo mas comun es generar un archivo desde afuera. 
    Esto en el header: <link rel="stylesheet   " href="./css/estilos.css" >   
1. Archivos css se coloca en una carpeta aparte  ej 'css'.
1. Maneras de seleccionar un elemento en html.
    
1. Si no me trae valores hace control + space.      
1. font-weight peso de la letra 
1. Si en un css  hago otra propiedad donde vuelvo a modificar un valor entonces pisara el cambio de antes. 
    por eso se le dice en cascada pisa lo anterior. 
1. * : abarcador mas grande, abarca todo. 
1. clase es una selecctor que pueda afectar a distintas etiquetas a mas de una etiqueta distinta. 
    entonces ya no usamos un selector de etiqueta uso "punto" y el nombre de la clase. EJ: 
    .amarillo si cree asi: class="amarillo". Se Les aplica el estilo a cuyos elementos son de clase amarillo.

1.  En el <a> de registrese no tiene efectos porque no tiene en su head una referencia al archivo .css no esta modificado nada 
    ni su body.
    Dos archivos html conectado a un mismo archivo de estilos. 
1. Ahora con ID si queremos afectar a un solo elemento entonces usamos el ID (tranquilamente podemos usar una clase tambien).  
    Recomendable que el id solo afecte a un elemento, aunque se peude poner a otro elemento. 
    Elemento para tomarlo tomamos un selector de etiqueta, clase o 
1. Precedencia. jerarquia de los estilos en el HTML. 
    quien gana? -> recuerda estilos en cascada aca tambien. 
    etiqueta < clase < id < estilo en lnea  < !important
    important se sobrepone a todo. 
1. Si le pones una propiedad a algo ves que no se ve podria ser porque se superpone con otra.
    #titulo{
        color: coral !important;    
    } 
    con inportant supera a todas las prioridades. 
1. Con bootstrap traes muchas estilos y si queres modificar algo muchas veces no lo haces, para eso le agregas important. 
1. Normalizar una pagina quiere decir que de entrada todos los elementos queden equiparados. 
    Ningun navegador muestra lo mismo igual todos tienen por default una manera de mostrar las cosas.
    normalizar es sacar todos los defectos que traen los elementos por el navegador. 
    para hacerlo usamos el selector universal.
    Normalizar es poner en igualdad de condiciones a todos los navegadores respecto de mi pagina. archivo ->normalize.css.
1. Podemos seleccionar las etiquetas asi h1,h2,h3 {
}   

1. Si quiero tomar un strong que esta dentro de una etiqueta h3.  h3 strong {
    color: red
}  strong es descendiente de h3 porque esta dentro de de la etiqueta de h3.   






