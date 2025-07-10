//Arreglo que guarda los libros y se mantiene vacio
let libros = [];

//Funcion que muestra los libros en la tabla
function renderizarTabla() {
    const tabla = document.getElementById('tablaLibros');
    tabla.innerHTML = '';//Limpia la tabla antes de volver a llenarla

    //Recorre el arreglo de los libros para crear una fila para cada uno
    libros.forEach((libros, i) => {
        tabla.innerHTML += `
        <tr>
          <td>${libros.titulo}</td>
          <td>${libros.autor}</td>
          <td>
            <button onclick="editar(${i})">Editar</button>
            <button onclick="eliminar(${i})">Eliminar</button>
          </td>
        </td>
        `;
    });
}

//Funcion para agregar un libro nuevo 
function agregarLibro() {
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    //Se valida que no esten vacios
    if (titulo && autor) {
        libros.push({ titulo, autor });//Se agrega el nuevo libro al arreglo
        //Se limpian los inputs
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        renderizarTabla();//Se actualiza la tabla
    }
}

///Funcion para eliminar libros
function eliminar(i){
    libros.splice(i, 1);//Elimina 1 elemento en la posicion i
    renderizarTabla();//Vuelve a dibujar la tabla 
}

//funcion para editar el libro y el autor
function editar(i) {
    const nuevoTitulo = prompt("Nuevo Titulo:", libros[i].titulo);
    const nuevoAutor = prompt("Nuevo Autor:", libros[i].autor);
    //Si se ingresaron valores validos, se actualiza el libro
    if (nuevoTitulo && nuevoAutor) {
        libros[i] = { titulo: nuevoTitulo, autor: nuevoAutor };
        renderizarTabla();
    }
}

renderizarTabla();//Al cargar la pagina, se muestra la tabla vacia