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
    users = request.form["query"]
    print(users)
    if users=="Login" or users=="login":
        user_type=request.form["user_type"]
        if user_type =="Old" or "old":
            print(user_type)
            user=request.form["Id"]
            print(user)
            d="SELECT Name,Age,Fund_raised,Contact,Review,Rating FROM elder_details WHERE Id"+"="+user+";"
            id="SELECT Taken_care_by FROM elder_details WHERE Id" + "="+user+";"
            cursor.execute(d)
            rows = list(cursor.fetchone())
            print(rows)
            cursor.execute(id)
            id=cursor.fetchone()
            print(id)
            for Id in id:
                Taken_care_by="SELECT youth_details.Name FROM elder_details INNER JOIN youth_details ON elder_details.Taken_care_by=youth_details.Id Where elder_details.Taken_care_by"+"="+str(Id)+";"
                print(Taken_care_by)
                cursor.execute(Taken_care_by)
                Taken_care_by=cursor.fetchone()
                print(Taken_care_by)
            #rows=rows.append(Taken_care_by)
            #if rows > 0 :
            #then return j
            #else return 0
            rows.append(Taken_care_by)

            j=jsonify({"name":rows[0],"age":rows[1],"fund_raised":rows[2],"contact":rows[3],"review":rows[4],"rating":rows[5],"taken_care_by":rows[6]})
            print(rows)
            return(j)
        elif user_type=="Young" or user_type=="young":
            #young login
            print("to be made")
    elif users=="Signup" or users=="signup":
        print(users)
        user_type=request.args.get("user_type")
        if user_type =="Old" or user_type=="old":
            name=request.args.get("name")
            age=request.args.get("age")
            fund_raised=request.args.get("fund_raised")
            password= request.args.get("password")
            contact_no=request.args.get("contact_no")
            sql="INSERT INTO elder_details(Password,Name,Age,Fund_raised,Contact) VALUES (%s,%s, %s,%s,%s)"
            val=(str(password),str(name),age,fund_raised,contact_no)
            print(sql,val)
            cursor.execute(sql,val)
            connection.commit()
            id="SELECT Id FROM elder_details Where Contact"+"="+str(contact_no)+";"
            print(id)
            cursor.execute(id) 
            i=list(cursor.fetchone())
            i="Old_"+str(i[0])
            i=jsonify(i)
            print(i)
            return(i)
        elif user_type=="Young" or user_type=="young":
            name=request.args.get("name")
            age=request.args.get("age")
            address=request.args.get("address")
            password= request.args.get("password")
            contact_no=request.args.get("contact_no")
            sql="INSERT INTO youth_details(Password,Name,Age,Address,Contact) VALUES (%s,%s, %s,%s,%s)"
            val=(str(password),str(name),age,str(address),contact_no)
            cursor.execute(sql,val)
            connection.commit()
            id="SELECT Id FROM youth_details Where Contact"+"="+str(contact_no)+";"
            cursor.execute(id) 
            i=list(cursor.fetchone())
            i="Young_"+str(i[0])
            i=jsonify(i)
            return(i)
        

if __name__ == "__main__":
    ank.run(debug=True,host='127.0.0.1', port=5000)