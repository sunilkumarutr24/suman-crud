import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations :[],
    imports:[CommonModule,MatButtonModule,MatInputModule,MatSelectModule],
    exports:[MatButtonModule,MatRadioModule,MatInputModule,MatSelectModule],
    providers:[]
})

export class SharedModule{

}