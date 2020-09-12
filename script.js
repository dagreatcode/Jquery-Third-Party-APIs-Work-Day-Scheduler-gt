$(document).ready(function () {
    var m = moment();
    console.log(m);
    // moment().format();
    // console.log(m.format("dddd MMM Mo YYYY"));
    // console.log(m.format("[Yeah the year is] dddd [and we're in] YYYY"));
// //     //Converting the tags
// var headerJumbotronEl = $(".jumbotron");
    var display3El = $(".display-3");
// var leadEl = $(".lead");
    var currentDayEl = $("#currentDay");
    var timeBlockEl = $(".container");

    currentDayEl.text(m.format('MMMM Do YYYY')); // September 11th 2020, 10:46:49 pm
    timeBlockEl.text(m.format('h:mm:ss a'));
    display3El.ready()

    console.log(JSON.stringify(m));
 
 });


    
// moment().format('MMMM Do YYYY, h:mm:ss a'); // September 11th 2020, 10:46:49 pm
// moment().format('dddd');                    // Friday
// moment().format("MMM Do YY");               // Sep 11th 20
// moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
// moment().format();                          // 2020-09-11T22:46:49-04:00