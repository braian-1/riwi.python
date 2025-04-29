
option = input ("""Ingrese una opcion:
1.Revision de una nota
2.Promedio
3.Validar nota mayor
4.Verificar y conteo\n
""")

if int(option) == 1:

    nota = int(input("Ingrese una nota: "))
    if nota > 70:
        print("Gano la nota")
    else:
        print("Perdio la nota")

elif int(option) == 2:
    lista = []
    sumador = 0
    promedio = 0
    cantNote = input("Ingrese la cantidad de notas: ")
    for i in range(1,int(cantNote)+1):
        nota = input(f"Ingrese una nota {i}:")
        lista.insert(i,nota)
        sumador+=int(nota)
        
    promedio = sumador / int(cantNote)
    print("El promedio de las notas es: ",promedio)
    print(f"Las notas son {lista}")
    
elif int(option) == 3:

    
    notas = (print("ingresa las notas: "))
    nota1=int(input("ingrese la primera nota: "))
    nota2=int(input("ingrese la segunda nota: "))
    nota3=int(input("ingrese la tercer nota: "))                
    numero_para_comparar = int(input(" ingrese valor a comparar: "))
    
    contador = 0 
    notas = [nota1, nota2, nota3]
    print(f"comparando con: {numero_para_comparar}")

    for nota in notas:
        if nota > numero_para_comparar:
            contador += 1
    print(f"La cantidad de notas mayores que {numero_para_comparar}: {contador}")



elif int(option) == 4:
    acumulador2 = 0

    nota = input("Ingrese las notas separadas por coma: ").split(",")
    notas = list(map(int, nota))
    for i in notas:
        acumulador2 += i
        promedio = acumulador2/len(notas)
    print(f"Las notas son: {notas}")
    print("El promedio es: ", promedio)