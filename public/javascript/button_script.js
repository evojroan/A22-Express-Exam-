const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
  buttons.addEventListener('click', function () {
    // buttons.forEach(button => { buttons.classList.remove("clicked") });
    button.classList.add("clicked")
  })
})