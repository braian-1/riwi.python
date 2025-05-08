users = [
{
    "nombre" : "acr",
    "apellido" : "de",
    "edad" : 20, 
    "telefono" : 39212373,
    "cc" : 1236 
},
{
    "nombre" : "mvrr",
    "apellido" : "pocrrc",
    "edad" : 50, 
    "telefono" : 780651,
    "cc" : 657
},

]


new_users = [

{
    "nombre" : "vovr",
    "apellido" : "vrrsd",
    "edad" : 40, 
    "telefono" : 2504966,
    "cc" : 4569
}
]
#para agregar a un dicci
users.append(new_users)
print(users)


#seria para llamar un diccionario,por el nombre
ages = []
for user in users:
    edad = user["edad"]
    ages.append(edad)
    break
print(ages)


#para cambio en el diccio
for user in users:
    if user ["cc"] == 657:
        user["edad"] = 20
        break
print(users)

#este es para eliminar del diccionario
for user in users:
    if user["cc"] == 657:
        users.remove(user)
        break
print(users)






