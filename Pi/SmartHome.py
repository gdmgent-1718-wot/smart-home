import firebase_admin
import os
import time
import datetime
import RPi.GPIO as GPIO
from firebase import firebase
from firebase_admin import credentials
from firebase_admin import db
from PIL import Image
from threading import Thread
from picamera import PiCamera
from google.cloud import storage

#enable google cloud Storage & ref to an existing bucket
bucket = storage.Client().get_bucket('smarthome-6b170.appspot.com')
#bucket = storage.Client().get_bucket('smarthome-6b170.appspot.com/Doorbell')

camera = PiCamera()
camera.resolution = (500,500)

#function to calculate cpu_temperature
def get_cpu_temp():
    res = os.popen("vcgencmd measure_temp").readline()
    t = float(res.replace("temp=","").replace("'C\n",""))
    return(t)

#cred for firebase
cred = credentials.Certificate('smarthome-6b170-firebase-adminsdk-yg2v8-e84c1076ff.json')

default_app = firebase_admin.initialize_app(cred,{
    'databaseURL': 'https://smarthome-6b170.firebaseio.com'
    })

Tempdb = db.reference().child('Temperature')
cameraUpdate = db.reference().child('Camera')

GPIO.setwarnings(False)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(26, GPIO.OUT)
p=GPIO.PWM(26, 100)
p.start(0)

GPIO.setup(11, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(12, GPIO.OUT)
t=GPIO.PWM(12, 100)
t.start(0)



def light1():
    while True:
        Light1 = db.reference('Lights/Light1').get()
                         
        if(Light1['on'] == "true"):
            p.ChangeDutyCycle(Light1['freq'])
        elif(Light1['on'] == "false"):
            p.ChangeDutyCycle(0)

        Light2 = db.reference('Lights/Light2').get()
                        
        if(Light2['on'] == "true"):
            t.ChangeDutyCycle(Light2['freq'])
        elif(Light2['on'] == "false"):
            t.ChangeDutyCycle(0)

        doorbell_value = GPIO.input(11)
        
        if doorbell_value == 0:
            print(doorbell_value)
            print('ding dong')
            camera.start_preview()
            time.sleep(1)
            Date_Time = str(datetime.datetime.now())
            camera.capture(Date_Time + ".jpg")
            camera.stop_preview()
            
            #upload local file to online bucket
            blob = bucket.blob(Date_Time + '.jpg')
            #of = open(Date_Time + '.jpg', 'rb')
            #blob.upload_from_file(of)
            blob.upload_from_filename(filename=Date_Time + '.jpg')
            
             
        time.sleep(0.2)

try:
    light1()
    
except KeyboardInterrupt:
    pass

p.stop()
GPIO.cleanup()

    
    
        
        
