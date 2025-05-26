import random 
numero_secreto=random.randint(1, 10)
numero_de_intentos = 0

while True:
    numero = input("ingrese numero: ")
    if int(numero) == numero_secreto:
        print(f"adivinaste el numero en {numero_de_intentos} intentos")
        break
    else:
        ("no adivinaste el numero")
        numero_de_intentos+=1
