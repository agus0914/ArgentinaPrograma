let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);

let citaRevizada  = cita.split(" ");
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);
let Recorte = citaRevizada.splice(5,8);
console.log(citaRevisada);