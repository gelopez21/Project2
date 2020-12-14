from flask import Flask, render_template, jsonify
import psycopg2
#from config import db_password

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# setup postgres connection
conn = psycopg2.connect(f"dbname='gtdata_db' user='postgres' host='localhost' password='Hershey*963.'")

#set up cursor

cur = conn.cursor()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/data")
def data():
    cur.execute("""SELECT * FROM gtrends_table""")
    rows = cur.fetchall()

    all_week = []
    for row in rows:
        
        gtrends_dict = {"week": row[0],
                        "weather": row[1],
                        "coronavirus": row[2],
                        "news": row[3],
                        "music": row[4],
                        "sports": row[5]}
        all_week.append(gtrends_dict)

    return jsonify(all_week)



if __name__ == "__main__":
    app.run(debug=True)