

// Electricity Bill


let units=250;
if(units>=0 && units<=100)
  console.log("Final Bill : ₹",5*units);
else if(units>=101 && units<=200)
  console.log("Final Bill : ₹",7*units);
else if(units>200)
  console.log("Final Bill : ₹",10*units);
