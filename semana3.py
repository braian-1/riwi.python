inventario = {
    'computador': (150000, 7),
    'teclado': (25000, 17),
    'mouse' : (40000, 8),
    'USB':(20000, 20)
}

print(inventario)

def buscar_producto(nombre):
    if inventario[nombre]:
        print(inventario[nombre])
        return f"El producto {nombre} esta en la lista."
    else:
        return f"El producto {nombre} no se encontrado en la lista. "
    
nom_pro=input("ingrese el nombre del producto que desea buscar:\n ")
resultado = buscar_producto(nom_pro)
print(resultado)


precio_cambiar =input("ingrese el nombre del producto al cual le quieres cambiar el precio: ").lower() 
nuevo_precio = input(f"ingrese el nuevo precio a cambiar precio {precio_cambiar}: \n")
