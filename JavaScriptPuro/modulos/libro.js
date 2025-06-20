export default class libro{
    constructor(titulo,autor,pagina){
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = pagina;
    }
    getpagina(){
        return this.pagina;
    }
 
}