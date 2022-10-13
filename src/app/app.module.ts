import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { PromiseComponent } from './promise/promise.component';
import { Observable1Component } from './observable1/observable1.component';
import { HttpClientModule } from '@angular/common/http';
import { CRUDComponent } from './crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild1Component } from './view-child1/view-child1.component';
import { SettingGenderPipe } from './pipes/setting-gender.pipe';
import { RajuComponent } from './raju/raju.component';
import { BindingComponent } from './binding/binding.component';
import { SharedModule } from './@share/SharedModule';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Rxjs1Component,
    PromiseComponent,
    Observable1Component,
    CRUDComponent,
    ViewChild1Component,
    SettingGenderPipe,
    RajuComponent,
    BindingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
