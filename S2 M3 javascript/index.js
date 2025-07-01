console.log("!Gestion de datos con objetos, Sets y Maps¡");

//Definir el objeto productos
const productos = {
    1: { id: 1, nombre: "Carro",precio: 9500},
    2: { id: 2, nombre: "Moto",precio: 3500},
    3: { id: 3, nombre: "Bicicleta",precio: 1500}
};

console.log("Objeto productos:", productos);

//Crear un set con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("set de productos unicos:", setProductos);


//Crear un map para agregar categorias a los productos 
const mapProductos = new Map([
    ["Transporte","Carro"],
    ["Transporte","Moto"],
    ["Transporte","Bicicleta"]
]); 

console.log("Map de productos y categorias:", mapProductos);


//Recorrer el objeto producto
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}


//Recorrer el set de productos
for (const producto of setProductos) {
    console.log("producto unico:", producto);
}

//Recorrer el map de productos
mapProductos.forEach((producto, categoria) => {
    console.log(`categoria: ${categoria}, producto: ${producto}`);
});

console.log("Prueba completa de gestion de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (set):", setProductos);
console.log("Categorias y Productos (Map):", mapProductos);