import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  
  constructor() { }
mutuipleFunc(first:number,limit:number):Observable<string>{  
  
  return new Observable(observer =>{
    
      let i=0
      let returnedLine=""
      let timer = setInterval(()=>{
        if(i!= limit){
          returnedLine=`${first} * ${i} = ${first*i}`
          observer.next(returnedLine)
          i++
        }
      },1000)
      return{
        unsubscribe(){
          clearInterval(timer)
        }
      }
  })
 
}
  
}
