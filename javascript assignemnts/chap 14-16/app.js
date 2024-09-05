// // chapter # 14-16

// // q1
// let studentNames1 = [];

// // q2
// let studentNames2 = new Array();

// // q3
// let stringsArray = ["apple", "banana", "cherry"];

// // q4
// let numbersArray = [1, 2, 3, 4, 5];

// // q5
// let booleanArray = [true, false];

// // q6
// let mixedArray = [1, "hello", true, 3.14, "world"];

// // q7
// let qualifications = ["SSC", "HSC", "BSC", "BS", "BCom", "MS", "MPhil", "PhD"];

// document.write("Available education qualifications in Pakistan: <br>");
// document.write(`1. ${qualifications[0]}<br>`);
// document.write(`2. ${qualifications[1]}<br>`);
// document.write(`3. ${qualifications[2]}<br>`);
// document.write(`4. ${qualifications[3]}<br>`);
// document.write(`5. ${qualifications[4]}<br>`);
// document.write(`6. ${qualifications[5]}<br>`);
// document.write(`7. ${qualifications[6]}<br>`);
// document.write(`8. ${qualifications[7]}<br>`);

// // q8
// let students = ["Muhamamd", "Khalil", "Haider"];
// let scores = [329, 413, 279];
// let totalMarks = 500;

// document.write(
//   `Score of ${students[0]} is ${scores[0]}, Percentage: ${(
//     (scores[0] / totalMarks) *
//     100
//   ).toFixed(2)}%<br>`
// );
// document.write(
//   `Score of ${students[1]} is ${scores[1]}, Percentage: ${(
//     (scores[1] / totalMarks) *
//     100
//   ).toFixed(2)}%<br>`
// );
// document.write(
//   `Score of ${students[2]} is ${scores[2]}, Percentage: ${(
//     (scores[2] / totalMarks) *
//     100
//   ).toFixed(2)}%<br>`
// );

// q9
let colors = ["white", "pink", "blue", "green"];
document.write(`Original colors: ${colors.join(", ")}<br>`);


let updatedColorBegin = prompt("Enter the color you want to put at the beginning:");
colors.unshift(updatedColorBegin); 
document.write(`After adding at the beginning: ${colors.join(", ")}<br>`);

let updatedColorEnd = prompt("Enter the color you want to put at the end:");
colors.push(updatedColorEnd); 
document.write(`After adding at the end: ${colors.join(", ")}<br>`);


colors.unshift("orange", "purple"); 
document.write(`After adding 'orange' and 'purple' at the beginning: ${colors.join(", ")}<br>`);


colors.shift(); 
document.write(`After deleting the first color: ${colors.join(", ")}<br>`);


colors.pop(); 
document.write(`After removing the last color: ${colors.join(", ")}<br>`);


let addIndex = parseInt(prompt("Enter the index where you want to add a color:"), 10);
if (addIndex >= 0 && addIndex <= colors.length) {
    let colorToAdd = prompt("Enter the color:");
    colors.splice(addIndex, 0, colorToAdd); 
    document.write(`After adding color at index ${addIndex}: ${colors.join(", ")}<br>`);
} else {
    document.write("Invalid index for adding color.<br>");
}


let deleteIndex = parseInt(prompt("Enter the index where you want to delete a color:"), 10);
if (deleteIndex >= 0 && deleteIndex < colors.length) {
    colors.splice(deleteIndex, 1); 
    document.write(`After deleting color at index ${deleteIndex}: ${colors.join(", ")}<br>`);
} else {
    document.write("Invalid index for deleting color.<br>");
}
