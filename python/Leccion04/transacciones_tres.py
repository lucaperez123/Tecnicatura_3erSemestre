import psycopg2
import psycopg2 as Leccion04 # esto es para poder conectarnos a postgr

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
            sentencia = 'INSERT INTO persona(nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = ('alex', 'rojas', 'arojas@gmail.com')
            cursor.execute(sentencia, valores)

            sentencia = 'UPDATE persona SET nombre=%s , apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('Juan carlos', 'roldan', 'aroldan@gmail.com', 1)
            cursor.execute(sentencia,valores)

            conexion.commit() #Hacemos el commit manualmente , aqui se cierra la transaccion

except Exception as e:
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:
    conexion.close()

    print('Termina la transaccion')
