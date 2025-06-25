const container = document.querySelector(".container");
const registerbtn = document.querySelector(".registerbtn");
const loginbtn = document.querySelector(".loginbtn");

registerbtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});