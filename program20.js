

// Simple Calculator


let firstNum=10,secondNum=5;
let operator="/";
switch(operator){
case "+":
  console.log("Addition : ",firstNum+secondNum);
  break;
case "-":
  console.log("Subtraction : ",firstNum-secondNum);
  break;
case "*":
  console.log("Multiplication : ",firstNum*secondNum);
  break;
case "/":
  if(secondNum===0)
    console.log("Division by Zero is not possible !");
  else
  console.log("Quotient : ",firstNum/secondNum);
  break;
case "%":
  if(secondNum===0)
    console.log("Division by Zero is not possible !");
  else
  console.log("Remainder : ",firstNum%secondNum);
  break;

  default:
 console.log("Invalid Operator !");
}