const informacion = prompt("Ingrese la informacion aqui");

switch (informacion) {
   case "Nombre":
   document.write("Yo me llamo rosanna castillo")
   break;

   case "Apellido":
   document.write("Este es un apellido famoso")
   break;

   case "Hijos?":
   document.write("Tengo five hijos")
   break;

   case "Casada?":
   document.write("Me he casado 4 veces")
   break;

   case "vivienda?":
   document.write("Yo vivo en EE UU")
   break;

   case "Universidad":
   document.write("Yo estudie en la utesa")
   break;

   default:
    document.write (" usted no califica para estas preguntas");
}

document.write ("</br>", "</br>", "</br>");

let NombreHijo = undefined;

if(NombreHijo){
    document.write("Este es mario")
}
else if(!NombreHijo){
    document.write("Este es antonio")
}
else{
    document.write("Estos no son mis hijos")
}
