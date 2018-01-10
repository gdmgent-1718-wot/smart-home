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
    let database = firebase.database();
    let rootref = database.ref();
    getImages();

    function getImages(){
        // Create a reference to the file we want to download
        let refImg = storageRef.ref('/Doorbell');
        let refImageMeta = rootref.child("ImageMeta/");
        let imageUrlArray = [];
        // Get the download URL
        refImageMeta.once("value",function(snapshot) {
                //loop through every image  
                //TODO: put all the URL's in an array and arrange per date for correct display + find a solution for foreach problem
                snapshot.forEach(child => {
                  console.log(child.val());
                  let ImgUrl = refImg.child(child.val());
                  ImgUrl.getDownloadURL().then(function(url) {
                    let newImg = document.createElement("img");
                    newImg.setAttribute("src", url);
                    let imgWrapper = document.querySelector(".imgWrapper");
                    imgWrapper.appendChild(newImg);
                  }).catch(function(error) {
                      switch (error.code) {
                        case 'storage/object_not_found':
                          // File doesn't exist
                          break;
                        case 'storage/unauthorized':
                          // User doesn't have permission to access the object
                          break;

                        case 'storage/canceled':
                          // User canceled the upload
                          break;

                        case 'storage/unknown':
                          // Unknown error occurred, inspect the server response
                          break;
                      }
                    });
                });
        });

    }
  }
}
