fetch('http://localhost:3000/productos')
.then(response => response.json())
.then(data => console.log("Productos disponibles",data))
.catch(error => console.log("Error al obtener productos:", error));

const nuevoProducto = {id: 4, nombre: "Monitor", precio: 200 };

fetch('http://localhost:3000/productos',{
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoProducto)
})
.then(response => response.json())
.then(data => console.log("Productos disponibles",data))
.catch(error => console.log("Error al obtener productos:", error));


const productoActualizado = {nombre: "Laptop", precio: 1400 };

fetch('http://localhost:3000/productos/1',{
    method: 'PUT',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(productoActualizado)
})
.then(response => response.json())
.then(data => console.log("Producto actualizado", data))
.catch(error => console.log("Error al actualizar el producto:", error));

fetch('http://localhost:3000/productos/3', {method: 'DELETE'})
.then(() => console.log("Producto eliminado"))
.catch(error => console.log("Error al eliminar el producto:", error))