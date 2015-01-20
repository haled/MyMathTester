var x = 0;
var y = 0;

document.getElementById("tester").onload = function() {
  seedTest();
}

function seedTest() {
  x = getRandomNumber();
  y = getRandomNumber();

  document.getElementById("operand1").innerHTML = x;
  document.getElementById("operand2").innerHTML = y;
  document.getElementById("answer").value = "";
}

document.getElementById("submit").onclick = function() {
  var z = document.getElementById("answer").value;
  if(z == (x+y)) {
    document.getElementById("result").innerHTML = "Success!";
  }
  else {
    document.getElementById("result").innerHTML = "FAIL!";
  }

  seedTest();
}

function getRandomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
