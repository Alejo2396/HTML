let personas = parseInt(prompt("Ingrese la cantidad de personas: "))

let papa = 200*personas
let huevo = 1*personas
let cebolla = 60*personas

document.writeln("Para " + personas + " personas, se necesitan:" + "<br><br>")
document.writeln("-" + papa + " gramos de papa" + "<br>" + "-" + huevo + " huevos" + "<br>" + "-" + cebolla + " gramos de cebolla")