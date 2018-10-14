// Creating a function constructor
function Account(amount){
  this.balance = amount;
  this.withdraw = withdraw;
  this.deposit = deposit;
  this.toString = toString;
  }

function deposit(amount){
  this.balance += amount;
}

function withdraw(amount){
  if (amount <= this.balance){
    this.balance -= amount;
  }
  if (amount > this.balance){
    console.log("Insufficient Balance: "+ this.balance);
  }
}

function toString(){
  return "Balance:" + this.balance;
}

var account = new Account(100);
account.deposit(20);
console.log(account.toString());
account.withdraw(40);
console.log(account.toString());
account.withdraw(200);
account.deposit(100);
console.log(account.toString());
