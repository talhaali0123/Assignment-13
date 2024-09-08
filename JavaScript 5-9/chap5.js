// Chapter 05 //

// 1.Write a program that take two numbers & add them in a new variable. Show the result in your browser. Sum of 3 & 5 is 8 //

var num1 = 3;
var num2 = 5;
var result = num1 + num2
document.write("Sum of 3 & 5 is : " + result);

// // 2. Repeat task1 for subtraction, multiplication, division & modulus. //

// // Subtraction
var sub = num1 - num2;
document.write("The difference is: " + sub);

// // Multiplication
var mul = num1 * num2;
document.write("The product is: " + mul);

// // Division
var div = num1 / num2;
document.write("The quotient is: " + div);

// // Modulus
var mod = num1 % num2;
document.write("The remainder is: " + mod);


// // 3. Do the following using JS Mathematic Expressions //

//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
//c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initia value: 5”. 
//e. Increment the variable.  
//f. Show the value of variable in your browser like “Value after increment is: 6”. 
//g. Add 7 to the variable. 
//h. Show the value of variable in your browser like “Value after addition is: 13”. 
//i. Decrement the variable. //
//j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//k. Show the remainder after dividing the variable’s value by 3. 
//l. Output : “The remainder is : 0”. 

var value;
document.write("Value after variable declaration is: " + value);
value = 5;
document.write("Initial value: " + value);
value++;
document.write("Value after increment is: " + value);
value += 7;
document.write("Value after addition is: " + value);
value--;
document.write("Value after decrement is: " + value);
var remainder = value % 3;
document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5ticketsto a movie. Example output: //

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Tota cost to buy 5 tickets to movie is: " + totalCost + " PKR");


// 5. Write a script to display multiplication table of any number in your browser. E.g //

var num = 4;
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make aconverter based on the steps here.

// a. Store a Celsius temperature into a variable. //
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. //
// c. Now store a Fahrenheit temperature into a variable. //
//  d. Convert it to Celsius & output “NNoF is NNoC”. //

// Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F");

// Fahrenheit to Celsius
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables //
//a. Price of item 1 
//b. Price of item 2 
//c. Ordered quantity of item 1 
//d. Ordered Quantity of item 2 
//e. Shipping charges 
//Compute the total cost & show the receipt in your browser.

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Total cost: " + totalCost);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser //

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%");

// 9.  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) //

var usd = 10;
var sar = 25;
var pkr = (usd * 104.80) + (sar * 28);
document.write("Total in PKR: " + pkr);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//a. Add 5 
//b. Multiply by 10 
//c. Divide the result by 2 
//Perform all calculations in a single expression

var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("The result is: " + result);

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
//a. Store the current year in a variable. 
//b. Store their birth year in a variable. 
//c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = 2024;
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old");

// 12. The Geometrizer: Calculate properties of a circle. 
//a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
//(Hint : Circumference of a circle = 2 π r , π = 3.142) 
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = 2 * 3.142 * radius;
document.write("The circumference is " + circumference);
var area = 3.142 * radius * radius;
document.write("The area is " + area);

// 13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
//a. Store your favorite snack into a variable 
//b. Store your current age into a variable. 
//c. Store a maximum age into a variable. 
//d. Store an estimated amount per day (as a number). 
//e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var perDay = 3;
var total = (maxAge - currentAge) * perDay;
document.write("You will need " + total + " " + snack + "s to last you until the ripe old age of " + maxAge);




