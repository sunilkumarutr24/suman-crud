import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  
  changeDetection:ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerParent(){
    console.log("Parent Triggered")
  }

}
