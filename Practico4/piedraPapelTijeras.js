const readlineSync = require("readline-sync");
const jugadas = ["piedra", "papel", "tijera"];

function obtenerJugadaComputadora() {
    let jugada = Math.round(Math.random() * 2);
    switch (jugada) {

        case 0:
            jugada = jugadas[0];
            break;

        case 1:
            jugada = jugadas[1];
            break;

        case 2:
            jugada = jugadas[2];
            break;

    } return jugada;
}

function obtenerJugadaUsuario() {
    let jugada = readlineSync.question("\nIngrese su eleccion: Piedra, Papel o Tijera:\n");
    jugada = jugada.toLowerCase().trim();

    while (jugada != jugadas[0] && jugada != jugadas[1] && jugada != jugadas[2]) {
        jugada = readlineSync.question("\nSu valor ingresado no es valido. \n" +
            "Por favor ingrese Piedra, Papel o Tijera correctamente:\n");
        jugada = jugada.toLowerCase().trim();
    }

    return jugada;
}

function determinarGanador(jugadaPC, jugadaUsuario, contador) {


    if (jugadaPC == jugadaUsuario) {
        console.log("\nLa computadora eligio: %s. El usuario eligio: %s.\n" +
            "El resultado fue de la ronda fue: Empate.", jugadaPC, jugadaUsuario);
        return contador;
    }
    else if (
        (jugadaPC == jugadas[0] && jugadaUsuario == jugadas[2]) ||
        (jugadaPC == jugadas[1] && jugadaUsuario == jugadas[0]) ||
        (jugadaPC == jugadas[2] && jugadaUsuario == jugadas[1])
    ) {
        console.log("\nLa computadora eligio: %s. El usuario eligio: %s. \n" +
            "El ganador de la ronda fue: La Computadora", jugadaPC, jugadaUsuario);
        return contador += 1;
    }
    else {
        console.log("\nLa computadora eligio: %s. El usuario eligio: %s. \n" +
            "El ganador de la ronda fue: El Usuario.", jugadaPC, jugadaUsuario);
        return contador -= 1;
    }

}

function FcantidadJugadas() {
    let PeticionCantidad = readlineSync.question("\nIngrese la cantidad de jugadas para ganar la partida: Una, Dos, Tres.\n");
    PeticionCantidad = PeticionCantidad.toLowerCase().trim();

    while (PeticionCantidad != "uno" && PeticionCantidad != "dos" && PeticionCantidad != "tres") {

        PeticionCantidad = readlineSync.question("La cantidad de jugadas ingresada es incorrecta.\n" +
            "Por favor ingrese Uno, Dos o Tres correctamente.\n ");
        PeticionCantidad.toLowerCase().trim();
    }

    switch (PeticionCantidad) {
        case "uno":
            PeticionCantidad = 1;
            break;

        case "dos":
            PeticionCantidad = 2;
            break;

        case "tres":
            PeticionCantidad = 3;
            break;
    }
    return PeticionCantidad
}

function mensajeGanador(contador) {
    if (contador < 0) {
        console.log("\n+El ganador de la partida es: el Usuario.");
    } else if (contador > 0) {
        console.log("\nEl ganador de la partida es: la Computadora.");
    } else {
        console.log("\nEl resultado de la partida es: Empate.");
    }
}


function Main() {
    let cantidadJugadas = FcantidadJugadas();
    let contador = 0;
    let ronda = 0;

    while (cantidadJugadas > 0) {
        ronda += 1;
        cantidadJugadas -= 1;
        console.log("\nRonda %i.", ronda);
        let jugadaPC = obtenerJugadaComputadora();
        let jugadaUsuario = obtenerJugadaUsuario();
        contador = determinarGanador(jugadaPC, jugadaUsuario, contador);
    }
    mensajeGanador(contador)
}

Main();




