//Evento para guardar datos en la local storage
document.getElementById('saveButton').addEventListener('click', () =>{
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if(!nameInput || !ageInput) {
        console.error('Los elementos del formulario no existen. ');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if(name && !isNaN(age)){
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    }else{
        alert('Por favor, ingrese un nombre valido y una edad numerica. ');
    }
});

//funcion para mostrar los datos almacenados
function displayData(){
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if(name && age){
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    }else{
        outputDiv.textContent = 'No hay datos almacenados.'; 
    }
}

//al cargar la pagina, para mostrar los datos almacenados
window.onload = displayData;

//Inicializar contador de interacciones en session storage
if (!sessionStorage.getItem('interactionCount')){
    sessionStorage.setItem('interactionCount', 0);
}

//Actualizar contador de interacciones
function updateInteractionCount(){
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`interacciones en esta sesion: ${count}`);
}

//asignar eventos al contador
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount)

//evento para limpiar los datos del local storage
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
})