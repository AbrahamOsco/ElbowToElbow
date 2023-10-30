console.log("holaa")
/*
const http = require('node:http')

// Si llega un requerimiento se responde con este res. 
http.createServer( function(req, res) {

    let url = req.url;
    let methodo = req.method;
    console.log("methodo: " + methodo);
    console.log("url" + url);
    if (url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.write("<h1>Hello world </h1>");
        res.end();
            
    } else if (url == "/productos/consulta" ){
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.write("Bienvenido a la consulta de productos");
        res.end();
    } else if (url == "/usuarios" ){
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.write("Bienvenido a la consulta de usuarios");
        res.end();
    } else {
        res.writeHead(200, {'Content-type': 'text/plain'} ) // crea una rspt para q alguien lo llame
        res.write('Ruta no encontrada jajaja')
        res.end()    
    }
}).listen(8080)
// Si alguien entra en el puerto 8080, le damos la rspt de arriba writeHead, write,etc.
*/
const colors = require('colors');
console.log('hello'.red)
console.log('hello'.blue)
console.log('hello'.america)


