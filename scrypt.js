const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const response = document.getElementById("response");
const secret = document.getElementById("secret");

function showLove() {
  response.innerHTML = "💍 Félicitations 💍<br>Tu es officiellement ma Valentine ❤️";
  secret.style.display = "block";
  yesButton.style.display = "none";
  noButton.style.display = "none";
}

yesButton.addEventListener("click", showLove);
noButton.addEventListener("click", showLove);
