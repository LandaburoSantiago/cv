import os
from flask import Flask
from flask import render_template, request

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def inicio():
    return render_template('index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='localhost', port=port)
