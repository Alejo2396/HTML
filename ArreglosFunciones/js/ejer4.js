function calcularCuadrados() {
  const input = document.getElementById("inputNumeros").value;
  const numeros = input.split(',').map(n => parseInt(n.trim()));

  if (numeros.some(isNaN)) {
    document.getElementById("resultado").innerText = "Por favor ingresa solo números separados por comas.";
    return;
  }

  const cuadrados = numeros.map(n => n * n);
  document.getElementById("resultado").innerText = "Cuadrados: " + cuadrados.join(', ');
}