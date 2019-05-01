function activateNav() {
  var allStickyNavLinks = document.querySelectorAll('#sticky-nav .navbar-custom-item');
  var allRegularNavLinks = document.querySelectorAll('#regular-nav .navbar-custom-item');

  allStickyNavLinks.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var clickedLink = event.currentTarget;
      document.querySelector(clickedLink.getAttribute('href')).scrollIntoView({behavior: "smooth"});
      
      setTimeout(function(){
        allStickyNavLinks.forEach(function(item) {
          item.classList.remove('active');
        })
        clickedLink.classList.add('active');
      }, 400);
    })
  })
  allRegularNavLinks.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var clickedLink = event.currentTarget;
      document.querySelector(clickedLink.getAttribute('href')).scrollIntoView({behavior: "smooth"});
    })
  })
}
