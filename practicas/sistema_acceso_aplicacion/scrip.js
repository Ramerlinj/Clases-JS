const cuenta = prompt("Escribe tu nombre de cuenta");
switch (cuenta) {
    case "maria":
        document.write("Cuenta veradera")
        break;
    case "Ana":
        document.write("Cuenta veradera")
        break;
    case "Mercedes":
        document.write("Cuenta veradera")
        break;

        default: document.write("esta cuenta no exite")
}

document.write("</br></br>")

const edad = 12;

if (edad >=18) {
    document.write("Edad permitida")
}
else if (edad <=18) {
    document.write ("no tienes aceso")
}
else{
    document.write("Esto es un error")
}

document.write ("</br></br></br>")
let estasAutentico1 = 12;
let estasAutentico2 = 12;

if (estasAutentico1 === estasAutentico2) {
    document.write("Cuenta verificada y aceso permitido")
}
else if(estasAutentico1 == estasAutentico2){
    document.write("no acceso inmedianto")
}


