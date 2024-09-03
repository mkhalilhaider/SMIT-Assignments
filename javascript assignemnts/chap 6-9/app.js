// q 1
var a = 10;
document.write(
  "Result: <br>The Value of <b>a</b> is: " +
    a +
    "<br>.................................... <br><br>The value of <b>++a</b> is: " +
    ++a +
    "<br>Now the value of <b>a</b> is: " +
    a +
    "<br><br>The value of <b>a++</b> is: " +
    a++ +
    "<br>Now the value of <b>a</b> is: " +
    a +
    "<br><br>The value of <b>--a</b> is: " +
    --a +
    "<br>Now the value of <b>a</b> is: " +
    a +
    "<br><br>The value of <b>a--</b> is: " +
    a-- +
    "<br>Now the value of <b>a</b> is: " +
    a
);


// q2
var a = 2;
var b = 1;

var step1 = --a; // Pre-decrement: a becomes 1
var step2 = --b; // Pre-decrement: b becomes 0
var step3 = ++b; // Pre-increment: b becomes 1
var step4 = b--; // Post-decrement: b becomes 0 after this line

var result = step1 - step2 + step3 + step4;

document.write(
  "<b>--a</b> is: " + step1 +
  " <br><b>--b</b> is: " + step2 +
  "<br><b>++b</b> is: " + step3 +
  "<br><b>b--</b> is: " + step4 +
  "<br><br>Final Result: " + result
);

// q3
let name=prompt("Enter your name");
alert("Welcome "+ name+ " on our wesite");

// q5
let num = +prompt("Enter the number");

if (num > 0 || num < 0) {
  document.write(num + "x1=" + num * 1 + "<br>");
  document.write(num + "x2=" + num * 2 + "<br>");
  document.write(num + "x3=" + num * 3 + "<br>");
  document.write(num + "x4=" + num * 4 + "<br>");
  document.write(num + "x5=" + num * 5 + "<br>");
  document.write(num + "x6=" + num * 6 + "<br>");
  document.write(num + "x7=" + num * 7 + "<br>");
  document.write(num + "x8=" + num * 8 + "<br>");
  document.write(num + "x9=" + num * 9 + "<br>");
  document.write(num + "x10=" + num * 10 + "<br>");
} else {
  document.write(5 + "x1=" + 5 * 1 + "<br>");
  document.write(5 + "x2=" + 5 * 2 + "<br>");
  document.write(5 + "x3=" + 5 * 3 + "<br>");
  document.write(5 + "x4=" + 5 * 4 + "<br>");
  document.write(5 + "x5=" + 5 * 5 + "<br>");
  document.write(5 + "x6=" + 5 * 6 + "<br>");
  document.write(5 + "x7=" + 5 * 7 + "<br>");
  document.write(5 + "x8=" + 5 * 8 + "<br>");
  document.write(5 + "x9=" + 5 * 9 + "<br>");
  document.write(5 + "x10=" + 5 * 10 + "<br>");
}


// q6
let sub1 = prompt("Enter the first subject");
let sub2 = prompt("Enter the second subject");
let sub3 = prompt("Enter the third subject");

let totalMarks = 100;

let obt1 = +prompt("Enter the obtained marks for " + sub1);
let obt2 = +prompt("Enter the obtained marks for " + sub2);
let obt3 = +prompt("Enter the obtained marks for " + sub3);

let perc1 = (obt1 / totalMarks) * 100;
let perc2 = (obt2 / totalMarks) * 100;
let perc3 = (obt3 / totalMarks) * 100;

document.write(`
  <table border="1">
    <tr>
      <th>Subject</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
      <th>Percentage</th>
    </tr>
    <tr>
      <td>${sub1}</td>
      <td>${totalMarks}</td>
      <td>${obt1}</td>
      <td>${perc1}%</td>
    </tr>chap 6-9
    <tr>
      <td>${sub2}</td>
      <td>${totalMarks}</td>
      <td>${obt2}</td>
      <td>${perc2}%</td>
    </tr>
    <tr>
      <td>${sub3}</td>
      <td>${totalMarks}</td>
      <td>${obt3}</td>
      <td>${perc3}%</td>
    </tr>
  </table>
`);
