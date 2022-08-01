import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any={
    1000:{acno:1000,uname:"shafaz",password:1000,balance:5000},
    1001:{acno:1001,uname:"rachel",password:1001,balance:4000},
    1002:{acno:1002,uname:"milan",password:1002,balance:7000},
  
  }

  constructor() { }

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
        balance:0
      }
      console.log(database);
      
      return true
    }
  }

  // *************log in***************

  login(acno:any,pswd:any){
 
  let database=this.database
  console.log(acno);
  
  if(acno in database)
  {
    if(pswd == database[acno]["password"])
    {
      // already exist in db
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

  
}
