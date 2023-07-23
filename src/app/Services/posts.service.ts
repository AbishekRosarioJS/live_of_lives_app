import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private service:AngularFirestore) { }

  

  loadFeatured() {
    return  this.service.collection('posts', ref => ref.where('isFeatured','==', true).limit(4)).snapshotChanges().pipe(
       map(actions => {
        return actions.map(a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, data}
 
         })
       })
     )
   }

   loadLatest() {
    return  this.service.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
       return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
   }

   loadCategoryPosts(categoryId: any) {
    console.log('Attempting to fetch data for categoryId:', categoryId);
    return this.service.collection('posts', (ref) => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        console.log('Firestore data:', actions); 
         
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

  loadOnePost (postId: any) {
   return this.service.doc(`posts/${postId}`).valueChanges();
  }


  loadSimilar(catId: any) {
    console.log('Attempting to fetch data for categoryId:', catId);
    return this.service.collection('posts', (ref) => ref.where('category.categoryId', '==', catId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        console.log('Firestore data:', actions); 
         
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }
  

  countViews(postId: any) {
    const viewsCount = {
      views: firebase.firestore.FieldValue.increment(1)
    }

    this.service.doc(`posts/${postId}`).update(viewsCount).then(() =>{
     console.log('Views Count Updated..!');
    });
  
  
  }
}
