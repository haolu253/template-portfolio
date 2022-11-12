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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var section1 = document.getElementById('about-us').getBoundingClientRect();
var section2 = document.getElementById('our-team').getBoundingClientRect();
var section3 = document.getElementById('contact-us').getBoundingClientRect();

console.log(section1.top, section1.right, section1.bottom, section1.left);
console.log(section2.top, section2.right, section2.bottom, section2.left);
console.log(section3.top, section3.right, section3.bottom, section3.left);

$('.main-container').on("scroll", function () {
  console.log($('.main-container').scrollTop());
  for (let i = 0; i < 4; i++) {
    console.log("section" + i)
    if ($('.main-container').scrollTop() === 0) {
      $(".top ul li a").removeClass("active");
      $(".section0").addClass("active");
    } else if ($('.main-container').scrollTop() === $("section" + i).left) {
      $(".top ul li a").removeClass("active");
      $(".section" + i).addClass("active");
    }
  }
})

$('.main-container').css('width', window.innerHeight);
$('body').css('height', window.innerHeight);
$("body").css({ "overflow": "hidden", 'position': 'fixed' });