class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
    

    def __init__(self):
        print('OBTENEMOS EL RECURSO'.center(50, '-'))
        self.nombre = open(self.nombre, 'r' , encoding='utf8') #Encapsulamos el codigo dentro del metodo
        return self.nombre
    

    def __init__(self, tipo_exception, valor_exception, traza_error):
        print('CERRAMOS EL RECURSO'.center(50, '-'))
        if self.nombre:
            self.nombre.close() #cerramos el archivo