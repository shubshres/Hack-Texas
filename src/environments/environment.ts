// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_ygZQfbQFiXZM-jXlU2kL9tAO2rd9zL0',
  authDomain: 'recell-ac9ee.firebaseapp.com',
  projectId: 'recell-ac9ee',
  storageBucket: 'recell-ac9ee.appspot.com',
  messagingSenderId: '614834387955',
  appId: '1:614834387955:web:3da185e616083a462d3086',
  measurementId: 'G-DD3JETN19R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'recell-ac9ee',
    appId: '1:614834387955:web:3da185e616083a462d3086',
    storageBucket: 'recell-ac9ee.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyA_ygZQfbQFiXZM-jXlU2kL9tAO2rd9zL0',
    authDomain: 'recell-ac9ee.firebaseapp.com',
    messagingSenderId: '614834387955',
    measurementId: 'G-DD3JETN19R',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
