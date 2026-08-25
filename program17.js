

// Salary Bonus


let salary=60000,years=10;
if(years>=10){
 console.log("Original Salary : ₹",salary);
  console.log("Bonus : ₹",0.2 * salary);
  console.log("Final Salary : ₹",salary+0.2 * salary);
}
 
  else if(years>=5 && years<10)
  {
 console.log("Original Salary : ₹",salary);
  console.log("Bonus : ₹",0.2 * salary);
  console.log("Final Salary : ₹",salary+0.1 * salary);


  }
    
  else if(years>=2 && years<5)
  {
 console.log("Original Salary : ₹",salary);
  console.log("Bonus : ₹",0.05 * salary);
  console.log("Final Salary : ₹",salary+0.1 * salary);


  }
    
  else if(years<2)
  {
 console.log("Original Salary : ₹",salary);
  console.log("No Bonus !");


  }
    