function animateButton(buttonSelector) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
    }, 600);
  });
}