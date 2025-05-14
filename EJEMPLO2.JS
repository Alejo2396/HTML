const prompt=require("prompt-sync")()
const ciudades=["POPAYAN" , "NEIVA" ,"BOGOTA" , "CALI" , "MEDELLIN" ]
 
const ciudad=prompt("Ingrese ciudad")

//verion larga//
let existe =false 
for(let i=0;i<ciudades.length;i++){
    if (ciudad.toUpperCase()===ciudades{i}){
        existe=true
        break
    }
}

if(existe){
    console.log("la ciudad"+ ciudad + "ya existe")

    }else{
        console.log("la ciudad" + ciudad + "no existe")
        ciudades.push(ciudad)
    }