function precio() {
    let precio = parseInt(document.getElementById("precio").value)
    let iva = parseInt(document.getElementById("iva").value)
  
    if (precio && iva) {
      let total = precio + (precio * iva) / 100
      document.getElementById("total").innerHTML =
        "El precio a pagar es de: " + "$" + total
    } else {
      alert("campos vacios.")
    }
  }
