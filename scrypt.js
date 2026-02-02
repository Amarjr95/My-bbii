const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const response = document.getElementById("response");

function showLove() {
  response.innerHTML = "💍 Félicitations 💍<br>Tu es officiellement ma Valentine ❤️";
  yesButton.style.display = "none";
  noButton.style.display = "none";
}

yesButton.addEventListener("click", showLove);
noButton.addEventListener("click", showLove);
