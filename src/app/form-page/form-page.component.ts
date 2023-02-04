import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableService } from '../Services/observable.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})


export class FormPageComponent {
  mycurrentnum:number=1;
  
  mylimit:number=5;

  list:string[]=[];
  sup?:Subscription

  constructor(private myObserve:ObservableService){
    this.sup=this.myObserve.mutuipleFunc(this.mycurrentnum,this.mylimit).subscribe(
      data=>{
        console.log(data)
        this.list.push(data)
      }
    )
  }

  change(first:string,limit:string){
    console.log("myCurrent : "+this.mycurrentnum)
  console.log("myLimit : "+this.mylimit)

    this.sup?.unsubscribe()
    this.list=[]
    this.sup=this.myObserve.mutuipleFunc(Number(first),Number(limit)).subscribe(
      data=>{
        this.list.push(data)
      }
    )

  }

}
