import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd

   const result=this.db.register(uname,acno,pswd)
    if(result){
      alert("Registered Successfully...!!")
      this.router.navigateByUrl("")

    }
    else{
      alert("Account already existing .. Please Log In ")
      
    }
    

  }

}
