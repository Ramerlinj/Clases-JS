let contador = 30;

const intervalor =  setInterval(() => {

    console.log(contador)

    if(contador == 20){
        console.log("vamos en camino")
    }
    else if(contador <= 10){
        console.log("casi terminando")
    }
    else if(contador == 5){
        console.log("ultimos esfuerzos")
    }
    contador--;

    if(contador === 0){
        console.log("finish")
        clearInterval(intervalor)
    }

}, 1000)

