#lista con funcion lambda para convertir numeros a numeros cubicos

numeros = list(range(1,11))

cubicos = list(map(lambda n: n ** 2,numeros))
print(cubicos)