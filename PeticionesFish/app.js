let Pilotos=[]


function obtenerPilotos({
    let url="https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/pilotos_formula1.json"

    let opciones={
        "Method": "GET"

    }

    fetch(url.opciones)
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        console.log(datos)
    })
})

obtenerPilotos()

function MostrarPilotos(){
    obtenerPilotos()
    Pilotos.forEach(Pilotos=>{
        const cardpiloto = document.createElement("div")
        cardpiloto.className="card"
        const divheader = document.createElement("div")
        divheader.className="header"
        divheader.textContent=Pilotos.nombre
        cardpiloto.appendChild(divheader)
        const divbody = document.createElement("div")
        divbody.className="card-body"
        divbody.innerHTML="<b>carreras ganadas : </b>" + Pilotos.resultados.carreras_ganadas
                           "<br><b>podios: </br>" + Pilotos.resultados.podios +
                           "<br><b>poles:  </br>" + Pilotos.resultados.poles
        cardpiloto.appendChild(divbody)
        const divfooter = document.createElement("div")
        divfooter.className="card-footer"
        divfooter.textContent=Pilotos.equipo
    });
}

























}