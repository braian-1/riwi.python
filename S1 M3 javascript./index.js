//Inicializacion del programa
console.log("¡Bienvenido al sistema interactivo de mensajes!");


let nombre;
let edad;


//Aqui cree un bucle infinito para que cada vez que el usuario ingrese un caracter o un numero se va a repetir hasta que agregue un nombre correcto
while(true) {
    nombre = prompt("Por favor, ingresa tu nombre:");
//Aqui se aplica una condicion de que el usuario puede escribir letras minusculas y mayusculas, pero si ingresa un caracter o un numero le saldra un error
    if(/[a-zA-Z]+$/.test(nombre)){
        break;
    }else{
        alert("Por favor, ingresa solo letras.");//aqui le da una alerta de que solo puede ingresar letras
        console.error("Por favor, ingresa solo letras.");//le da un error en la consola
    }
}

//aqui hice un bucle infinto que se va a repetir si el usuario ingresa letras o caracteres
while(true) {
    let entradaEdad = prompt("Por favor, ingresa tu edad:");
    let Edadnumero = parseInt(entradaEdad);//aqui convierte la edad en un entero

    if(isNaN(Edadnumero) || Edadnumero <= 0){
        console.error("Error: Por favor, ingrese un numero valido.");
        alert("Edad ingresada es invalida. Por favor, ingrese una edad valida.");
    }else {
        edad = Edadnumero;
        break;
    }
}

if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡sigue aprendiendo y disfrutando del codigo!`);
    console.log(`Hola ${nombre}, eres menor de edad. ¡sigue aprendiendo y disfrutando del codigo!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
    console.log(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
}

console.log("Adios");
alert("Adios");
    