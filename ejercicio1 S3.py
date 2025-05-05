CantidadEstudiantes = input("INGRESE LA CANTIDAD DE ESTUDIANTES: ")
for i in range(1,int(CantidadEstudiantes)+1):
    estudiantes = input(f"el nombre del estuadiante {i}:")
    for j in range (3):
        notas = int(input("ingrese tres notas de 0 a 5:\n"))

def datos(estudiantes, i):
            nombre = estudiantes
            notas = i
            return nombre, notas 

estudiantes, i = datos (estudiantes, i)
print(estudiantes)
print(notas)

