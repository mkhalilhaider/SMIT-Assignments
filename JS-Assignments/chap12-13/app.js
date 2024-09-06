// q1
let input = prompt("Enter a character or number");

if (!isNaN(input)) {
  alert("This is a number");
} else {
  let number = input.charCodeAt(0);
  if (number >= 65 && number <= 90) {
    alert("UpperCase");
  } else if (number >= 97 && number <= 122) {
    alert("Lowercase");
  } else {
    alert("Invalid input");
  }
}

// q2
let num1 = +prompt("Enter num1");
let num2 = +prompt("Enter num2");

if (num1 > num2) {
  alert(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  alert(`${num2} is greater than ${num1}`);
} else {
  alert(`${num1} is equal to ${num2}`);
}

// q3
let pos = +prompt("Enter a number");

if (pos > 0) {
  alert(`${pos} is greater than zero`);
} else if (pos < 0) {
  alert(`${pos} is less than zero`);
} else {
  alert(`${pos} is zero`);
}

// q4
let char = prompt("Enter a character").toLowerCase();

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  alert(true);
} else {
  alert(false);
}

// q5
let password = "zakir";
let checkPassword = prompt("Enter password");

if (checkPassword === password) {
  alert("Correct!");
} else {
  alert("Incorrect password");
}

// q6
let time = +prompt("Enter time in 24-hour format");

if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time < 2400) {
  alert("Good night!");
} else {
  alert("Invalid time");
}
