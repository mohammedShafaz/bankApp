import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';

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


  constructor() {
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
    let database=this.database
    if(acno in database){
      // already existing 
      return  false

    }else{
      // add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
        
      }
      // console.log(database);
      this.saveDetails()
      
      return true
    }
  }

  // *************log in***************

  login(acno:any,pswd:any){
 
  let database=this.database
  // console.log(acno);
  
  if(acno in database)
  {
    if(pswd == database[acno]["password"])
    {
      this.currentUsr=database[acno]["uname"]
      this.currentacno=acno
      // already exist in db
      this.saveDetails()

      return true


    }
    else
    {
      alert("Incorrect password...!")
      return false
    }
  

  }
  else
  {

    alert("User does not exist....!")
    return false
  }
  
  }

  //************ deposit********************



  deposit(acno:any,pswd:any,amt:any){

    let database=this.database
    var amount=parseInt(amt)
    
  
    if(acno in database){
      if(pswd == database[acno]["password"]){
        database[acno]["balance"]+=amount

        database[acno]["transaction"].push({
       
          type:"CREDIT",
          Amount:amount
          
         
        })
        // console.log(database);
        this.saveDetails()

        
        return database[acno]["balance"]

      }
      else{
        alert("Incorrect password...!")
        return false
      }
    }
    else{
      alert("User does not exist....!")
    return false

    }

  }

  //************withdraw***************
  withdraw(acno:any,pswd:any,amt:any){

    let database=this.database
    var amount=parseInt(amt)
    
    if(acno in database){
      if(pswd == database[acno]["password"]){
        if(amount<=database[acno]["balance"]){
          database[acno]["balance"]-=amount
          
          database[acno]["transaction"].push({
         
            type:"DEBIT",
            Amount:amount
            
           
          })
          // console.log(database);
          this.saveDetails()

          
          return database[acno]["balance"]

        }
        else{
          alert("Insufficient Balance")
          return false
        }
       

      }
      else{
        alert("Incorrect password...!")
        return false
      }
    }
    else{
      alert("User does not exist....!")
    return false

    }



  }


  // function transaction
transaction(acno:any){
  return this.database[acno].transaction

}
  
}


