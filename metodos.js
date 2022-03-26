//ANTES
const persona = {
  nombre: "isabel",
  presentarse: function () {
    return `Hola, mi nombre es ${this.nombre}`;
  },
};
console.log(persona.presentarse());

//ES6+
const otraPersona = {
  nombre: "isabel",
  presentarse() {
    return `Hola, mi nombre es ${this.nombre}`;
  },
};
console.log(otraPersona.presentarse());
