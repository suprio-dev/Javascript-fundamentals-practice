

// Simple ATM Machine


let choice=2,deposit=1000,balance=5000,withdraw=2000;
console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Exit");
console.log("\n");
switch(2)
{

case 1:
  console.log("Current Blanace : ₹",balance);
  break;
  case 2:
    console.log("Deposited Balance : ₹",balance+deposit);
    break;
    case 3:
      if(withdraw<=balance)
        console.log("Withdrawal Amount : ",balance-withdraw);
      else
        console.log("Insufficient Balance !");
      break;
      case 4:
        console.log("Good Bye !");
        break;
        default:
          console.log("Invalid Choice !");

}