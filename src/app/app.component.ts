import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
     var firebaseConfig = {
    apiKey: "AIzaSyC_dVfal0U-Sfz978M7L-WJSosARMy-Ltc",
    authDomain: "app-blog-5dceb.firebaseapp.com",
    databaseURL: "https://app-blog-5dceb.firebaseio.com",
    projectId: "app-blog-5dceb",
    storageBucket: "app-blog-5dceb.appspot.com",
    messagingSenderId: "583015601713",
    appId: "1:583015601713:web:f2ebdd8dde3e27b08ba710"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
