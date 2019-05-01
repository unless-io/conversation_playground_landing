function scrollTestimonials() {
  var allTestimonials = document.querySelectorAll('.testimonial-card');
  var allTestimonialDots = document.querySelectorAll('.testimonial-dot');

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
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0.5) {
        allTestimonials.forEach(function(testimonial) {
          testimonial.classList.remove('active')
        })
        entry.target.classList.add('active')

        allTestimonialDots.forEach(function(dot) { 
          dot.classList.remove('active')
        })

        document.querySelector(entry.target.dataset.target).classList.add('active');
      }
    });
  }

  function activateTestimonials() {
    var config = {
      rootMargin: '0px 0px',
      threshold: 0.01
    };

    var observer = new IntersectionObserver(onIntersection, config);
    allTestimonials.forEach(function(section, index) {
      observer.observe(section);
    });

  }

  allTestimonialDots.forEach(function(dot) {
    dot.addEventListener('click', function(event) {
      event.preventDefault();
      var currentTestimonial = document.querySelector(event.currentTarget.dataset.target);

      allTestimonials.forEach(function(testimonial) { 
        testimonial.classList.remove('active')
      })
      currentTestimonial.classList.add('active');
      currentTestimonial.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    })
  })


  var testimonialWrapper = document.querySelector('.testimonial-wrapper');
  testimonialWrapper.addEventListener('scroll', debounce(activateTestimonials, 10, true));
}
