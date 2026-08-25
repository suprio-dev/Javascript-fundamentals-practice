

// Movie ticket system

let age=25,numberOfTickets=3;
console.log("Age : ",age);
console.log("Tickets : ",numberOfTickets);
console.log("\n");
if(age<12)
  console.log("Total : ₹",100*numberOfTickets);
else if(age>=12 && age<=59)
  console.log("Total : ₹",200*numberOfTickets);
else if(age>=60)
  console.log("Total : ₹",120*numberOfTickets);
