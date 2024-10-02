document.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var logo = document.getElementById("navbar-logo");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.src = "/resimler/loogom_transparent.png"; // Değişen logo URL'si
    } else {
        navbar.classList.remove("scrolled");
        logo.src = "/resimler/loogom_transparent2.png"; // Varsayılan logo URL'si
    }
});


var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  var headline = document.querySelector("h1");
  
  spanText(headline);
  
  let animations = document.querySelectorAll('.intro-text');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })


  var spanText1 = function spanText1(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  var headline = document.querySelector("h4");
  
  spanText1(headline);
  
  let animationss = document.querySelectorAll('.intro-text');
  
  animationss.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })



  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const currentSlideElem = document.querySelector('.current-slide');
    const totalSlidesElem = document.querySelector('.total-slides');
    let index = 0;
    const interval = 5000; // Slider geçiş süresi (milisaniye)

    function updateIndicator() {
        currentSlideElem.textContent = index + 1;
        totalSlidesElem.textContent = slideCount;
    }

    function showNextSlide() {
        index = (index + 1) % slideCount;
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateIndicator();
    }

    function showPrevSlide() {
        index = (index - 1 + slideCount) % slideCount;
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateIndicator();
    }

    setInterval(showNextSlide, interval);

    // Update the indicator on page load
    updateIndicator();

    // Make the navigation arrows functional
    window.showNextSlide = showNextSlide;
    window.showPrevSlide = showPrevSlide;
});




jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});














document.addEventListener('DOMContentLoaded', function() {
  // Tüm animasyonlu öğeleri seçin
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Animasyon kontrol fonksiyonu
  function checkVisibility() {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      animatedElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top + scrollTop;
          const elementHeight = element.offsetHeight;

          if (scrollTop + windowHeight > elementTop + elementHeight / 4) {
              element.classList.add('visible');
          }
      });
  }

  // Sayfa yüklendiğinde ve kaydırıldığında animasyonları kontrol et
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // İlk kontrol sayfa yüklendiğinde
});
