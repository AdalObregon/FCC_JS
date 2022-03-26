/*
    Como declarar una clase en JS

    Una clase es parecido a un plano de un edificio o un objeto, que nos permite crear muchos objetos con la misma estructura, las mismas propiedades y la misma funcionalidad, es un plano general que nos permite crear codigo una sola vez y nos permite reusarlo para crear tantos objetos como necesitemos en nuestro pgroama

    -palabra clave class.
    -tipo de objeto que queremos crear
    -constructor
*/

class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

var zeus = new TransbordadorEspacial('Jupiter');
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial('Marte');
console.log(apolo.planeta);

//Class mi mascota
class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
var miMascota = new Mascota ('Bigotes', 1);
var tuMascota = new Mascota ('Bruce', 2);
console.log(miMascota.nombre);
console.log(miMascota.edad);
