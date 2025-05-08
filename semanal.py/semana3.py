menu = int(input("""DESEA INGRESAR AL MENU?
1.si
2.no\n"""))
if menu == 1:
     menu = True
else:
     menu = False
while menu:
    print()
    print("1.Buscar producto y cambio de precio")
    print("2.Eliminar producto")
    print("3.Añadir producto")
    print("4.Calculo del inventario")
    print("5.Salir\n")
    
    opcion = input ("ELIGE UNA OPCION: \n")

    inventario = {
            'computador': (950000, 7),
            'teclado': (75000, 17),
            'mouse' : (70000, 8),
            'usb':(50000, 20),
            'cables':(75000, 11)
    }
    
    if opcion == "1":
            print()
            print("------------------------------------------------------------")
            print("--ESTAS EN LA OPCION DE BUSCAR PRODUCTO Y CAMBIO DE PRECIO--")
            print("------------------------------------------------------------")
            print()

            print(inventario)
            def buscar_producto(nombre):
                if nombre in inventario:
                    resultado = nombre
                    print(resultado)

                    precio = int(input("dame el precio\n"))
                    inventario[nom_pro] = (precio, inventario[nom_pro][1])
                    print(inventario)
                    return f"El producto {nombre} esta en la lista."
                else:
                    print(f"El producto {nombre} no se encontrado en la lista. ")
                    return 
            nom_pro=input("ingrese el nombre del producto que desea buscar:\n ")
            buscar_producto(nom_pro)


    elif opcion == "2":
            print()
            print("-----------------------------------------------")
            print("-----ESTAS EN LA OPCION ELIMINAR PRODUCTO------")
            print("-----------------------------------------------")
            print()
            print(inventario)

            producto_eliminar = input("ingrese el nombre del producto que desea eliminar:\n ")

            if producto_eliminar in inventario:
                del inventario[producto_eliminar]
                print(f"El producto {producto_eliminar} ha sido eliminado con exito del invetario.")
                print("\n el inventario de productos actualizado")
                print(inventario) 
            else:
                print(f"el producto{producto_eliminar} no se ha encontrado.")
        

    elif opcion == "3":
            print()
            print("-----------------------------------------------")
            print("------ESTAS EN LA OPCION AÑADIR PRODUCTO-------")
            print("-----------------------------------------------")
            print()
            nuevo_producto = input("ingrese el nombre del nuevo producto:\n")
            try:
                nuevo_precio_str = input(f"ingrese el precio de {nuevo_producto}: \n")
                nuevo_precio = int(nuevo_precio_str)
                if nuevo_precio < 0:
                     raise ValueError
                cantidad_producto_str = input(f"ingresa la cantidad del nuevo producto:\n")
                cantidad_producto = int(cantidad_producto_str)
                if cantidad_producto < 0:
                     raise ValueError
                inventario[nuevo_producto] =  nuevo_precio,cantidad_producto
                print(f"El producto {nuevo_producto} con precio {nuevo_precio:.2f} y con cantidad {cantidad_producto:.2f} ha sido añadido al inventario")
                print("\n El inventario se a actualizado.")
                print(inventario) 
            except ValueError:
                print("El precio ingresado no es un numero valido. El producto no se ha podido añadir. ")
            


    elif opcion == "4":
            print()
            print("-----------------------------------------------")
            print("---ESTAS EN LA OPCION CALCULO DE INVENTARIO----")
            print("-----------------------------------------------")
            print()
            calculo_inventario = (inventario["mouse"][0]*
                inventario["mouse"][1]+
                inventario["teclado"][0]*
                inventario["teclado"][1]+
                inventario["computador"][0]*
                inventario["computador"][1]+
                inventario["usb"][0]*
                inventario["usb"][1]+
                inventario["cables"][0]*
                inventario["cables"][1])
            print(f"El promedio total del inventario es:\n{calculo_inventario}")

    elif opcion == "5":
        print("Has seleccionado salir. Adios")
        break
    else:
        print("opcion invalida, intente de nuevo")
        menu = int(input("""Desea volver al menu?
        1.si
        2.no\n"""))
        if menu == 2:
            break