import psycopg2
import psycopg2 # esto es para poder conectarnos a postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
#uso de with y psycopg2
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' #placeholder
            id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) # de esta manera ejecutamos la sentencia
            registros = cursor.fetchone() #Recuperamos todos los registros que seran una lista
            print(registros)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()


