const caja = document.getElementById("caja");
const boton = document.getElementById("btn");
const salida = document.getElementById("salida");
const salida2 = document.getElementById("salida2");

boton.addEventListener("click", e => {
    e.preventDefault();

    
    caja.value = "Feliz Dia de las Madres";
    caja.maxLength = caja.value;
    caja.style.border = "5px dashed black"
    caja.style.borderRadius = "10px";
    caja.style.fontSize = "60px"
    caja.style.backgroundColor = "pink"
    caja.style.color = "crimson"
    caja.style.textAlign = "center"
    caja.style.fontFamily = "Arial, Helvetica, sans-serif";

    salida.innerHTML = "Espero tengas un dia tan maravilloso como tu ♥";
    salida.style.fontSize = "30px"
    salida2.innerHTML = "Yo se que no es mucho pero al menos queria hacerte un pequeño detalle a mi manera, Gracias por todo y Feliz Dia ♥"
    salida2.style.fontSize = "30px"

});