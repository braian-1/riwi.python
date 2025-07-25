let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: '',
}

let editando = false;


const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const puestoImput = document.querySelector('#puesto');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (nombreImput.value === '' || puestoImput.value === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if(editando) {
        editarEmpleado();
        editando = false;
    }else{
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreImput.value;
        objEmpleado.puesto = puestoImput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
}

function mostrarEmpleados() {

    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');

    listaEmpleados.forEach(empleado => {
        const {id, nombre, puesto} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
}

function cargarEmpleado(empleado) {
    const {id, nombre, puesto} = empleado;

    nombreImput.value = nombre;
    puestoImput.value = puesto;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarEmpleado() {
    objEmpleado.nombre = nombreImput.value;
    objEmpleado.puesto = puestoImput.value;

    listaEmpleados.map( empleado => {
        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;
        }
    });

    limpiarHTML();
    mostrarEmpleados();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agh';

    editando = false;
}

function eliminarEmpleado(id) {
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}