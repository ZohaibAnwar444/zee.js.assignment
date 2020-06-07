    //Chapter # 14-16.
    //Task # 01.
var studentNamesL = [];
    //Task #02.
var studentNamesOb = new studentNamesOb ();
var studentNamesO = ["","","",""]
    //Task # 03.
var stringArray = ["Zohaib","Anwar"];
    //Task # 04.
var numberArray = ["1","3","5"];
    //Task # 05.
var boolArray = ["true","false"];
    //Task # 06.
var mixedArray = ["1","Zohaib","2","Anwar","Fine"];
    //Task # 07.
var eduArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PHD"];
document.write("<h1>"+"Qualification"+"<br>");
for(var i = 0; i <= 7; i++){
    document.write(i+1+")"+eduArray[i]+"<br>");
}
    //Task # 08.
var names = ["John","Ali","Basit"];
var scores = ["345","400","410"];
document.write("<h2>"+"Score of "+names[0]+" is "+scores[0]+"."+" Percentage :"+ (scores[0]/500)*100 +"%"+"<br>" );
document.write("<h2>"+"Score of "+names[1]+" is "+scores[1]+"."+" Percentage :"+ (scores[1]/500)*100 +"%"+"<br>" );
document.write("<h2>"+"Score of "+names[2]+" is "+scores[2]+"."+" Percentage :"+ (scores[2]/500)*100 +"%"+"<br>" );
    //Task # 09.
var colorNames = ["Blue","Brown","Black"];
document.write("<h1>"+"Colors are :"+"<br>")
for(var i = 0; i <= 2; i++){
    document.write(colorNames[i]+"<br>");
}
var userName = prompt("Which color you want to add at the begining?");
colorNames.unshift(userName);
document.write("Updated List after adding at begining:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
var userEnd = prompt("Which color you want to add at the end");
colorNames.push(userEnd);
document.write("Updated List after adding at the end:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
colorNames.unshift("Purple","Green")
document.write("Updated List after adding two colors at begining:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
colorNames.shift();
document.write("Updated List after removing first color at begining:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
colorNames.pop();
document.write("Updated List after removing last color at the end:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
var startNum = +prompt("From where you want to add colors");
var add = prompt("Which color you want to add");
colorNames.splice(startNum,0,add);
document.write("Updated List after adding user desire index:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
var askNum = +prompt("From where you want to remove colors");
var askUser = +prompt("How many color you want to remove");
colorNames.splice(askNum,askUser);
document.write("Updated List after removing user desire index:"+"<br>");
for(var i = 0; i < colorNames.length; i++){
    document.write(colorNames[i]+"<br>");
}
   // Tassk # 10.
var studentMarks = [348,325,310,385,200];
studentMarks.sort();
alert(studentMarks);
    //Task # 11.
var cities = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
alert(cities.slice(0,2));
    //Task # 12.
var arr = ["This","is","my","cat"];
var s = arr.join(" ");
alert(s);
    //Task # 13.
var equipments = ["Keyboard","Mouse","Printer","Monitor"];
for(var i =0; i < equipments.length; i++){
    alert(equipments[i]);
}
    //Task # 14.
var equipments = ["Keyboard","Mouse","Printer","Monitor"];
for(var i = 3; i >=0; i--){
    alert(equipments[i]);
}
    //Task # 14.
var arr = ["Samsung","Nokia","Oppo"]
    function display() {
var mylist = document.getElementById("list");
document.write(mylist.option[mylist.selectedIndex].text);
    }