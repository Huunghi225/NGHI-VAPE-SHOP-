function startGame() {
  document.querySelector("button").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}
function sell(answer) {
  if (answer === "Có") {
    document.getElementById("result").innerText = "Khách mua! Bạn lời 150k!";
  } else {
    document.getElementById("result").innerText = "Khách bỏ đi, tiếc ghê!";
  }
}
