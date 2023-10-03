let botonUno = document.getElementById("botonUno")
let botonDos = document.querySelector("#botonDos")
function agregarTitulo(){
    let div = document.createElement("div");
    div.style.padding = "10px"; 
    div.style.backgroundColor = "green"
    div.id = "divUno"

    let titulo = document.createElement("h1")
    titulo.innerText = "Titutlo Principal"
    titulo.style.textAlign = "center"
    titulo.style.color = "white"

    div.appendChild(titulo)
    document.body.appendChild(div)
}

botonUno.addEventListener("click", agregarTitulo)

//let conjuntoP = document.querySelectorAll("p") // como CSS
let elementosP = document.getElementsByTagName("p")


let colores = ["red", "blue", "orange" ]
for(let i = 0; i < elementosP.length; i++){
    elementosP[i].style.color = colores[i]
}
/*
botonUno.addEventListener("click", () => {console.log("Uno")
    document.body.style.backgroundColor = "lightblue"
    document.body.style.color = "white" // afecta a la otra de todo el body

} )
*/

function dos(){
    console.log("Dos")
    document.body.style.backgroundColor ="red"
}

botonDos.addEventListener("click", dos)


let cliente = [
    {
        id: 1,
        nombre: "Sebastian",
        apellido: "Colombo",
        edad: 46,
        hobbies: ["tenis", "Ajederez", "psicologia", "Guitarra"],
        mascotas: [{tipo:"perro", nombre:"pipo", edad: "4 años"},
                {tipo:"Gato", nombre:"Lila", edad:"8 años"}]
    
    
    },
    {
        id: 2,
        nombre: "Sebastiana",
        apellido: "Colodmbo",
        edad: 46,
        hobbies: ["tenis", "Ajederez", "psicologia", "Guitarra"],
        mascotas: [{tipo:"perro", nombre:"pipo", edad: "4 años"},
                {tipo:"Gato", nombre:"Lila", edad:"8 años"}]
    }
]

