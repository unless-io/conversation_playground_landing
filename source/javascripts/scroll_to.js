function scrollToSection() {
  var allButtons = document.querySelectorAll('.btn-next');
  var allSections = document.querySelectorAll('section');

  allButtons.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var nextSection = allSections[index + 1];
      nextSection.scrollIntoView({behavior: "smooth"});
    })
  })

}


