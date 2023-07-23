import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../Services/subscribers.service';

@Component({
  selector: 'app-subscription-from',
  templateUrl: './subscription-from.component.html',
  styleUrls: ['./subscription-from.component.css']
})
export class SubscriptionFromComponent implements OnInit{

  isEmailError:boolean =false;
  isSubscribed:boolean=false;

  constructor (private subService: SubscribersService) {} 
   ngOnInit(): void {
     
   }

  onSubmit(formVal: any) {
    const subData: Sub = {
      name:formVal.name ,
      email:formVal.email,
    }

    // this.subService.addSubs(subData);
    this.subService.checkSubs(subData.email).subscribe(val => {
      console.log(val);

      if(val.empty){
        this.subService.addSubs(subData);
        this.isSubscribed = true;
      }else{
        // console.log('Email Address is Already in ues');
        this.isEmailError =true;
      }

    })
  }
}
