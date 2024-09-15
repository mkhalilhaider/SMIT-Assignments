// q1
let arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// q2
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}

// q3
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// q4
let num = prompt("Enter number");
let len = prompt("Length of table");

for (let i = 1; i <= len; i++) {
  console.log(`${num} X ${i} = ${num * i}`);
}

// q5
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}
// q6
// counting
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// reverse
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// even number
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// odd numbers
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// series
for (let i = 2; i <= 20; i += 2) {
  console.log(`${i}K, `);
}

// q7
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Enter item to search in bakery");

let found = false;
for (let i = 0; i < bakeryItems.length; i++) {
  if (search.toLowerCase() === bakeryItems[i].toLowerCase()) {
    console.log(`${search} is available at index ${i} in bakery.`);
    found = true;
    break;
  }
}

if (!found) {
  console.log(`We are sorry, ${search} is not available in our bakery.`);
}

// q8
let n = [24, 53, 78, 91, 12];
console.log(`Array Items: ${n}`);

let largest = n[0];
for (let i = 1; i < n.length; i++) {
  if (n[i] > largest) {
    largest = n[i];
  }
}
console.log("The Largest number is " + largest);

// q9
let C = [24, 53, 78, 91, 12];
console.log("Array Items: " + C);

let smallest = C[0];
for (let i = 1; i < C.length; i++) {
  if (C[i] < smallest) {
    smallest = C[i];
  }
}
console.log("The Smallest number is " + smallest);

// q10
for (let i = 1; i <= 100; i + 5) {
  console.log(i);
}
