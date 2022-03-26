class Libro {
    constructor (autor){
        this._autor = autor;
    }

    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
}
const libro = new Libro('anonimo');
console.log(libro.autor);