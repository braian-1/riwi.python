import random

while True:
    moneda = random.randint(1, 2)
    if moneda == 1:
        print("CARA")
    else:
        print("CRUZ")
    jugar = input("Tirar de nuevo (t/s)")
    if jugar.lower() == 's':
        break
print("Gracias por jugar.")