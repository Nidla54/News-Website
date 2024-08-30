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
  limit,
  orderBy,
  getDoc,
  increment,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private fsd: Firestore) {}

  loadFeaturedData() {
    const collectionInstence = collection(this.fsd, 'posts');
    const featuredQuery = query(
      collectionInstence,
      where('isFeatured', '==', true),
      limit(4)
    );
    return collectionData(featuredQuery, {
      idField: 'id',
    });
  }

  loadLatestData() {
    const collectionInstence = collection(this.fsd, 'posts');
    const featuredQuery = query(collectionInstence, orderBy('creatdAt'));
    return collectionData(featuredQuery, {
      idField: 'id',
    });
  }

  loadCategoryPosts(categoryId: any) {
    const collectionInstence = collection(this.fsd, 'posts');
    const featuredQuery = query(
      collectionInstence,
      where('category.categoryId', '==', categoryId)
    );
    return collectionData(featuredQuery, {
      idField: 'id',
    });
  }

  loadOnePost(postId: any): Observable<any> {
    const collectionInstance = doc(this.fsd, `posts`, postId);
    const docPromise = getDoc(collectionInstance).then((doc) => doc.data());
    return from(docPromise);
  }

  countViews(postId: any) {
    const docInstance = doc(this.fsd, `posts`, postId);

    const data = {
      views: increment(1),
    };

    updateDoc(docInstance, data)
      .then(() => {
        console.log('Data updated');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
