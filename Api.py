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
    users = list(users.values())
    if users[0]=="Login":
        d="SELECT Name,Age,Fund_raised,Contact,Review,Rating FROM elder_details WHERE Id"+"="+users[1]+"AND Password"+"="+users[2]+";"
        cursor.execute(d)
        rows = list(cursor.fetchone())
        for j in rows:
            j=jsonify(j)
        return(j)

if __name__ == "__main__":
    ank.run(debug=True,host='127.0.0.1', port=5000)