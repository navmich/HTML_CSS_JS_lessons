var s = "hello";


console.log("From for loop...")

for (i = 0; i < 5; i++) {
  console.log(s);
}

console.log("...now from while loop")

var i = 0;
while(i < 5) {
  console.log(s)
  i++;
}

console.log("Printing all odd numbers from 1 to 25:")

for (i = 0; i < 26; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

console.log("and now using while loop:")

var i = 0;
while(i < 26) {
  if (i % 2 !== 0) {
    console.log(i)
  }
  i++;
}