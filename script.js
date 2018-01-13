//variables
var xoro;
var compXoro;
var buttonArray = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
var rand;

  $("#theButtons button").on('click', function(){
    yourMove(this.id);
  });


//disable game until X or O is selected
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;

// Player selects X
xButton.onclick = function() {
  xoro = "X";
  compXoro = "O";
  document.getElementById("xButton").disabled = true;
  document.getElementById("oButton").disabled = true;

  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").disabled = false;
};

// Player selects O
oButton.onclick = function() {
  xoro = "O";
  compXoro = "X";
  document.getElementById("xButton").disabled = true;
  document.getElementById("oButton").disabled = true;

  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").disabled = false;
};

// Reset Button
reset.onclick = function() {
  document.getElementById("xButton").disabled = false;
  document.getElementById("oButton").disabled = false;

  document.getElementById("b1").innerHTML = "";
  document.getElementById("b2").innerHTML = "";
  document.getElementById("b3").innerHTML = "";
  document.getElementById("b4").innerHTML = "";
  document.getElementById("b5").innerHTML = "";
  document.getElementById("b6").innerHTML = "";
  document.getElementById("b7").innerHTML = "";
  document.getElementById("b8").innerHTML = "";
  document.getElementById("b9").innerHTML = "";

  buttonArray = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
};

// b1
function yourMove(ID) {

  document.getElementById(ID).innerHTML = xoro;
  buttonArray.splice(buttonArray.indexOf(ID), 1);
  var compMove = buttonArray[Math.floor(Math.random() * buttonArray.length)];
  buttonArray.splice(buttonArray.indexOf(compMove), 1);
  document.getElementById(compMove).innerHTML = compXoro;
  document.getElementById(ID).disabled = true;
  document.getElementById(compMove).disabled = true;
};
