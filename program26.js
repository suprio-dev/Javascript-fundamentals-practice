

// Restaurant Menu

let choice=2,quantity=3;
console.log("1. Burger → ₹150");
console.log("2. Pizza → ₹250");
console.log("3. Pasta → ₹180");
console.log("4. Sandwich → ₹120");
console.log("\n");
console.log("Choice : ",choice);
console.log("Quantity : ",quantity);
console.log("\n");
switch(choice)
{
  
case 1:
  console.log("Total : ₹",150*quantity);
break;
case 2:
  console.log("Total : ₹",250*quantity);
break;
case 3:
  console.log("Total : ₹",180*quantity);
break;
case 4:
  console.log("Total : ₹",120*quantity);
break;

default:
  console.log("Not available in the menu !");

}