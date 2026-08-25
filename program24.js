

// ATM Transaction

let balance=10000,withdraw=3000;
if(withdraw>0 && withdraw<=balance)
{

console.log("Balance : ₹",balance);
console.log("Withdraw : ₹",withdraw);
console.log("\n");
console.log("Withdrawal Successful !");
console.log("remaining Balance : ₹",balance-withdraw);

}

else {

console.log("Withdrawal Failed !");

}