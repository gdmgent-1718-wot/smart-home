import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
// import firebase from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  //function to adjust the volume of the speakers
  adjustMusicVolume(data) {
    //establish db connection
    let database = firebase.database();
    //choose right tables
    let ref = database.ref("MusicPlayer/");
    //execute adjustVolume function when you get value back from db
    ref.once("value").then(adjustVolume);

    function adjustVolume() {
      //update table with data from slider
      ref.update({ Volume: data });
    }
  }

  //function to turn on the speakers
  turnOnMusic(data) {
    //establish db connection
    let database = firebase.database();
    //choose right table
    let ref = database.ref("MusicPlayer");
    //execute toggleMusic function when you get value back from db
    ref.once("value").then(toggleMusic);

    function toggleMusic(data) {
      //get data from table in db
      let refVal = data.val();
      let changedVar;
      //check to see if speaker is off if so give back true to turn on
      (refVal.Busy == "false") ? changedVar = "true" : changedVar = "false";

      //update the db 
      ref.update({ Busy: changedVar });
      return;
    }
  }

  //function to change the song that is playing
  changeSong(data) {
    //establish db connection
    let database = firebase.database();
    //choose right table
    let ref = database.ref("MusicPlayer");
    //execute changeSong function when you get value back from db
    ref.once("value").then(changeSong);

    function changeSong() {
      //update your song table with data from your radiogroup
      ref.update({ song: data });
    }
  }
}
