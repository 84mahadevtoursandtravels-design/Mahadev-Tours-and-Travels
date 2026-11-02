document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".fixed-header");
  const mobileCTA = document.querySelector(".mobile-action-bar");

  window.addEventListener("scroll", function () {
    const y = window.scrollY;
    if (header) header.classList.toggle("has-sticky", y > 100);
    if (mobileCTA) mobileCTA.classList.toggle("show", y > 250);
  }, { passive: true });

  new Swiper(".taxiFleetSlider", {
    spaceBetween: 5,
    loop: true,
    speed: 2000,
    navigation: { nextEl: ".taxi-next", prevEl: ".taxi-prev" },
    watchSlidesProgress: true,
    breakpoints: {
      0: { slidesPerView: 1.1 },
      468: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  });

  new Swiper(".saiReviewsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".sai-review-next", prevEl: ".sai-review-prev" },
    pagination: { el: ".sai-review-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 20 }
    }
  });
});