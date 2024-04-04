const card = document.querySelector(".card");

card.addEventListener("click", () => {
  console.log("clicked");
  card.classList.toggle("answer");
  card.textContent = "answer";
});
