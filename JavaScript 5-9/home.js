// Chapter 6 (Math Expression II) 

// 1. Code a short form of x = x + 1; Use either of the two legal expressions.

var x = x + 1;
x= x++;
x= ++x;


//2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

var x = 100;
x = x--
x = --x

//3. var x = 50; var y = x++; What is the value of y?

var x = 50;
var y = x++;
alert(y);  // Value of y is 50 post increment


//4. var y = 50; var z = --y; What is the value of z?

var y = 50; 
var z = --y;
alert(z) // Value of z is 49 pre decrement

//5. In a single statement, decrement num and assign its original valueto newNum.

 var newNum = num--;

//6. In a single statement add 1 to a variable and assign its originalvalue to another variable.

var anotherVar = num++;

//7. Assign a number value to a variable. Increment the variable.Display the new value in an alert

var number = 5;
 ++number;
 alert(number);


// Chapter 7 (Math Expression III) 

//1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum? 

var calculatedNum = 2 + (2 * 6); // 14 answer


//2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?

var calculatedNum = (2 + 2) * 6;  // 24 answer

//3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?

var calculatedNum = (2 + 2) * (4 + 2); // 24 answer

//4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?

var calculatedNum = ((2 + 2) * 4) + 2; // 18 answer

//5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

var cost = (2 + 2) * (4 + 10); // 56 answer

//6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.

var units = 2 + (2 * 4) + 10; // 20 answer

//7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.

var pressure = 4 / (2 * 4);

// Chapter 8 (Concatenating Text Strings)

//1. var num = &quot;2&quot; + &quot;2&quot;; What is the value of num? Include quotation marks.

var num = "2" + "2";  // the value of num will be 22


//2. message = (&quot;Hello,&quot; + &quot;Dolly&quot;); What is the value of message? (Include the quotation marks.) Alert the statement

var message = ("Hello," + "Dolly");  
alert(message);       // the value of message will be Hello,Dolly

//3. alert(&quot;33&quot; + 3); What message displays in the alert box?

alert("33" + 3) //  answer is "333"

// 4. Write an alert that displays the concatenation of the two parts of &quot;Pakistan Zindabad&quot;

alert("Pakistan" + " Zindabad"); //  answer is "Pakistan Zindabad"


//5. Write a statement that assigns to a variable the concatenation of a string with a number.

var result = "The number is " + 42; 

//6. Assign strings to two variables. Then concatenate them and assig the result to a third variable.

var firstVariable = "Hello, ";
var secondVariable = "World!";
var combinedVariable = firstVariable + secondVariable;
alert(combinedVaribale);

// Chapter 9 (Prompts)

//1.Code a prompt with the message &quot;Enter first name&quot;. The user&#39;s response is assigned to firstName.





//2. Code a prompt with the message &quot;Country?&quot; and the default answer &quot;China&quot;. The user&#39;s response is assigned to country.





//3. Correct this statement var yourName = prompt(Enter Your Name&quot;);






//4. Code a prompt that specifies a string as the message Include a default input.






//5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user&#39;s response to a third variable.






//6. Display a prompt, including both a message and a default response. Display the user&#39;s response in an alert.



