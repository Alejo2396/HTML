// 1. Función enRango
export function enRango(numero) {
  if (numero >= 10 && numero <= 50) {
    return "Está en el rango";
  } else {
    return "Fuera del rango";
  }
}

// 2. Función calcularDescuento
export function calcularDescuento(precio) {
  if (precio > 1000) {
    return precio * 0.8; // 20% de descuento
  } else if (precio >= 500 && precio <= 1000) {
    return precio * 0.9; // 10% de descuento
  } else {
    return precio; // Sin descuento
  }
}

// 3. Función categoriaIMC
export function categoriaIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

// 4. Función nivelRiesgo
export function nivelRiesgo(edad, tieneEnfermedades) {
  if (edad > 60 || tieneEnfermedades) {
    return "Alto riesgo";
  } else if (edad >= 40 && edad <= 60 && tieneEnfermedades) {
    return "Riesgo moderado";
  } else {
    return "Bajo riesgo";
  }
}

// 5. Función esBisiesto
export function esBisiesto(anio) {
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    return "Es bisiesto";
  } else {
    return "No es bisiesto";
  }
}

// 6. Función esElegibleParaPrestamo
export function esElegibleParaPrestamo(salario, puntajeCredito) {
  if (salario > 3000000 && puntajeCredito > 650) {
    return "Elegible para préstamo";
  } else {
    return "No elegible para préstamo";
  }
}