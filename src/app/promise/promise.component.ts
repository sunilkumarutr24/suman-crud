import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }


  
  ngOnInit(): void {
   
  // Create New promose  
   const p1 = new Promise<any>((resolve,reject)=>{
    if(true){resolve("I am  Promise 1"),
             resolve("I am  Promise 2"),
             resolve("I am  Promise 3")
            }
    else(reject("Error in Promise"))
   })

   // excution promise 
    p1.then((x)=>{console.log(x)})

  }

  
  
}

    

  


