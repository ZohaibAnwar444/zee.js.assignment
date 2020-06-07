    //Chapter # 9-11.
    //Task # 01.
var cityName = prompt("Write City Name :");
if(cityName === "karachi"){
    alert("Welcome to the city of lights")
}
else{
    alert("Try Again..! "+"  "+ "Hint: International city name");
}
    //Task # 02.
var gender = prompt("Write your gender");
if( gender === "male"){
    alert("Good Morning Sir.!");
}
else if(gender === "female"){
    alert("Good Mornig Maam.!");
}
else{
    alert("Try Again..!");
}
   // Task # 03.
var color = prompt("Write your signal color");
if(color === "red"){
    alert("Must Stop..!");
}
else if(color === "yellow"){
    alert("Ready to move.!")
}
else if(color === "green"){
    alert("Move Now..!");
}
else{
    alert("Write correct one.")
}
    //Task # 04.
var fuel = +prompt("Remaining fuel in your vehicle");
if(fuel < 0.25){
    alert("Please refil your fuel..!");
}
else{
    alert("Can travel");
}
    //Task # 05.
    //a is true
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
    //b is false
var b = 82;
 if (b++ === 83){ 
    alert("given condition for variable b is true");
 }
    //c (condition 2 & 4 true)
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true"); 
} 
if(c === 14){
    alert("condition 4 is true");
} 
    //d is ture cost equal
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
    // e true
if (true){ 
    alert("True");
} 
if (false){
    alert("False");
} 
    //f (car is smaller than cat)
if("car" < "cat"){
    alert("car is smaller than cat");
} 
    //Task # 06.
var totalMarks = +prompt("Total Marks in three subjects");
var obtMarks = +prompt("Total obtained marks in three subjects");
percentage = (obtMarks/totalMarks)*100;
document.write("<h1>"+ "Mark Sheet"+ "<br>")
document.write("<h2>"+"Total Marks :"+totalMarks+ "<br>");
document.write("<h2>"+"Obtained Marks :"+obtMarks+"<br>");
document.write("<h2>"+"Percenatge :"+percentage+"%"+"<br>");
if(percentage >= 80){
    document.write("<h2>"+"Grade :"+"A-One"+ "<br>")
    document.write("<h2>"+ "Remarks :"+"Excellent"+ "<br>");
}
else if(percentage >= 70){
    document.write("<h2>"+"Grade :"+" A"+ "<br>")
    document.write("<h2>"+ "Remarks :"+" Good"+ "<br>");
}
else if(percentage >= 60){
    document.write("<h2>"+"Grade :"+" B"+ "<br>")
    document.write("<h2>"+ "Remarks :"+"You Need to Imporve"+ "<br>");
}
else{
    document.write("<h2>"+"Grade :"+" Fail"+ "<br>")
    document.write("<h2>"+ "Remarks :"+"Sorry"+ "<br>");
}
    //Task # 07.
var secNumber = 6;
var userNumber = +prompt("Write a number 1 to 10");
if(userNumber === secNumber){
    alert("Bingo ! Correct Answer.")
}
else if(userNumber === --secNumber){
alert("Close enough to the correct answer")
}
else if(userNumber === ++secNumber+1){
    alert("Close enough to the correct answer")
    }
else{
    alert("Try Again..!")
}
    //Task # 08.
var number = +prompt("Write a number");
if(number % 3 === 0){
    alert("Given Number is divisible by 3");
}
else{
    alert("Sorry..! Write another number");
}
    //Task # 09.
var number = +prompt("Write a number");
if(number % 2 === 0){
    alert("Given number is Even");
}
else{
    alert("Given number is odd");
}
    //Task # 10.
var Temp = +prompt("Write Temperature of your location");
if(Temp > 40){
    alert("Its too hot today..!")
}
else if(Temp > 30){
    alert("The weather is normal today")
}
else if(Temp > 20){
    alert("Today's weather is cool")
}
else if( Temp > 10){
    alert("OMG! today's weather is cool")
}
else{
    alert("Wow..! Cooled :)")
}
    //Task # 11.
var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var sign = prompt("Addition,Subtraction,Multiply,Division. Write which one you want.\n Capital first letter");
if(sign === "Addition"){
    var Sum = num1 + num2;
    alert("Sum of "+num1+" & "+num2+" is "+Sum);
}
else if(sign === "Subtraction"){
    if(num1 > num2){
    var Sub = num1 - num2;
    alert("Subtraction of "+num2+" from "+num1+" is "+Sub);
    }
    else{
        var Sub = num2 - num1;
        alert("Subtraction of "+num1+" from "+num2+" is "+Sub);
    }
}
else if(sign === "Multiply"){
    var Mul = num1 * num2;
    alert("Multiply of "+num1+" & "+num2+" is "+Mul);
}
else if(sign === "Division"){
    if(num1 > num2){
    var Div = num1 / num2;
    alert("Division of "+num1+" by "+num2+" is "+Div);
}
else{
    var Div = num2 / num1;
    alert("Division of "+num2+" by "+num1+" is "+Div);
}
}
else{
    alert("Write again opertor..!")
}

