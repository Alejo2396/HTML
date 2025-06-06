let contactos = [];

function renderizarContactos() {
  const lista = document.getElementById("listaContactos");
  lista.innerHTML = "";

  contactos.forEach((contacto, index) => {
    const li = document.createElement("li");
    li.textContent = `${index}: ${contacto.id} - ${contacto.nombre} - ${contacto.telefono} - ${contacto.correo}`;
    lista.appendChild(li);
  });
}

function agregarContacto() {
  const id = document.getElementById("idInput").value.trim();
  const nombre = document.getElementById("nombreInput").value.trim();
  const telefono = document.getElementById("telefonoInput").value.trim();
  const correo = document.getElementById("correoInput").value.trim();

  if (id && nombre && telefono && correo) {
    contactos.push({ id, nombre, telefono, correo });
    limpiarFormulario();
    renderizarContactos();
  } else {
    alert("Por favor completa todos los campos.");
  }
}

function eliminarContacto() {
  const indice = parseInt(document.getElementById("indiceEliminar").value);

  if (!isNaN(indice) && indice >= 0 && indice < contactos.length) {
    contactos.splice(indice, 1);
    document.getElementById("indiceEliminar").value = "";
    renderizarContactos();
  } else {
    alert("Índice inválido.");
  }
}

function limpiarFormulario() {
  document.getElementById("idInput").value = "";
  document.getElementById("nombreInput").value = "";
  document.getElementById("telefonoInput").value = "";
  document.getElementById("correoInput").value = "";
}