from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/index')
@app.route('/home')
@app.route('/')
def index():
    return render_template('index.html')