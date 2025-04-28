edad=int(input("ingrese su edad: "))

if 0 < edad  < 12:
    print("Eres un niño. ")
elif 12 <= edad <= 17:
    print("Eres un adolescente. ")
elif 18 <= edad <= 59:
    print("Eres un adulto. ")
elif edad >= 60:
    print("Eres un adulto mayor. ")
else: 
    print ("Tu edad no esta en el rango. ")
