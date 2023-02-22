var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');
// Timer that counts down from 5
function countdown() {
  var sec = 5;
  var timer = setInterval(function(){
    document.getElementById('main').innerHTML=''+sec;
    sec--;
    if(sec < 0) {
        clearInterval(timer);
    }
  }, 1000);
}
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 500);
}

startBtn.onclick = countdown;