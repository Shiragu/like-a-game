var $start = document.querySelector("#start");
var $game = document.querySelector("#game");
var score = 0;

$start.addEventListener("click", gameStart);
$game.addEventListener("click", handleBoxClick);

function gameStart() {
  $game.style.backgroundColor = "#fff";
  $start.classList.add("hide");
  renderBox();
}

function handleBoxClick(event) {
  if (event.target.dataset.box) {
    score++;
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = "";
  var $box = document.createElement("div");

  $box.style.height = $box.style.width = "50px";
  $box.style.position = "absolute";
  $box.style.backgroundColor = "#000";
  $box.style.top = Math.ceil(Math.random() * 200) + "px";
  $box.style.left = Math.ceil(Math.random() * 200) + "px";
  $box.style.cursor = "pointer";
  $box.setAttribute("data-box", true);

  $game.insertAdjacentElement("afterbegin", $box);
}
