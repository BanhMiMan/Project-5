// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//Displays current time 
var currentTimeDisplay = $("#currentDay");
currentTimeDisplay.text(moment().format('llll'));

//Variables for textarea to be used to get value
var hourNineText = $("#hour-9");
var hourTenText = $("#hour-10");
var hourElevenText = $("#hour-11");
var hourTwelveText = $("#hour-12");
var hourThirteenText = $("#hour-13");
var hourFourteenText = $("#hour-14");
var hourFifteenText = $("#hour-15");
var hourSixteenText = $("#hour-16");
var hourSeventeenText = $("#hour-17");
var confirmationMsg = $("#confirmation-msg");
var timeBlock = $(".time-block")

//Create variables for save button to start a click event to store textarea value to local storage
var saveBtn = $(".saveBtn");

//Onclick, saves the value of all items in the text area to local storage to be saved
saveBtn.on("click", function(e) {
    e.preventDefault();
    confirmationMsg.html("Appointment Added with <code>localStorage</code> ✅");
    confirmationMsg.attr("style", "text-align: center; font-size: 12px");
    hourNineVal = hourNineText.val();
    hourTenVal = hourTenText.val();
    hourElevenVal = hourElevenText.val();
    hourTwelveVal =  hourTwelveText.val();
    hourThirteenVal = hourThirteenText.val(); 
    hourFourteenVal = hourFourteenText.val(); 
    hourFifteenVal = hourFifteenText.val();
    hourSixteenVal = hourSixteenText.val();
    hourSeventeenVal = hourSeventeenText.val();
    localStorage.setItem("hour09", hourNineVal);
    localStorage.setItem("hour10", hourTenVal);
    localStorage.setItem("hour11", hourElevenVal);
    localStorage.setItem("hour12", hourTwelveVal);
    localStorage.setItem("hour13", hourThirteenVal);
    localStorage.setItem("hour14", hourFourteenVal);
    localStorage.setItem("hour15", hourFifteenVal);
    localStorage.setItem("hour16", hourSixteenVal);
    localStorage.setItem("hour17", hourSeventeenVal);
});

//On page load, places all items in text area from local storage to page
function init() {
    hourNineText.text(localStorage.getItem("hour09"));
    hourTenText.text(localStorage.getItem("hour10"));
    hourElevenText.text(localStorage.getItem("hour11"));
    hourTwelveText.text(localStorage.getItem("hour12"));
    hourThirteenText.text(localStorage.getItem("hour13"));
    hourFourteenText.text(localStorage.getItem("hour14"));
    hourFifteenText.text(localStorage.getItem("hour15"));
    hourSixteenText.text(localStorage.getItem("hour16"));
    hourSeventeenText.text(localStorage.getItem("hour17"));
};

init()


//Find value for current hour
var currentHour = moment().hours();


for (var i = 0; i < timeBlock.length; i++) {
  //If equal to set time
    if (timeBlock[i].dataset.time == currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    //If greater than set time
    if (timeBlock[i].dataset.time > currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    //If less than set time
    if (timeBlock[i].dataset.time < currentHour) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    }
};