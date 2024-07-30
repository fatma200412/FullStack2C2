let arr = [2, 5, 7, 8, 4, 21, 11, 83, 5];

for (let i = 0; i < arr.length; i++) {
  let j = 1;
  let c = 0;

  while (j <= arr[i]) {
    if (arr[i] % j == 0) {
      c++;
    }
    j++;
  }

  //
  if (c == 2) {
    console.log(`sade ededler: ${arr[i]}`);
  }
}

// 2
// j=1 arr[i]=2   2%1 , 2%2 c=2
// j=1 arr[i]=5   5%1 5%2 5%3 5%4 5%5 c=2
// j=1 arr[i]=7   7%1 7%2 7%3 7%4 7%5 7%6 7%7 c=2
// j=1 arr[i]=8   8%1 8%2 8%3 8%4 8%5 8%6 8%7 8%8 c=4
// j=1 arr[i]=4   4%1 4%2 4%3 4%4 c=3
