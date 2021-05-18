var $start = document.querySelector("#start");
var $game = document.querySelector("#game");

$start.addEventListener("click", gameStart);

function gameStart() {
  $game.style.backgroundColor = "#fff";
  $start.classList.add("hide");
  renderBox();
}

function renderBox() {}
