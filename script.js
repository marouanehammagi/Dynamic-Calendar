  // Get the current date
let date = new Date()

  // Store the current month and year separately
let currMonth = date.getMonth()
let currMonthfix = date.getMonth()
let currYear = date.getFullYear()
let currYearfix = date.getFullYear()

  // Select elements from the DOM
var display = document.querySelector('.list_days')
var displayDate = document.querySelector('.hammagi_date span')
var prv = document.getElementById('prv')
var next = document.getElementById('next')
var today = document.getElementById('today')


var months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
  ];

  // Function to handle calendar rendering
handelCalender = async ()=>{
  var firstDay= new Date(currYear,currMonth,1).getDay()
  var days = '';

  // Display days from previous month
  let prevMonthDays = new Date(currYear, currMonth, 0).getDate();
  for (let i = firstDay - 1; i >= 0; i--) {
      days += '<li class="other_month">' + (prevMonthDays - i) + '</li>';
  }

  // Display days from current month
  let numberDays = new Date(currYear,currMonth+1,0).getDate()
  for (var index = 1; index <= numberDays; index++) {
      days += index==date.getDate() && currYear==currYearfix && currMonth==currMonthfix ? '<li class="check">'+index+'</li>' :  '<li>'+index+'</li>';
  }

  // Display days from next month
  let nextMonthDays = 7 - (new Date(currYear, currMonth+1, 1).getDay());
  for (let i = 1; i <= nextMonthDays; i++) {
      days += '<li class="other_month">' + i + '</li>';
  }

  display.innerHTML = days;
  displayDate.innerHTML = months[currMonth]+' '+currYear;
}

handelCalender()
prv.addEventListener('click', ()=>{
  // Update current month and year when clicking previous button
    if (currMonth>=1) {
        currMonth -=1
    }else{
        currYear -=1
        currMonth = 11
    }
    handelCalender(currYear,currMonth)
})
next.addEventListener('click', ()=>{
  // Update current month and year when clicking next button
    if (currMonth<11) {
        currMonth +=1
    }else{
        currYear +=1
        currMonth = 0
    }
    handelCalender(currYear,currMonth)
})
today.addEventListener('click', ()=>{
  // Reset current month and year to today's date
 currMonth = date.getMonth()
 currYear = date.getFullYear()
    handelCalender()
})