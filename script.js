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

  //user.json
    
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
// moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
// moment().startOf('day').fromNow();        // 32 minutes ago
// moment().endOf('day').fromNow();          // in a day
// moment().startOf('hour').fromNow();       // 32 minutes ago
// moment().subtract(10, 'days').calendar(); // 09/02/2020
// moment().subtract(6, 'days').calendar();  // Last Sunday at 12:32 AM
// moment().subtract(3, 'days').calendar();  // Last Wednesday at 12:32 AM
// moment().subtract(1, 'days').calendar();  // Yesterday at 12:32 AM
// moment().calendar();                      // Today at 12:32 AM
// moment().add(1, 'days').calendar();       // Tomorrow at 12:32 AM
// moment().add(3, 'days').calendar();       // Tuesday at 12:32 AM
// moment().add(10, 'days').calendar();     
// moment.locale();         // en
// moment().format('LT');   // 12:33 AM
// moment().format('LTS');  // 12:33:00 AM
// moment().format('L');    // 09/12/2020
// moment().format('l');    // 9/12/2020
// moment().format('LL');   // September 12, 2020
// moment().format('ll');   // Sep 12, 2020
// moment().format('LLL');  // September 12, 2020 12:33 AM
// moment().format('lll');  // Sep 12, 2020 12:33 AM
// moment().format('LLLL'); // Saturday, September 12, 2020 12:33 AM
// moment().format('llll'); // Sat, Sep 12, 2020 12:33 AM
