import { Injectable } from '@angular/core';
export interface userdetails {
  id: number,
  name: string,
  age: number,
  hobbies: string
  gender: string,
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private userKey = "userKey";

  static _userDetails: Array<userdetails> = [];
  _userDetails: Array<userdetails> = [];

  constructor() {this._userDetails = StoreService._userDetails }

  SaveStorage(userDeta: userdetails) {
    this._userDetails.push(userDeta)
    console.log(this._userDetails)
    this.loaclStoargeSave(this._userDetails)
  }

  getStore() {
    console.log(StoreService._userDetails)
    return StoreService._userDetails
  }


  DeleteItem(SeleteItem: any) {
    this._userDetails = this.getStore();
    const itemIndex = this._userDetails.findIndex((data) => data.id === SeleteItem.id)
    if (itemIndex > -1) {
      this._userDetails.splice(itemIndex, 1)
      StoreService._userDetails = this._userDetails
    }
  }
  
  updatestore(UpdateItem: userdetails) {
    this._userDetails.map((data) => {
      if (data.id === UpdateItem.id) {
        data.age = UpdateItem.age,
          data.id = UpdateItem.id,
          data.gender = UpdateItem.gender,
          data.name = UpdateItem.name, data.hobbies = UpdateItem.hobbies
      }
    })
    this.loaclStoargeSave(this._userDetails)
  }
  
  loaclStoargeSave(userDeta: any) {
    StoreService._userDetails = userDeta;
    console.log(StoreService._userDetails)
  }
}