import Libro    from "./libro.js"; // Make sure the path is correct relative to this file
let libros=[]
let btnagregar = document.getElementById("btnAgregar");

btnagregar.addEventListener("click",function(){
    let titulo = document.getElementById("txttitulo").value;
    let autor = document.getElementById("txtautor").value;
    let editorial = document.getElementById("txteditorial").value;
    let idioma = document.getElementById("txtidioma").value; 

    if (!titulo || !autor || !editorial || !idioma) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });
        return; 
    }


    let libro = new Libro(titulo,autor,editorial,idioma);
    libros.push(libro);

    console.log(libros);
    mostrar();

    document.getElementById("frmlibro").reset();


})
function mostrar(){
    let datoslibros= document.getElementById("datoslibros");

    datoslibros.innerHTML = '';

   libros.forEach((libro) => {
     let fila = document.createElement("tr");

     let coltitulo = document.createElement("td");
     coltitulo.textContent = libro.titulo;
     fila.appendChild(coltitulo);

     let colautor = document.createElement("td");
     colautor.textContent = libro.autor; 
     fila.appendChild(colautor);

     let coleditorial = document.createElement("td");
     coleditorial.textContent = libro.editorial; 
     fila.appendChild(coleditorial);

     let colidioma = document.createElement("td");
     colidioma.textContent = libro.idioma; 
     fila.appendChild(colidioma);

    
     datoslibros.appendChild(fila);
   });
}
