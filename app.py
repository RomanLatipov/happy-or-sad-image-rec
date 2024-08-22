from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.post("/upload")
def test():
    test = request.json["string"]
    print(test)
    return jsonify(test)
   


if __name__ == '__main__':
    app.run(port=5555, debug=True)