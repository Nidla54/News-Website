import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private fdb: Firestore) {}

  addSubs(subData: any) {
    const collectionInstence = collection(this.fdb, 'subscribers');
    addDoc(collectionInstence, subData)
      .then(() => {
        console.log('Date Saved Successfully');
      })
      .catch((err) => console.log(err));
  }
}
