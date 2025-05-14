const numeros=[]
for(let index = 0;index < 10;index++){
numeros.push(index+1)
}
document.writeln(numeros)


const personas=[]
let nombre = prompt("ingrese su nombre")
personas.push(nombre)

let apellido = prompt("ingrese apellidos")
personas.push(apellido)

let correo= prompt("digite el correo")
personas.push(correo)

document.writeln(personas)