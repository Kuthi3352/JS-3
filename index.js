// bài tập 1
var btn = document.getElementById ("btn");
btn.onclick = function (){
var workingDays = document.getElementById ("workingDaysInput").value;
var oneSalary = document.getElementById("oneSalaryInput").value;
var totalSalary = 0 ;
totalSalary = workingDays * oneSalary ;
document.getElementById("result").innerHTML = totalSalary;

};

// bài tập 2
var btnMedium = document.getElementById("btnMedium");
btnMedium.onclick = function (){
var realNumberOne = +document.getElementById ("realNumberOneInput").value;
var realNumberTwo = +document.getElementById ("realNumberTwoInput").value;
var realNumberThree = +document.getElementById ("realNumberThreeInput").value;
var realNumberFour = +document.getElementById ("realNumberFourInput").value;
var realNumberFive = +document.getElementById ("realNumberFiveInput").value;
var totalMedium = 0 ;
totalMedium = (realNumberOne + realNumberTwo + realNumberThree + realNumberFour + realNumberFive) / 5
// var tenThousand = Math.floor(realNumber / 10000);
// var aThousand = Math.floor(realNumber % 10000 / 1000) ;
// var hundreds = Math.floor(realNumber % 10000 % 1000 / 100) ;
// var dozens = Math.floor(realNumber % 10000 % 1000 % 100 / 10);
// var units = Math.floor(realNumber % 10000 % 1000 % 100 % 10);
// totalMedium = (tenThousand + aThousand + hundreds + dozens + units) / 5 ;

document.getElementById("resultMedium").innerHTML = totalMedium;

}

// bài tập 3
var btnMoney = document.getElementById("btnMoney");
btnMoney.onclick = function () {
var usdMoney = document.getElementById("usdMoneyInput").value;
var exchange = 23500;
var totalUsd = 0 ;
totalUsd = usdMoney * exchange ;
document.getElementById("resultMoney").innerHTML = totalUsd ;
};  

// bài tập 4

var btnRectangle = document.getElementById("btnRectangle");
btnRectangle.onclick = function() {
var height = +document.getElementById("heightInput").value;
var width = +document.getElementById("widthInput").value;
var totalAcreage = height * width ;
var totalPerimeter = (height + width) * 2 ;

document.getElementById("resultAcreage").innerHTML = totalAcreage ;
document.getElementById("resultPerimeter").innerHTML = totalPerimeter ;

}

// bài tập 5
var btnNumber = document.getElementById("btnNumber");
btnNumber.onclick = function(){
var number = document.getElementById("numberInput").value;
var totalNumber = 0 ;
var dozens = Math.floor(number / 10 );
var units = Math.floor(number % 10 );
totalNumber = (dozens + units) ;
document.getElementById("resultNumber").innerHTML = totalNumber ;
}