
archivo = open("prueba.txt", 'r', encoding="utf8") #Las letras son = 'r' , 'a' , 'w' , 'x'
print(archivo.read())
print(archivo.read(16))
print(archivo.read(10)) #Continuamos desde la linea anterior
print(archivo.readLine())
print(archivo.readLine())


#vamos a iterar el archivo , cada una de sus lineas
#for linea in archivo:
    #print(linea) iteramos todos los elementos del archivo
    #print(archivo.readlines()[11]) accedemos al archivo como si fuera una lista

#Anexamos informacion , copiamos a otro
archivo2 = open('Copia.txt', 'a' , encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('se ha terminado el proceso de leer y copiar arhcivos')