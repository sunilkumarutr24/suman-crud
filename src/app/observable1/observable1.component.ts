import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  UserDetails:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  // create Observable  
  //syntax:   myObservable = new Observable((x)=>{})   function      var myObservable = map(()=>{})
  // here Observable Is a  class
   myObservable = new Observable((x)=>{
     x.next("This is Obsevable1")
     x.next("This is Obsevable2")
   })
    
  // this is call back function  
   btnclick(){
    this.myObservable.subscribe({         
      next(s){console.log(s)}
     })
   }



   //calling api data with using HttpClient Module and Observable

   getApiData(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((res)=>{
      this.UserDetails = res
      console.log(res)})
   }



}
