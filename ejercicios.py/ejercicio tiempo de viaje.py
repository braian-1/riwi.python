def tiempo_viaje():
    distancia = int(input("Escriba la distancia\n"))
    velocidad = int(input("Esciba una velocidad\n"))

    return distancia / velocidad

resultado = tiempo_viaje()
print(resultado, "Horas")