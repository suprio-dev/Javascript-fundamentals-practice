

// Menu-Based Calculator


let firstNum=10,secondNum=5;
let userChoiceOperator=4;
console.log("Welcome to Menu-Based Calculator !");
console.log("\n");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus");
console.log("\n\n");
switch(userChoiceOperator){
case 1:
  console.log("Addition : ",firstNum+secondNum);
  break;
case 2:
  console.log("Subtraction : ",firstNum-secondNum);
  break;
case 3:
  console.log("Multiplication : ",firstNum*secondNum);
  break;
case 4:
  if(secondNum===0)
    console.log("Division by Zero is not possible !");
  else
  console.log("Quotient : ",firstNum/secondNum);
  break;
case 5:
  if(secondNum===0)
    console.log("Division by Zero is not possible !");
  else
  console.log("Remainder : ",firstNum%secondNum);
  break;

  default:
 console.log("Invalid Operator !");
}