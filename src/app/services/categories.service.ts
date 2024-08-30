import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private fsd: Firestore) {}

  loadData() {
    const collectionInstence = collection(this.fsd, 'categories');

    return collectionData(collectionInstence, {
      idField: 'id',
    });
  }
}
