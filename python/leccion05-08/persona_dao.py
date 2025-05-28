class PersonaDAO:
    '''
    dao significa: data access object
    Crud significa:
                    create -> insertar
                    Read ->Seleccionar
                    update-> actualizar
                    Delete -> Eliminar
    '''

    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSETAR = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s , &s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s , apelllido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM perosna WHERE id_persona=%s'