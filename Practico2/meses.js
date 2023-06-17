const readlineSync = require("readline-sync");
let numero = readlineSync.question("ingrese el numero de mes: ");
let mes;
let dias;

if (numero > 0 && numero < 13) {
    switch (numero) {

        case "1":
            mes = "enero";
            dias = 31;
            break;

        case "2":
            mes = "febrero";
            dias = 28;
            break;

        case "3":
            mes = "marzo";
            dias = 31;
            break;

        case "4":
            mes = "abril";
            dias = 30;
            break;

        case "5":
            mes = "mayo";
            dias = 31;
            break;

        case "6":
            mes = "junio";
            dias = 30;
            break;

        case "7":
            mes = "julio";
            dias = 31;
            break;

        case "8":
            mes = "agosto";
            dias = 31;
            break;

        case "9":
            mes = "septiembre";
            dias = 30;
            break;

        case "10":
            mes = "octubre";
            dias = 31;
            break;

        case "11":
            mes = "noviembre";
            dias = 30;
            break;

        case "12":
            mes = "diciembre";
            dias = 31;
            break;
    }

    console.log("La cantidad de dias del mes de %s es %i", mes,dias );

} else {
    console.log("su numero %i no esta entre los numero 1 y 12", numero);
}

