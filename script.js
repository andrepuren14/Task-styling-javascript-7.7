const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// document.addEventListener('DOMContentLoaded', function () {
//   let swiperInstance = null;
//   const brandsSlider = document.querySelector('.brands-slider');
//   const brandsList = document.getElementById('brandsList');
//   const toggleBtn = document.getElementById('toggleBtn');
//   const toggleText = toggleBtn ? toggleBtn.querySelector('.toggle-btn__text') : null

(function () {
  const brandsList = document.getElementById('brandsList');
  const toggleBtn = document.getElementById('toggleBtn');
  const toggleText = toggleBtn ? toggleBtn.querySelector('.toggle-btn__text') : null;

  let swiper = null;

  function initSwiper() {
    if (window.innerWidth < 768) {
      if (!swiper) {
        swiper = new Swiper(".brands-slider", {
          direction: "horizontal",
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  initSwiper();

  window.addEventListener('resize', initSwiper);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      brandsList.classList.toggle('brands-list--expanded');
      toggleBtn.classList.toggle('toggle-btn--active');

      if (toggleText) {
        if (brandsList.classList.contains('brands-list--expanded')) {
          toggleText.textContent = 'Hide';
        } else {
          toggleText.textContent = 'Show All';
        }
      }
    });
  }
})();
