webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Lights" tabIcon="bulb"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Music" tabIcon="musical-notes"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\tabs\tabs.html"*/
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Pieter/Code/smart-home/ionic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Live feed" tabIcon="camera"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Pieter/Code/smart-home/ionic/src/pages/tabs/tabs.html"*/
>>>>>>> 384ceb5aa527c7f5f8e5401f11cf571bc7778346
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewDidEnter = function () {
        //establish a firebase storage connection
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
        //establish a db connection
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var rootref = database.ref();
        //execute the getImages function
        getImages();
        function getImages() {
            // Create a reference to the storage directory we want to download files from
            var refImg = storageRef.ref('/Doorbell');
            //get the image names from db
            var refImageMeta = rootref.child("ImageMeta/");
            //create an empty array to store photos
            var imageUrlArray = [];
            //execute the function once you get a response from your db
            refImageMeta.once("value", function (snapshot) {
                //loop through the snapshot value of your db table ImageMeta
                //TODO: find a solution for foreach problem
                snapshot.forEach(function (child) {
                    //push the table values to the empty array
                    imageUrlArray.push(child.val());
                    return false;
                });
                //function to sort array per date
                var date_sort_desc = function (date1, date2) {
                    if (date1 > date2)
                        return -1;
                    if (date1 < date2)
                        return 1;
                    return 0;
                };
                //sort the array with the function date_sort_desc
                imageUrlArray.sort(date_sort_desc);
                console.log(imageUrlArray);
                //loop trough array 
                imageUrlArray.forEach(function (child) {
                    //get specific img data from directory Doorbell
                    var ImgUrl = refImg.child(child);
                    //get the DownloadURL for the img and execute the function after that
                    ImgUrl.getDownloadURL().then(function (url) {
                        //Create a new Img element
                        var newImg = document.createElement("img");
                        //set the value of src attribute of the newly created img to the newly created DownloadURL
                        newImg.setAttribute("src", url);
                        //get the img container
                        var imgWrapper = document.querySelector(".imgWrapper");
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
                    });
                });
            });
        }
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Pieter/Code/smart-home/ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Gallery\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <div class="imgWrapper">\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Pieter/Code/smart-home/ionic/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], AboutPage);

