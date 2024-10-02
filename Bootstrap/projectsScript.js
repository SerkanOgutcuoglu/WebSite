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




  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );




  