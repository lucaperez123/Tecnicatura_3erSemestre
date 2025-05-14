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
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = ('Carlos', 'Lara', 'clara@gmail.com') # es una tupla
            cursor.execute(sentencia,valores) # de esta manera ejecutamos la sentencia
            #conexion.commit() esto se utiliza para guardar cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')


except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
