function createBankAccount(initialBalance) {
  let balance = initialBalance; // private data

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Balance:", balance);
      }
    }
  };
}
const myAccount = createBankAccount(1000);
const friendAccount = createBankAccount(500);

myAccount.deposit(500);     // Balance: 1500
myAccount.withdraw(300);    // Balance: 1200

friendAccount.deposit(200); // Balance: 700

function outer() {
  let count = 0;
  return function () {
    return count++;
  };
}

const c = outer();

console.log(c()); // 0
console.log(c()); // 1
console.log(c()); // 2
/*
✅ Closure – Interview Theory (Simple Words)

A closure is a function that remembers variables from its outer function even after the outer function has finished executing.

🧠 Why do we use closure?

To remember data between function calls

To keep variables private

To avoid using global variables 

function setupButton() {
  let clicks = 0;

  button.addEventListener("click", function () {
    clicks++;
    console.log(clicks);
  });
}

“Closures are used in event listeners to remember values like click count even after the main function has finished executing.

*/
