// Functions
function CalculateTimeDifferenceFor100m(time) {
  var message = "";
  var state100m = 11.2;
  var timeDifference = 0;
  var value = [];
  if (time <= state100m) {
    timeDifference = (time - state100m);
    message = ("Congratulations! Your time in the 100 should allow you to qualify for state!");
  }  else{
    timeDifference = (time - state100m);
    message = ("Keep training hard and hit those blocks!");
  }
  value.push(state100m, timeDifference, message);
  return(value);
}

function CalculateTimeDifferenceFor200m(time) {
  var message = "";
  var state200m = 22.4;
  var timeDifference = 0;
  var value = [];
  if (time <= state200m) {
    timeDifference = (time - state200m);
    message = ("Congratulations! Your time in the 200 should allow you to qualify for state!");
  }  else{
    timeDifference = (time - state200m);
    message = ("Keep training hard and hit those blocks!");
  }
  value.push(state200m, timeDifference, message);
  return(value);
}

function CalculateTimeDifferenceFor400m(time) {
  var message = "";
  var state400m = 52.8;
  var timeDifference = 0;
  var value = [];
  if (time <= state400m) {
    timeDifference = (time - state400m);
    message = ("Congratulations! Your time in the 400 should allow you to qualify for state!");
  }  else{
    timeDifference = (time - state400m);
    message = ("Keep training hard and hit those blocks!");
  }
  value.push(state400m, timeDifference, message);
  return(value);
}

function CalculateTimeDifferenceFor800m(time) {
  var message = "";
  var state800m = 128;
  var timeDifference = 0;
  var value = [];
  if (time <= state800m) {
    timeDifference = (time - state800m);
    message = ("Congratulations! Your time in the 800 should allow you to qualify for state!");
  }  else{
    timeDifference = (time - state800m);
    message = ("Keep training hard and fastening that pace!");
  }
  value.push(state800m, timeDifference, message);
  return(value);
}

function CalculateTimeDifferenceFor1600m(time) {
  var message = "";
  var state1600m = 290;
  var timeDifference = 0;
  var value = [];
  if (time <= state1600m) {
    timeDifference = (time - state1600m);
    message = ("Congratulations! Your time in the 1600 should allow you to qualify for state!");
  }  else{
    timeDifference = (time - state1600m);
    message = ("Keep training hard and fastening that pace!");
  }
  value.push(state1600m, timeDifference, message);
  return(value);
}



// Variables
var keepLooping = true;
var moreEvents = "";
var output = "";
var quitMessage = "<p>Thank you for using this program!</p>";
var results = [];
var userEvent = "";
var userTime = 0;

// Processes
while (keepLooping) {
  userEvent = prompt("What event would you like to check? Please enter the metric distance. Ex: 400m","400m");
  // Safety if statement to force only the data entered so as to not break the program.
  if ((userEvent === "100m") || (userEvent === "200m") || (userEvent === "400m") || (userEvent === "800m") || (userEvent === "1600m")) {
    userTime = prompt("What is your fastest time in the " + userEvent + "? Please enter in seconds.","53.6");
    // Another statement intended to make sure the correct information is inputted
    if (userTime < 0) {
      output = "<p>Please enter a positive time. You cannot run a race in negative time!</p>";
      document.write(output);
    } else {
      // Final "security" statement to ensure accurate input.
      if (isNaN(userTime)) {
        output = ("<p>Please enter just numbers for time. Ex: 4 mintes would be \"240\"</p>");
        document.write(output);
      } else {
        userTime = Number(userTime);
        switch (userEvent){
          case "100m":
            results = CalculateTimeDifferenceFor100m(userTime);
            break;
          case "200m":
            results = CalculateTimeDifferenceFor200m(userTime);
            break;
          case "400m":
            results = CalculateTimeDifferenceFor400m(userTime);
            break;
          case "800m":
            results = CalculateTimeDifferenceFor800m(userTime);
            break;
          case "1600m":
            results = CalculateTimeDifferenceFor1600m(userTime);
            break;
          default:
            document.write("<p>If you're seeing this message please re-run the program.</p>");
        }
        output = ("<p>Your event: " + userEvent + "</p><p>Your best time in the " + userEvent + ": " + userTime + " seconds </p><p>State Qualification time in the " +
        userEvent + ": " + results[0] + " seconds</p><p>Time Difference: ~" + Math.ceil(results[1]) + " seconds (" + results[1] +")</p><p>" + results[2] + "</p><br><br>");
        document.write(output);

        // End the loop OR continue.
        moreEvents = prompt("Would you like to check any other events? Please enter \"no\" or \"n\" to end the program.");
        if (moreEvents.toUpperCase() === "NO" || (moreEvents.toUpperCase() ==="N")) {
          keepLooping = false;
          document.write(quitMessage);
        }
      }
    }
  } else {
    output = ("<p>Please enter an event in the format given. Example: \"400m\"</p>");
    document.write(output);
  }
}
