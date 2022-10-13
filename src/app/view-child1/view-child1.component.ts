import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css']
})
export class ViewChild1Component implements AfterViewInit {

 
  @ViewChild('btn',{static:true}) myvariable:ElementRef | undefined;

 

  ngAfterViewInit(): void {
    console.log(this.myvariable?.nativeElement);
    this.myvariable?.nativeElement
    
  }

}
