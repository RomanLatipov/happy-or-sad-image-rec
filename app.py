from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello world!"


if __name__ == '__main__':
    app.run(port=5555, debug=True)