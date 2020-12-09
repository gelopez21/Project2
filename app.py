import flask
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,)
import bson
from bson.json_util import dumps

# from flask import Flask, render_template, jsonify, redirect
import pymongo
from flask_pymongo import PyMongo

app = Flask(__name__)

# db = googleData_db
# collection = db.google_collection
client = pymongo.MongoClient()
mongo = PyMongo(app, uri="mongodb://gelopez21:Hershey*963.@localhost:27017/googleData_db?ssl=true&authSource=admin&replicaSet=atlas-96tmk6-shard-0")


@app.route("/")
def home():
    google_collection = mongo.db.google_collection.find_one()
    return render_template("index.html", google_collection=google_collection)

# @app.route('/scrape')
# def scrape():
#     mars_results = ??.scrape()
#     mars_collection = mongo.db.mars_collection
    
#     mars_collection.update({},mars_results, upsert=True)
#     return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)