import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //firebase
      firebase.initializeApp({
            apiKey: "AIzaSyA6JY2pqmteDLN1UKytE_bvJs_JmsgWyVA",
            authDomain: "smarthome-6b170.firebaseapp.com",
            databaseURL: "https://smarthome-6b170.firebaseio.com",
            projectId: "smarthome-6b170",
            storageBucket: "smarthome-6b170.appspot.com",
            messagingSenderId: "24230858591"
      });
    });
  }
}
