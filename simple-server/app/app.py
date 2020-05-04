from flask import Flask
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    now = datetime.datetime.now().strftime('%H:%M:%S.%f')
    return f'<h1>top page!({now})</h1>\n'

@app.route('/sample')
def sample():
    now = datetime.datetime.now().strftime('%H:%M:%S.%f')
    return f'<h1>sample page!({now})</h1>\n'