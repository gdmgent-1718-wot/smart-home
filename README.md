# smart-home
Smart Home | Web Of Things | Artevelde University College Ghent

## Needed Parts
- Raspberry Pi 3 
- Raspberry Pi Camera
- Breadboard
- Led Lights
- Button
- T-cobbler

### Installing ionic
* `npm install -g cordova ionic`
* starting app: `ionic serve`

#### Firebase
- Create a firebase database on the [Google Firebase website](https://firebase.google.com)
- Change to rules to:
```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

###### Ps: Be awere that this is not secure at all || Also : Don't forget to link your firebase in your ionic app.
##Raspberry installations
### Installing firebase
```
 sudo pip3 install python-firebase
 sudo pip3 install firebase-admin
```
##### your time has to be set right otherwise it won't work
### Installing Google cloud:
```
sudo pip3 install google-cloud
sudo apt-get install google-cloud-sdk
gcloud auth application-default login
```

##To start the python project
`sudo python3 SmartHome.py`