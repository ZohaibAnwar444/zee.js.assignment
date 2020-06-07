    //Chapter # 6-9.
    //Task # 01.
document.write("Result." + "<br>");
var a = 10;
document.write("The value of a is "+ a + "<br>");
document.write(".........................." +"<br>" +"<br>");
a = ++a;
document.write("The value of ++a is "+ a + "<br>");
document.write("Now the value of a is "+a + "<br>" + "<br>");
a = a++;
document.write("The value of a++ is "+  a +"<br>");
a = ++a;
document.write("Now the value of a is "+ a + "<br>" + "<br>");
a = --a;
document.write("The value of --a is "+ a + "<br>");
document.write("Now the value of a is "+a + "<br>" + "<br>");
a = a--;
document.write("The value of a-- is "+  a +"<br>");
a = --a;
document.write("Now the value of a is "+ a + "<br>" + "<br>");
    //Task # 02.
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
var c = --a;
document.write("a is "+c+"<br>");
var d = --a - --b;
document.write("b is"+d+"<br>")
document.write("Result is "+result+"<br>");
    //Task # 03.
var greet = prompt("Write Your Name");
alert("Welcome "+greet+" !");
    //Task #04.
var num = +prompt("Write a number for table");
document.write("Table of "+num + "<br>")
if(num === 0){
    num = 5;
for(var i = 1; i <=10; i++){
    document.write(num + "x" + i + " = " + num*i + "<br>");
}
}
else{
    for(var i = 1; i <=10; i++){
        document.write(num + "x" + i + " = " + num*i + "<br>");
    }
}
    //Task # 05.
var sub1 = prompt("Name of First Subject");
var sub2 = prompt("Name of Second Subject");
var sub3 = prompt("Name of Third Subject");
var obtMarksub1 = +prompt("Obtained Marks of First Subject");
var obtMarksub2 = +prompt("Obtained Marks of Second Subject");
var obtMarksub3 = +prompt("Obtained Marks of Third Subject");
var totalsub1, totalsub2, totalsub3;
totalsub1 = 100;
totalsub2 = 100;
totalsub3 =100;
percentage1 = (obtMarksub1/totalsub1) * 100;
percentage2 = (obtMarksub2/totalsub2) * 100;
percentage3 = (obtMarksub3/totalsub3) * 100;
document.write("<b>"+"Subjects" + "    ");
document.write("<b>" +"Total Marks"+ "    " );
document.write("<b>" +"Obtained Marks"+ "    "); 
document.write("<b>" +"Percentage"+ "    " +"<br>"); 
document.write(sub1)
document.write(totalsub1 +"  ");
document.write(obtMarksub1 + " ");
document.write(percentage1 + " " +"<br>");
document.write(sub2);
document.write(totalsub2 +" ");
document.write(obtMarksub2 + " ");
document.write(percentage2 + " " +"<br>");
document.write(sub3);
document.write(totalsub3 +" ");
document.write(obtMarksub3);
document.write(percentage3 + " " +"<br>");




