import { Component, OnInit } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FormBuilder } from '@angular/forms';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA_ygZQfbQFiXZM-jXlU2kL9tAO2rd9zL0',
//   authDomain: 'recell-ac9ee.firebaseapp.com',
//   projectId: 'recell-ac9ee',
//   storageBucket: 'recell-ac9ee.appspot.com',
//   messagingSenderId: '614834387955',
//   appId: '1:614834387955:web:3da185e616083a462d3086',
//   measurementId: 'G-DD3JETN19R',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// Initialize Firebase 
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  SellerInfo!: FormGroup; 
  ItemDetails!: FormGroup;

  itemSelected = '';
  // description = '';
  // firstName = '';
  // lastName = '';
  // email = '';
  // phoneNumber = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.SellerInfo = this.fb.group({
      firstName: "", 
      lastName: "",
      email: "",
      phoneNumber: "",
    });

    this.ItemDetails = this.fb.group({
      itemSelected: this.itemSelected,
      title: "",
      details: "",
      price: "",
    });
  }

  test() {
  }

  // async addItem() {
  //   setDoc(doc(db, 'Residents'), {});
  // }
}
