


let puntosJugador1 = 0;
let puntosJugador2 = 0;

do {
    
    const jugadas = ["Piedra", "Papel", "Tijera"];
    for (const jugada of jugadas) {
        alert(`Elige el deseado: ${jugada}`)
    }
    
    const jugador1 = prompt("JUGADOR 1: Elija ")
    const jugador2 = prompt("JUGADOR 2: Elija ")

    
    if (jugador1 == "Piedra" && jugador2 == "Papel" || jugador1 == "Papel" && jugador2 == "Tijera" || jugador1 == "Tijera" && jugador2 == "Piedra") {
        puntosJugador2+=1;
        alert(`Jugador 2 gano ${puntosJugador2} puntos`)
    }
    else if (jugador1 == "Papel" && jugador2 == "Piedra" || jugador1 == "Tijera" && jugador2 == "Papel" || jugador1 == "Piedra" && jugador2 == "Tijera") {
        puntosJugador1+=1;
        alert(`Jugador 1 gano ${puntosJugador1} puntos`)
    }
    else if(jugador1 == jugador2){
        alert("Empate")
        continue;
    }
    else{
        alert("Hubo un error, ingrese una jugada valida")
        continue;
    }
    
    if(puntosJugador1 == 3){
        alert("Jugador 1 Gano la partida")
        break;
    }
    else if(puntosJugador2 == 3){
        alert("Jugador 2 Gano la partida")
        break;
    }

    jugadaStatus = prompt("Desea continuar jugando? (si/no)")

}while((jugadaStatus.toLowerCase() == "si"))


