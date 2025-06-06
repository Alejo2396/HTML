import { consultarLibrosPorPalabraClaveTitulo, consultarLibrosPaginas } from './utilidadeslibros.js';


const resultadoBusqueda = consultarLibrosPorPalabraClaveTitulo("amor");
console.log("Libros que contienen 'amor' en el título:");
console.log(resultadoBusqueda);

const paginasLibros = consultarLibrosPaginas();
console.log("\n Títulos y número de páginas:");
console.log(paginasLibros);