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
    users = request.args.get("query")
    print(users)
    if users=="Login":
        user=request.args.get("Id")
        print(user)
        d="SELECT Name,Age,Fund_raised,Contact,Review,Rating FROM elder_details WHERE Id"+"="+user+";"
        id="SELECT Taken_care_by FROM elder_details WHERE Id" + "="+user+";"
        cursor.execute(d)
        rows = list(cursor.fetchone())
        cursor.execute(id)
        id=cursor.fetchone()
        print(id)
        for Id in id:
            Taken_care_by="SELECT youth_details.Name FROM elder_details INNER JOIN youth_details ON elder_details.Taken_care_by=youth_details.Id Where elder_details.Taken_care_by"+"="+str(Id)+";"
            print(Taken_care_by)
            cursor.execute(Taken_care_by)
            Taken_care_by=cursor.fetchone()
        #rows=rows.append(Taken_care_by)
        j=jsonify(rows,Taken_care_by)
        return(j)

if __name__ == "__main__":
    ank.run(debug=True,host='127.0.0.1', port=5000)