/* product&event ScrollMagic */
const scrollEls = document.querySelectorAll(".scroll_el");

scrollEls.forEach((scrollEl) => {
  new ScrollMagic.Scene({
    triggerElement: scrollEl, //감지해야할 대상
    triggerHook: 0.7, //감지 위치
  })
    .setClassToggle(scrollEl, "show")
    .addTo(new ScrollMagic.Controller());
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
