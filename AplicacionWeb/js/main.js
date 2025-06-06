import { Peaje } from "./controlPeaje.js";
import { habilitarControles, actualizarUI, iniciarReloj } from "./ui.js";

const peaje = new Peaje();
let activo = false;

const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");

const imgAuto = document.getElementById("auto");
const imgBus = document.getElementById("bus");
const imgCamion = document.getElementById("camion");

btnAbrir.addEventListener("click", () => {
  activo = true;
  peaje.reset();
  actualizarUI(peaje.getContadores(), peaje.getTotal());
  habilitarControles(true);
});

btnCerrar.addEventListener("click", () => {
  activo = false;
  habilitarControles(false);
});

imgAuto.addEventListener("click", () => {
  if (!activo) return;
  peaje.registrar("auto");
  actualizarUI(peaje.getContadores(), peaje.getTotal());
});

imgBus.addEventListener("click", () => {
  if (!activo) return;
  peaje.registrar("bus");
  actualizarUI(peaje.getContadores(), peaje.getTotal());
});

imgCamion.addEventListener("click", () => {
  if (!activo) return;
  peaje.registrar("camion");
  actualizarUI(peaje.getContadores(), peaje.getTotal());
});

// Iniciar el reloj
iniciarReloj();