# Declaramos una variable

try:
    archivo = open('prueba.txt', 'w', encoding='utf8' ) # La W es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de achivos, ahora en txt. \n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción y producción\n')
    archivo.write('Las letras son =  r , a , W , x')
    archivo.write('\n t esta es para texto o text, \tb archivos binarios, \n w+ lee y escribe,son iguales r+ \n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura')
    archivo.write('Con esto finalizamos')
except Exception as e:
    print(e)
finally: # Siempre se ejecuta    
    archivo.close() #Con esto se debe cerrar el archivo
# archivo.write('Todo quedo perfecto') este es un error



