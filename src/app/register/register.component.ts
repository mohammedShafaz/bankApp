import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]*')]]
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    
    if(this.registerForm.valid){
      const result=this.db.register(uname,acno,pswd)
    if(result){
      alert("Registered Successfully...!!")
      this.router.navigateByUrl("")

    }
    else{
      alert("Account already existing .. Please Log In ")
      
    }

    }
    else{
      alert("Invalid form....!!!")
    }

   
    

  }

}
