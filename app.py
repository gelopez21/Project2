import flask
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,)
import bson
from bson.json_util import dumps

import pymongo
from flask_pymongo import PyMongo

app = Flask(__name__)


client = pymongo.MongoClient()
mongo = PyMongo(app, uri="mongodb://gelopez21:Hershey*963.@localhost:27017/googleData_db?ssl=true&authSource=admin&replicaSet=atlas-96tmk6-shard-0")


@app.route("/")
def home():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)