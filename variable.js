// var a = 3;
// var b = 8;

// var c = a;

// a = b;
// b = c;
// console.log(a);
// console.log(b);

// // var output = prompt("character num");
// // let num = output.length;
// // var left = 600 - num;

// // console.log(num + " plus only left " + left);

// //slice funtions
// // .slice(0, 10);

// let name = "babalo";
// console.log(name.toUpperCase());

// var prompt = prompt("enter name");

// alert(prompt.toUpperCase());
// function getMilk() {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// Code
// Task 1
// Generate a random number between 1 and 100 and store it in a variable called randomNum. Then use an if/else: if the number is greater than 50, log "High number!", otherwise log "Low number!"

var randomNum = function number() {
  var conditionalNum = Math.floor(Math.random() * 100) + 1;
  if (conditionalNum > 50) {
    return console.log("High number!");
  } else {
    return console.log("Low number!");
  }
};
console.log(randomNum());

// Code
// Task 2
// Write a function called gradeChecker that takes a parameter score. Return "Distinction" if score >= 75, "Pass" if score >= 50, and "Fail" if below 50. Call it with 3 different scores and log each result

function gradeChecker(score) {
  if (score >= 75) {
    return "distinction";
  } else if (score >= 50) {
    return "pass";
  } else {
    return "fail";
  }
}
console.log(gradeChecker(30)); //fail
console.log(gradeChecker(51)); //pass
console.log(gradeChecker(90)); //distiction

// Code
// Task 3
// Build a function called loveScore that takes two parameters: name1 and name2. Generate a random number between 1 and 100. If the score is above 70 log "Great match!", if between 40 and 70 log "It could work!", otherwise log "Keep looking!"
function loveScore(name1, name2) {
  var score = Math.floor(Math.random() * 100) + 1;
  if (score >= 70) {
    return console.log("greate match!");
  } else if (score >= 40 || score <= 70) {
    return console.log("It could work!");
  } else {
    return console.log("Keep looking!");
  }
}
console.log(loveScore());

// Code
// Task 4
// Write a function called isEven that takes a number and uses the modulo operator to return "Even" or "Odd". Log the result for the numbers 4, 7, and 12.
function isEven(num) {
  if (num * 2) {
  }
}

console.log(isEven());
console.log(isEven());
console.log(isEven());

// Code
// Task 5
// Write a function called bmiAdvanced that takes weight and height. Calculate BMI (weight / height²). Return "Underweight" if under 18.5, "Normal" if under 25, "Overweight" if under 30, "Obese" if 30 or above. Log the result for weight 70, height 1.75.
function bmiAdvanced(weight, height) {
  var bmiCalc = weight / (height * height);
  if (bmiCalc < 18.5) {
    return "Underweight";
  } else if (bmiCalc <= 25 && bmiCalc >= 18.5) {
    return "Normal";
  } else if (bmiCalc < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(bmiAdvanced(50, 1.75));

// Read & Extend
// R&E 1
// Look at this code carefully:
// var age = 20;
// var canVote;

// if (age >= 18) {
//   canVote = "Yes, you can vote.";
// } else {
//   canVote = "No, you cannot vote yet.";
// }
// console.log(canVote);
// Step 1: Explain in your own words what this code does line by line. : 1st line age is declared and value is 20 and canVote is also declared but no value and there is a condistional statement if statement for if age is greater or equal to 18 it will out put yes,... other wise it will out put no... then it log to console the vale of canVOTE.
// Step 2: Extend it — add a condition: if age is under 0 or over 120, log "Invalid age entered."
var age = 20;
var canVote;

if (age >= 18) {
  canVote = "Yes, you can vote.";
} else if (age <= 0 || age >= 120) {
  console.log("Invalid age entered.");
} else {
  canVote = "No, you cannot vote yet.";
}
console.log(canVote);

// Read & Extend
// R&E 2
// Look at this code carefully:
// function getDayType(day) {
//   if (day === "Saturday" || day === "Sunday") {
//     return "Weekend";
//   } else {
//     return "Weekday";
//   }
// }
// console.log(getDayType("Monday"));
// console.log(getDayType("Saturday"));

// Step 1: Explain what this function does and what || means.: this function checks if day of the week is a week end or weekday and || means another option.

// Step 2: Extend it — if day is "Friday", return "Almost the weekend!"
function getDayType(day) {
  if (day === "Saturday" || day === "Sunday") {
    return "Weekend";
  } else if (day === "friday") {
    return "Almost the weekend!";
  } else {
    return "Weekday";
  }
}
console.log(getDayType("Monday"));
console.log(getDayType("Saturday"));
console.log(getDayType("friday"));

// Debug
// Bug 1 — Find and fix the error
var num = Math.random() * 100;
if (num > 50) {
  console.log("High");
} else if (num < 50) {
  console.log("Low");
}

// Debug
// Bug 2 — Find and fix the error
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "teen ";
  }
}
console.log(isAdult(15));

// Debug
// Bug 3 — Find and fix the error
var score = 85;
if (score === 100) {
  console.log("Perfect score!");
} else {
  console.log("Not perfect.");
}

// Quiz
// Question 1
// What does Math.floor(Math.random() * 6) + 1 generate?
// A random whole number between 0 and 6

// Quiz
// Question 2
// What does the === operator check?
//Only the data type

// Quiz
// Question 3
// Which symbol means AND in JavaScript?
//&&

// Quiz
// Question 4
// What is the value of Math.random()?
// A decimal between 0 (inclusive) and 1 (exclusive)

// Quiz
// Question 5
// If an if condition is true, what happens to the else block?
//It is skipped entirely

//Theory
// T1
// In your own words, what is the difference between == and ===? Give a short example showing when they behave differently. both checks value but == does not check data type but === does.

// Theory
// T2
// What is the purpose of Math.floor() when generating random numbers? What would happen if you used Math.random() * 10 without it? to round the number to  a whole number, it would come upwith a decimal

// Theory
// T3
// When would you use else if instead of just multiple separate if statements? What is the difference in how they run? if there is another condition i would use else if.

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
