inventary = [{'nombre':'Masa','cantidad':50},{'nombre':'Peperoni','cantidad': 50},{'nombre':'piña','cantidad':50},{'nombre':'Queso','cantidad':50},{'nombre':'Tocineta','cantidad':50},{'Carne':50}]

def addproduct():
    NewIngredient = input("ingrese el nombre del producto:\n")
    for i in inventary:
        if i['nombre'].lower() == NewIngredient.lower():
            print("El ingrediente ya esta en el inventario.")
            print(f"Nombre: {i['nombre']}")
            print(f"Cantidad: {i['cantidad']}")
            return
    quantify = input("Ingrese la cantidad disponible en el inventario: ")
    if quantify < 0:
        print("ingrese una opcion valida")
    IngredientNew = {'nombre':NewIngredient,'cantidad':quantify}
    inventary.append(IngredientNew)


def updateQuantify():
    nameQuantify = input("Ingrese el nombre del ingrediente al que le desea cambiar la cantidad: \n")
    for i in inventary:
        if i['cantidad'] == nameQuantify.lower():
            QuantifyNew = int(input(f"Ingrese la cantidad del ingrediente {nameQuantify}: \n"))
            if QuantifyNew < 0:
                print("Opcion invalida")
                return
            i['cantidad'] = QuantifyNew
            print("La cantidad ha sido cambiada.")
                    

def seeinventary():
    option = print("-----------INVENTARIO--------------")
    for i in inventary:
        print("-_-"*50)
        print(f"Nombre: {i['nombre']}")
        print(f"Cantidad: {i['cantidad']}")


def menuInventory():
    while True:
        option = input("""Ingrese una opcion:\n
1. Ingresar un producto al inventario
2. Modificar Producto
3. Eliminar producto del inventario
4. Mostrar inventario
5. Salir\n""")
        match option:
            case '1':
                addproduct()
            case '2':
                updateQuantify()
            case '4':
                seeinventary()
            case '5':
                break
            case _:
                print("Ingrese una opcion valida.")




while True:

    print("---------PIZZERIA-----------")
    optionMenu = input("""
1. Inventario
2. Menu
3. Pedidos
4. Salir\n
                       
Eliga una opcion: """)
    
    match optionMenu:
        case '1':
            menuInventory()
        
        case '4':
            break
        case _:
            print("Ingrese una opcion valida.")



    





