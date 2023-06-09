// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);

function addMsg(event) { 
  var clickedButton = event.target;
  clickedButton.classList.add("success");
}
var buttons = document.getElementsByClassName("sharer");

for(var i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", addMsg, false);
}   


function black_mode() {
  var element = document.body;
  element.classList.toggle("dark");
}

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
