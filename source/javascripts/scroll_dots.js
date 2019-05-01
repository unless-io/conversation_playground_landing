var allSections = [];
allSections.push(document.querySelector('.banner-wrapper'));
document.querySelectorAll('section').forEach(function(item) {
  allSections.push(item);
});
var dotsContainer = document.querySelector('#dots-container');
var navItems = document.querySelectorAll('#sticky-nav .navbar-custom-item');
var stickyNav = document.querySelector('#sticky-nav');
var regularNav = document.querySelector('#regular-nav');
var allDots;

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function onIntersection(entries) {
  // Loop through the entries
  entries.forEach(function(entry) {
    // Are we in viewport?
    if (entry.intersectionRatio > 0.5) {
      var dotIndex;
      allSections.forEach(function(item, index) { 
        if (item === entry.target) {
          dotIndex = index;
        }
      });
      if (dotIndex > 0) {
        stickyNav.classList.remove('hidden-up');
        regularNav.style.opacity = 0;
      } else if (dotIndex === 0) {
        stickyNav.classList.add('hidden-up');
        regularNav.style.opacity = 1;
      }
      var currentSection = allSections[dotIndex];
      var menuForActive = document.querySelector(currentSection.dataset.target);
      allDots.forEach(function(item) {
        item.classList.remove('active');
      })
      allDots[dotIndex].classList.add('active');
      if (menuForActive != undefined) {
        navItems.forEach(function(item) {
          item.classList.remove('active');
        })
        menuForActive.classList.add('active');
      } else {
        navItems.forEach(function(item) {
          item.classList.remove('active');
        })
      }
    }
  });
}

function activateDots() {
  allDots = document.querySelectorAll('.dot');

  var config = {
    rootMargin: '0px 0px',
    threshold: 0.01
  };

  var observer = new IntersectionObserver(onIntersection, config);
  allSections.forEach(function(section, index) {
    observer.observe(section);
  });

}

function scrollDots() {
  allSections.forEach(function(item, index) {
    dotsContainer.insertAdjacentHTML('beforeend', "<a href='#' class='dot '" + (index === 0 ? 'active' : '') + "></a>");    
  })
  allDots = document.querySelectorAll('.dot');

  allDots.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      allSections[index].scrollIntoView({behavior: "smooth"});

      setTimeout(function(){
        allDots.forEach(function(dot) {
          dot.classList.remove('active');
        })
        item.classList.add('active');

      }, 400);

    })
  })

  window.addEventListener('scroll', debounce(activateDots, 10, true));
}

