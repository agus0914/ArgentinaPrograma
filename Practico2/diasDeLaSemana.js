const readlineSync = require("readline-sync");
let valor = readlineSync.question("Ingrese un numero del 1 al 7: ");
let numero = Number(valor);
let dia;

if (!isNaN(numero)) {
    if (numero < 8 && numero > 0) {
        switch (valor) {
            case "1":
                dia = "lunes"
                break

            case "2":
                dia = "martes"
                break

            case "3":
                dia = "miercoles"
                break

            case "4":
                dia = "jueves"
                break

            case "5":
                dia = "viernes"
                break

            case "6":
                dia = "sabado"
                break

            case "7":
                dia = "domingo"
                break
        } console.log("Hoy es %s.", dia)
    } else {
        console.log("Numero invalido");
    }

} else {
    console.log("El valor ingresado no es un numero");
}