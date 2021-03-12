import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usersArray = [];
  usersObj = {
    mainLogin: "",
    mainPassword: "",
    mainEmail: ""
  };

  index: number = 0;

  parseData = [];

  buttonsChange: boolean = true;

  login: string = "";
  password: string = "";
  email: string = "";

  mainIndex: number;

  changeLogin(e){
    this.usersObj.mainLogin = e.target.value;
    this.login = e.target.value;
    console.log("Obj login", this.usersObj.mainLogin);
  }
  

  changePassword(e){
    this.usersObj.mainPassword = e.target.value;
    console.log("Obj password", this.usersObj.mainPassword);
  }


  changeEmail(e){
    this.usersObj.mainEmail = e.target.value;
    console.log("Obj email", this.usersObj.mainEmail);
  }

  addUser(){
    this.usersArray.push(JSON.stringify(this.usersObj));
    this.parseData.push(JSON.parse(this.usersArray[this.index]));
    console.log(this.parseData);
    this.index++;

  }

  deleteUser(idx){
    this.usersArray.splice(idx,1);
    console.log(idx);
  }

  editButton(idx){

    this.mainIndex = idx;
    this.login = this.parseData[idx].mainLogin;
    this.password = this.parseData[idx].mainPassword;
    this.email = this.parseData[idx].mainEmail;


    this.buttonsChange = false;
  }

  editUser(){

    this.parseData[this.mainIndex].mainLogin = this.login;
    this.parseData[this.mainIndex].mainPassword = this.password;
    this.parseData[this.mainIndex].mainEmail = this.email;

    this.buttonsChange = true;
  }

}
