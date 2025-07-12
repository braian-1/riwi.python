const user = JSON.parse(localStorage.getItem("loggedUser"));
const isAdmin = user?.role === "admin";
const welcomeText = document.getElementById("welcomeText");
const tableBody = document.getElementById("tableBody");
const form = document.getElementById("crudForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formContainer = document.getElementById("formContainer");

let records = JSON.parse(localStorage.getItem("records")) || [];
let editIndex = null;

// Redirigir si no hay sesión
if (!user) {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  welcomeText.textContent = `Bienvenido, ${user.username} (${user.role})`;

  if (isAdmin) {
    formContainer.style.display = "block";
    form.addEventListener("submit", saveRecord);
  }

  renderTable();
});

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

function saveRecord(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  if (editIndex === null) {
    records.push({ name, email });
  } else {
    records[editIndex] = { name, email };
    editIndex = null;
  }

  localStorage.setItem("records", JSON.stringify(records));
  form.reset();
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = "";

  records.forEach((record, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
        ${isAdmin
          ? `<button onclick="editRecord(${index})">Editar</button>
             <button onclick="deleteRecord(${index})">Eliminar</button>`
          : "—"}
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editRecord(index) {
  const record = records[index];
  nameInput.value = record.name;
  emailInput.value = record.email;
  editIndex = index;
}

function deleteRecord(index) {
  if (confirm("¿Eliminar este registro?")) {
    records.splice(index, 1);
    localStorage.setItem("records", JSON.stringify(records));
    renderTable();
  }
}
