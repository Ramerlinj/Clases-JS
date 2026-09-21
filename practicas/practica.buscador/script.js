// document.write.ESTUDIANTES("</br>")

const estudiantes = prompt("Buscar estudiante en el sistema");

switch (estudiantes) {

    case "alex":
        document.write("este estudiante esta en 5to grado")
        break;

    case "camila":
        document.write("este estudiante faltante")
        break;

    case "alexis":
        document.write("este dejo la escuela")
        break;

    case "romina":
        document.write("esta ya esta termianndo el año escolar")
        break;

    case "benjamin":
        document.write("Este no asiste")
        break;

    case "Ramelin":
        document.write("este ya termino la escuela")
        break;

    case "alturo":
        document.write("este se graduo ya")
        break;

    default: document.write("El estudiante que intentas poner no esta en el sistema");

}