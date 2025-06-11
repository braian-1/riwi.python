menu = int(input("""Desea ingresar al menu?
1.Si
2.No\n"""))
if menu == 1:
    menu = True
else:
    menu = False
while menu:
    print("option:")
    print("1 = Tabla de multiplicar")
    print("2 = Edad")
    print("3 = salir")

    opcion = input("elige una opcion: ")  
    

    if opcion == "1":
        
        
        num = int(input("has seleccionado mostrar la tabla de x numero:\n"))
        for i in range(1,21):
            print(f"{i} x {num} =",i*num)
            

    elif opcion == "2":
        edad = int(input("Ingrese edad: "))
        if edad >= 18:
            print("Eres mayor de edad")
        else:
            print("Eres menor de edad")
    elif opcion == "3":
        print("has seleccionado salir. ADIOS")
        break
    else:
        print("opcion invalida, intente de nuevo")

    menu = int(input("""Desea volver al menu?
    1.SI
    2.NO\n"""))
    if menu == 2:
        break
        
      
        

    