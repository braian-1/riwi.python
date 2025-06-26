 let contador = 0;
function crearContador(){
    return function(){
        contador++;
        return contador
    }
}