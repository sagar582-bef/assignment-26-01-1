var num1=prompt("please enter a number");
var num2=prompt("please enter a number");
var num3=prompt("please enter a number");
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
if(num1<num2&& num1<num3){
alert(num1)
}
else if(num2<num1 && num2<num3){
alert(num2);

}
else{
alert(num3);
}