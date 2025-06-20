let pilotos=[]


function obtenepilotos({
    let url= "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/pilotos_formula1.json"

    let opciones= {
        "method": "GET"

    }

    fetch(url,opciones)
    .them(respuesta=>respuesta.json())
    .them(datos=>{
        console.log(datos)
    })
})

obtenepilotos()

function mostrarpilotos(){
    obtenepilotos()
    pilotos.forEach(pilotos => {
        const cardpiloto = document.createElement("div")
        cardpiloto.className="card"
        const divheader =document.createElement("div")
        divheader.className="header"
        divheader.textContent=piloto.nombre
        cardpiloto.appendChild(divheader)
        const divbody = document.createElement("div")
        divbody.className="card-body"
        divbody.innerHTML="<b>carreras ganadas : </b>" + pilotos.resultados.carreras_ganadas
                            "<br><b>podios: </br>" +pilotos.resultados.podios+
                            "<br><b>poles: </br>"+pilotos.resultados.poles
        cardpiloto.appendChild(divbody)
        const divfooter =document.createElement("div")
        divfooter.className="card-footer"
        divfooter.textContent=piloto.equipo
    });
}