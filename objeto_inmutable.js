/*
    Hay una forma de hacer un objeto inmutable en JS
*/
let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff",
};

Object.freeze(colores);

colores.verde = "#345sg5";
delete colores.verde;
console.log(colores);