var _a;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import firebase from 'firebase';
var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //function to adjust the volume of the speakers
    ContactPage.prototype.adjustMusicVolume = function (data) {
        //establish db connection
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose right tables
        var ref = database.ref("MusicPlayer/");
        //execute adjustVolume function when you get value back from db
        ref.once("value").then(adjustVolume);
        function adjustVolume() {
            //update table with data from slider
            ref.update({ Volume: data });
        }
    };
    //function to turn on the speakers
    ContactPage.prototype.turnOnMusic = function (data) {
        //establish db connection
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose right table
        var ref = database.ref("MusicPlayer");
        //execute toggleMusic function when you get value back from db
        ref.once("value").then(toggleMusic);
        function toggleMusic(data) {
            //get data from table in db
            var refVal = data.val();
            var changedVar;
            //check to see if speaker is off if so give back true to turn on
            (refVal.Busy == "false") ? changedVar = "true" : changedVar = "false";
            //update the db 
            ref.update({ Busy: changedVar });
            return;
        }
    };
    //function to change the song that is playing
    ContactPage.prototype.changeSong = function (data) {
        //establish db connection
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose right table
        var ref = database.ref("MusicPlayer");
        //execute changeSong function when you get value back from db
        ref.once("value").then(changeSong);
        function changeSong() {
            //update your song table with data from your radiogroup
            ref.update({ song: data });
        }
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-contact',template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Music\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <ion-item>\n\n      <ion-label>Speakers</ion-label>\n\n      <ion-toggle id="musicSlider" (ionChange)="turnOnMusic()" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n        <ion-range min="0" max="100" step="10" snaps="true" [(ngModel)]="MusicVolume" (ionChange)="adjustMusicVolume(MusicVolume)">\n\n           <ion-icon small range-left name="volume-down"></ion-icon>\n\n          <ion-icon range-right name="volume-up"></ion-icon>\n\n        </ion-range> \n\n  </ion-item>\n\n\n\n<ion-list radio-group [(ngModel)]="Numbers">\n\n\n\n  <ion-list-header>\n\n    Songs\n\n  </ion-list-header>\n\n\n\n  <ion-item>\n\n    <ion-label>Ed sheeran Ft queen B - Perfect</ion-label>\n\n    <ion-radio value="1" (ionSelect)="changeSong($event)"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Eminem - River Ft. Ed Sheeran</ion-label>\n\n    <ion-radio value="2" (ionSelect)="changeSong($event)"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Lost Frequencies Ft. Zonderling - Crazy</ion-label>\n\n    <ion-radio value="3" (ionSelect)="changeSong($event)"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Post Malone - rockstar Ft.21 Savage</ion-label>\n\n    <ion-radio value="4" (ionSelect)="changeSong($event)"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Selena Gomez Ft. Marshmello - Wolves</ion-label>\n\n    <ion-radio value="5" (ionSelect)="changeSong($event)"></ion-radio>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n  <!--<ion-item>\n\n    <textarea id="yourId"></textarea>\n\n     <video id="livestream" autoplay width="100%"></video>\n\n     <video id="remoteStream" autoplay width="100%"></video>\n\n  </ion-item>-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\contact\contact.html"*/
=======
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Pieter/Code/smart-home/ionic/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Live feed\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <textarea id="yourId"></textarea>\n     <video id="livestream" autoplay width="100%"></video>\n     <video id="remoteStream" autoplay width="100%"></video>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/Pieter/Code/smart-home/ionic/src/pages/contact/contact.html"*/
>>>>>>> 384ceb5aa527c7f5f8e5401f11cf571bc7778346
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Push, PushObject, PushOptions} from "@ionic-native/push"

