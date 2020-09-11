// // Just a Reach
// var headerJumbotron = "jumbotron"
// var display3 = "display-3"
// var lead = "lead"
// var currentDay = "currentDay"
// var timeBlock = "container"
// var queryURL = ""
// $(document).ready(function () {
//     //
//     var headerJumbotronEl = $("jumbotron");
//     var display3El = $("display-3");
//     var leadEl = $("lead");
//     var currentDayEl = $("currentDay");
//     var timeBlockEl = $("container");
    
//     //

// })
// //

// function timeClock (moment) {
//     if 
// }
$.ajax({
    url: queryURL,
    method: "GET"
}).then (function (response) {
    console.log(response);
    console.log(response.runtime)
});
<script>
    moment().format();
</script>

moment().format('MMMM Do YYYY, h:mm:ss a'); // September 11th 2020, 5:54:06 pm
moment().format('dddd');                    // Friday
moment().format("MMM Do YY");               // Sep 11th 20
moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
moment().format();                          // 2020-09-11T17:54:06-04:00
