
archivo = open("prueba.txt", 'r', encoding="utf8") #Las letras son = 'r' , 'a' , 'w' , 'x'
print(archivo.read())
print(archivo.read(16))
print(archivo.read(10)) #Continuamos desde la linea anterior
print(archivo.readLine())
print(archivo.readLine())


#vamos a iterar el archivo , cada una de sus lineas
for linea in archivo:
    print(linea)
 