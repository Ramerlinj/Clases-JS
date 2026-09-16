// console.log("Hello, World!"); IMPRIMIR EN CONSOLA

/*!*
 * JaVa
 * Script
 */

// document.write("Hello, World!");

console.log("Hello, World!");
document.write("<h1>---------VARIABLES---------</h1>");
//!VARIBLES

//let
//var
//const

var saludo = "Hola Mundo! </br>";
let saludo2 = "Hola Mundo 2! </br>";
const saludo3 = "Hola Mundo 3! </br>";

// saludo3 = "Hola Mundo2222! </br>";


document.write(saludo);
document.write(saludo2);
document.write(saludo3);


var nombre = "Juan ";
let apellido = "Perez ";
const edad = 30;

document.write(nombre);
document.write(apellido);
document.write(edad);

//! variablecamelcaseasi -CamelCase- variableCamelCaseAsi

let esNumero = 10;
let numeroSegundaPalabra = 20;
let x = 18;
let edadUsuario = 19;
const isCasado = true;



document.write("<h1>--------TIPO DE DATOS----------</h1>");


//string
let nombreUsuario = "Juan";
let apellidoUsuario = "Perez";

//number
let edadUsuario2 = 30;
let numeroEscuela = 12;

//boolean
let isStudent = true;

//undefined
let variableIndefinida;

// documet.write(variableIndefinida);

//null
let variableNula = null;

//Object

const Carro = {
    marca: "Toyota",
    anio: 2020,
    matricula: "ABC123",
    color: "Rojo",
    tienePuertas: true,
    codigoMotor: null,
    seAutoConduce: false,
    
    //subObjeto
    propietario: {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30
    }
}

//Array

const colores = ["Rojo", "Verde", "Azul"];
const numeros = [1,2,3,4, true , "Hola", null, undefined];

document.write(typeof nombreUsuario, "</br>");
document.write(typeof edadUsuario2, "</br>");
document.write(typeof isStudent, "</br>");
document.write(typeof variableIndefinida, "</br>");
document.write(typeof variableNula, "</br>");
document.write(typeof Carro, "</br>");
document.write(typeof colores, "</br>");
document.write(typeof numeros, "</br>");
document.write("<h1>--------CONCATENACION----------</h1>");

//concatenacion
document.write(`${nombreUsuario} ${apellidoUsuario} ${edadUsuario2} </br>`);



