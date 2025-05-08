#para contar numeros impares y pares
numeros = list(range(1,72))
print(numeros)

cantidad_pares =len(list(filter(lambda n: n % 2 == 0,numeros)))
cantidad_impares =len(list(filter(lambda n: n % 2 != 0,numeros)))

print(f"cantidad de numeros pares:\n{cantidad_pares}")
print(f"cantidad de numeros impares:\n{cantidad_impares}")