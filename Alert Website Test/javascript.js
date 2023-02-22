/*Alert*/
function yesFunction() {
    alert("Alerts On!");
  }

  function noFunction() {
    alert("OK");
  }

/*Alert Type 2*/
  function sureFunction() {
    alert("This is an Alert!");
  }

  function nahFunction() {
    alert("Alright");
  }

  /*Alert Type 3*/
  function okFunction() {
    alert("Alert!!");
  }

  function cancelFunction() {
    alert("No Alerts");
  }


/*Confirm*/
function nopFunction() {
    var text;
    if (confirm("Do you like McDonalds? (Ok for yes, Cancel for no)")){
         text = "Get a McDouble";}
      else {
         text = "Go eat at Wendy's"
      }
      document.getElementById("confirm").innerHTML = text;
    }

    function yupFunction() {
        var text;
        if (confirm("Do you like to code? (Ok for yes, Cancel for no)")){
             text = "Get VS Code";}
          else {
             text = "Go get your teaching degree"
          }
          document.getElementById("confirm").innerHTML = text;
        }

/*Confirm Type 2*/
function nohFunction() {
    var text;
    if (confirm("Do you like vacations? (Ok for yes, Cancel for no)")){
         text = "Go to Hawaii";}
      else {
         text = "Stay at home"
      }
      document.getElementById("confirm2").innerHTML = text;
    }

    function yessFunction() {
        var text;
        if (confirm("Do you like School? (Ok for yes, Cancel for no)")){
             text = "Ok";}
          else {
             text = "Good"
          }
          document.getElementById("confirm2").innerHTML = text;
        }
    
/*Prompt*/
function pFunction() {
    let text;
    let person = prompt("When can we go home?", "Provide time here (Please Insert a Real Time)");
    if (person == null || person == ""){
        text = "User cancelled the prompt"
    } else {
        text = "You can go home at " + person + " if you ask your Mom"
    }
    document.getElementById("prompt").innerHTML = text;
}

/*Prompt Type 2*/
function promptFunction() {
  let text;
  let person = prompt("What kind of video games do you like?", "Type Genre Here");
  if (person == "exploration" || person == " "){
    text = "Buy Sonic Frontiers"
} 
  else {
      text = "Ok"
  }
  document.getElementById("prompt2").innerHTML = text;
}