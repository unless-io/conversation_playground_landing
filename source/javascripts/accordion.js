document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function (event) {
      event.currentTarget.classList.toggle("activeAccordion");
      const panel = event.currentTarget.nextElementSibling;
      console.log(panel.style.maxHeight);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
