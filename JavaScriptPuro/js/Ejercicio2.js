function areayperimetro() {
  let lado = parseInt(document.getElementById("lado").value);
  if (!isNaN(lado)) {
    let area = lado * lado;
    let perimetro = lado * 4;
    document.getElementById("area").innerHTML =
      "El area del cuadrado es:" + area;
    document.getElementById("perimetro").innerHTML =
      "el perimetro del cuadrado es " + perimetro;
  } else {
    alert("campos vacios.");
  }
}