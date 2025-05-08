option = input ("""INGRESE UNA OPCION:
1.REVISION DE UNA NOTA
2.PROMEDIO
3.VALIDAR NOTA MAYOR
4.VERIFICAR Y CONTEO\n
""")

if int(option) == 1:

    nota = int(input("INGRESE UNA NOTA: "))
    if nota >= 70:
        print("GANO LA NOTA")
    else:
        print("PERDIO LA NOTA")

elif int(option) == 2:
    lista = []
    sumador = 0
    promedio = 0
    cantNote = input("INGRESE LA CANTIDAD DE NOTAS: ")
    for i in range(1,int(cantNote)+1):
        nota = input(f"INGRESE UNA NOTA {i}:")
        lista.insert(i,nota)
        sumador+=int(nota)
        
    promedio = sumador / int(cantNote)
    print("EL PROMEDIO DE LAS NOTAS ES: ",promedio)
    print(f"LAS NOTAS SON: {lista}")
    
elif int(option) == 3:

    
    notas = (print("INGRESE LAS NOTAS: "))
    nota1=int(input("INGRESE LA PRIMERA NOTA: "))
    nota2=int(input("INGRESE LA SEGUNDA NOTA: "))
    nota3=int(input("INGRESA LA TERCERA NOTA: "))                
    numero_para_comparar = int(input(" INGRESE VALOR A COMPARAR: "))
    
    contador = 0 
    notas = [nota1, nota2, nota3]
    print(f"COMPARANDO CON: {numero_para_comparar}")

    for nota in notas:
        if nota > numero_para_comparar:
            contador += 1
    print(f"LA CANTIDAD DE NOTAS MAYORES QUE {numero_para_comparar}: {contador}")



elif int(option) == 4:
    acumulador2 = 0

    nota = input("INGRESE LAS NOTAS SEPARADAS POR COMAS: ").split(",")
    notas = list(map(int, nota))
    for i in notas:
        acumulador2 += i
        promedio = acumulador2/len(notas)
    print(f"LAS NOTAS SON: {notas}")
    print("EL PROMEDIO ES: ", promedio)