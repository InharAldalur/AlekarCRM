from flask import Flask, request
from flask_mysqldb import MySQL
import json
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'alekar'

CORS(app)

mysql = MySQL(app)


@app.route('/')
def index():
    return 'Alekar'

@app.route('/addRepair', methods = ['POST'])
def addRepair():
    print('req',request.json)
    now = datetime.now()
    formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')
    matricula = request.json['matricula']
    marca = request.json['marca']
    modelo = request.json['modelo']
    nombre = request.json['nombre']
    reparaciones = request.json['reparaciones']
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO repairs (matricula,marca,modelo,nombre,reparaciones,fecha) VALUES (%s,%s,%s,%s,%s,%s)',(matricula,marca,modelo,nombre,reparaciones,formatted_date))
    mysql.connection.commit()
    print(request.json)



    return 'New repair'

@app.route('/repairs', methods = ['GET'])
def getRepairs():
    sql_select_Query = "select * from repairs"
    cur = mysql.connection.cursor()
    cur.execute(sql_select_Query)
    row_headers=[x[0] for x in cur.description]
    rv = cur.fetchall()
    repairs=[]
    for result in rv:
        repairs.append(dict(zip(row_headers,result)))
    return json.dumps(repairs)

@app.route('/delete/<id>', methods = ['GET'])
def deleteRepair(id):
    print(id)
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM repairs WHERE id={0}'.format(id))
    mysql.connection.commit()
    return 'deleted'

    print(request.json)
    return 'received'

@app.route('/repairs/<matricula>', methods = ['GET'])
def getRepair(matricula):
    print(matricula)
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM repairs WHERE matricula = %s',(matricula,))
    rv = cur.fetchall()
    print(rv)
    repair=[]
    row_headers=[x[0] for x in cur.description]
    for result in rv:
        repair.append(dict(zip(row_headers,result)))
    return json.dumps(repair)


@app.route('/edit/<id>', methods = ['PUT'])
def editRepair(id):
    cur = mysql.connection.cursor
    cur.execute('')
    return 'received'

if __name__ == '__main__':
    app.run(port = 8000, debug=True)