//function to create an array of that year in the input
function assignYear(year){
var start = 6;
for(var i=2000;i<year;i++){
	if(i%4==0){
		for(var j=0;j<366;j++){
			if(start==7){
				start =0;
			}	
			start++;
		}
	}
	else{
		for(var j=0;j<365;j++){
			if(start==7){
				start =0;
			}	
			start++;	
		}
	}
}
// console.log(start);
var months = [];

function assignMonth(days){
  var x = [];
  for(var i=0;i<days;++i){
    if(start == 1){
		x[i] = "Mon";
	}
	else if(start == 2){
		x[i] = "Tue";
	}
	else if(start == 3){
		x[i] = "Wed";
	}
	else if(start == 4){
		x[i] = "Thu";
	}
	else if(start == 5){
		x[i] = "Fri";
	}
	else if(start == 6){
		x[i] = "Sat";
	}
	else if(start == 7){
		x[i] = "Sun"
		start = 0;
	}
	start++;
  }
  return x;
}


months[0] = assignMonth(31); 
if(year%4==0)
months[1] = assignMonth(29);
else
months[1] = assignMonth(28);

months[2] = assignMonth(31);
months[3] =assignMonth(30);
months[4] = assignMonth(31);
months[5] = assignMonth(30);
months[6] =assignMonth(31);
months[7] =assignMonth(31);
months[8] =assignMonth(30);
months[9] =assignMonth(31);
months[10] =assignMonth(30);
months[11] = assignMonth(31);

return months;
}
//function year ends hear

//function to assign months to html div
function currentMonth(month){
	var x="-";
	if(month==0){
		x="january";
	}
	if(month==1){
		x="february";
	}
	if(month==2){
		x="march";
	}
	if(month==3){
		x="april";
	}
	if(month==4){
		x="may";
	}
	if(month==5){
		x="june";
	}
	if(month==6){
		x="july";
	}
	if(month==7){
		x="august";
	}
	if(month==8){
		x="september";
	}
	if(month==9){
		x="october";
	}
	if(month==10){
		x="november";
	}
	if(month==11){
		x="December";
	}
	return x;
}
//function currentMonth ends here

function calendar(year,month){
var x = assignYear(year);
// console.log(x);
var startIndex=0;
if(x[month][0]=="Mon"){
	startIndex=1;
}
if(x[month][0]=="Tue"){
	startIndex=2;
}
if(x[month][0]=="Wed"){
	startIndex=3;
}
if(x[month][0]=="Thu"){
	startIndex=4;
}
if(x[month][0]=="Fri"){
	startIndex=5;
}
if(x[month][0]=="Sat"){
	startIndex=6;
}
if(x[month][0]=="Sun"){
	startIndex=0;
}
var arr = document.getElementsByClassName('days');
var yearHtml = document.getElementById('year');
var monthHtml = document.getElementById('month');
yearHtml.innerText="";
monthHtml.innerText="";
yearHtml.innerText=year+"";
monthHtml.innerText=currentMonth(month)+"";
document.body.style.backgroundImage="url("+getImageString(month)+")";
for(var i=0;i<arr.length;i++){
	arr[i].innerText ="";
	arr[i].style.display="block";
}

for(var i=0;i<x[month].length;i++){
	arr[i+startIndex].innerText = (i+1)+"";
}
	if(arr[35].innerText==""){
		for(var j=35;j<arr.length;j++){
			arr[j].style.display="none";
		}
	}
	
}

function getImageString(month){
	var x = "";
	if(month==0){
		x = "oldtree.jpg";
	}
	if(month==1){
		x = "bolton.jpg";
	}
	if(month==2){
		x = "greyjoy.jpg";
	}
	if(month==3){
		x = "lannister.jpg";
	}
	if(month==4){
		x = "mallister.jpg";
	}
	if(month==5){
		x = "mormont.jpg";
	}
	if(month==6){
		x = "baratheon.jpg";
	}
	if(month==7){
		x = "stark.jpg";
	}
	if(month==8){
		x = "targaryen.jpg";
	}
	if(month==9){
		x = "tully.jpg";
	}
	if(month==10){
		x = "wayne.jpg";
	}
	if(month==11){
		x = "whitewalkers.jpg";
	}
	return  x;
}
function printBackground(prevMonth,nextMonth){
	// element.style.animationName="@keyframes{from {background-image: url("+prevMonthString+")} to {background-image: url("+nextMonthString+")}}";
	// element.style.animateDuration="4s";
	// document.style.example="from {background-image: url("+prevMonthString+")} to {background-image: url("+nextMonthString+")}";
	 //document.body.style.animationName=prevMonth+"to"+nextMonth;
	 document.getElementsByTagName('body')[0].style.animationName="from"+prevMonth+"to"+nextMonth;
	 document.getElementsByTagName('body')[0].style.backgroundImage="url("+getImageString(nextMonth)+")";
	 
}


//here we call the calender function which dows all the other opeation
function startCalender(){
var year = 2017;
var month = 6;
calendar(year,month);
var nextMonthButton = document.getElementById('next');//in the next lines we talked to HTML for button functioning
nextMonthButton.addEventListener('click',nextMonth);

var prevMonthButton = document.getElementById('prev');
prevMonthButton.addEventListener('click',prevMonth);

var nextYearButton = document.getElementById('nextyear');
nextYearButton.addEventListener('click',nextYear);

var prevYearButton = document.getElementById('prevyear');
prevYearButton.addEventListener('click',prevYear);
	function nextMonth(){
	var prevMonthString = month;
	month = month+1;
	if(month==12){
		month=0;
		year=year+1;
	}
	var nextMonthString =month;
	printBackground(prevMonthString,nextMonthString);
	calendar(year,month);
	}
	function prevMonth(){
		var prevMonthString = month;
		month = month-1;
		if(month<0){
			month = 11;
			year = year-1;
		}
		var nextMonthString = month;
		printBackground(prevMonthString,nextMonthString);
		calendar(year,month);
	}
	function nextYear(){
		year = year + 1;
		calendar(year,month);
	}
	function prevYear(){
		year = year -1;
		calendar(year,month);
	}
}

//function that initializws the calender for first tym
startCalender();
