
const {restar, sumar, multiplicar, dividir, pi, operacionLoca} = require("./operaciones")
const os = require("node:os")

let valor = 20;
let otroValor = 40;


console.log( sumar(3,4)  )
console.log( restar(3,4)  )
console.log( multiplicar(3,4)  )
console.log( dividir(3,4)  )

console.log( operacionLoca(3,4))

console.log("Memoria libre" + os.freemem())

const fs = require('node:fs')

fs.writeFile('message.txt', "Buenas tardes que onda jajaja ", (err) => {
    if (err) throw err;
    console.log("The file has ben saved!")
    } 
);

fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  })

