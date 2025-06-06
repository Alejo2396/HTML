export function habilitarControles(habilitar) {
  const imagenes = document.querySelectorAll("#vehiculos img");

  imagenes.forEach((img) => {
    if (habilitar) {
      img.classList.add("enabled");
    } else {
      img.classList.remove("enabled");
    }
  });

  document.getElementById("btnAbrir").disabled = habilitar;
  document.getElementById("btnCerrar").disabled = !habilitar;
}

export function actualizarUI(contadores, total) {
  document.getElementById("countAuto").value = contadores.auto;
  document.getElementById("countBus").value = contadores.bus;
  document.getElementById("countCamion").value = contadores.camion;
  document.getElementById("total").value = `$${total}`;
}

export function iniciarReloj() {
  const reloj = document.getElementById("reloj");
  setInterval(() => {
    const ahora = new Date();
    reloj.textContent = ahora.toLocaleTimeString();
  }, 1000);
}