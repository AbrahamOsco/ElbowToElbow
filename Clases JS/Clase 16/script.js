console.log(1)
console.log(2)
setTimeout( () =>{ console.log(3)}, "2000");
console.log(4)
console.log(5)


const xhr = new XMLHttpRequest()
xhr.open("get",'./archivo.txt')
xhr.send() // DISPARO AL CARTERO
xhr.addEventListener("readystatechange", () =>{
    if (xhr.readyState == 4){
        console.log("Dentro del AddEventList : |" +xhr.responseText + "| ")
    }
 })

 xhr.addEventListener("load", () =>{
        if( xhr.status = 200 ){
            console.log("Rspt en el load: |" +xhr.responseText + "|. ")
            console.log("Estado: " + xhr.statusText)
        } else {
            console.log("No se pudo obtener el recursor")
        }
 } ) 



let boton = document.getElementById("unBoton")
let unXHR = new XMLHttpRequest()

boton.addEventListener("click", () => { console.log("Estamos aca ")
    unXHR.open("get", "plantilla.html")
    unXHR.send() // Disparo al cartero. 
    unXHR.addEventListener( "load", () =>{
        if(unXHR.status == 200){
            let main = document.createElement("main")
            console.log(main)
            main.innerHTML = unXHR.response
            document.body.appendChild(main)
        }
    } )
})

// Ejercicio donde se hace un fetch a json y se parsea 

let botonDos = document.getElementById("botonDos") 
let otroXHR = new XMLHttpRequest()

botonDos.addEventListener( "click", () => {
    otroXHR.open("get", "https://jsonplaceholder.org/users")
    otroXHR.send()
    console.log("Hice click en el botonDos")
    otroXHR.addEventListener("load", () =>{ 
        if(otroXHR.status == 200){
            let jsonResponse = otroXHR.response
            console.log(JSON.parse(jsonResponse))
        }
    } )
} )


