const readlineSync = require("readline-sync");
let valor = readlineSync.question("Ingrese un numero entero: ");
let numero = Number(valor);
let PosONeg;
let ParEImp;

if (!isNaN(numero)) {

    if (numero > 0) {

        PosONeg = "es positivo"

        if ((numero % 2) === 0) {
            ParEImp = "y par";
        } else {
            ParEImp = "e impar"
        }

        console.log("El numero %s %s", PosONeg, ParEImp)

    } else if (numero < 0) {
        console.log("El numero es negativo");

    } else {
        console.log("El numero es cero");
    }
}