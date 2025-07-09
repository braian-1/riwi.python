const $btnGuardar = document.getElementById('btn-task'),
      $list = document.getElementById("list"),
      $inputTask = document.getElementById("task");

//Se intenta guardar las tareas que ya estan guardadas en localStorage si es que existen
//Si no hay nada guardado se utiliza una lista vacia
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Esta funcion guarda la lista de tareas actual en el localStorage
const saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //JSON.stringify convierte el array de tareas a texto para poder guardarlo
}

//Esta funcion muestra las tareas en la pantalla
const getTasks=()=>{
    if(tasks.length){
        $list.innerHTML = ``;
        tasks.forEach(el=>{
            const $li = document.createElement("li");
            //Se añade el texto de la tarea y un boton "eliminar" con el ID de la tarea
            $li.innerHTML = `<p>${el.title}</p> <button id="delete-task" data-id="${el.id}" class="delete-task">Eliminar</button>`;
            $li.classList.add("items");
            $list.appendChild($li);
        })
    }else $list.innerHTML = `<h4>No hay tareas pendientes</h4>`//Si no hay tareas pendientes se muestra este mensaje
}

//Esta funcion se ejecuta cuando el usuario le da en el boton de guardar tarea
const saveTask=()=>{
    const title = $inputTask.value.trim();
    if (title === "") return;//si el campo esta vacio no pasa nada

    const task = {
        id:new Date().getTime(),//Id unico
        title: $inputTask.value
    }

    tasks.push(task);//Se añade una nueva tarea a la lista 
    $inputTask.value = "";
    saveToLocalStorage();//se guarda la lista en localStorage
    getTasks();
};

//esta funcion se ejecuta cuando el usuario le da clic en eliminar
const deleteTask =(id)=>{
    console.log(id);
    let newTask = [];
    newtask = tasks.filter(el=> parseInt(el.id)!== parseInt(id));
    console.log(newTask);
    tasks = newTask;
    getTasks();
} 
//cuando se cargue completamente la pagina se muestran las tareas guardadas 
document.addEventListener("DOMContentLoaded", (e)=> getTasks());
//Se escuchan todos los clics del documento
document.addEventListener("click", (e)=> {
    if(e.target === $btnGuardar) saveTask();
    if(e.target.matches("#delete-task")) deleteTask(e.target.dataset.id);
});