// var a = moment().format('MMMM Do YYYY, h:mm:ss a');
// document.getElementById("currentDay").innerHTML = a;
$(document).ready(function () {

var m = moment();
console.log(m);
// moment().format();
console.log(m.format("dddd MMM Mo YYYY"));
console.log(m.format("[Yeah the year is] dddd [and we're in] YYYY"));
