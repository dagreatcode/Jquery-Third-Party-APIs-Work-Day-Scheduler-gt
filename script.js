// Waits Until The HTML has loaded. Wait4DocReady
$(document).ready(function () {
    var m = moment();
    console.log(m);
   
    //Converting the tags

    var headerJumbotronEl = $(".jumbotron");
    var display3El = $(".display-3");
    var leadEl = $(".lead");
    var currentDayEl = $("#currentDay");
    var timeBlockEl = $(".container");

    currentDayEl.text(m.format('MMMM Do YYYY')); // September 11th 2020, 10:46:49 pm
    timeBlockEl.text(m.format('h:mm:ss a'));


    console.log(JSON.stringify(m));
 
 });
                    // Teachers Advice and teachings
    //  // This line of JavaScript "grabs" the main div on the page ("#drink-options");
    //  var drinkDiv = document.getElementById("drink-options");

    //  // We then use a for loop to iterate through all the drinks in drinkList.
    //  // With each iteration, we perform a series of code operations each time.
    //  for (var i = 0; i < drinkList.length; i++) {
 
    //    // For each drink in the array, we create a new paragraph to hold that text.
    //    // A new paragraph will be created with each iteration of the loop.
    //    var newDrinkP = document.createElement("p");
 
    //    // We then assign the the text of this paragraph to be the text in the array.
    //    newDrinkP.textContent = drinkList[i];
 
    //    // We then add the paragraph to the our main div on the page ("#drink-options")
    //    drinkDiv.appendChild(newDrinkP);
    //  }

    
// moment().format('MMMM Do YYYY, h:mm:ss a'); // September 11th 2020, 10:46:49 pm
// moment().format('dddd');                    // Friday
// moment().format("MMM Do YY");               // Sep 11th 20
// moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
// moment().format();                          // 2020-09-11T22:46:49-04:00