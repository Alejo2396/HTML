let lista = [];

function renderizarLista() {
    const ul =document.getElementById('Lista');
    ul.innerHTML = '';

    lista.forEach((item , index) => {
        const li = document.createElement('li');
        li.textContent = `${index}: ${item}`;
        ul.appendChild(li);
    });
}

function AgregarElemento() {
    const input = document.getElementById('itemInput');
    const valor = input.value.trim();

    if (valor) {
        lista.push(valor);
        input.value = '';
        renderizarLista();
    }
}

function EliminarElemento() {
    const indiceInput = document.getElementById('indiceInput');
    const indice = parseInt(indiceInput.value);

    if (!isNaN(indice) && indice >= 0 && indice < lista.length) {
        lista.splice(indice , 1);
        renderizarLista();
    }
}
    