import os, cv2, imghdr

image_exts = ['jpeg', 'jpg', 'bmp', 'png']

# formats the data folder for proper images extensions
for image_class in os.listdir('data'):
    for image in os.listdir(os.path.join('data', image_class)):
        image_path = os.path.join('data', image_class, image)
        try:
            img = cv2.imread(image_path)
            tip = imghdr.what(image_path)
            print(tip)
            if tip not in image_exts:
                print("Image not in ext list {}".format(image_path))
                os.remove(image_path)
        except Exception as e:
            print('Issue with image {}'.format(image_path))