let edad = prompt("Por favor, ingresa tu edad:");


if(edad < 14 && edad <= 17){
    console.log("Eres un niño.");
    alert("Eres un niño.");
}

if (edad < 17 && edad >= 14){
    console.log("Eres un adolecente.");
    alert("Eres un adolecente.");
}

if (edad > 17 && edad <= 49){
    console.log("Eres un adulto.");
    alert("Eres un adulto.");
}

if (edad >= 50){
    console.log("Eres un adulto mayor.");
    alert("Eres un adulto mayor.");
}
