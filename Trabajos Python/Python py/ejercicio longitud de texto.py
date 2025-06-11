texto=input("ingresa el texto: ")

def acortar_texto( texto, max_longitud=10):
    if len(texto) < max_longitud:
        return texto
    else:
        return texto[:max_longitud - 3]+"..."

print(acortar_texto(texto))