let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





    for (let i = 0; i < 4; i++) {
      var section1 = document.getElementById('highlights').getBoundingClientRect();
      var section2 = document.getElementById('about-us').getBoundingClientRect();
      var section3 = document.getElementById('our-team').getBoundingClientRect();
      var section4 = document.getElementById('contact-us').getBoundingClientRect();

      console.log(section1.top, section1.right, section1.bottom, section1.left);
      console.log(section2.top, section2.right, section2.bottom, section2.left);
      console.log(section3.top, section3.right, section3.bottom, section3.left);
      console.log(section4.top, section4.right, section4.bottom, section4.left);
      
    }