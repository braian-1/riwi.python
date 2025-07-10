const container = document.querySelector(".container");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");

registerbtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});

const usuarios = [
    { id: 1, usuario: "cardo123", password: "1234", rol: "visitante" },
    { id: 2, usuario: "bermu123", password: "5678", rol: "bibliotecario" }
];

function login(usuarioIngresado, passwordIngresado) {
    const usuarioEncontrado = usuarios.find((u) => u.usuario === usuarioIngresado && u.password === passwordIngresado);

    if (usuarioEncontrado) {
        console.log(`Bienvenido, ${usuarioEncontrado.usuario}`);
        redirigirSegunRol(usuarioEncontrado.rol);
    } else {
        console.log("Usuario o contraseña incorrecta");
        alert("Usuario o contraseña incorrecta");
    }
}

function redirigirSegunRol(rol) {
    if (rol === "bibliotecario") {
        mostrarFuncionesBibliotecario();
    } else if (rol === "visitante") {
        mostrarFuncionesVisitante();
    }else{
        console.log("Rol no reconocido");
    }
}

function mostrarFuncionesBibliotecario() {
    console.log("Panel del bibliotecario");
}

function mostrarFuncionesVisitante() {
    console.log("Panel de visitante");
}