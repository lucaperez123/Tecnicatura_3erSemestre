# Declaramos una variable

try:

    archivo = open('prueba.txt', 'w') # La W es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de achivos, ahora en txt. ')
    archivo.write('Con esto finalizamos')
except Exception as e:
    print(e)
finally: # Siempre se ejecuta    
    archivo.close() #Con esto se debe cerrar el archivo


