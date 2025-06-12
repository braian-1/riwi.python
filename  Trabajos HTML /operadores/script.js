//Seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correcion = document.querySelector("#msj_correcion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 se va a guardar los numeros aleatorios de cada operacion
let n1, n2;

//funcion suma
function btnSumar() {
    //limpiamos el div contenedor de las correciones
    msj_correcion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma")
    operacion_actual = "+";
    // se asigna la operacion suma a la etiqueta 
    operacion.innerHTML = " + ";
    //generar numeros aleatorios para la suma
    nuevaSuma();
}

function nuevaSuma(){
    //se generan dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 100);
    n2 = parseInt(Math.random() * 100);
    //se asigna numeros a las etiqutas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el curso en el input
    respuesta_usuario.focus();
}

//producto
function btnProducto() {
    //limpiamos el div contenedor de las correciones
    msj_correcion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("producto")
    operacion_actual = "*";
    // se asigna la operacion suma a la etiqueta 
    operacion.innerHTML = " x ";
    //generar numeros aleatorios para la suma
    nuevoProducto();
}

function nuevoProducto(){
    //se generan dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 40);
    n2 = parseInt(Math.random() * 30);
    //se asigna numeros a las etiqutas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el curso en el input
    respuesta_usuario.focus();
}

//funcion resta

function btnResta() {
    //limpiamos el div contenedor de las correciones
    msj_correcion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("resta")
    operacion_actual = "-";
    // se asigna la operacion suma a la etiqueta 
    operacion.innerHTML = " - ";
    //generar numeros aleatorios para la suma
    nuevaResta();
}

function nuevaResta(){
    //se generan dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random()* 8 * 9);
    n2 = parseInt(Math.random()* 8);
    //se asigna numeros a las etiqutas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el curso en el input
    respuesta_usuario.focus();
}

//funcion division
function btnDivision() {
    //limpiamos el div contenedor de las correciones
    msj_correcion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("division")
    operacion_actual = "/";
    // se asigna la operacion suma a la etiqueta 
    operacion.innerHTML = " / ";
    //generar numeros aleatorios para la suma
    nuevaDivision();
}

function nuevaDivision(){
    let divisores = [];

    n1 = parseInt(Math.random()*84 + 2);

    for(var i=1; i<=n1;i++){
        if(n1%i===0){
            divisores.push(i);
        }
    }

    let pos = parseInt(Math.random()*(divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}


function corregir(){

    if(respuesta_usuario.value==""){
        return;
    }

    let solucion;
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);

    var i = document.createElement("i");
    if(respuesta_usuario.value== solucion){
        i.className = "fa-regular fa-face-grin";
    }else{
        i.className = "fa-regular fa-face-frown";
    }

    msj_correcion.appendChild(i);

    if(operacion_actual =="+"){
        nuevaSuma();
    }else if (operacion_actual =="-"){
        nuevaResta();
    }else if (operacion_actual =="*"){
    nuevoProducto();
    }else if (operacion_actual =="/"){
    nuevaDivision();
    }


    respuesta_usuario.value = "";
}

respuesta_usuario.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if(ev.keyCode == 13){
        corregir();
    }
}

//
function activarBoton(idBoton){
    document.getElementById("suma").className ="";
    document.getElementById("resta").className ="";
    document.getElementById("producto").className ="";
    document.getElementById("division").className ="";
    document.getElementById(idBoton).className ="activado";
}

