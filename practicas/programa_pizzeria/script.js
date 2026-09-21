let pizza = prompt("Selecciona una pizza: MARGARITA, PEPERONI, AWAIANA o CUATRO QUESO");

switch (pizza.toUpperCase()){
    case "MARGARITA":
        document.write("Pizza margarita $450");
        break;

    case "PEPERONI":
        document.write("Pizza PEPERONE $500");
        break;

    case "AWAIANA":
        document.write("Pizza AWAIANA $50");
        break;

    case "QUATRO QUESO":
        document.write("Pizza QUATRO QUESO $450");
        break;

   default:
        document.write("Opcion no valida");

}