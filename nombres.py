nombre=input("ingresa tu nombre: ")
segundo_nombre=input("ingresa tu segundo nombre: ")
apellido=input("ingresa tu apellido: ")

if segundo_nombre:
    nombre_completo = f"{nombre} {segundo_nombre} {apellido}"
else:
    nombre_completo = f"{nombre} {apellido}"


print(nombre_completo)
