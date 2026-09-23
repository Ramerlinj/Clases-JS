let Nombre = prompt("Escriba su nombre aqui");
let meNbresia = prompt("Tienes mendresia")

if(Nombre = true){
    document.write("Usted no es cliente de nosostros")
    Nombre = "alberto, juan, julian, rosanna: Si O NO";
}

else if(meNbresia = true){
}
else{
    document.write("Uted no es cliente de nosotros");
}
let Productos = prompt("Que productos quieres compra: 1 2 3 4: seleccione el numero");

switch (Productos) {

    case "1":
        document.write(" pizza: $15")
        break;
    case "2":
        document.write("hamburgueza: $10")
        break;
    case "3":
        document.write("Tacos: $8")
        break;
    case "4":
        document.write("Ensalada: $7")
        break;

    default: document.write("Producto no existente");
}