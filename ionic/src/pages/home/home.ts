import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Push, PushObject, PushOptions} from "@ionic-native/push"
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brightness2 = {
    title: ''
  }
  constructor(public navCtrl: NavController) {
  }

  ChangeLight(num) {
    //connect to the firebase database
    let database = firebase.database();
    //choose the right table in your firebase database based on the num parameter to know which light it is
    let ref = database.ref("Lights/Light"+num);
    //execute the toggleLight function once when you get a value back from firebase
    ref.once("value").then(toggleLight);

    function toggleLight(data) {
      //get the value in the data snapshot
      let refVal = data.val();
      let changedVar;
      //check to see if light is off if so give back true
      (refVal.on == "false") ? changedVar = "true" : changedVar = "false";

      //update the db
      ref.update({ on: changedVar });
      return;
    }
  }
  
  //function to adjust brightness level of lamps
  AdjustBrightness(num,data) {
    //connect to the firebase database
    let database = firebase.database();
    //choose the right table in your firebase database based on the num parameter to know which light it is
    let ref = database.ref("Lights/Light"+num);
    //execute the AdjustBrightness function once when you get a value back from firebase
    ref.once("value").then(AdjustBrightness);

    function AdjustBrightness() {
      //update the freq table of your light with the data returned from slider
      ref.update({ freq: data });
    }
  }

  ionViewDidEnter() {
    let database = firebase.database();
    //choose the right firebase table
    let alertRef = database.ref("Alert/");
    //make the functions execute once
    alertRef.on("value", pushAlert, errData);
    
    function pushAlert(data) {
      //get a pushnotification to tell the user that their is somebody at the door
      let alertVal = data.val();
      //check to see if their is somebody at the door
      if (alertVal.on == "true") {
        alert("Someone at the door");
        //change the alert to false to notify that the user has seen the alert
        alertRef.update({ on: "false" });
      }
    }

    function errData() {
      console.log("error");
    }
  }
}
