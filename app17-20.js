    //Chapter # 17-20.
    //Task # 01.
var multiArr = [[]];
    //Task #02.
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr3 = [2,1,0,1];
var multiArr = [arr1,arr2,arr3];
for(var i = 0; i < multiArr.length; i++){
  for(var j = 0; j < multiArr[i].length; j++){
      document.write(multiArr[i][j]);
  }
  document.write("<br>");
}
    //Task # 03.
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}
    //Task #04.
var tableNum = +prompt("Enter a number of multiplication table");
var tableLength = +prompt("Enter the length of multiplication table");
document.write("Multiplication Table of "+tableNum+"<br>");
document.write("Length "+tableLength+"<br>")
for(var i = 1; i <= tableLength; i++){
    document.write(tableNum + "x" + i + " = " + tableNum*i +"<br>");
}
    //Task # 05.
var fruits = ["apple","banana","mango","orange","stawbery"];
for(var i = 0; i < fruits.length; i++){
    document.write(fruits[i]+"<br>")
}
document.write("<br>");
for(var j = 0; j < fruits.length; j++){
    document.write("Element at index "+j+" is "+fruits[j]+"<br>")
}
    //Task # 06.
var series = prompt("Which series you want\nCounting, Reverse Counting, Even, Odd, Series","Write Here");
series = series.toLowerCase();
if(series === "counting"){
    var startNum = +prompt("Starting Number.?","Integer");
    var lastNum = +prompt("Last Number.?","Integer");
    document.write("Counting :"+" ")
    for(var i = startNum; i <= lastNum; i++){
        document.write(i +" ");
    }
}
else if(series === "reverse counting"){
    var startNum = +prompt("Starting Number.?","Integer");
    var lastNum = +prompt("Last Number.?","Integer");
    document.write("Reverse Counting :"+" ")
    for(var i = startNum; i >= lastNum; i--){
        document.write(i +" ");
    }
}
else if(series === "even"){
    var startNum = +prompt("Starting Number.?","Integer");
    var lastNum = +prompt("Last Number.?","Integer");
    document.write("Even :"+" ")
    for(var i = startNum; i <= lastNum; i+=2){
        document.write(i +" ");
    }
}
else if(series === "odd"){
    var startNum = +prompt("Starting Number.?","Integer");
    var lastNum = +prompt("Last Number.?","Integer");
    document.write("Odd :"+" ")
    for(var i = startNum; i <= lastNum; i+=2){
        document.write(i +" ");
    }
}
else if(series === "series"){
    var startNum = +prompt("Starting Number.?","Integer");
    var lastNum = +prompt("Last Number.?","Integer");
    document.write("Series :"+" ")
    for(var i = startNum; i <= lastNum; i+=2){
        document.write(i +"k"+" ");
    }
}
    //Task # 07.
var A = ["cake","apple pie","cookie","chips","patties"];
var input = prompt("Welcome to Zee Bakry. What do you want to order.?")
if(input === "cake" || input === "apple pie" || input === "cookie" || input === "chips" || input === "patties"){
    alert(input+" available in our bakery");
}
else{
    alert("Sorry");
}
    //Task # 08.
    var array = [24 , 53, 78, 91, 12];
    var largest= 0;
    
    for (i=0; i<=largest;i++){
        if (array[i]>largest) {
            var largest=array[i];
        }
    }
    document.write(largest)
    //Task # 09.
 for(var i = 1; i <= 20; i++)(
     document.write(5*i + "<br>")
 )