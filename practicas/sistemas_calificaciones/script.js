
const calificaciones = Number(prompt("Ingrese calificaciones"));

switch (true) {
    case (calificaciones >= 90 && calificaciones <= 100):
        document.write("Excelente")
        break;

    case (calificaciones >= 80 && calificaciones <= 89):
        document.write("muy bien")
        break;

    case (calificaciones >= 70 && calificaciones <= 79):
        document.write("aprobado")
        break;

    case (calificaciones <= 70 && calificaciones > 0 ):
        document.write ("reprobado")
        break;

        case (calificaciones == 0 || calificaciones >= 100 ):
            document.write ("calificacion invalida")
            break

        default:
        document.write("calificaciones no validas");
}