

// Electricity bill + discount


let units=250,bill=units*10,originalBill;
if(bill>=2000)
{ 

console.log("Units : ",units);
if(units>=0 && units<=100){
originalBill=5*units;
console.log("Original Bill : ₹",originalBill);
}
  
else if(units>=101 && units<=200){
  originalBill=7*units;
  console.log("Original Bill : ₹",originalBill);
}

else if(units>200){

  originalBill=10*units;
  console.log("Original Bill : ₹",originalBill);
}
console.log("Discount : ₹",0.1*originalBill);
console.log("Final Bill : ₹",originalBill-0.1*originalBill);


}


else
{

console.log("Units : ",units);
if(units>=0 && units<=100){
originalBill=5*units;
console.log("Original Bill : ₹",originalBill);
}
  
else if(units>=101 && units<=200){
  originalBill=7*units;
  console.log("Original Bill : ₹",originalBill);
}

else if(units>200){

  originalBill=10*units;
  console.log("Original Bill : ₹",originalBill);
}
console.log("No Discount !");
console.log("Final Bill : ₹",originalBill);


}
