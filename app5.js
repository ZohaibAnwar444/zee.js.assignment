    //Chapter # 05.
    //Task  01.
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var sum = number1 +number2;
document.write("Sum of "+ number1 + " $ " + number2 + " is " + sum);
    //Task # 02.
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var subtraction = number1 - number2;
document.write("Subtraction of "+ number2 + " from " + number1 + " is " + subtraction);
    
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var multiply = number1 * number2;
document.write("Multiply of "+ number1 + " $ " + number2 + " is " + multiply);

var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var division = number1 / number2;
document.write("Division of "+ number1 + " by " + number2 + " is " + division);

var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var modulus = number1 +number2;
document.write("Modulus of "+ number1 + " by " + number2 + " is " + modulus);
    //Task # 03.
var number;
document.write(number+"<br>");
number = 5;
document.write("Initial value is: "+ number+"<br>");
number++;
document.write("Value after increment is :"+ number +"<br>");
number = number + 7;
document.write("Value after addition is :"+number+"<br>");
number--;
document.write("Value after decrement is :"+number+"<br>")
var remainder = number % 3;
document.write("The remainder is :"+remainder+"<br>");
    //Task # 04.
var ticketCost = 600;
var purchase = +prompt("How many ticket you want to buy");
var totalCost = ticketCost * purchase;
document.write("Total cost to buy "+purchase+" tickets to a movie is "+totalCost);
    //Task # 05.
document.write("Table of 4"+"<br>");
for(var i = 1; i <=10; i++){
    document.write("4"+"x"+i+" ="+ 4*i+"<br>");
}
    //Task # 06.
var C = +prompt("Enter Celsius Temp");
var F = +prompt("Enter Fahrenheit Temp");
C = (F -32) * 5 / 9;
F = (C * 9/5) +32;
document.write(C +"C'"+" is "+ F + "F' " +"<br>");
document.write(F + "F'" +" is "+ C + "C'" +"<br>");
    //Task # 07.
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 2;
var shipingCharges = 100;
var totalCost = priceItem1*quantityItem1 + priceItem2*quantityItem2 + shipingCharges;
document.write("Price of item 1 is " + priceItem1 +"<br>");
document.write("Quantity of item 1 is " + quantityItem1 +"<br>");
document.write("Price of item 2 is " + priceItem2 +"<br>");
document.write("Quantity of item 2 is " + quantityItem2 +"<br>");
document.write("Shipping Charges "+shipingCharges +"<br>");
document.write("Total Cost of your order is "+totalCost +"<br>");
    //Task # 08.
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("Total Marks "+totalMarks +"<br>");
document.write("Marks Obtained "+marksObtained +"<br>");
document.write("Percentage "+percentage +"<br>");
    //Task # 09.
var totalCurrency = (10*104.80) + (25*28);
document.write("Total Currency "+totalCurrency +"<br>");
    //Task # 10.
var number = 5;
var calculation = 5 + 5 * 10 / 2 ;
document.write(calculation);
   // Task # 11.
var currentYear = 2020;
var birthYear = 1998;
var age = currentYear - birthYear;
document.write("Current Year "+currentYear+"<br>");
document.write("Birth Year "+birthYear+"<br>");
document.write("Your age is "+age+"<br>");
    //Task # 12.
var radius = 4;
var circumference = 2 * 3.14 * radius;
var area = 3.14 * radius *radius;
document.write("Radius of Circle is "+ radius + "<br>");
document.write("Circumference of Circle is "+ circumference + "<br>");
document.write("Area of Circle is "+ area + "<br>");
    //Task # 13.
var snack = "Chocolate";
var age = 20;
var maxAge = 60;
var amountPerDay = 5;
var total = amountPerDay * 365 * (maxAge - age);
document.write("Favourite Snack :"+snack+"<br>");
document.write("Current Age :"+age+"<br>");
document.write("Estimated Maximum Age :"+maxAge+"<br>");
document.write("Per Day Snack :"+amountPerDay+"<br>");
document.write("You will need "+total+" chocolate until the age of "+maxAge+"<br>");






