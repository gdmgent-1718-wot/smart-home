import firebase_admin
import os
import time
import datetime
import json
import RPi.GPIO as GPIO
import pygame
from firebase import firebase
from firebase_admin import credentials
from firebase_admin import db
from PIL import Image
from threading import Thread
from picamera import PiCamera
from google.cloud import storage

#enable google cloud Storage & ref to an existing bucket
bucket = storage.Client().get_bucket('smarthome-6b170.appspot.com')

camera = PiCamera()
camera.resolution = (500,500)

#music player
pygame.mixer.init()

#cred for firebase
cred = credentials.Certificate('smarthome-6b170-firebase-adminsdk-yg2v8-e84c1076ff.json')

default_app = firebase_admin.initialize_app(cred,{
    'databaseURL': 'https://smarthome-6b170.firebaseio.com'
    })

GPIO.setwarnings(False)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(26, GPIO.OUT)
p=GPIO.PWM(26, 100)
p.start(0)

GPIO.setup(11, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(12, GPIO.OUT)
t=GPIO.PWM(12, 100)
t.start(0)

ImageMeta = db.reference().child('ImageMeta')
alertUpdate = db.reference().child('Alert')

def light1():
    while True:
        #lights
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

        #Musicplayer
        mPlayer = db.reference('MusicPlayer/Busy').get()
        mSong1 = db.reference('MusicPlayer/song').get()
        mPlayerVolume1 = db.reference('MusicPlayer/Volume').get()
        mPlayerVolume1 = mPlayerVolume1/100
        mSong1 = str(mSong1)+".mp3"
        if(mPlayer == "true"):
            pygame.mixer.music.load("/home/pi/Music/"+mSong1)
            pygame.mixer.music.play()
            pygame.mixer.music.set_volume(mPlayerVolume1)
            while pygame.mixer.music.get_busy() == True:
                mPlayer = db.reference('MusicPlayer/Busy').get()
                mPlayerVolume2 = db.reference('MusicPlayer/Volume').get()
                mPlayerVolume2 = mPlayerVolume2/100
                mSong2 = db.reference('MusicPlayer/song').get()
                mSong2 = str(mSong2)+".mp3"

                if(mPlayerVolume1 != mPlayerVolume2):
                    pygame.mixer.music.set_volume(mPlayerVolume2)
                    mPlayerVolume1 = mPlayerVolume2
                
                if(mSong1 != mSong2):
                    pygame.mixer.music.load("/home/pi/Music/"+mSong2)
                    pygame.mixer.music.play()
                    mSong1 = mSong2
                    
                if(mPlayer == "false"):
                    pygame.mixer.music.stop()            
        
        #Doorbell
        if doorbell_value == 0:
            print("ding dong")
            camera.start_preview()
            time.sleep(1)
            Date_Time = str(datetime.datetime.now())
            camera.capture(Date_Time + ".jpg")
            camera.stop_preview()
            
            #upload local file to online bucket
            blob = bucket.blob("Doorbell/"+Date_Time + '.jpg')
            blob.upload_from_filename(filename=Date_Time + '.jpg')

            ImageMeta.push().set(Date_Time + '.jpg')
            alertUpdate.set({"on" : "true"})
             
        time.sleep(0.2)

try:
    light1()
    
except KeyboardInterrupt:
    pass

p.stop()
GPIO.cleanup()

    
    
        
        
