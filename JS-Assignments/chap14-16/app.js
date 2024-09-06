// chapter # 14-16

// q1
let studentNames1 = [];

// q2
let studentNames2 = new Array();

// q3
let stringsArray = ["apple", "banana", "cherry"];

// q4
let numbersArray = [1, 2, 3, 4, 5];

// q5
let booleanArray = [true, false];

// q6
let mixedArray = [1, "hello", true, 3.14, "world"];

// q7
let qualifications = ["SSC", "HSC", "BSC", "BS", "BCom", "MS", "MPhil", "PhD"];

document.write("Available education qualifications in Pakistan: <br>");
document.write(`1. ${qualifications[0]}<br>`);
document.write(`2. ${qualifications[1]}<br>`);
document.write(`3. ${qualifications[2]}<br>`);
document.write(`4. ${qualifications[3]}<br>`);
document.write(`5. ${qualifications[4]}<br>`);
document.write(`6. ${qualifications[5]}<br>`);
document.write(`7. ${qualifications[6]}<br>`);
document.write(`8. ${qualifications[7]}<br>`);

// q8
let students = ["Muhamamd", "Khalil", "Haider"];
let scores = [329, 413, 279];
let totalMarks = 500;

document.write(
  `Score of ${students[0]} is ${scores[0]}, Percentage: ${(
    (scores[0] / totalMarks) *
    100
  ).toFixed(2)}%<br>`
);
document.write(
  `Score of ${students[1]} is ${scores[1]}, Percentage: ${(
    (scores[1] / totalMarks) *
    100
  ).toFixed(2)}%<br>`
);
document.write(
  `Score of ${students[2]} is ${scores[2]}, Percentage: ${(
    (scores[2] / totalMarks) *
    100
  ).toFixed(2)}%<br>`
);

// q9
let colors = ["white", "pink", "blue", "green"];
document.write(`Original colors: ${colors.join(", ")}<br>`);

// a
let updatedColorBegin = prompt(
  "Enter the color you want to put at the beginning:"
);
colors.unshift(updatedColorBegin);
document.write(`After adding at the beginning: ${colors.join(", ")}<br>`);

// b
let updatedColorEnd = prompt("Enter the color you want to put at the end:");
colors.push(updatedColorEnd);
document.write(`After adding at the end: ${colors.join(", ")}<br>`);

// c
colors.unshift("orange", "purple");
document.write(
  `After adding 'orange' and 'purple' at the beginning: ${colors.join(
    ", "
  )}<br>`
);

// d
colors.shift();
document.write(`After deleting the first color: ${colors.join(", ")}<br>`);

// e
colors.pop();
document.write(`After removing the last color: ${colors.join(", ")}<br>`);

// f
let addIndex = parseInt(
  prompt("Enter the index where you want to add a color:"),
  10
);

if (addIndex >= 0 && addIndex <= colors.length) {
  let colorToAdd = prompt("Enter the color:");
  colors.splice(addIndex, 0, colorToAdd);
  document.write(
    `After adding color at index ${addIndex}: ${colors.join(", ")}<br>`
  );
} else {
  document.write("Invalid index for adding color.<br>");
}

// g
let deleteIndex = parseInt(
  prompt("Enter the index where you want to delete a color:"),
  10
);

if (deleteIndex >= 0 && deleteIndex < colors.length) {
  colors.splice(deleteIndex, 1);
  document.write(
    `After deleting color at index ${deleteIndex}: ${colors.join(", ")}<br>`
  );
} else {
  document.write("Invalid index for deleting color.<br>");
}

// q10
let scoresOfStudents = [320, 230, 480, 120];
document.write(`Scores Of Students: ${scoresOfStudents}`);

let orderedScoresOfStudents = scoresOfStudents.sort((a, b) => a - b);
document.write(`Ordered Scores Of Students: ${orderedScoresOfStudents}`);

// q11
let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(`Cities List: </br> ${cityNames} </br>`);

let selectedCities = cityNames.slice(1, 4);
document.write(`</br> Selected Cities List: </br> ${selectedCities}`);

// q12
let arr = ["This", "is", "my", "cat"];

document.write(`Array: <br/> ${arr} <br/>`);
document.write(`<br/> String: <br/> ${arr.join(" ")}`);

// q13
/*  add elements to the end of the array using "push" and 
remove them from the front with "shift". 
checked the first element with index 0 and compare if the queue is empty
by checking the array's length.*/

let arrQueue = [];

arrQueue.push("First ");
arrQueue.push(" Second ");
arrQueue.push(" Third");

document.write("Queue after adding elements:  ", arrQueue);

let dequeueArrQueue = arrQueue.shift();
document.write("<br/><br/>  Dequeued elements: ", dequeueArrQueue);
document.write("<br/><br/> Queue after removing an element:", arrQueue);

let frontElement = arrQueue[0];
document.write("<br/><br/> Front element of the queue: ", frontElement);

let isEmpty = arrQueue.length === 0;
document.write("<br/><br/> Is the queue empty?", isEmpty);

document.write("<hr>");

// dequeing again
dequeueArrQueue = arrQueue.shift();
dequeueArrQueue = arrQueue.shift();
frontElement = arrQueue[0];

document.write("<br/><br/> Front element of the queue: ", frontElement);

isEmpty = arrQueue.length === 0;
document.write("<br/><br/> Is the queue empty?", isEmpty);
