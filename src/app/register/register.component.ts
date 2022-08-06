import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  //  ******RegisterForm Model******

  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    

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
