// Waits Until The HTML has loaded. Wait4DocReady
$(document).ready(function () {
    var m = moment();
    console.log(m);


    // var headerJumbotronEl = $(".jumbotron");
    // var display3El = $(".display-3");
    // var leadEl = $(".lead");
    var currentDayEl = $("#currentDay");
    // var containerMainDiv = $(".container")
    var timeBlockEl = $("#time-container");
    var onHour = (m.format("h"));
    var mainDiv = $("<div>");
    var subDiv = $("<div>");
    var textEl = $("<textarea>");
    var buttonEl = $("<button>");
    var saveEl = $("<i>");

    console.log(saveEl)
    
    
    //Showing Info
    currentDayEl.text(m.format('MMMM Do YYYY'));
    timeBlockEl.text(m.format('h:mm:ss a'));

    //My Array Of OBJECTS
    var timeSlots = [
        {
          armyT : 1200, 
          noArmy : "12pm"
        },
        { 
          armyT : 1300, 
          noArmy : "1pm"
        },
        {
          armyT : 1400, 
          noArmy : "2pm"
        }, 
        { 
          armyT : 1500, 
          noArmy : "3pm"
        }, 
        { 
          armyT : 1600, 
          noArmy : "4pm"
        }, 
        { 
          armyT : 1700, 
          noArmy : "5pm"
        }, 
        { 
          armyT : 1800, 
          noArmy : "6pm"
        },
        { 
          armyT : 1900, 
          noArmy : "7pm"
        }, 
        { 
          armyT : 2000, 
          noArmy : "8pm"
        }, 
        { 
          armyT : 2100, 
          noArmy : "9pm"
        }, 
        { 
          armyT : 2200, 
          noArmy : "10pm"
        }, 
        { 
          armyT : 2300, 
          noArmy : "11pm"
        }, 
        { 
          armyT : 2400, 
          noArmy : "12am" 
        }
    ];
    console.log(timeSlots);

    //

    


    // })
    function loadTimeSlots(timeSlots) {
        const timeContainer = document.getElementById("time-container");
        var dataHtml = '';

        for(var time of timeSlots) {
            dataHtml += '<div><td>${time.armyT}</td><td>${time.noArmy}</td></div>';
        console.log.length(dataHtml);
        timeContainer.innerHTML = dataHtml;
        
        }
    }
    console.log(loadTimeSlots);

    // var armyT = timeSlot[i][armyT];
    // var noArmy = timeSlot[i][noArmy];

    // console.log(armyT);
    // console.log(noArmy);

    //Sudo code of HTML to convert
// <div class="container" id="time-container">
    //<div class="row" main Div>
        //<div class="col-sm-1" subDiv></div>
        // <textarea class="col-sm-10" textEl></textarea>
        // <button class="col-sm-1" buttonEl></button>
    //</div>
//</div>

    // //Real code     // //Adding the calendar
    // for (i = 0; i < timeSlot.length; i++){
//Conditional Statements

//if=else Statement



 
 
    //var firstDiv = $("<div>");
    //var calender = document.querySelector("#container");
    // //for (var i = 0; i < 0; i++);

    //     var cal = $("")
    //     console.log(day)

    //function calender(data) {
        //var
    //}
    // var mainDiv = $("<div>");
    // mainDiv.attr("id", timeSlot[1][i]);
    // mainDiv.addClass("row time-block");
    // mainDiv.addClass("")


    
    // // var armyT = timeSlot[i][0];
    // // var noArmy = timeSlot[i][1];

    // //Showing Info
    // currentDayEl.text(m.format('MMMM Do YYYY'));
    // timeBlockEl.text(m.format('h:mm:ss a'));
    
    //Array of object so we can Iterate over them
    //JSON Format Javascript Object Notation


  //user.json 
    // console.log(JSON.parse())
    // console.log(JSON.stringify());

    // This is where 
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
