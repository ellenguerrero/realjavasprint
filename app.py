from flask import Flask, render_template,request,redirect,url_for,jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import  func
import os


data = "./Olympic sqlite and csv files/        "
data = "./Olympic sqlite and csv files/        "
data = "./Olympic sqlite and csv files/        "




app = Flask(__name__)


#database stuff ###################




###################################

@app.route('/')
def home():

    return render_template("index.html")

@app.route('/track2')
def track2():

    return render_template("track2.html")


@app.route('/field')
def fieldpage():

    return render_template("field.html")

@app.route('/track')
def trackpage():

    return render_template("track.html")

@app.route('/data')
def datapage():

    return render_template("data.html")




# @app.route("/api/v1.0/field")
# def fieldapi ():
#     #tasks
#     all = session.query().all()

#     return jsonify()



# @app.route("/api/v1.0/track")
# def trackapi ():
#     #tasks
#     all = session.query().all()

#     return jsonify()



if __name__ == '__main__':
#     Bind to PORT if defined, otherwise default to 5000.
#     port = int(os.environ.get('PORT', 5000))
#     app.run(host='0.0.0.0', port=port)
    app.run(debug=True)
