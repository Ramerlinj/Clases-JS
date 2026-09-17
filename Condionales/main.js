//!Condicionales

//if
let numero1 = 10;
let numero2 = "11";

if (numero1 === numero2) {

    document.write("SI <br/>")
}
//else if

else if (numero1 == numero2) {
    document.write("SINO <br/>")

}

//else
else {
    document.write("NO <br/>")

};

//!Switch

const dia = "lunes"

switch (dia) {
    case "Lunes":
        document.write("NO quiero ir a clases es LUnes, no me gusta")
        break;
    case "Martes":
        document.write("NO quiero ir a clases es Martes, no me gusta")
        break;
    case "Miercoles":
        document.write("NO quiero ir a clases es MIercoles, no me gusta")
        break;
    case "Jueves":
        document.write("NO quiero ir a clases es Jueves, no me gusta")
        break;
    case "Viernes":
        document.write("SIII ES MI DIA FAVORITO")
        break;
    case "Sabado":
        document.write("NO quiero ir a clases es Sabado, no me gusta")
        break;
    case "Domingo":
        document.write("NO quiero ir a clases es Domingo, no me gusta")
        break;
    default:
        document.write("NOOO, escribe BIen")
}

document.write("<br/><br/>")

const diaSemana = prompt("Hola, Ingresa el dia de la semana");

switch (diaSemana) {
    case "1":
        document.write("Lunes")
        break;
    case "2":
        document.write("Martes")
        break;
    case "3":
        document.write("Miercoles")
        break;
    case "4":
        document.write("Jueves")
        break;
    case "5":
        document.write("Viernes")
        break;
    case "6":
        document.write("Sabado")
        break;
    case "7":
        document.write("Domingo")
        break;
    default:
        document.write("La semana solo tiene 7 dias.")
}

//!Truthy y Falsy

let isStudent = true;

if (isStudent){
    document.write("ESte es un estudiante")
}
else if(!isStudent){
    document.write("ESte NO es un estudiante")
}
else{
    document.write("EScribe bien")
}