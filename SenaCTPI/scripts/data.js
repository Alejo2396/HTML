document.addEventListener("DOMContentLoaded", () => {
  const url = "aprendices_2993013.json";
  const selectFicha = document.getElementById("fichaSelect");
  const tablaBody = document.getElementById("tablaAprendices");
  const inputPrograma = document.getElementById("nombrePrograma");
  let aprendices = [];

  fetch(url)
    .then(res => res.json())
    .then(data => {
      aprendices = data;

      const fichas = Array.from(new Set(data.map(a => a.Ficha)));
      fichas.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f;
        opt.textContent = f;
        selectFicha.appendChild(opt);
      });

      renderTabla(aprendices);
    })
    .catch(err => console.error("Error cargando datos:", err));

  selectFicha.addEventListener("change", () => {
    const selected = selectFicha.value;
    const lista = selected ? aprendices.filter(a => a.Ficha === selected) : aprendices;
    renderTabla(lista);

    if (selected && lista.length) {
      const p = lista[0];
      inputPrograma.value = p.Programa;
      localStorage.setItem("fichaCodigo", selected);
      localStorage.setItem("nombrePrograma", p.Programa);
      localStorage.setItem("nivelFormacion", p["Nivel de Formación"]);
      localStorage.setItem("estadoFicha", p["Estado Ficha"]);
    } else {
      inputPrograma.value = "";
    }
  });

  function renderTabla(lista) {
    tablaBody.innerHTML = "";
    lista.forEach(a => {
      const tr = document.createElement("tr");
      if (a.Estado === "Retiro Voluntario") tr.classList.add("resaltado");
      tr.innerHTML = `
        <td>${a["Tipo Documento"]}</td>
        <td>${a["Número Documento"]}</td>
        <td>${a.Nombre}</td>
        <td>${a["Primer Apellido"]}</td>
        <td>${a["Segundo Apellido"]}</td>
        <td>${a.Estado}</td>
      `;
      tablaBody.appendChild(tr);
    });
  }
});