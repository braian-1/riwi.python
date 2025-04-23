Producto = input("ingrese el producto:")
precio = int(input("ingrese el precio:"))
cantidad = int(input("ingrese la cantidad:"))
descuento=print()

total = precio * cantidad

print(total)

cantidad = input("introduzca la cantidad total de la compra: ")

if total >= 350000:
    print("tienes un descuento del 10% ")
    
    descuento = total * 0.1
total_con_descuento= total-descuento
print(f"el total de la compra con descuento es: {total_con_descuento}")


print("no cumples para el descuento. ") 

print(f"el total de la compra es: {total}")











