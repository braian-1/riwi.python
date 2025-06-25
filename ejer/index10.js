function oficina(){
    let laptop = "Dell XPS";
    let claveWifi = "oficina123";

    return function seguirTrabajando(){
        console.log("Trabajando con " + laptop + " y clave " + claveWifi);
    };
}

const pedro = oficina();

pedro();

let x = 1;

function uno(){
    let y = 2;

    function dos(){
        let z =3;
        console.log(x,y,z);
    }

    dos();
}

uno();


function saludar(callback) {
    console.log("hola");
    callback();
}

function decirAdios() {
    console.log("adios");
}

saludar(decirAdios);


async function ejecucionPromesa() {
    try{
        const resultado = await miPromesa;
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}


