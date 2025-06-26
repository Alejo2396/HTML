let candidatos = [];
let votos = [0, 0, 0, 0];
localStorage.setItem("resultadovotos", JSON.stringify(votos));
if (localStorage.resultadosvotos){
    votos = JSON.parse(localStorage.resultadosvotos)
}else{
    votos = [0, 0, 0, 0]
    localStorage.setItem("resultadosvotos", JSON.stringify (votos))
}
obtenercandidatos();

function obtenercandidatos () {
    const url = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/candidatos.json";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            candidatos = datos;
            mostrarcandidatos();
        })
        .catch(error => console.log(error));
}

function mostrarcandidatos(){
    const divcandidatos = document.querySelector("#candidatos");
    divcandidatos.innerHTML = " ";

    candidatos.forEach((candidato, index) => {
        let divcandidato = document.createElement("div");
        divcandidato.classList.add("card");
        divcandidato.classList.add("col-sm-3");
        divcandidatos,appendChild(divcandidato);

        let divEncabezado = document.createElement("div");
        divEncabezado.classList.add("card-header");
        divEncabezado.textContent = candidato.curso;
        divcandidato.appendChild(divEncabezado);

        let divBody = document.createElement("div");
        divBody.classList.add("card-body");

        let foto = document.createElement("img");
        foto.src = candidato.foto;
        foto.style.width = "150px";
        foto.style.height = "200px";
        foto.addEventListener("click", () => {
            Swal.fire({
                title: "Estas seguro de votar?",
                Text: "Vas a votar por :" + candidato.nombre,
                icon: "Success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "si!"
            }).then((result) => {
                if (result.isConfirmed) {
                    votos[index]++
                    localStorage.setItem("resultadosvotos", JSON.stringify(votos))

                }
            });

        })    
        divBody.appendChild(foto);
        divcandidato.appendChild(divBody);
        
        let divFooter = document.createElement("div");
        divFooter.classList.add("card-footer");
        let aprendizFooter = document.createElement("p");
        aprendizFooter.innerHTML="<b>Aprendiz: </b>" + candidato.nombre + " " + candidato.apellido;
        divFooter.appendChild(aprendizFooter);
        let fichaFooter = document.createElement("p");
        fichaFooter.innerHTML = "<b>Ficha: </b> " + candidato.ficha;
        divFooter.appendChild(fichaFooter);
        divcandidato.appendChild(divFooter);
        
    });
}

function obtenerdatosadministrador() {
    let url = "https://raw.githubusercontent.com/CesarMCuellarCha/Elecciones/refs/heads/main/administrador.json";

    const opciones = {
        "method": "GET"
    };

    fetch(url, opciones)
        .then(resultado => resultado.json())
        .then(datos => {
            administrador = datos;
            console.log(administrador);
        })
        .catch(error => console.log("Error al obtener datos del administrador:", error));


        const btnAbrir = document.querySelector("#btnAbrir");
        btnAbrir.addEventListener("click", () => {
            obtenerdatosadministrador();
            let modalValidarAdministrador

btnValidarAdministrador.addEventListener
        });
}
