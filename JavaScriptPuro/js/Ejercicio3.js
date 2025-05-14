function nombre() {
    let nombre = document.getElementById("nombre").value;
    if (nombre) {
    
        document.getElementById("nombreusuario").innerHTML =
          "hola " + nombre;
       
      } else {
        alert("campos vacios.");
      }
}