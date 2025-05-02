def cuadrado (x):
    return x ** 2

num = [1, 3, 5, 7, 9, 20, 78, 962, 674, 874, 32, 86, 54]
cuadrados = list(map(cuadrado, num))


print(num)
print(cuadrados)
