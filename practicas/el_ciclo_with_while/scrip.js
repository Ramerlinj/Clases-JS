let password = "";
let intentos = 0;

while (password !== "javas123" && intentos <= 3){
    password = prompt("Digita tu password");
    intentos ++ ;
    if(password !== "javas123"){
       alert(" contraseña incorrecta, intentelo de nuevo")
    }
}

if (password === "javas123"){
    document.write("acceso permitido");
}
else{
    document.write("acceso bloqueado. has agotado tus intentos")
}