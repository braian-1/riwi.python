
productos:str= input("ingrese el producto:")
precio = int(input("ingrese el precio:"))
cantidad = int(input("ingrese la cantidad del producto:"))
descuento=float()



total = precio * cantidad


print("El total de la compra es: ")
print(total)

if total >= 250000:
    print("tienes un descuento del 10% ")
    if total >= 250000 : descuento=(total * 0.1)
    total_con_descuento= total - descuento
    print("el total de la compra con descuento es: ")
    (input(total_con_descuento))
    print("precio con descuento: ", total_con_descuento)
else:
    print("no cumples para el descuento. ")


print("nombre del producto: ", productos)
print("valor del producto: ", precio)
print("cantidad del producto: ", cantidad)
print("precio final: ", total)




