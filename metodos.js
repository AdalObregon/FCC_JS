const persona = {
  nombre: "isabel",
  presentarse: function(){
      return `Hola, mi nombre es ${this.nombre}`;
  }
};
console.log(persona.presentarse());