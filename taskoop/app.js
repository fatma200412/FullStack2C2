// // Task.9
// class Bank {
//   constructor() {
//     this.bankName = "";
//     this.branches = [];
//   }

//   addABranch(branch) {
//     this.branches.push(branch);
//     console.log("added success");
//   }
//   removeABranch(branch) {
//     let index = this.branches.indexOf(branch);

//     if (index !== -1) {
//       this.branches.splice(index, 1);
//       console.log("remove branch success");
//     } else console.log("branch dont exist");
//   }

//   diplayAllBranches() {
//     if (this.branches.length == 0) {
//       console.log("no branch");
//     } else {
//       this.branches.forEach((branch, i) => {
//         console.log(`${i + 1}. ${branch}`);
//       });
//     }
//   }
// }

// let bank1 = new Bank();
// // bank1.bankName='sdfgh'
// // bank1.addABranch("Branch 1");
// // bank1.addABranch("Branch 2");
// // bank1.addABranch("Branch 3");

// // bank1.diplayAllBranches();

// // bank1.removeABranch("Branch 2");
// // bank1.diplayAllBranches();

// console.log(window);

class BankAccount {
  constructor(accountNumber, accountName, balance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = balance;
  }
  deposit(mebleg) {
    this.balance += mebleg;
    console.log(`mebleg ${mebleg}AZN  deposit elave olundu`);
  }
  withDrow(mebleg) {
    if (mebleg <= this.balance) {
      this.balance -= mebleg;
      console.log(`mebleg ${mebleg}AZN cixildi`);
    } else {
      console.log("balansda kifayet qeder mebleg yoxdur.");
    }
  }
  transfer(mebleg, gondereceyimizAccount) {
    if (mebleg <= this.balance) {
      this.balance -= mebleg;
      console.log(`mebleg ${mebleg}AZN cixildi`);
      gondereceyimizAccount.deposit(mebleg);
      console.log(`mebleg ${mebleg}AZN transfer olundu`);
    } else {
      console.log("balansda kifayet qeder mebleg yoxdur.");
    }
  }
  displayBalance() {
    console.log(`Account ${this.accountName}, balance: ${this.balance}`);
  }
}

let account1 = new BankAccount("acc1", "Mirane", 1000);
let account2 = new BankAccount("acc1", "Fatma", 2000);

account1.displayBalance();
account2.displayBalance();

console.log("==============");

account1.deposit(100);
account1.displayBalance();

console.log("==============");

account1.withDrow(50);
account1.displayBalance();

console.log("==============");

account1.transfer(50, account2);
account1.displayBalance();
account2.displayBalance();
