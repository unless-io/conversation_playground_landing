document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function (event) {
      event.currentTarget.classList.toggle("activeAccordion");
    });
  });
});
