import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  vision="The Future Is Here...."
  acnum="Account number please..!"
  acno=""
  pswd=""
  //database
  database={
    1000:{acno:1000,uname:"shafaz",password:1000,balance:5000},
    1001:{acno:1001,uname:"rachel",password:1001,balance:4000},
    1002:{acno:1002,uname:"milan",password:1002,balance:7000},
  
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno=event.target.value
  }
  pswdChange(event: any){
    this.pswd=event.target.value
  }
  login(){
    alert("Login clicked..!!")
  
  }



}
