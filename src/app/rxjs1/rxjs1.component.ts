import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myObservable = new Observable((x)=>{
    x.next("cal 1"),
    x.next("cal 2"),
    x.next("cal 3")
  })

  btnClick(){
    this.myObservable.subscribe({
      next(x){console.log(x)}
    })
  }


}
