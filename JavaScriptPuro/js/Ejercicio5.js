let kilometros = parseInt(prompt("Ingrese el numero de kilometros recorridos por su carro: "))
let litros = parseInt(prompt("Ingrese el numero de litros consumidos por su carro: "))

let consumo = litros/kilometros

document.writeln("Kilometros recorridos: " + kilometros + "<br>" + "Litros consumidos: " + litros + "<br><br>")
document.writeln("Consumo de combustible por kilometro: " + consumo)