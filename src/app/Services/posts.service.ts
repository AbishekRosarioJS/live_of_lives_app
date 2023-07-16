import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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


  loadCategoryPosts(categoryId:any){
    return  this.service.collection('posts', ref => ref.where('category.categoryId','==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
       return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}

        })
      })
    )
  } 

}
