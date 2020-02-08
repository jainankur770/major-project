from flask import Flask,request,redirect,jsonify
import json
import pymysql
import requests
import sys
from flask_cors import CORS,cross_origin

connection = pymysql.connect(host="localhost", user="root", password="", database="careall")
cursor = connection.cursor()

ank = Flask(__name__)
CORS(ank, support_credentials=True)

@ank.route("/",methods = ['GET','POST'])
@cross_origin(supports_credentials=True)
def index():
    users = request.get_json("query")
    users = users.values()
    for user in users:
        d="SELECT Name FROM elder_details WHERE Id"+"="+user+";"
        print(d)
        cursor.execute(d)
        rows = list(cursor.fetchone())
        for j in rows:
            j=jsonify(j)
            #j.headers["Access-Control-Allow-Origin"] = '*'
        return(j)

if __name__ == "__main__":
    ank.run(debug=True,host='127.0.0.1', port=5000)