
#Aqui el usuario va poder ingresar el nombre del producto, el precio y la cantidad.

productos:str=input("ingrese el producto:")
precio = int(input("ingrese el precio:"))
cantidad = int(input("ingrese la cantidad del producto:"))
descuento=float()



total = precio * cantidad


print("El total de la compra es: ")
print(total)

if total > 250000:
#si el valor es mayor a 250000 aplica para un descuento del 10%
    print("tienes un descuento del 10% ")
    if total >= 250000 : descuento=(total * 0.1)
    total_con_descuento= total - descuento
    print("el total de la compra con descuento es: ")
    (input(total_con_descuento))
    print("precio con descuento: ", total_con_descuento)
#si el valor es menor o igual a 250000 no cumple para el descuento
else:
    print("no cumples para el descuento. ")

#Aqui el usuario va a ver le producto adquirido, el precio y la cantidad del producto que adquirio.
print("nombre del producto adquirido: ", productos)
print("valor del producto adquirido: ", precio)
print("cantidad del producto: ", cantidad)
print("precio final: ", total)
