var fname = prompt("Enter First Name")
var lname = prompt("Enter Last Name")
var age = prompt("Enter Your Age")
var height = prompt("Enter Height in cm")
var petname = prompt("Enter Pet name")
if(fname[0]===lname[0] && age>20 && age<30 && height>=170 && petname[petname.length-1]==="y"){
  console.log("Welcome Comrade! You've passed the Spy Test")
}else{
  console.log("Sorry, nothing to see here.")
}
