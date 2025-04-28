promedio=int(input("ingrese una calificacion de 0 a 100: "))

if promedio > 70:
    print("has aprobado")
else:
    print("has reprobado")


Calificaciones = input("ingresa las calificaciones separada por comas: ")
notas = Calificaciones.split(',')
notas = [float(num)for num in notas]
resultado=sum(notas)

print(f"la suma de las calificaciones es: {resultado}")

resultado = float(input("ingresa el total de la suma: "))
cantidad_de_numeros=int(input("cuantos numeros sumaste: "))
promedio = resultado / cantidad_de_numeros

print(f"el promedio es: {promedio}")


lista = input("esta es la lista de calificaciones.")
print(Calificaciones)

valor=(input("ingresa un valor de las calificaciones ingresadas anteriormente:"))
nota = 95

mayores=[nota for nota in Calificaciones if valor > nota]
print(f"hay {len (mayores)} calificaciones mayores que {nota}.")




