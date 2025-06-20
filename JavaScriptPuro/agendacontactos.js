const prompt = require("prompt-sync")()
let contactos=[]

function Agregarcontactos(){
    console.clear()
    let identifica = prompt ("ingrese identificacion: ")
    let nombre = prompt ("ingrese el nombre: ")
    let telefono = prompt(" ingrese el numero de telefono: ")
    let correo = prompt("ingrese el correo electronico: ")
    let contacto = {
        "identificacion":identifica,
        "nombre":nombre,
        "telefono":telefono,
        "correo":correo,
    }
    contactos.push(contacto)
    console.log("contacto agregado correctamente")
}
function Listarcontactos(){
    console.clear()
    console.log("listado de contactos")
    contactos.forEach(contacto => {
        console.log(`identificacion : ${contacto.identificacion}`)
        console.log(`nombre : ${contacto.nombre}`)
        console.log(`telefono : ${contacto.telefono}`)
        console.log(`correo : ${contacto.correo}`)
        console.log(`*************************************`)
})
}
function consultaridentificacion(){
    console.clear()
    let identifica = prompt("ingrese identificaion de contacto a consultar: ")
    existecontacto=false
    contactos.forEach(contacto =>{
        console.log(`identificacion : ${contacto.identificacion}`)
        console.log(`nombre : ${contacto.nombre}`)
        console.log(`telefono : ${contacto.telefono}`)
        console.log(`correo : ${contacto.correo}`)
        existecontacto=true
    })
    if(existecontacto){
        console.log("no exite contacto con esa identificacion")
    }
}

function menu(){
    let opcion=0
    do{
        console.clear()
        console.log("MENU CONTACTOS")
        console.log("1. Agregar contactos")
        console.log("2. Consultar contactos")
        console.log("3. Listar contactos")
        console.log("4. Eliminar contactos")
        console.log("5. salir")
        opcion = parseInt(prompt("Ingrese opcion [1-5]: "))
        switch(opcion){
            case 1:
                Agregarcontactos()
                break
            case 2:
                consultaridentificacion()
                break
            case 3:
                Listarcontactos()
                break
            case 4:
                console.log("eliminar")
                break
            case 5:
                console.log("Va a salir....")
                break
            default:
                console.log("Opcion fuera de rango")
                break
        }
        prompt("preione enter para continuar")
    }while(opcion!=5)
}

menu()