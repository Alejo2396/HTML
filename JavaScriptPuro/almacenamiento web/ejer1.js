//localStorage.setItem("contador_click", 0)
//localStorage.contador_click=0
//localStorage("contador_click", 0)

const boton = document.querySelector("#btnclick")

const divresultado = document.querySelector("#resultado")

localStorage.setItem("nombre","pedro rojas")
localStorage.setItem("Edad", 25)
let persona ={
    "nombre": "monik",
    "apellido": "galindo",
    "correo": "mgalindo@gmail.com"
}
localStorage.setItem("persona", JSON.stringify(persona))

boton.addEventListener("click", ()=>{
   if(typeof(Storage) !=="undefined"){ 
        if(localStorage.contador_click!==undefined){
            localStorage.contador_click= parseInt(localStorage.contador_click)+1    
        }else{
            localStorage.contador_click=1
        }
    }
   divresultado.textContent=JSON.parse(localStoragee.persona).nombre

   
})
