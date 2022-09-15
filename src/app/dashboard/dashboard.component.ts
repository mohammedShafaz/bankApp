import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 d_acno= ""
 d_pswd=""
 d_amount=""

 w_acno=""
 w_pswd=""
 w_amount=""
usr:any

acno:any
 
//  ****** deposit form*****
depositForm=this.fb.group({
  d_acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  d_pswd:['',[Validators.required,Validators.pattern('[0-9a-zA_Z]*')]],
  d_amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

// ***** withdraw Form******
withdrawForm=this.fb.group({
  w_acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  w_pswd:['',[Validators.required,Validators.pattern('[0-9a-zA_Z]*')]],
  w_amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

loginDate:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.usr=JSON.parse(localStorage.getItem('currentUsr')||'')
    this.loginDate=new Date()
  }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentAcno")){
    //   alert("Please Log In....!")
    //   this.router.navigateByUrl("")
    // }
  }

 
  deposit(){

 
  var d_acno= this.depositForm.value.d_acno
  var d_pswd=this.depositForm.value.d_pswd
  var d_amount=this.depositForm.value.d_amount
  // calling function deposit in dataService
  this.ds.deposit(d_acno,d_pswd,d_amount)
  .subscribe((result:any)=>{

    if(result){
      alert(result.message)
    }
  },
  (result)=>{
    alert(result.error.message)
  })
  
  


  }
  withdraw(){
    var w_acno=this.withdrawForm.value.w_acno
    var w_pswd=this.withdrawForm.value.w_pswd
    var w_amount=this.withdrawForm.value.w_amount
    
      // calling function withdraw in dataService

    this.ds.withdraw(w_acno,w_pswd,w_amount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)

      }

    },
    (result)=>{
      alert(result.error.message)
    }
    )
    
   
  
  }

  // deletefromParent()

  deletefromParent(){

    this.acno=JSON.parse(localStorage.getItem("currentacno")||'')

  }
  // log out
  logout(){
    localStorage.removeItem("currentUsr")
    localStorage.removeItem("currentacno")
    this.router.navigateByUrl("")
  }
  onCancel(){
    this.acno=""
  }
  onDelete(event:any){
    this.ds.onDelete(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )
   
  }
  transactionHistory(){
    this.router.navigateByUrl('transaction')
  }

}
