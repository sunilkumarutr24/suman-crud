import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { StoreService, userdetails } from "./store.service";


@Component({
  selector: 'app-raju',
  templateUrl: './raju.component.html',
  styleUrls: ['./raju.component.css']
})
export class RajuComponent implements OnInit {

  ages = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
          41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
    
  userFormGroup!: FormGroup;
  isGender: string = "";
  userID!: number;
  isSave: boolean = true;
  genderData = [
    {
      name: "Male",
      value: "Male",
    },
    {
      name: "Female",
      value: "Female",
    },
  ];
  userDetails: Array<any> = [];
  OriginuserDetails: Array<any> = [];
  formtextsearch = new FormControl("");
  constructor(private storeService: StoreService) {}
  ngOnInit(): void {
    this.initformGroup();
    this.onclickGetData();
  }
  initformGroup() {
    this.userFormGroup = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      gender: new FormControl(""),
      hobbies: new FormArray([this.createHobbies("")]),
      isChecked: new FormControl(false, [Validators.required]),
    });
  }
  createHobbies(a: any) {
    return new FormGroup({
      hobbie: new FormControl(a),
    });
  }
  addFormItem(a: any) {
    (<FormArray>this.userFormGroup.get("hobbies")).push(this.createHobbies(a));
  }
  removeItem(i: number) {
    return (<FormArray>this.userFormGroup.get("hobbies")).removeAt(i);
  }
  GenerateHobbies() {
    return (<FormArray>this.userFormGroup.get("hobbies")).controls;
  }
  OnclickReset() {
    this.initformGroup();
  }
  onclcikSave() {
    if (this.userFormGroup.value.isChecked === true) {
      let payload: userdetails = {
        id: Math.floor(Math.random() * 9999 - 1111),
        name: this.userFormGroup.value.name,
        age: this.userFormGroup.value.age,
        gender: this.userFormGroup.value.gender,
       // ischecked: this.userFormGroup.value.isChecked,
        hobbies: this.OnclickBuildHobbies(),
      };
      this.storeService.SaveStorage(payload);
      this.initformGroup();
      this.onclickGetData();
    } else {
      alert("please check the details ");
    }
  }
  onClickGetDataforEdit(obj: any) {
    console.log(obj.hobbies.split(","), "let data");
this.removeItem(0)
    let newdata = obj.hobbies.split(",");
    let hobbiesArray: any = [];
    newdata.forEach((hobbie: any, index: number) => {
      console.log(hobbie);
      if (index > -1) {
        (<FormArray>this.userFormGroup.get("hobbies")).push(
          this.createHobbies(hobbie)
        );
      }
      hobbiesArray.push(hobbie);
    });
    this.userFormGroup.patchValue({
      hobbies: hobbiesArray,
      name: obj.name,
      age: obj.age,
      gender: obj.gender,
      isChecked: obj.ischecked,
    });
    this.userID = obj.id;
    console.log(this.userFormGroup.value);
  }
  onClickUpdate() {
    if (this.userFormGroup.value.isChecked === true) {
      let payload: userdetails = {
        id: this.userID,
        name: this.userFormGroup.value.name,
        age: this.userFormGroup.value.age,
        gender: this.userFormGroup.value.gender,
        //ischecked: this.userFormGroup.value.isChecked,
        hobbies: this.OnclickBuildHobbies(),
      };
      this.storeService.updatestore(payload);
      this.initformGroup();
      this.onclickGetData();
    } else {
      alert("please check the details ");
    }
  }
  //1
  onclilckDelete(obj: any) {
    this.storeService.DeleteItem(obj);
    this.onclickGetData();
  }
//2
  OnclickBuildHobbies() {
    const hobbies: Array<any> = this.userFormGroup.value.hobbies;
    let stringbuilder: Array<string> = [];
    hobbies.forEach((data: any) => {
      stringbuilder.push(data.hobbie);
      console.log(stringbuilder);
    });
    return stringbuilder.toString();
  }
//3
  onclickGetData() {
    this.userDetails = this.storeService.getStore();
    this.OriginuserDetails = this.userDetails;
    console.log(this.userDetails);
  }
//4
  onkeyUpSearch() {
    let userDetails = this.userDetails;
    let searchInput = this.formtextsearch.value?.toLocaleLowerCase()
      ? this.formtextsearch.value?.toLocaleLowerCase()
      : "";
    if (searchInput !== "") {
      let data = userDetails.filter((data: userdetails) => {
        return data.name.toLocaleLowerCase().includes(searchInput);
      });
      this.userDetails = data;
    } else {
      this.userDetails = this.OriginuserDetails;
    }
  }

}
