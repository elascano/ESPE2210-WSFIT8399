from flask import Flask, render_template, request

import cx_Oracle

app = Flask(__name__)

# Ruta de la página de inicio
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para procesar el formulario de inicio de sesión
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    # Combinar el nombre de usuario y la contraseña en la cadena de conexión
    con_string = username + '/' + password + '@localhost:1521/DBDELIN'
    try:
        # Establecer una conexión con Oracle
        connection = cx_Oracle.connect(con_string)
        cursor = connection.cursor()
        
        # Ejecutar una consulta y obtener los resultados
        query = 'SELECT var_coor_latitud, var_coor_longitud FROM tb_coordenada'
        cursor.execute(query)
        rows = cursor.fetchall()
        
        # Cerrar la conexión y mostrar los resultados al usuario
        cursor.close()
        connection.close()
        return render_template('menu.html', rows=rows)
    
    except cx_Oracle.Error as error:
        return 'Error connecting to database: {}'.format(error)

#______________________________________________________________________________________________________________________________________________
# Ruta para mostrar el formulario de consulta
@app.route('/ejemplo')
def ejemplo():
    # Lógica de la vista
    return render_template('ejemplo.html')

# Ruta para procesar la consulta de la base de datos
@app.route('/consultar_db', methods=['POST'])
def consultar_db():
    username = request.form['username']
    password = request.form['password']
    consulta = request.form['consulta']
    
    # Combinar el nombre de usuario y la contraseña en la cadena de conexión
    con_string = username + '/' + password + '@localhost:1521/DBDELIN'
    try:
        # Establecer una conexión con Oracle
        connection = cx_Oracle.connect(con_string)
        cursor = connection.cursor()
        
        # Ejecutar la consulta y obtener los resultados
        cursor.execute(consulta)
        rows = cursor.fetchall()
        
        # Cerrar la conexión y mostrar los resultados al usuario
        cursor.close()
        connection.close()
        return render_template('resultados.html', rows=rows)
    
    except cx_Oracle.Error as error:
        return 'Error connecting to database: {}'.format(error)
    

@app.route('/contar_upc', methods=['POST'])
def contar_upc():
    # Obtener los parámetros de la solicitud POST
    nombre_ciudad = request.form['nombre_ciudad']
    nombre_barrio = request.form['nombre_barrio']

    # Crear la cadena de conexión a Oracle
    con_string = 'Nodelin/Delin1234@localhost:1521/DBDELIN'

    # Conectarse a la base de datos Oracle
    connection = cx_Oracle.connect(con_string)

    # Crear un cursor para ejecutar la función
    cursor = connection.cursor()

    # Ejecutar la función y obtener los resultados
    resultado = cursor.callfunc('fn_contar_upc', cx_Oracle.NUMBER, [nombre_ciudad, nombre_barrio])

    # Cerrar el cursor y la conexión a la base de datos
    cursor.close()
    connection.close()

    # Mostrar los resultados en el archivo HTML "funci.html"
    return render_template('funci.html', resultado=resultado)


@app.route('/formulario_contar_upc')
def formulario_contar_upc():
    # Mostrar el formulario para ingresar los parámetros de la función
    return render_template('formulario_contar_upc.html')

@app.route('/inicio')
def inicio():
    # Establecer una conexión con Oracle
    con_string = 'Nodelin/Delin1234@localhost:1521/DBDELIN'
    try:
        connection = cx_Oracle.connect(con_string)
        cursor = connection.cursor()

        # Ejecutar una consulta y obtener los resultados
        query = 'SELECT var_coor_latitud, var_coor_longitud FROM tb_coordenada'
        cursor.execute(query)
        rows = cursor.fetchall()

        # Cerrar la conexión y mostrar los resultados al usuario
        cursor.close()
        connection.close()
        return render_template('menu.html', rows=rows)
    
    except cx_Oracle.Error as error:
        # Mostrar un mensaje de error al usuario
        return render_template('error.html', error=error)


#_________________________________________________________________________________________________________________________

@app.route('/contar_pandillas', methods=['POST'])
def contar_pandillas():
    # Obtener los parámetros de la solicitud POST
    nombre_barrio = request.form['nombre_barrio']

    # Crear la cadena de conexión a Oracle
    con_string = 'Nodelin/Delin1234@localhost:1521/DBDELIN'

    # Conectarse a la base de datos Oracle
    connection = cx_Oracle.connect(con_string)

    # Crear un cursor para ejecutar la función
    cursor = connection.cursor()

    # Ejecutar la función y obtener los resultados
    resultado = cursor.callfunc('fn_contar_pandillas', cx_Oracle.NUMBER, [nombre_barrio])

    # Cerrar el cursor y la conexión a la base de datos
    cursor.close()
    connection.close()

    # Mostrar los resultados en el archivo HTML "funci.html"
    return render_template('funci2.html', resultado=resultado)

@app.route('/formulario_contar_pandillas')
def formulario_contar_pandillas():
    return render_template('formulario_contar_pandillas.html')


#_________________________________________________________________________________________________________


@app.route('/sobreNosotros')
def sobreNosotros():
    return render_template('sobrenos.html')


if __name__ == '__main__':
    app.run(debug=True)