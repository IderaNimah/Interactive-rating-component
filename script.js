const mainContainer = document.querySelector("main_container")
const thanksContainer = document.querySelector("thank_you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate_again")

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display="none"
})