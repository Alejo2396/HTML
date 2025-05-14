let x = prompt("Ingrese el valor de la variable x:")
let y = prompt("Ingrese el valor de la variable y:")

document.writeln("Variables originales: " + "<br>" + " X: " + x + "<br>" +  " Y: " + y + "<br><br>")

let z = x
x = y
y = z

document.writeln("Variables intercambiadas: "+ "<br>" + " X: " + x + "<br>" + " Y: " + y)