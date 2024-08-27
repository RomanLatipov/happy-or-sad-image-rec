from flask import Flask, jsonify, request
from flask_cors import CORS
# from tensorflow.keras.models import load_model
# from matplotlib import pyplot as plt
# import os, cv2, tensorflow as tf, numpy as np
# import base64
# # import asyncio
from test import base64ToImage

app = Flask(__name__)
CORS(app)

@app.post("/upload")
async def test():
    test = request.json["string"]
    response = await base64ToImage(test)
    # print (response)
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5555, debug=True)