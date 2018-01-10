import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Push, PushObject, PushOptions} from "@ionic-native/push"
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  temp = 0;
  brightness2 = {
      title : ''
    }
  constructor(public navCtrl: NavController) {
  }

  ChangeLight1(){
    let database = firebase.database();

    let ref = database.ref("Lights/Light1");
    ref.once("value").then(Light1);

    function Light1(data) {
      let refVal = data.val();
      let changedVar;
      //check to see if ligt is of if so give back true
      (refVal.on == "false") ? changedVar = "true" : changedVar = "false";

      //update the db
      ref.update({ on: changedVar });
      return;
    }    
  }
  ChangeLight2() {
    let database = firebase.database();

    let ref = database.ref("Lights/Light2");
    ref.once("value").then(Light2);

    function Light2(data) {
      let refVal = data.val();
      let changedVar;
      //check to see if ligt is of if so give back true
      (refVal.on == "false") ? changedVar = "true" : changedVar = "false";

      //update the db
      ref.update({ on: changedVar });
      return;
    }
  }

AdjustBrightness1(data) {
    let database = firebase.database();

    let ref = database.ref("Lights/Light1");
    ref.once("value").then(AdjustBrightness);

    function AdjustBrightness() {
      ref.update({ freq: data});
    }
}
AdjustBrightness2(data) {
  
    let database = firebase.database();

    let ref = database.ref("Lights/Light2");
    ref.once("value").then(AdjustBrightness);

    function AdjustBrightness() {
      ref.update({ freq: data});
    }
}
adjustMusicVolume(data) {
  let database = firebase.database();
  let ref = database.ref("MusicPlayer/");

  ref.once("value").then(adjustVolume);

  function adjustVolume() {
    ref.update({Volume: data});
  }
}
turnOnMusic(data) {
  let database = firebase.database();

    let ref = database.ref("MusicPlayer");
    ref.once("value").then(toggleMusic);

    function toggleMusic(data) {
      let refVal = data.val();
      let changedVar;
      //check to see if ligt is of if so give back true
      (refVal.Busy == "false") ? changedVar = "true" : changedVar = "false";

      //update the db
      ref.update({ Busy: changedVar });
      return;
      }
}
changeSong(data) {
  let database = firebase.database();
  console.log(data);
  let ref = database.ref("MusicPlayer");
    ref.once("value").then(toggleSong);

    function toggleSong() {
          ref.update({song: data});
    }
}
  ionViewDidEnter(){
    let database = firebase.database();
    //choose the right firebase table
    let alertRef = database.ref("Alert/");
    //make the functions execute once
    alertRef.on("value", pushAlert, errData);

    function pushAlert(data){
      //get a pushnotification to tell the user that their is somebody at the door
      let alertVal = data.val();
      if (alertVal.on == "true") {
        alert("someone's at the door");
        alertRef.update({ on: "false"});
      }
    }

    function errData() {
      console.log("error");
    }
  } 
}
