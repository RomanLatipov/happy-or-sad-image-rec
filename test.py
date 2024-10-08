from tensorflow.keras.models import load_model
from matplotlib import pyplot as plt
import os, cv2, tensorflow as tf, numpy as np, base64

async def base64ToImage(string64):
    image_base64 = base64.b64decode(string64)
    im_arr = np.frombuffer(image_base64, dtype=np.uint8)
    img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)

    # plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    # plt.show()
    
    resize = tf.image.resize(img, (256, 256))
    new_model = load_model(os.path.join('models', 'happysadmodel.h5'))
    yhat = new_model.predict(np.expand_dims(resize/255, 0))
    if yhat > 0.5:
        # print('Predicted class is happy')
        return {"response": "Happy"}
    else:
        # print('Predicted class is sad')
        return {"response": "Sad"}