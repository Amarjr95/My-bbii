const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const response = document.getElementById("response");

yesButton.addEventListener("click", () => {
  response.innerHTML = "💘 YAAAAY 💘<br>J’ai trop hâte de passer cette Saint-Valentin avec toi ❤️";
  noButton.style.display = "none";
  yesButton.style.display = "none";
});

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});
