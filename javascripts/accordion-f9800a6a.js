document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion").forEach(function(e){e.addEventListener("click",function(e){e.currentTarget.classList.toggle("activeAccordion");const t=e.currentTarget.nextElementSibling;console.log(t.style.maxHeight),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})})});