# -*- coding: utf-8 -*-
# app.py
"""
 Using SQLAlchemy and Flask get db record.(GET)
"""
import os
from flask_restful import Resource, Api
from flask_cors import CORS
from flaski.app import db, app
from py.main import pick_up
from py.recommend import Recommend
from flask import jsonify, Flask, make_response
from py.main import responce_draft

app = Flask(__name__, template_folder='templates')
CORS(app)


@app.route("/uwsgi")
def hello_world():
    return "Hello, World!"


session = Recommend()
session.get_movie_data()
@app.route("/uwsgi/data/<params>")
def recommend_server(params=None):
    sentence = params.split('=')[1]
    movies = pick_up(session, sentence)
    print(jsonify(movies))
    return make_response(jsonify(movies))


@app.route("/uwsgi/draft/<params>")
def draft_server(params=None):
    print(params)
    params = params.split('&')
    sentence = [p.split('=')[1] for p in params]
    data = responce_draft(sentence[0], sentence[1], sentence[2])
    print(jsonify(data))
    return make_response(jsonify(data))


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    # app.run(debug=False, host='0.0.0.0', port=port)
    app.run(debug=False, host='0.0.0.0')
    # app.run(debug=False, host='127.0.0.1', port=port)
