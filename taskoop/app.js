// Task.9
class Bank {
  constructor() {
    this.bankName = "";
    this.branches = [];
  }

  addABranch(branch) {
    this.branches.push(branch);
    console.log("added success");
  }
  removeABranch(branch) {
    let index = this.branches.indexOf(branch);

    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log("remove branch success");
    } else console.log("branch dont exist");
  }

  diplayAllBranches() {
    if (this.branches.length == 0) {
      console.log("no branch");
    } else {
      this.branches.forEach((branch, i) => {
        console.log(`${i + 1}. ${branch}`);
      });
    }
  }
}

let bank1 = new Bank();
// bank1.bankName='sdfgh'
// bank1.addABranch("Branch 1");
// bank1.addABranch("Branch 2");
// bank1.addABranch("Branch 3");

// bank1.diplayAllBranches();

// bank1.removeABranch("Branch 2");
// bank1.diplayAllBranches();

console.log(window);
