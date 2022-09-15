import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';

const option={
  headers: new HttpHeaders() 
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any={
    1000:{acno:1000,uname:"shafaz",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"rachel",password:1001,balance:4000,transaction:[]},
    1002:{acno:1002,uname:"milan",password:1002,balance:7000,transaction:[]},
  
  }
  currentUsr:any
  currentacno:any


  constructor(private http:HttpClient) {
    this.getDetails()
   }

  // to save data into localStorage

  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentacno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentacno))

    }
    if(this.currentUsr){
      localStorage.setItem("currentUsr",JSON.stringify(this.currentUsr))
    }
  }

  // to get data from local storage

  getDetails(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentacno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }
    if(localStorage.getItem("currentUsr")){
      this.currentUsr=JSON.parse(localStorage.getItem("currentUsr")||'')
    }
  }

  // ********** register *************

  register(uname:any,acno:any,password:any){
    // request body
   const data={
    uname,
    acno,
    password
   }
  //  register API call
   return this.http.post("http://localhost:3000/register",data)

  }


  // *************log in***************

  login(acno:any,pswd:any){

// req body
    const data={
      acno,
      pswd
    }
     //  login API call
     return this.http.post("http://localhost:3000/login",data)
  
 
  }

  // req header
  getOption(){
    // to fetch token
    const token=JSON.parse(localStorage.getItem('token')||'')

    // create http headers
    let headers= new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      option.headers=headers

    }    
    return option
  }
  

  //************ deposit********************



  
  deposit(acno:any,pswd:any,amt:any){

    const data={
      acno,
      pswd,
      amt
    }
  
    // deposit API call
    return this.http.post("http://localhost:3000/deposit",data,this.getOption())

  }

  //************withdraw*******API********
  withdraw(acno:any,pswd:any,amt:any){

    const data={
      acno,
      pswd,
      amt
    }
    return this.http.post("http://localhost:3000/withdraw",data,this.getOption())


  }


  // API transaction
transaction(acno:any){
  const data={
    acno,
  }
   
  return this.http.post("http://localhost:3000/transaction",data,this.getOption())


}
// API DELETE ACC

onDelete(acno:any){
  return this.http.delete("http://localhost:3000/onDelete/"+acno,this.getOption())

  
}


}
  



