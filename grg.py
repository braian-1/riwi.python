producto:str = input("ingrese el producto:")
precio = int(input("ingrese el precio:"))
cantidad_producto = int(input("ingrese la cantidad del producto:"))
descuento=float()

total = precio * cantidad_producto

print(total)

cantidad_producto = input("introduzca la cantidad total de la compra: ")

if total >= 350000:
    print("tienes un descuento del 10% ")
    if total >= 350000 : descuento=(total * 0.1)
    total_con_descuento= total - descuento
    print("el total de la compra con descuento es: ")
    (input(total_con_descuento))
    input("el producto adquirido es: ")
    print(producto)
    input("el precio del producto por unidad es: ")
    print(precio)
    input("la cantidad adquirida es: ")
    print(cantidad_producto)
    input("el total de lo comprado sin descuento es: ")
    print(total)
    input("el total de lo adquirido con descuento es: ")
    print(total_con_descuento)  
    


if total <= 350000:print("no cumples para el descuento. ")
else:input(total)
(input("el producto adquirido es: "))
print(producto)
input("el precio del producto por unidad es: ")
print(precio)
input("la cantidad adquirida es: ")
print(cantidad_producto)
input("el total de lo comprado sin descuento es: ")
print(total)




