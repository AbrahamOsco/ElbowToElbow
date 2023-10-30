# Clase 22 
1. Hay muchos modulos. ej los modulos gigantescos de nodejs.
1. Modulo 'path' se suele usar bastante.  
1. nodejs es mas habitual hacerlo con requiere que usand import. 
1. Desagregar : quedarnos con solo las funciones que usamos. 
1. Objetivo nuestro es crear un servidor q atiende clientes.
1. Hay un modulo llamado HTTP. 
1. Comunicacion entre front y back se va atraves de un protocolo HTTP.
1. usar const http = require('node:http')
1. creamos el server con CreateServer. El listen ponemos el puerto a escuchar.
1. Cliente en general son navegadores. 
1. Frontend llama al back usando un verbo y una ruta. 
1. Por cada lugar que entro estoy  entrando a un sub ruta disitnta. Considero
    1. la maquina, el puerto y la ruta para acceder. 
1. Request (head, cuerpo)
1. 
1. HTTP (verbo y una ruta.)
    1. Verbos: get y post, put, delete (CRUD)
    1. voy a obtener, voy a subir, voy a modificar, voy a eliminar.
    1. Consulta de un navegador solo puedo hacer get.
    1. el post ,put, delete se hacen de otra manera.?
    1. Nos muestra la ruta y el verbo ( metodo get).
    1. npm : viene instalado con node. 
    1. para bajar de la web modulos de tercero usamos npm.  

1. Framework express conjunto de modulosde nodejs que gener una capa mas alta para crear el servidor. 
1. Express genera una capa sobre nodejs. Express en realidad es un modulo que contiene muchos modulos 
