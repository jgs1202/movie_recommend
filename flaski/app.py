from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///amazon_prime_movies.db'
db = SQLAlchemy(app)
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)


class Movie_Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False)
    url = db.Column(db.String(80), unique=False)
    img_src = db.Column(db.String(80), unique=False)
    abstract = db.Column(db.String(80), unique=False)

    def __init__(self, title, url, img_src, abstract):
        self.title = title
        self.url = url
        self.img_src = img_src
        self.abstract = abstract
        # self.choice2 = choice2

    def __repr__(self):
        return "Movie<{}, {}, {}, {}, {}>".format(self.id, self.title, self.url, self.img_src, self.abstract)


class introductions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order = db.Column(db.Integer, unique=False)
    sentence = db.Column(db.String(80), unique=False)

    def __init__(self, order, sentence):
        self.order = order
        self.sentence = sentence
        # self.choice2 = choice2

    def __repr__(self):
        return "Introduction<{}, {}, {}>".format(self.id, self.order, self.sentence)
