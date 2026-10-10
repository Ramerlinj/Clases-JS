

let golsPuntosPlayerone = 0;
let golsPuntosPlayertwo = 0;

var continuacionJuego;

do {
    alert(`Bienvenido al juego de fireball`)
    alert(`What is your choice?👉👉`)
    let juegos = ["plata", "fuego", "agua"]
    for (const opcion of juegos) {
        alert(`${opcion}`)
    }
    
    let primerPlayer = prompt(`player one please write here your choice`);
    let segundoPlayer = prompt(`player two please write here your choice`);
    
    if (primerPlayer == "plantas" && segundoPlayer == "fuego" || primerPlayer == "agua" && segundoPlayer == "plata") {
        golsPuntosPlayertwo+=1;
        alert(`congratulation ha ganado player 2 tiene un punto ${golsPuntosPlayertwo}`)
        
    }
    
    else if (primerPlayer == "agua" && segundoPlayer == "fuego" || primerPlayer == "fuego" && segundoPlayer == "planta") {
        golsPuntosPlayerone+=1;
        alert(`congratulation ha ganado player 2 tiene un punto ${golsPuntosPlayerone}`)
    }
    else if(segundoPlayer == "fuego" && primerPlayer == "plata" || segundoPlayer == "agua" && primerPlayer == "planta"){
        golsPuntosPlayertwo+=1;
    }
    
    else {
        alert("Ha seleccionada algo invalido")
        continue;
    }
    
    if(primerPlayer == 5){
        alert(`Jugador primerJugado ha ganado`)
        break;
    }
    else if(segundoPlayer == 5){
        alert(`Jugador segundoJugado ha ganadod`)
        break;
    }
    
    continuacionJuego = prompt("Desea continuar jugando? (yes/no)")

} while (continuacionJuego === "yes" )


