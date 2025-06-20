let contra = prompt("ingresa la contraseña:");
const contraseñaSegura = p => /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[A-Za-z0-9]/.test(p);
console.log(`Contraseña ${contra} es segura:`,contraseñaSegura(contra));
console.log(contra);
