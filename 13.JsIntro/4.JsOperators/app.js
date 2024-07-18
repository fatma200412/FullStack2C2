console.log("Operators");

let num1 = 2;
let num2 = 6;
let result;
let word = "azerbaycan";

result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num2 / num1;

result = word + " " + "salam" + "fgh" + num1;
result = word / num1; //Not a number
result = num1 ** 3;
result = num1 % num2;

result = 5 * 4 + "4";
result = "4" + 4 + 8;

result = 4 + Number("4");

// result = num1++;
// console.log(num1);
// result = ++num1;

// num1--;
num1 = num1 - 1;

console.log(num1);

console.log("result=", result);
console.log(typeof result);

if (5 % 2 != 0) {
  console.log("first");
}

console.log(1 === "01");
