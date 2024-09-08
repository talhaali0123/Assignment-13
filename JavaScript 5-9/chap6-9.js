// Chapter 6-9 //

// 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

var a = 10;  
document.write("The value of a is : " + a);
a = ++a
document.write("Now the value of a is : " + a);
a = a++
document.write("Now the value of a is : " + a);
a = --a
document.write("Now the value of a is : " + a);
a = a--
document.write("Now the value of a is : " + a);

// 2. What will be the output in variables a, b & result after execution of the following script: 
//var a = 2, b = 1; 
//var result = --a - --b + ++b + b--; 
//Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a: " + a + ", b: " + b + ", result: " + result);

// 3. Write a program that takes input a name from user & greet the user.

var userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var number = prompt("Enter a number:", 5);  
number = number ? number : 5;

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// 6. Take 
//a) Take three subjects name from user and store them in 3 different variables. 
//b) Total marks for each subject is 100, store it in another variable. 
//c) Take obtained marks for first subject from user and stored it in different variable. 
//d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");
var totalMarks = 100;

var obtainedMarks1 = prompt("Enter marks obtained in " + subject1);
var obtainedMarks2 = prompt("Enter marks obtained in " + subject2);
var obtainedMarks3 = prompt("Enter marks obtained in " + subject3);

var totalObtained = parseFloat(obtainedMarks1) + parseFloat(obtainedMarks2) + parseFloat(obtainedMarks3);
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<table border='0'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage +"</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage + "</td></tr>");
document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td><td>Percentage</td><td colspan='2'>" + percentage + "%</td></tr>");




