function procesarUsuario(nombre,callback){
    console.log("El nombre del usuario es:", nombre);
    if(typeof callback === 'function'){
        callback();
    }
} 