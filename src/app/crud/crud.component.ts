import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../serrvice/employee.service';

// from module
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  emplist:any;
  myform :FormGroup;
  deptlist:any;

  //constructor
  constructor(private employeeService:EmployeeService  , frmbldr:FormBuilder) { 

  //What is FormGroup and FormControl?
  //FormGroup is used with FormControl to track the value and validate the state of form control. In practice, FormGroup aggregates the values of each child FormControl into a single object, using each control name as the key.
 this.myform = frmbldr.group({
  Emp_Name: new FormControl(),
  Emp_Mobileno: new FormControl(),
  Emp_Email: new FormControl(),
  Emp_Gender : new FormControl(),
  Emp_Deptname : new FormControl(),
  Emp_Salary:new FormControl(),

 })   
  }


  //OnInit
  ngOnInit(): void {

    this.getApidata()

    this.CreateEmp()
    
  }

  //get detaile
  getApidata(){
    this.employeeService.getEmployees().subscribe((res)=>{
      this.emplist = res
      console.log(res)
    })

  }

  //FillingDepartment Dropdounlist
  // DeparmentDropDounLinst(){
  //   this.employeeService.getDepartments().subscribe((list)=>{
  //     this.deptlist = list
  //     console.log(list)
  //   })
  // }

  // creating method 
  CreateEmp(){
    debugger;
//  console.log(this.myform)

  }
  

}
