
document.write("<h1>-------------OPERADORES---------------</h1>");

document.write("<h3>--------OPERADORES ARITMETICOS----------</h3>");

//OPERADORES ARITMETICOS

let numero1 = 10;
let numero2 = "10";

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = 14 % 4; //sobrante de una division
let potencia = numero1 ** numero2;

document.write("Suma: " + suma + "</br>");
document.write("Resta: " + resta + "</br>");
document.write("Multiplicacion: " + multiplicacion + "</br>");
document.write("Division: " + division + "</br>");
document.write("Modulo: " + modulo + "</br>");
document.write("Potencia: " + potencia + "</br>");



document.write("<h3>--------OPERADORES COMPARACION----------</h3>");

// let numero1 = 10;
// let numero2 = 5;


 
// |  A  |  B  | A > B | A < B | A >= B | A <= B | A == B | A != B | A === B | A !== B |
// |-----|-----|-------|-------|--------|--------|--------|--------|---------|---------|
// | 10  | 5   | true  | false | true   | false  | false  | true   | false   | true    |
// | 10  | 10  | false | false | true   | true   | true   | false  | true    | false   |
// | 5   | 10  | false | true  | false  | true   | false  | true   | false   | true    |

document.write( numero1 > numero2, "</br>");
document.write( numero1 < numero2, "</br>");
document.write( numero1 >= numero2, "</br>");
document.write( numero1 <= numero2, "</br>");
document.write( numero1 == numero2, "</br>");
document.write( numero1 != numero2, "</br>");
document.write( numero1 === numero2, "</br>");
document.write( numero1 !== numero2, "</br>");



document.write("<h3>--------OPERADORES LOGICOS----------</h3>");

let esMayorDeEdad = true;
let tieneLicencia = false;

document.write("AND: " + (esMayorDeEdad && tieneLicencia) + "</br>"); //false
document.write("OR: " + (esMayorDeEdad || tieneLicencia) + "</br>");
document.write("NOT: " + (!esMayorDeEdad) + "</br>");




document.write(((20 > 15) && (8 === 8) && !(5 > 10)) && (12 <= 12) || (4 !== 4), "</br>");  //true

document.write(((15 < 3) || (7 === "7") && (10 >= 10)) || !(30 > 5) !== (20 === 20), "</br>");


document.write("<h3>--------OPERADORES TERNARIOS-------- <h3/>")

const edad = 18;
const mensaje = edad >= 18
    ? "Puedes entrar <br/>" 
    : "No puedes entrar <br/>";


document.write(mensaje)

//? Nullish coalescing ?? 

document.write(edad ?? 'No tiene edad')