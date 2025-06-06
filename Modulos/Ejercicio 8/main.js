import { Alcancia } from "./alcancia.js"
const miAlcancia = new Alcancia();
miAlcancia.agregarMoneda(200);
miAlcancia.agregarMoneda(500);
miAlcancia.agregarMoneda(1000);
console.log("Ejercicio 8 - Monedas:", miAlcancia.contarMonedas());
console.log("Ejercicio 8 - Total:", miAlcancia.calcularTotal());
miAlcancia.romperAlcancia();