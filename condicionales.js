var x = 3;

if (x > 5) {
  console.log("es mayor");
} else console.log("es menor"); // esta condicion es falsa, x es menor que 5.

var estacion = "Invierno";

if (estacion === "Invierno") {
  console.log("Me encanta el invierno <3");
} else console.log(`No es invierno :(, es ${estacion}`);

/*
    Clausula else if
*/
var estacion = "Verano";

if (estacion == "Invierno") {
  console.log("SIIIUU, ME ENCANTA EL INVIERNO");
} else if (estacion === "Primavera") {
  console.log(`Nooo, Esta muy lejos invierno :(, estamos en ${estacion}`);
} else if (estacion === "Verano") {
  console.log(`Nooo, estamos a la mitad :/, estamos en ${estacion}`);
} else if (estacion === "Otonio") {
  console.log(`Siiii, ya se siente el invierno :D, estamos en ${estacion}`);
} else console.log("Ingresa una estacion valida");

/*
    Clausula else if con funciones
*/

// Ejemplo 1

function estacionDelAnnio(estacion) {
  if (estacion == "Invierno") {
    console.log("SIIIUU, ME ENCANTA EL INVIERNO");
  } else if (estacion === "Primavera") {
    console.log(`Comienza a crecer la vegetacion, estamos en ${estacion}!!!`);
  } else if (estacion === "Verano") {
    console.log(
      `Se vienen los calores, vamonos a la playita!!!, estamos en ${estacion}!!!`
    );
  } else if (estacion === "Otonnio") {
    console.log(
      `Se comienzan a caer las hojas de los arboles, estamos en ${estacion}!!!`
    );
  } else console.log("Ingresa una estacion valida");
}
estacionDelAnnio("otonio");

// Ejemplo 1 Opcion B)
function estacionDelAnnio(estacion) {
  if (estacion == "Invierno") {
    console.log("SIIIUU, ME ENCANTA EL INVIERNO");
  } else if (estacion === "Primavera") {
    console.log(`Comienza a crecer la vegetacion, estamos en ${estacion}!!!`);
  } else if (estacion === "Verano") {
    console.log(
      `Se vienen los calores, vamonos a la playita!!!, estamos en ${estacion}!!!`
    );
  } else if (estacion === "Otonnio") {
    console.log(
      `Se comienzan a caer las hojas de los arboles, estamos en ${estacion}!!!`
    );
  } else console.log("Ingresa una estacion valida");
}

var a = "Invierno";
var b = "Primavera";
var c = "Verano";
var d = "Otonnio";

estacionDelAnnio(a);
estacionDelAnnio(b);
estacionDelAnnio(c);
estacionDelAnnio(d);

// Ejemplo 2

function clasificarValor(valor) {
  if (valor % 2 === 0) {
    console.log("Es divisible entre 2.");
  } else if (valor % 3 === 0) {
    console.log("Es divisible entre 3");
  } else console.log("No es divisible entre las opciones");
}
clasificarValor(2); // Es divisible entre 2
clasificarValor(15); // Es divisible entre 3
clasificarValor(7.5); // No es divisible entre las opciones

/*
    Condicionales orden logico
*/

function clasificarValor(valor) {
  if (valor < 5) {
    console.log("El valor es menor que 5.");
  } else if (valor < 10) {
    console.log("El valor es menor que 10");
  } else {
    console.log("El valor es mayor o igual que 10");
  }
}
clasificarValor(10);

/*
    Encadenar secuencias
*/

function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {
        console.log('Bajo peso');
    } else if (indiceDeMasaCorporal <= 24.9){
        console.log('Normal');
    } else if (indiceDeMasaCorporal <= 29.9){
        console.log('Sobrepeso');
    } else {console.log('Obesidad')}

}
interpretarIMC(17.8);     //Bajo peso
interpretarIMC(22.2);    //Normal
interpretarIMC(28.5);   //Sobrepeso
interpretarIMC(32.2);  //Obesidad