var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.brightness2 = {
            title: ''
        };
    }
    HomePage.prototype.ChangeLight = function (num) {
        //connect to the firebase database
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose the right table in your firebase database based on the num parameter to know which light it is
        var ref = database.ref("Lights/Light" + num);
        //execute the toggleLight function once when you get a value back from firebase
        ref.once("value").then(toggleLight);
        function toggleLight(data) {
            //get the value in the data snapshot
            var refVal = data.val();
            var changedVar;
            //check to see if light is off if so give back true
            (refVal.on == "false") ? changedVar = "true" : changedVar = "false";
            //update the db
            ref.update({ on: changedVar });
            return;
        }
    };
    //function to adjust brightness level of lamps
    HomePage.prototype.AdjustBrightness = function (num, data) {
        //connect to the firebase database
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose the right table in your firebase database based on the num parameter to know which light it is
        var ref = database.ref("Lights/Light" + num);
        //execute the AdjustBrightness function once when you get a value back from firebase
        ref.once("value").then(AdjustBrightness);
        function AdjustBrightness() {
            //update the freq table of your light with the data returned from slider
            ref.update({ freq: data });
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        //choose the right firebase table
        var alertRef = database.ref("Alert/");
        //make the functions execute once
        alertRef.on("value", pushAlert, errData);
        function pushAlert(data) {
            //get a pushnotification to tell the user that their is somebody at the door
            var alertVal = data.val();
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
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Lights</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n      <ion-label>Kitchen light</ion-label>\n\n      <ion-toggle id="lightSlider1" (ionChange)="ChangeLight(1)" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness1" (ionChange)="AdjustBrightness(1,brightness1)">\n\n           <ion-icon small range-left name="sunny"></ion-icon>\n\n          <ion-icon range-right name="sunny"></ion-icon>\n\n        </ion-range> \n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Bathroom light</ion-label>\n\n      <ion-toggle id="lightSlider2" (ionChange)="ChangeLight(2)" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness2" (ionChange)="AdjustBrightness(2,brightness2)">\n\n           <ion-icon small range-left name="sunny"></ion-icon>\n\n          <ion-icon range-right name="sunny"></ion-icon>\n\n        </ion-range> \n\n  </ion-item>\n\n       <img id="cameraImg">\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\home\home.html"*/
=======
        selector: 'page-home',template:/*ion-inline-start:"/Users/Pieter/Code/smart-home/ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>smartHome</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n      <ion-label>Kitchen light</ion-label>\n      <ion-toggle id="lightSlider1" (ionChange)="ChangeLight1()" checked="false"></ion-toggle>\n  </ion-item>\n  <ion-item>\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness1" (ionChange)="AdjustBrightness1(brightness1)">\n           <ion-icon small range-left name="sunny"></ion-icon>\n          <ion-icon range-right name="sunny"></ion-icon>\n        </ion-range> \n  </ion-item>\n  <ion-item>\n      <ion-label>Bathroom light</ion-label>\n      <ion-toggle id="lightSlider2" (ionChange)="ChangeLight2()" checked="false"></ion-toggle>\n  </ion-item>\n  <ion-item>\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness2" (ionChange)="AdjustBrightness2(brightness2)">\n           <ion-icon small range-left name="sunny"></ion-icon>\n          <ion-icon range-right name="sunny"></ion-icon>\n        </ion-range> \n  </ion-item>\n  <ion-item>\n      <ion-label>Speakers</ion-label>\n      <ion-toggle id="musicSlider" (ionChange)="turnOnMusic()" checked="false"></ion-toggle>\n  </ion-item>\n  <ion-item>\n        <ion-range min="0" max="100" step="10" snaps="true" [(ngModel)]="MusicVolume" (ionChange)="adjustMusicVolume(MusicVolume)">\n           <ion-icon small range-left name="volume-down"></ion-icon>\n          <ion-icon range-right name="volume-up"></ion-icon>\n        </ion-range> \n  </ion-item>\n\n<ion-list radio-group [(ngModel)]="Numbers">\n\n  <ion-list-header>\n    Numbers\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label>Ed sheeran Ft queen B - Perfect</ion-label>\n    <ion-radio value="1" (ionSelect)="changeSong($event)"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Eminem - River Ft. Ed Sheeran</ion-label>\n    <ion-radio value="2" (ionSelect)="changeSong($event)"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Lost Frequencies Ft. Zonderling - Crazy</ion-label>\n    <ion-radio value="3" (ionSelect)="changeSong($event)"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Post Malone - rockstar Ft.21 Savage</ion-label>\n    <ion-radio value="4" (ionSelect)="changeSong($event)"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Selena Gomez Ft. Marshmello - Wolves</ion-label>\n    <ion-radio value="5" (ionSelect)="changeSong($event)"></ion-radio>\n  </ion-item>\n</ion-list>\n      <!--<button ion-item (click)=\'DoThething()\'> \n      <ion-icon name="camera"></ion-icon>\n      click here to take a picture \n      </button>-->\n      <h1 id="temp"></h1>\n      <img id="cameraImg">\n</ion-content>\n\n'/*ion-inline-end:"/Users/Pieter/Code/smart-home/ionic/src/pages/home/home.html"*/
>>>>>>> 384ceb5aa527c7f5f8e5401f11cf571bc7778346
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(293);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //firebase
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
                apiKey: "AIzaSyA6JY2pqmteDLN1UKytE_bvJs_JmsgWyVA",
                authDomain: "smarthome-6b170.firebaseapp.com",
                databaseURL: "https://smarthome-6b170.firebaseio.com",
                projectId: "smarthome-6b170",
                storageBucket: "smarthome-6b170.appspot.com",
                messagingSenderId: "24230858591"
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Pieter/Code/smart-home/ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Pieter/Code/smart-home/ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[274]);
//# sourceMappingURL=main.js.map