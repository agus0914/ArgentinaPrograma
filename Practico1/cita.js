let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);

let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);

let citaArreglo  = cita.split(" ");
let citaRevisada = citaArreglo.splice(0,5);
console.log(citaRevisada);