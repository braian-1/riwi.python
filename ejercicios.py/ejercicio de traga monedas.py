import random

def tragamonedas():
    emojis = ["\U0001F608","\U0001F603","\U0001F605"]
    input("")
    resultado = []

    for x in range(3):
        rueda = random.choice(emojis)
        resultado.append(rueda)
        print(f"{rueda}",end = " ", flush = True)
    if resultado[0] == resultado[1] == resultado[2]:
        print("\n¡JACKPOT!")
while True:
    tragamonedas()
