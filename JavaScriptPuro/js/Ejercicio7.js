let numeroStr = prompt("Por favor, introduce un número de dos dígitos:");
let numero = parseInt(numeroStr);

let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

document.writeln(`El número ${numero} tiene ${decenas} decenas y ${unidades} unidades.`);