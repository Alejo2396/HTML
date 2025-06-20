const prompt = require("prompt-sync")()
const ciudades = ["POPAYAN","NEIVA","BOGOTA","CALI","MEDELLIN"]

const ciudad = prompt("ingrese ciudad: ")

let existe=false
for(let i=0;i<ciudades.length;i++){
    if (ciudad.toUpperCase()===ciudades[1]){
        existe=true
        break
    }
    
}

if (existe){
    console.log
}
 