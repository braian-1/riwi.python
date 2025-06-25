function crearContador(){
    let contador = 0;
    return function(){
        contador++;
        return contador
    }
}