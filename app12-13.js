    //Chapter # 13-13.
    //Task # 01

    //Task # 02.
var num1 = +prompt("Write first integer");
var num2 = +prompt("Write second integer");
if(num1 > num2){
    alert("Larger Integer is :"+ num1);
}
else if(num1 === num2){
    alert("Both Integers are equal");
}
else{
    alert("Larger Integer is :"+ num2);
}
    //Task # 03.
var num = +prompt("Write a number");
if(num === 0){
    alert("Number is Zero");
}
else if(num > 0){
    alert("Number is Positive");
}
else{
    alert("Number is Negative")
}
    //Task # 04.
var charac = prompt("Write a singal charcater");
if(charac === "a" || charac === "e" || charac === "i" || charac === "o" || charac === "u"){
    alert("True");
}
else{
    alert("False");
}
    //Task # 05.
var userPasword = prompt("Write Your Password");
var pasword = "arain444";
if(userPasword === ""){
    alert("Please enter your password");
}
else if(userPasword === pasword){
    alert("Correct.! U enter right password");
}
else{
    alert("Incorrect Password. :(");
}
    //Task # 06.
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
 else {
    greeting = "Good evening"; 
}
alert(greeting);
    //Task # 07.
var time = +prompt("Write time of your watch 24 hrs format");
if(time >= 0000 && time < 1200){
    alert("Good Morning");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night")
}