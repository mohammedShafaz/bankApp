import { Component, OnInit } from '@angular/core';
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


  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
 
  deposit(){

 
  var d_acno= this.d_acno
  var d_pswd=this.d_pswd
  var d_amount=this.d_amount
  // calling function deposit in dataService
  const result=this.ds.deposit(d_acno,d_pswd,d_amount)
  if(result){
    alert(d_amount+ " successfully creditted ..,New balance is : " +result)
  }


  }
  withdraw(){
    var w_acno=this.w_acno
    var w_pswd=this.w_pswd
    var w_amount=this.w_amount
    
      // calling function withdraw in dataService

    const result=this.ds.withdraw(w_acno,w_pswd,w_amount)
    if(result){
      alert(w_amount+" is debitted from your Account ,Nwe Balance is : " +result)
    }

  }

}
