let promesa = new Promise( (resuelta, rechazada) => {
    otroXHR = new XMLHttpRequest();    
    otroXHR.open("get", "https://jsonplaceholder.org/users")
    otroXHR.send()
    otroXHR.addEventListener("load", () =>{ 
        if(otroXHR.status == 200){
            resuelta(otroXHR.response)
        }
    } )
   resuelta(1)

}).then((valor) => {
    console.log(valor)
}).catch( (error) => { 
    console.log(error)
})

let datos;
fetch("https://jsonplaceholder.org/users")
.then( response => response.json() )
.then( json => {datos = json} )

//document.write(datos[0].firstname + datos[0].lastname)


let traerUsuarios = () => {
    return fetch("https://jsonplaceholder.org/users").then((response) => {return response.json()} )
}

let usuarios;

const principal = async() => {
    usuarios = await traerUsuarios()
    console.log(usuarios)
}   



