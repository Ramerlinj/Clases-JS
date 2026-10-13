
var contadorImpar = 0;
var contadorPar = 0;

let numeroDivisor = 100;

for(let i = 1; i < numeroDivisor; i++){
    if(i % 2 == 0){
        document.write(`${i}</br>`)
        contadorPar += i;
    }
    if(i % 2 == 1){
        contadorImpar += i;
    }
    
}

document.write(`Las sumas de los impares son: ${contadorImpar} </br>`)
document.write(`Las sumas de los numeros pares son: ${contadorPar}</br>`)
document.write(`Numero divison es:${numeroDivisor / 2}`)