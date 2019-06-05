
document.getElementById("d20").onclick = function(){d20Roll();};
document.getElementById("d12").onclick = function(){d12Roll();};
document.getElementById("d10").onclick = function(){d10Roll();};
document.getElementById("d8").onclick = function(){d8Roll();};
document.getElementById("d6").onclick = function(){d6Roll();};
document.getElementById("d4").onclick = function(){d4Roll();};

function d20Roll(){
  var rngDice = Math.floor(Math.random() * (21 - 1) + 1);
  document.getElementsByClassName("d20-number")[0].innerText = rngDice;
}

function d12Roll(){
  var rngDice = Math.floor(Math.random() * (13 - 1) + 1);
  document.getElementsByClassName("d12-number")[0].innerText = rngDice;
}

function d10Roll(){
  var rngDice = Math.floor(Math.random() * (11 - 1) + 1);
  document.getElementsByClassName("d10-number")[0].innerText = rngDice;
}

function d8Roll(){
  var rngDice = Math.floor(Math.random() * (9 - 1) + 1);
  document.getElementsByClassName("d8-number")[0].innerText = rngDice;
}

function d6Roll(){
  var rngDice = Math.floor(Math.random() * (7 - 1) + 1);
  document.getElementsByClassName("d6-number")[0].innerText = rngDice;
}

function d4Roll(){
  var rngDice = Math.floor(Math.random() * (5 - 1) + 1);
  document.getElementsByClassName("d4-number")[0].innerText = rngDice;
}
