var sumaPar = 0;

let cincuenta = 50;

for(let i = 1 ;i < cincuenta; i++ ){

    if(i % 2 == 0){
        document.write(`${i}</br>`)
    }  
    if(i % 2 == 0){
        sumaPar += i;
    }  
}
document.write(`${sumaPar}Estos son las sumas par</br>`)
document.write(`${cincuenta/2}Esta es la cantidad de nuemeros impares que restan.</br>`)