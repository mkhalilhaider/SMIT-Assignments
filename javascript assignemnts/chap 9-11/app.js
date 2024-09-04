// chapter # 9-11

// q1
let cityName = prompt("ENter Your City Name").toLowerCase();

if (cityName == "karachi") {
  alert("Welcome to city of lights");
}

// q2
let user = prompt("What's your gender?").toLowerCase();

if (user == "male") {
  alert("Good Morning Sir!");
} else if (user == "female") {
  alert("Good Morning Mam!");
}

// q3
let signalColour = prompt(
  "Enter the color of traffic signal light"
).toLowerCase();

if (signalColour == "red") {
  alert("Must Stop");
} else if (signalColour == "yellow") {
  alert("Ready to move now");
} else if (signalColour == "green") {
  alert("Movce now");
}

// q4
let fuel = +prompt("how much fuel is remaining? (in liters)").toLowerCase();
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// q5
// a
var a = 4;
if (++a === 5) {
  alert("Given condition for a variable a is true");
}
//true

// b
var b = 82;
if (b++ === 83) {
  alert("Given condition for a variable b is true");
}
//false

// c
var c = 12;
if (c++ === 13) {
  alert("Condition 1 is true");
}
if (c === 13) {
  alert("Condition 2 is true");
}
if (++c === 13) {
  alert("Condition 3 is true");
}
if (c === 14) {
  alert("Condition 4 is true");
}

// d
var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) {
  alert("The Cost equals");
}

// e
if (true) {
  alert("True");
}
if (false) {
  alert("false");
}

// f
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// q6
document.write("<h2>MARKS SHEET</h2> <br/><br/>");

let total_marks = +prompt("enter total marks");
let obtain_marks = +prompt("enter your marks");

let percentage = (obtain_marks / total_marks) * 100;

document.write(`Total Marks: ${total_marks} <br/>`);
document.write(`Obtain Marks: ${obtain_marks} <br/>`);
document.write(`Percentage: ${percentage} <br/>`);

if (percentage >= 80) {
  document.write(`Grade: A-One <br/>`);
  document.write(`Remarks: Excellent <br/>`);
} else if ((percentage) => 70) {
  document.write(`Grade: A <br/>`);
  document.write(`Remarks: Good <br/>`);
} else if ((percentage) => 60) {
  document.write(`Grade: B <br/>`);
  document.write(`Remarks: You Need To Improve <br/>`);
} else if (percentage < 60) {
  document.write(`Grade: F <br/>`);
  document.write(`Remarks: Sorry <br/>`);
}

// q7
let secret_no = 4;
let user_guess = +prompt("Guess the correct number (ranging from 1-10)");

if (user_guess == secret_no) {
  alert("Bingo! Correct Answer");
} else if (user_guess == ++secret_no) {
  alert("Close Enough to Correct Answer");
}

q8;
let number = +prompt("Check the number if number is divisible by 3");

if (number % 3 == 0) {
  alert("Number is divisible by 3");
} else {
  alert("Number is not divisible by 3");
}

q9;
let check_number = +prompt("Check the number if number is even or odd");

if (check_number % 2 == 0) {
  alert("Number is even.");
} else {
  alert("Number is odd.");
}

// q10
let temprature = +prompt("Enter the temprature.");

if (temprature > 40) {
  alert("Its is too hot outside");
} else if (temprature > 30) {
  alert("The weather today is normal");
} else if (temprature > 20) {
  alert("Today's weather is cool!");
} else if (temprature > 10) {
  alert("OMG! Today's weather is so cool.");
}

// q 11
let firstNum = +prompt("Enter the first number");
let operator = prompt("enter the operator (/, *, +, -, %)");
let secondNum = +prompt("enter the socend number");

if (operator == "+") {
  alert(`The su of ${firstNum} + ${secondNum} is: ${firstNum + secondNum}`);
} else if (operator == "-") {
  alert(
    `The subtraction of ${firstNum} - ${secondNum} is: ${firstNum - secondNum}`
  );
} else if (operator == "*") {
  alert(
    `The multiplication of ${firstNum} * ${secondNum} is: ${
      firstNum * secondNum
    }`
  );
} else if (operator == "/") {
  alert(
    `The division of ${firstNum} / ${secondNum} is: ${firstNum / secondNum}`
  );
} else if (operator == "٪") {
  alert(
    `The percentage of ${firstNum} ٪ ${secondNum} is: ${firstNum / secondNum}`
  );
}
