import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    let storageRef = firebase.storage();
    getImages();

    function getImages(){
        // Create a reference to the file we want to download
        let refImg = storageRef.ref('/Doorbell').childrenCount();
        // Get the download URL
        console.log(refImg);
        refImg.forEach(child => {
                child.getDownloadURL().then(function(url) {
                  let img = document.createElement("img");
                  img.setAttribute('src', url);
                }).catch(function(error) {
                     switch (error.code) {
                       case 'storage/object_not_found':
                         // File doesn't exist
                         break;
                       case 'storage/unauthorized':
                         // User doesn't have permission to access the object
                         break
                       case 'storage/canceled':
                         // User canceled the upload
                         break;
                       case 'storage/unknown':
                         // Unknown error occurred, inspect the server response
                         break;
                     }
                   });

                })
        // });
        // refImg.getDownloadURL().then(function(url) {
        //   document.getElementById("cameraImg").setAttribute('src', url);
        // }).catch(function(error) {
        //   switch (error.code) {
        //     case 'storage/object_not_found':
        //       // File doesn't exist
        //       break;
        //     case 'storage/unauthorized':
        //       // User doesn't have permission to access the object
        //       break;

        //     case 'storage/canceled':
        //       // User canceled the upload
        //       break;

        //     case 'storage/unknown':
        //       // Unknown error occurred, inspect the server response
        //       break;
        //   }
        // });

    }
  }
}
