import psycopg2
import psycopg2 as Leccion04 # esto es para poder conectarnos a postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
#uso de with y psycopg2
try:
    conexion.autocommit = False #esto directamente no se hace, inicia la transaccion
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email)VALUES (%s, %s, %s)'
    valores = ('jorge', 'Prol', 'jprol@gmail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s , apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan carlos', 'Perez', 'perezj@gmail.com', 1)
    cursor.execute(sentencia,valores)

    conexion.commit() #Hacemos el commit manualmente , aqui se cierra la transaccion
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:
    conexion.close()