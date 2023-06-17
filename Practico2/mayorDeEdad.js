const readlineSync = require("readline-sync");
let valor = readlineSync.question("Ingrese su edad: ");
let edad = Number(valor);

if (!isNaN(edad)) { 
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 0) {
    console.log("Eres menor de edad")
} else {
    console.log("El valor de edad ingesado (%s) no puede ser negativo",edad);
}
} else {
    console.log("el valor ingresado (%s) no es un numero",valor);
}
