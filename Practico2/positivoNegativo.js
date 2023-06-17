// Punto b.

const readlineSync = require("readline-sync");
let valor = readlineSync.question("Ingrese un numero: ");
let numero = Number(valor);

if (!isNaN(numero)) {
    if (numero > 0) {
        console.log("El numero es positivo");

    } else if (numero < 0) {
        console.log("El numero es negativo");

    } else {
        console.log("El numero es 0");
    }

} else {
    console.log("el valor ingresado (%s) no es un numero", valor);
}