inventory = [
        {"TITULO":'Harry Potter', "PRECIO":90000, "CANTIDAD":150},
        {"TITULO":'Crimen y castigo', "PRECIO":60000, "CANTIDAD":90},
        {"TITULO": "La bella", "PRECIO":100000, "CANTIDAD":80},
        {"TITULO": "Los simpson", "PRECIO":80000, "CANTIDAD":87},
        {"TITULO": "Perros", "PRECIO":150000, "CANTIDAD":99}

    ]
def addBook ():
    new_book = input("ingrese el nombre del nuevo libro: \n")
    
    for i in inventory:
        if i['TITULO'].lower() == new_book.lower():
            print(f"El libro {new_book} ya esta en el inventario.")
            print(i)
            return 
    
    precio = float(input("Ingrese el precio: "))
    cantidad = int (input("Ingrese la cantidad:"))
    new ={'TITULO':new_book,'PRECIO':precio,'CANTIDAD':cantidad}
    inventory.append(new)
    print("El libro fue agregado exitosamente.")


def consultbook ():
    consult_book = input("Cual es el libro que desea consultar:\n").lower()

    for i in inventory:
        if i['TITULO'].lower() == consult_book.lower():
            print(f"El libro {i['TITULO']} esta en el inventario.")
            break
    else:
            print(f"el libro {consult_book} no esta en el inventario")


def updateprice():
    update_price = input("cual es el libro al que le desea cambiar el precio:\n")
    for i in inventory:
        if i['TITULO'].lower() == update_price.lower():
            nuevoPrecio = float (input("Ingrese el nuevo precio:"))
            i['PRECIO'] = nuevoPrecio  
            print("El precio fue cambiado")


def removeBook():
    print(inventory)
    book_delete = input("ingrese el libro que desea borrar:\n").lower()
    for i in inventory:
        if i['TITULO'].lower()==book_delete.lower():
            inventory.remove(i)
            print(f"El libro {i['TITULO']} fue eliminado.")
            print()
    for i in inventory:
                print()
                print(f"Titulo: {i['TITULO']}")
                print(f"Precio: {i['PRECIO']}")
                print(f"Cantidad: {i['CANTIDAD']}")
                print("--"*15)   


main = int(input("""Desea ingresar al menu
    1.si
    2.no\n"""))
if main == 1:
    main = True
else:
    main=False

while main:
    print()
    print("1.Añadir libros al inventario")
    print("2.Consultar libro en el inventario")
    print("3.Actualizar precios de libros")
    print("4.Eliminar libros")
    print("5.Mostrar libros")
    print("6.Salir\n")
    print()
    print()
    option = input("ingrese una opcion: ")
    print()
    match option:
         
        case '1':
            addBook()
        case '2':
            consultbook()
        case '3':
            updateprice()
           
        case '4':
            removeBook()
        
        case '5':
            for i in inventory:
                print(f"Titulo: {i['TITULO']}")
                print(f"Precio: {i['PRECIO']}")
                print(f"Cantidad: {i['CANTIDAD']}")
                print("--"*15)
        
        case '6':
            print("Has seleccionado salir. Adios")
            break
         
        case _:
            print("Ingrese una opcion valida.")  
    

           
                
                        
                    

                    
                    
                            
                     





    