let horas = parseInt(prompt("Ingrese el numero de horas: "))
let minutos = parseInt(prompt("Ingrese el numero de minutos"))

let segundoh = 3600*horas
let segundom = 60*minutos

let segundos = segundoh + segundom

document.writeln(" hora " + horas + ":" + minutos + " equivale a " + segundos + " segundos")