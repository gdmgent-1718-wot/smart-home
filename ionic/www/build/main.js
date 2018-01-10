webpackJsonp([0],{

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(286);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Live feed" tabIcon="camera"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(73);
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
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var rootref = database.ref();
        getImages();
        function getImages() {
            // Create a reference to the file we want to download
            var refImg = storageRef.ref('/Doorbell');
            var refImageMeta = rootref.child("ImageMeta/");
            var imageUrlArray = [];
            // Get the download URL
            refImageMeta.once("value", function (snapshot) {
                //loop through every image  
                //TODO: put all the URL's in an array and arrange per date for correct display + find a solution for foreach problem
                snapshot.forEach(function (child) {
                    console.log(child.val());
                    var ImgUrl = refImg.child(child.val());
                    ImgUrl.getDownloadURL().then(function (url) {
                        var newImg = document.createElement("img");
                        newImg.setAttribute("src", url);
                        var imgWrapper = document.querySelector(".imgWrapper");
                        imgWrapper.appendChild(newImg);
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
        selector: 'page-about',template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Gallery\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n      <div class="imgWrapper">\n\n\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_peer__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_simple_peer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    ContactPage.prototype.ionViewDidEnter = function () {
        var database = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
        var ownIdRef = database.ref("stream/");
        var otherIdRef = database.ref("stream/RaspberryId");
        var otherId;
        otherIdRef.once("value").then(assignValue);
        function assignValue(data) {
            otherId = data.val();
        }
        var peer = new __WEBPACK_IMPORTED_MODULE_2_simple_peer___default.a({
            initiator: location.hash === '',
            trickle: false
        });
        peer.on('signal', function (data) {
            document.getElementById("yourId").setAttribute("value", JSON.stringify(data));
            ownIdRef.update({ userId: JSON.stringify(data) });
            try {
                peer.signal(otherId);
            }
            catch (err) {
                alert("your Raspberry is not on " + err);
            }
        });
        peer.on('stream', function (stream) {
            var video = document.getElementById("livestream").setAttribute("src", window.URL.createObjectURL(stream));
        });
        // var localStream = document.getElementById('livestream');
        // var remoteStream = document.getElementById('remoteStream');
        // var pc1;
        // var pc2;
        // var config = {'iceServers': [{'url': 'stun:stun.services.mozilla.com'}, {'url': 'stun:stun.l.google.com:19302'}]};
        // var vendorURL = window.URL;
        // var offerOptions = {
        //   offerToReceiveAudio: 1,
        //   offerToReceiveVideo: 1
        // };
        // pc1 = new RTCPeerConnection(config);
        // pc1.onicecandidate = function(e) {
        //   onIceCandidate(pc2,e);
        // };     
        // pc1.createOffer(offerOptions)
        // .then(
        //   gotDescription
        // );
        // pc1.onicecandidate = gotIceCandidate;
        // pc1.onaddstream = gotRemoteStream;
        // function gotDescription(description) {
        //     pc1.setRemoteDescription(description)
        //     .then(
        //       console.trace('setLocalDescription complete')
        //     )
        // }
        // function onIceCandidate(pc, event) {
        //   pc.addIceCandidate(event.candidate)
        //   .then(function() {
        //     console.log("candidate added");
        //   })
        // }
        // function gotIceCandidate(event) {
        //     if(event.candidate != null) {
        //         pc1.send(JSON.stringify({'ice': event.candidate}));
        //     }
        // }
        // function gotRemoteStream(event) {
        //   remoteStream.setAttribute("src",vendorURL.createObjectURL(event.stream));
        // }
        // // navigator.getUserMedia({
        // //   audio: true, 
        // //   video: true
        // // }, function(stream) {
        // //     pc1.addStream(stream);
        // //     localStream.setAttribute("src", vendorURL.createObjectURL(stream));
        // // }, function(err) {
        // //   console.log('getUserMedia error' + err);
        // // })
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Live feed\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <textarea id="yourId"></textarea>\n\n     <video id="livestream" autoplay width="100%"></video>\n\n     <video id="remoteStream" autoplay width="100%"></video>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], ContactPage);

var _a;
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(73);
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
        this.temp = 0;
        this.brightness2 = {
            title: ''
        };
    }
    HomePage.prototype.ChangeLight1 = function () {
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var ref = database.ref("Lights/Light1");
        ref.once("value").then(Light1);
        function Light1(data) {
            var refVal = data.val();
            var changedVar;
            //check to see if ligt is of if so give back true
            (refVal.on == "false") ? changedVar = "true" : changedVar = "false";
            //update the db
            ref.update({ on: changedVar });
            return;
        }
    };
    HomePage.prototype.ChangeLight2 = function () {
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var ref = database.ref("Lights/Light2");
        ref.once("value").then(Light2);
        function Light2(data) {
            var refVal = data.val();
            var changedVar;
            //check to see if ligt is of if so give back true
            (refVal.on == "false") ? changedVar = "true" : changedVar = "false";
            //update the db
            ref.update({ on: changedVar });
            return;
        }
    };
    HomePage.prototype.AdjustBrightness1 = function (data) {
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var ref = database.ref("Lights/Light1");
        ref.once("value").then(AdjustBrightness);
        function AdjustBrightness() {
            ref.update({ freq: data });
        }
    };
    HomePage.prototype.AdjustBrightness2 = function (data) {
        var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();
        var ref = database.ref("Lights/Light2");
        ref.once("value").then(AdjustBrightness);
        function AdjustBrightness() {
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
            if (alertVal.on == "true") {
                alert("someone's at the door");
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
        selector: 'page-home',template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>smartHome</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n      <ion-label>Kitchen light</ion-label>\n\n      <ion-toggle id="lightSlider1" (ionChange)="ChangeLight1()" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness1" (ionChange)="AdjustBrightness1(brightness1)">\n\n           <ion-icon small range-left name="sunny"></ion-icon>\n\n          <ion-icon range-right name="sunny"></ion-icon>\n\n        </ion-range> \n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Bathroom light</ion-label>\n\n      <ion-toggle id="lightSlider2" (ionChange)="ChangeLight2()" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n        <ion-range min="10" max="100" step="10" snaps="true" [(ngModel)]="brightness2" (ionChange)="AdjustBrightness2(brightness2)">\n\n           <ion-icon small range-left name="sunny"></ion-icon>\n\n          <ion-icon range-right name="sunny"></ion-icon>\n\n        </ion-range> \n\n  </ion-item>\n\n      <!--<button ion-item (click)=\'DoThething()\'> \n\n      <ion-icon name="camera"></ion-icon>\n\n      click here to take a picture \n\n      </button>-->\n\n      <h1 id="temp"></h1>\n\n      <img id="cameraImg">\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(238);
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(73);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\School\Schooljaar 2017-18\semester 1\Web of things\smartHome\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map