inventory = [
    {"producto":'mouse', "precio" : 20000, "cantidad" : 92},
    {"producto" : 'teclado', "precio" : 32000, "cantidad" : 32},
    {"producto" : 'cpu', "precio" : 290000, "cantidad" : 45}
]

#add products to inventory
def addproduct ():
            new_product = input("Ingrese el nombre del nuevo producto: \n")
            for i in inventory:
                if i['producto'] == new_product:
                    print(f"El producto {new_product} ya esta en el inventario.")
                    print(i)
                    return
            price = float(input(f"Ingrese el precio del producto {new_product}:\n"))
            if price < 0:
                print("Opcion invalida,ingrese una opcion valida")
                return
            quantify = int(input(f"Ingrese la cantidad del producto {new_product}:\n")) 
            new = {'producto':new_product,'precio':price,'cantidad':quantify}
            inventory.append(new)
            print("El producto fue agregado exitosamente.")
            

#view products in inventory
def consultpro ():
    consultproduct = input("Ingrese el producto que desea consultar: \n")

    for i in inventory:
        if i['producto'].lower() == consultproduct.lower():
            print(f"El producto {i['producto']} con precio {i['precio']} y cantidad {i['cantidad']} esta en el inventario.")#here shows the product with price and quantity
            break
    else:
            print(f"El producto {consultproduct} no esta en el inventario.")
            print()

#change price
def updateprice ():
    update_price = input("Cual es el producto al que le va a cambiar el precio:\n")
    for i in inventory:
        if i['producto'].lower() == update_price.lower():
            new_price = float(input(f"Ingrese el nuevo precio del producto {update_price}:\n"))
            if new_price < 0:
                print("Opcion invalida,ingrese un numero valido")
                return
            i['precio'] = new_price
            print("El precio ha sido cambiado exitosamente.")

#delete product
def removeproduct ():
    print(inventory)
    remove_product = input("Ingrese el producto que desea eliminar:\n")
    print()
    print(f"El producto {remove_product} esta en el inventario.")
    print()
    for i in inventory:
        if i['producto'].lower() == remove_product.lower():
            inventory.remove(i)
            print()
            print(f"El producto {remove_product} ha sido eliminado del inventario.")
            print()

main=int(input("""Desea ingresar al menu
    1.si
    2.no\n"""))


if main == 1:
    main = True
else:
    main = False

while main:
        
        print("1.Añadir productos al inventario")
        print("2.Consultar productos del inventario")
        print("3.Cambiar precio")
        print("4.Eliminar producto")
        print("5.Total inventario")
        print("6.Mostrar inventario")
        print("7.Salir\n")

        option = input("Ingrese una opcion.\n")

        match option:

            case'1':
                addproduct()

            case'2':
                consultpro()

            case'3':
                updateprice()

            case'4':
                removeproduct()
            
            case'5':
                for i in inventory:
                    print("PRODUCTO:", i["producto"])
                    print("CANTIDAD:", i["cantidad"])
                    print("PRECIO:", i["precio"])
                    result = (i["cantidad"]*i["precio"])
                    print(result)
                    print("#.#"*15)

            case'6':
                for i in inventory:
                    (print(f"Producto:{i['producto']}"))
                    print(f"Precio:{i['precio']}")
                    print(f"Cantidad:{i['cantidad']}")
                    print("*-*_"*15)

            case'7':
                print("Has seleccionado salir. Adios")
                break

            case _:
                print("Opcion invalida,intente de nuevo")            
