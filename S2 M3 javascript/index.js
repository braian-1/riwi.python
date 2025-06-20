console.log("!Gestion de datos con objetos, Sets y Maps¡");

const productos = {
    1: { id: 1, nombre: "Laptop",precio: 1500},
    2: { id: 2, nombre: "Mouse",precio: 25},
    3: { id: 3, nombre: "Teclado",precio: 50}
};

console.log("Objeto productos:",productos);

const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("set de productos unicos:", setProductos);

const mapProductos = new Map([
    ["Electronica","laptop"],
    ["accesorios","mouse"],
    ["accesorios","teclado"]
]);

console.log("Map de productos y categorias:",mapProductos);

for (const id in productos){
    console.log(`producto ID: ${id}, detalles:`,productos[id]);
}

for (const producto of setProductos){
    console.log("producto unico:",producto);
}

mapProductos.forEach((producto,categoria) => {
    console.log(`categoria: ${categoria}, producto: ${producto}`);
});

console.log("Prueba completa de gestion de datos:");
console.log("Lista de productos (Objeto):",productos);
console.log("Lista de productos unicos (set):",setProductos);
console.log("Categorias y Productos (Map):",mapProductos);