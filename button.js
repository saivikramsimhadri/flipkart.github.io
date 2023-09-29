// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20 || window.scrollY > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
}
