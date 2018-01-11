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
    //establish a firebase storage connection
    let storageRef = firebase.storage();
    //establish a db connection
    let database = firebase.database();
    let rootref = database.ref();
    //execute the getImages function
    getImages();

    function getImages() {
      // Create a reference to the storage directory we want to download files from
      let refImg = storageRef.ref('/Doorbell');
      //get the image names from db
      let refImageMeta = rootref.child("ImageMeta/");
      //create an empty array to store photos
      let imageUrlArray = [];
      //execute the function once you get a response from your db
      refImageMeta.once("value", function (snapshot) {
        //loop through the snapshot value of your db table ImageMeta
        //TODO: find a solution for foreach problem
        snapshot.forEach(child => {
          //push the table values to the empty array
          imageUrlArray.push(child.val());
          return false;
        });
        //function to sort array per date
        var date_sort_desc = function (date1, date2) {
          if (date1 > date2) return -1;
          if (date1 < date2) return 1;
          return 0;
        };
        //sort the array with the function date_sort_desc
        imageUrlArray.sort(date_sort_desc);
        console.log(imageUrlArray);
        //loop trough array 
        imageUrlArray.forEach(child => {
          //get specific img data from directory Doorbell
          let ImgUrl = refImg.child(child);
          //get the DownloadURL for the img and execute the function after that
          ImgUrl.getDownloadURL().then(function (url) {
            //Create a new Img element
            let newImg = document.createElement("img");
            //set the value of src attribute of the newly created img to the newly created DownloadURL
            newImg.setAttribute("src", url);
            //get the img container
            let imgWrapper = document.querySelector(".imgWrapper");
            //append the new img to the container
            imgWrapper.appendChild(newImg);
            //catch if there is an error
          }).catch(function (error) {
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
          })
        });
      });

    }
  }
}
