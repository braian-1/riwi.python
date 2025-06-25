
let boton = document.getElementById("boton");

boton.addEventListener("click",saludar);

function saludar(){

    let resultado = document.getElementById("resultado");

    resultado.innerHTML += "<p> Hola mundo </p>";
    

}