var contactos = [
  {
    nombre: "Sam",
    apellido: "Winchester",
    numero: "0543236543",
    gustos: ["Ejercicio", "Cazar fantasmas"],
  },
  {
    nombre: "Dean",
    apellido: "winchester",
    numero: "0994372684",
    gustos: ["Tocino", "Muscle car"],
  },
  {
    nombre: "Bobby",
    apellido: "Singer",
    numero: "0487345643",
    gustos: ["Whisky", "Leer libros"],
  },
];

function buscarContacto(nombre, propiedad) {
    for(let i = 0; i <contactos.length; i++){
        if(contactos[i].nombre === nombre ){
            return contactos[i][propiedad] || 'La propiedad no existe.';
        }
    }
    return 'El contacto no esta en la lista.';
}
console.log(buscarContacto('Castiel','numero'));
