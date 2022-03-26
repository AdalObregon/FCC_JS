const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma,
  };
};
console.log(crearPersona("Gino Smith", 28, "Ingles"));

//forma mas concisa
const crearOtraPersona = (nombre, edad, idioma) => ({ nombre, edad, idioma });
console.log(crearOtraPersona('Gino Smith',28, 'Ingles'));