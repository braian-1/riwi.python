RETO EXTENDIDO: Panel de Administración con Autenticación y Gestión de Cursos
Objetivo
Desarrollar una Single Page Application (SPA) que funcione como un sistema completo de gestión de usuarios y cursos, con autenticación de usuarios y roles diferenciados (administrador y visitante). El administrador podrá gestionar usuarios y cursos, mientras que los visitantes podrán registrarse, iniciar sesión y visualizar cursos e inscripciones.
 Descripción General
Deberás crear un SPA usando HTML5, CSS3 y JavaScript Vanilla, sin frameworks ni librerías externas (excepto json-server). El sistema tendrá dos perfiles de usuario:
 Administrador: Puede crear, leer, editar y eliminar usuarios y cursos.
 Visitante: Puede registrarse, iniciar sesión y ver los cursos disponibles y los cursos en los que está inscrito.
 Requisitos No Funcionales
Tecnologías Obligatorias
HTML5
CSS3 (Flexbox / Grid)
JavaScript Vanilla (ES6+)
json-server (para simular la API)
Prohibido Usar
Frameworks de JS (React, Vue, Angular)
Librerías CSS (Bootstrap, Tailwind)
jQuery u otras librerías externas
 Requisitos Funcionales
 Módulo de Autenticación
Registro de usuarios (visitantes y administrador)
Inicio de sesión
Almacenamiento de sesión con localStorage
Validación de credenciales en login
 Roles
Administrador:
Acceso al panel administrativo mediante el login
CRUD de usuarios
CRUD de cursos
Visitante:
Visualización de cursos
Registro a cursos
 Interfaz de Usuario
Pantallas de login y registro
Dashboard solo para administrador
Vista pública para visitantes
Sidebar de navegación
Header con usuario logueado
Tabla de usuarios y cursos
Formularios (crear/editar)
Interfaz responsiva y accesible
Estructura de Datos (db.json)
{  "users": [    {      "id": 1,      "name": "Admin",      "email": "admin@admin.com",      "password": "admin123",      "role": "admin",      "phone": "1234567890",      "enrollNumber": "98765432100000",      "dateOfAdmission": "01-Jan-2020"    }  ],  "courses": [    {      "id": 1,      "title": "Introducción a JavaScript",      "description": "Curso básico de JavaScript",      "startDate": "10-Jul-2025",      "duration": "4 semanas"    }  ],  "enrollments": [    {      "id": 1,      "userId": 2,      "courseId": 1    }  ]}Recomendación de Estructura de Archivos:/src  /assets  /components    - header.js    - sidebar.js    - modal.js  /pages    - login.html    - register.html    - dashboard.html    - public.html  /services    - auth.js    - users.js    - courses.js    - enrollments.js  /utils    - validation.js    - storage.js  main.jsdb.jsonREADME.md 