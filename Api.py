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
        print(user_type)
        if user_type =="Old" or user_type=="old":
            user=request.form["Id"]
            password=request.form["password"]
            print(user,password)
            d='SELECT Name,Age,Fund_raised,Address,Contact,Review,Rating FROM elder_details WHERE Id'+'="'+user+'"AND Password'+' = "'+str(password)+'";'
            print(d)
            id="SELECT Taken_care_by FROM elder_details WHERE Id" + "="+user+";"
            cursor.execute(d)
            rows = list(cursor.fetchone())
            print(rows)
            cursor.execute(id)
            id=cursor.fetchone()
            print(id)
            for Id in id:
                if Id == 0 :
                    tcb = 'None'
                    rows.append(tcb)
                else:
                    Taken_care_by="SELECT youth_details.Name FROM elder_details INNER JOIN youth_details ON elder_details.Taken_care_by=youth_details.Id Where elder_details.Taken_care_by"+"="+str(Id)+";"
                    print(Taken_care_by)
                    cursor.execute(Taken_care_by)
                    Taken_care_by=list(cursor.fetchall())
                    print(Taken_care_by)
            #rows=rows.append(Taken_care_by)
            #if rows > 0 :
            #then return j
            #else return 0
                    for tcb in Taken_care_by:
                        rows.append(tcb)
            j=jsonify({"name":rows[0],"age":rows[1],"fund_raised":rows[2],"address":rows[3],"contact":rows[4],"review":rows[5],"rating":rows[6],"taken_care_by":rows[7]})
            print(rows)
            return(j)
        elif user_type=="Young" or user_type=="young":
            #young login
            print("youth login",user_type)
            user=request.form["Id"]
            password=request.form["password"]
            print(user,password)
            d='SELECT Name,Age,Address,Contact,Review,Rating FROM youth_details WHERE Id'+'="'+user+'"AND Password'+' = "'+str(password)+'";'
            print(d)
            cursor.execute(d)
            rows = list(cursor.fetchone())
            print(rows)
            id="SELECT Number_undertaken_elders FROM youth_details WHERE Id" + "="+user+";"
            cursor.execute(id)
            id=cursor.fetchone()
            print(id)
            for Id in id:
                if Id == 0 :
                    ute = 'None'
                    rows.append(ute)
                else:
                    undertaken_elders="SELECT elder_details.Name FROM youth_details INNER JOIN elder_details ON youth_details.Number_undertaken_elders=elder_details.Id Where youth_details.Number_undertaken_elders"+"="+str(Id)+";"
                    print(undertaken_elders)
                    cursor.execute(undertaken_elders)
                    undertaken_elders=list(cursor.fetchall())
                    print(undertaken_elders)
                    for ute in undertaken_elders:
                        rows.append(ute)
            j=jsonify({"name":rows[0],"age":rows[1],"Address":rows[2],"contact":rows[3],"review":rows[4],"rating":rows[5],"taking_care_of":rows[6]})
            print(rows)
            return(j)
    elif users=="Signup" or users=="signup":
        print(users)
        user_type=request.form["user_type"]
        if user_type =="Old" or user_type=="old":
            name=request.form["name"]
            age=request.form["age"]
            fund_raised=request.form["fund_raised"]
            password= request.form["password"]
            address=request.form["address"]
            contact_no=request.form["contact_no"]
            sql="INSERT INTO elder_details(Password,Name,Age,Fund_raised,Address,Contact) VALUES (%s,%s,%s,%s,%s,%s)"
            val=(str(password),str(name),age,fund_raised,address,contact_no)
            print(sql,val)
            cursor.execute(sql,val)
            connection.commit()
            id="SELECT Id FROM elder_details Where Contact"+"="+str(contact_no)+";"
            print(id)
            cursor.execute(id) 
            i=list(cursor.fetchone())
            i="Old_"+str(i[0])
            i=jsonify({"id":i})
            print(i)
            return(i)
        elif user_type=="Young" or user_type=="young":
            name=request.form["name"]
            age=request.form["age"]
            address=request.form["address"]
            password= request.form["password"]
            contact_no=request.form["contact_no"]
            sql="INSERT INTO youth_details(Password,Name,Age,Address,Contact) VALUES (%s,%s, %s,%s,%s)"
            val=(str(password),str(name),age,str(address),contact_no)
            cursor.execute(sql,val)
            connection.commit()
            id="SELECT Id FROM youth_details Where Contact"+"="+str(contact_no)+";"
            cursor.execute(id) 
            i=list(cursor.fetchone())
            i="Young_"+str(i[0])
            i=jsonify({"id":i})
            return(i)
        

if __name__ == "__main__":
    ank.run(debug=True,host='127.0.0.1', port=5000)