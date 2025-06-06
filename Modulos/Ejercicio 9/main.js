import Contacto from './contacto.js';

let contactos = [];

function agregarContacto() {
  const identificacion = document.getElementById("identificacion").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const celular = document.getElementById("celular").value;

  const existe = contactos.find(c => c.identificacion === identificacion);

  if (existe) {
    alert("Ya existe un contacto con esa identificación.");
    return;
  }

  const nuevoContacto = new Contacto(identificacion, nombre, apellido, correo, celular);
  contactos.push(nuevoContacto);
  mostrarContactos();
}

function mostrarContactos() {
  const tabla = document.getElementById("tablaContactos");
  tabla.innerHTML = "";

  contactos.forEach(c => {
    const fila = `<tr>
      <td>${c.identificacion}</td>
      <td>${c.nombre}</td>
      <td>${c.apellido}</td>
      <td>${c.correo}</td>
      <td>${c.celular}</td>
    </tr>`;
    tabla.innerHTML += fila;
  });
}

function consultarContacto() {
  const identificacion = document.getElementById("identificacion").value;
  const contacto = contactos.find(c => c.identificacion === identificacion);

  if (contacto) {
    document.getElementById("nombre").value = contacto.nombre;
    document.getElementById("apellido").value = contacto.apellido;
    document.getElementById("correo").value = contacto.correo;
    document.getElementById("celular").value = contacto.celular;
  } else {
    alert("Contacto no encontrado.");
  }
}

function actualizarContacto() {
  const identificacion = document.getElementById("identificacion").value;
  const index = contactos.findIndex(c => c.identificacion === identificacion);

  if (index !== -1) {
    contactos[index].nombre = document.getElementById("nombre").value;
    contactos[index].apellido = document.getElementById("apellido").value;
    contactos[index].correo = document.getElementById("correo").value;
    contactos[index].celular = document.getElementById("celular").value;
    mostrarContactos();
  } else {
    alert("No se encontró el contacto para actualizar.");
  }
}

function eliminarContacto() {
  const identificacion = document.getElementById("identificacion").value;
  contactos = contactos.filter(c => c.identificacion !== identificacion);
  mostrarContactos();
}

document.getElementById("btnAgregar").addEventListener("click", agregarContacto);
document.getElementById("btnConsultar").addEventListener("click", consultarContacto);
document.getElementById("btnActualizar").addEventListener("click", actualizarContacto);
document.getElementById("btnEliminar").addEventListener("click", eliminarContacto);