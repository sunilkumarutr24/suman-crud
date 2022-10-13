import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { CRUDComponent } from './crud/crud.component';
import { Observable1Component } from './observable1/observable1.component';
import { ParentComponent } from './parent/parent.component';
import { PromiseComponent } from './promise/promise.component';
import { RajuComponent } from './raju/raju.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { ViewChild1Component } from './view-child1/view-child1.component';

const routes: Routes = [
  {path: '', redirectTo:'/AppComponent', pathMatch: 'full'},
  {path:"App-Comp" , component:AppComponent},
  {path:"Parent" , component:ParentComponent},
  {path:"Child" , component:ChildComponent},
  {path:"Rxjs" , component:Rxjs1Component },
  {path:"Promise" , component:PromiseComponent},
  {path:"Observable" , component:Observable1Component},
  {path:"crud" , component:CRUDComponent},
  {path:"ViewChild" , component:ViewChild1Component},
  {path:"Raju" , component:RajuComponent},
  {path:"Binding" , component:BindingComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
