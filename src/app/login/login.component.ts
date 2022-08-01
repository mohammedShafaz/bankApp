import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vision="The Future Is Here...."
  acnum="Account number please...!"
  acno=""
  pswd=""

  //database



  constructor(private router:Router,private db:DataService) { }

  ngOnInit(): void {
  }



  login(){
    // user entered acno n pswd
  var acno= this.acno
  var pswd=this.pswd


const result=this.db.login(acno,pswd)
if(result){
  alert("LogIn Successfull..!!")
  this.router.navigateByUrl("dashboard")
}
  
 
  
  }




}
