//localStorage.setItem("Contador_Click", 0)
//localStorage.Contador_Click=0
//localStorage["Contador_Click"]=0

const boton = document.querySelector("#btnClick")

const divResultado =  document.querySelector("#resultado")

localStorage.setItem("Nombre", "Pedro Rojas")
localStorage.setItem("Edad", 25)
let persona ={
    "Nombre": "Monik",
    "Apellido": "Galindo",
    "Correo": "mgalindo@gmail.com"
}
localStorage.setItem("Persona", JSON.stringify(persona))

boton.addEventListener("Click", ()=>{
    if (typeof(Storage) !== "undefined") {
        if(localStorage.Contador_Click==undefined){
           localStorage.Contador_Click=parseInt(localStorage.Contador_Click)+1
        }else{
            localStorage.Contador_Click=1
        }
    }
    divResultado.textContent=JSON.parse(localStorage.Persona).Nombre


})
