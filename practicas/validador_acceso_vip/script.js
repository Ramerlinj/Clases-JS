let edad = prompt("Ere mayor de 18?")
let entrada = Boolean( prompt("Tienes entrada VIP"))
let enListaInvitados = confirm(prompt("Estas en la lista de invitados"))
let pasePrensaActivo = confirm(prompt("Tienes un pase prensa activo?"))
let vetado = confirm(prompt("Estas vetado?"))

if(vetado){
    document.write("Aceso permitido")
}
else if(edad => 18 && ( entrada == true)){
    document.write("acceso permitido");
    document.write("</br></br>")
}
else if( enListaInvitados && pasePrensaActivo){
    document.write("Entra denegada")
}
else{
    document.write("Error usted no tiene el acceso permitido")
}
