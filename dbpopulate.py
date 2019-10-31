import mysql.connector as mysql
import requests
import json

# connecting to the database using 'connect()' method
# it takes 3 required parameters 'host', 'user', 'passwd'

db = mysql.connect(
    host="localhost",
    user="root",
    passwd="root",
    database="dbsapp"
)

# print(db)  # it will print a connection object if everything is fine

base_url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com"
headers = {"identity": "Group12",
           "token": "80adc5be-6f4c-43db-83f2-829a7abfb43b"}


def customerName(input):
    users = ["marytan", "limzeyang"]
    return users[int(input)-1]


def populateCustDetails():
    custIDs = ["1", "2"]
    for id in custIDs:
        response = requests.get(
            base_url+"/customers/"+id+"/details", headers=headers)
        data = response.json()
        cursor = db.cursor()
        # defining the Query
        query = "INSERT INTO Customer (username, customerid, firstname, lastname, lastlogin) VALUES (%s, %s, %s, %s, %s)"
        # storing values in a variable
        values = (customerName(id), id,
                  data['firstName'], data['lastName'], data['lastLogIn'])
        cursor.execute(query, values)
        db.commit()
        print(cursor.rowcount, "record inserted")
        # print(data)


def populateAccounts():
    custIDs = ["1", "2"]
    for id in custIDs:
        response = requests.get(
            base_url+"/accounts/deposit/"+id, headers=headers)
        data = response.json()
        # print(data)
        cursor = db.cursor()
        # defining the Query
        query = "INSERT INTO AccDeposit (accountId, type, displayName, accountNumber) VALUES (%s, %s, %s, %s)"
        # storing values in a variable
        values = (data['accountId'],
                  data['type'], data['displayName'], data['accountNumber'])
        cursor.execute(query, values)
        db.commit()
        print(cursor.rowcount, "record inserted")
        # print(data)

    for id in custIDs:
        response = requests.get(
            base_url+"/accounts/credits/"+id, headers=headers)
        data = response.json()
        cursor = db.cursor()
        # defining the Query
        query = "INSERT INTO AccCredit (accountId, displayName, cardNumber, currency, outstandingAmount, datePayable) VALUES (%s, %s, %s, %s, %s, %s)"
        # storing values in a variable
        values = (data['accountId'], data['displayName'], data['cardNumber'],
                  data['currency'], data['outstandingAmount'], data['datePayable'])
        cursor.execute(query, values)
        db.commit()
        print(cursor.rowcount, "record inserted")
        # print(data)


if __name__ == "__main__":
    populateAccounts()