
import Triangulo from "./triangulo.js";

// Obtiene referencias a los elementos del DOM
const botonarea = document.getElementById("btnarea");
const txtbase = document.getElementById("txtbase");
const txtaltura = document.getElementById("txtaltura");
const txtarea = document.getElementById("txtarea");

// Agrega un event listener al botón para calcular el área
botonarea.addEventListener("click", function() {
    const baseInput = txtbase.value;
    const alturaInput = txtaltura.value;

    // Validación de campos vacíos
    if (baseInput.trim() === "" || alturaInput.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos Vacíos',
            text: 'Por favor, ingrese valores para la base y la altura.',
        });
        txtarea.value = ""; // Limpia el campo de área
        return; // Detiene la ejecución si la validación falla
    }

    // Convierte los valores a números
    const base = parseFloat(baseInput);
    const altura = parseFloat(alturaInput);

    // Validación de valores numéricos
    if (isNaN(base) || isNaN(altura) || base < 0 || altura < 0) {
        Swal.fire({
          icon: "error",
          title: "Entrada Inválida",
          text: "Por favor, ingrese números positivos válidos para la base y la altura.",
        });
        txtarea.value = ""; // Limpia el campo de área
        return; // Detiene la ejecución si la validación falla
    }

    // Crea una instancia de la clase Triangulo y calcula el área
    const miTriangulo = new Triangulo(base, altura);
    const area = miTriangulo.calcularArea();

    // Muestra el resultado en el campo de área
    txtarea.value = area;
});

