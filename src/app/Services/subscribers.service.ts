import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor( private service :AngularFirestore) { }

   addSubs(subData:any){
    this.service.collection('subscribers').add(subData).then(() =>{
      console.log('Subscriber Saved Successfuly');
    })
   }

  checkSubs(subEmail: any){
   return this.service.collection('subsribers',ref => ref.where('email','==',subEmail)).get()
  }

}
