#le pregunta al usuario si quiere ingresar al menu principal
main = int(input("""DESEA INGRESAR AL MENU?
1.si
2.no\n"""))
if main == 1:
     main = True #si el usuario ingresa 1 el bucle se iniciara
else:
     main = False # si el usuario ingresa 2 no entrara al menu, o cualquier otro numero el menu no se iniciara
while main:
    print()
    print("1.Buscar producto y cambio de precio")
    print("2.Eliminar producto")
    print("3.Añadir producto")
    print("4.Calculo del inventario")
    print("5.Salir\n")

#le dice al usuario que eliga una opcion
    option = input ("ELIGE UNA OPCION: \n")

    inventory = {
            'computador': (950000, 7),
            'teclado': (75000, 17),
            'mouse' : (70000, 8),
            'usb':(50000, 20),
            'cables':(75000, 11)
    }
# este se ejecutara si el ususario elige el numero 1
    if option == "1":
            print()
            print("------------------------------------------------------------")
            print("--ESTAS EN LA OPCION DE BUSCAR PRODUCTO Y CAMBIO DE PRECIO--")
            print("------------------------------------------------------------")
            print()

            print(inventory)
            def buscar_producto(name):#verifica si el nombre del producto se encuentra en el inventario
                if name in inventory:
                    result = name
                    print(result)
                    #le pide al usuario ingrese un precio
                    price = int(input("dame el precio\n"))
                    #actualiza el precio del producto en el inventario, manteniendo la cantidad existente
                    inventory[nom_pro] = (price, inventory[nom_pro][1])
                    print(inventory)
                    return f"El producto {name} esta en la lista."
                else:
                    print(f"El producto {name} no se a encontrado en la lista. ")
                    return 
            nom_pro=input("ingrese el nombre del producto que desea buscar:\n ")
            buscar_producto(nom_pro)

# este se ejecutara si el ususario elige el numero 2
    elif option == "2":
            print()
            print("-----------------------------------------------")
            print("-----ESTAS EN LA OPCION ELIMINAR PRODUCTO------")
            print("-----------------------------------------------")
            print()
            print(inventory)
            #le pide al usuario que producto desea borrar del inventario
            product_delete = input("ingrese el nombre del producto que desea eliminar:\n ")

            if product_delete in inventory:
                del inventory[product_delete]
                print(f"El producto {product_delete} ha sido eliminado con exito del invetario.") #le dice al usuario que el producto ha sido eliminado
                print("\n el inventario de productos actualizado")
                print(inventory) 
            else:
                print(f"el producto{product_delete} no se ha encontrado.")
        
# este se ejecutara si el ususario elige el numero 3
    elif option == "3":
            print()
            print("-----------------------------------------------")
            print("------ESTAS EN LA OPCION AÑADIR PRODUCTO-------")
            print("-----------------------------------------------")
            print()
            while True:    
                new_product = input("ingrese el nombre del nuevo producto:\n")#aqui le permite al ususario agregar un producto 
                if new_product in inventory:
                    print(f"El producto {new_product} ya esta en el inventario.")
                    continue
                else:
                    try:
                        new_price_str = input(f"ingrese el precio de {new_product}: \n")#aqui le pide al usuario el precio del producto que ingreso
                        new_price = int(new_price_str)
                        if new_price < 0:
                            raise ValueError
                        #le pide al usuario que ingrese la cantidad del nuevo producto
                        product_quantity_str = input(f"ingresa la cantidad del nuevo producto:\n")#le pide al usuario ingresar la cantidad del producto añadido
                        product_quantity = int(product_quantity_str)
                        if product_quantity < 0:
                            raise ValueError
                        #añade el nuevo producto al inventario con precio y cantidad
                        inventory[new_product] =  new_price,product_quantity
                        print(f"El producto {new_product} con precio {new_price:.2f} y con cantidad {product_quantity:.2f} ha sido añadido al inventario")
                        print("\n El inventario se a actualizado.")
                        print(inventory)
                        break 
                    #si el ususario ingresa un valor no numerico para el precio y la cantidad
                    except ValueError:
                        print("El precio ingresado no es un numero valido. El producto no se ha podido añadir. ")
            

# este se ejecutara si el ususario elige el numero 4
    elif option == "4":
            print()
            print("-----------------------------------------------")
            print("---ESTAS EN LA OPCION CALCULO DE INVENTARIO----")
            print("-----------------------------------------------")
            print()
            #aqui calcula el valor del inventario multiplicando el precio por la cantidad y sumandolos
            inventory_calculation = (inventory["mouse"][0]*
                inventory["mouse"][1]+
                inventory["teclado"][0]*
                inventory["teclado"][1]+
                inventory["computador"][0]*
                inventory["computador"][1]+
                inventory["usb"][0]*
                inventory["usb"][1]+
                inventory["cables"][0]*
                inventory["cables"][1])
            #muestra el valor total del inventario
            print(f"El promedio total del inventario es:\n{inventory_calculation}")

# este se ejecutara si el ususario elige el numero 5
    elif option == "5":
        print("Has seleccionado salir. Adios")
        break
    else:
        print("opcion invalida, intente de nuevo")
        main = int(input("""Desea volver al menu?
        1.si
        2.no\n"""))
        if main == 2: #si el usuario ingresa 2 sale del sistema
            break
