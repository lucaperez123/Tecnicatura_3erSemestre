resultado = None

try:
    a= int(input("Digite el primer numero: "))
    b = int(input("Digite el segundo numero: "))
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Excepcion - ocurrio un error: {type(e)}')
else:
    print("No se arrojo ninguna excepcion")
finally: #Siempre se ejecuta
    print("Ejecucion de este bloque finally")



print(f'El resultado es : {resultado}')
print('SEGUIMOS...')