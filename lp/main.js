const header = document.querySelector(".fixed-header");
const mobileActionBar = document.querySelector(".mobile-action-bar");

if (header) {
    const updateStickyHeader = () => {
        header.classList.toggle("has-sticky", window.scrollY > 100);
    };

    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, { passive: true });
}

if (mobileActionBar) {
    const updateMobileActionBar = () => {
        mobileActionBar.classList.toggle("show", window.scrollY > 250);
    };

    updateMobileActionBar();
    window.addEventListener("scroll", updateMobileActionBar, { passive: true });
}

const initializeSliders = () => {
    if (document.querySelector(".vrGallerySwiper")) {
        new Swiper(".vrGallerySwiper", {
            loop: true,
            speed: 2000,
            spaceBetween: 18,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".vr-gallery-next",
                prevEl: ".vr-gallery-prev",
            },
            pagination: {
                el: ".vr-gallery-pagination",
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 2, spaceBetween: 5 },
                576: { slidesPerView: 2, spaceBetween: 5 },
                992: { slidesPerView: 5, spaceBetween: 5 },
            },
        });
    }

    if (document.querySelector(".taxiFleetSlider")) {
        new Swiper(".taxiFleetSlider", {
            spaceBetween: 5,
            loop: true,
            speed: 2000,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            watchSlidesProgress: true,
            breakpoints: {
                0: { slidesPerView: 1.1 },
                468: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        });
    }

    if (document.querySelector(".saiReviewsSwiper")) {
        new Swiper(".saiReviewsSwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".sai-review-next",
                prevEl: ".sai-review-prev",
            },
            pagination: {
                el: ".sai-review-pagination",
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 15 },
                576: { slidesPerView: 1, spaceBetween: 18 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
            },
        });
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSliders, { once: true });
} else {
    initializeSliders();
}

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".sai-faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".sai-faq-question");
        const answer = item.querySelector(".sai-faq-answer");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            // Close all FAQ items
            faqItems.forEach(function (faq) {
                faq.classList.remove("active");

                const faqAnswer = faq.querySelector(".sai-faq-answer");
                faqAnswer.style.maxHeight = null;
            });

            // Open clicked item
            if (!isActive) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

        });

    });


    // Keep the first FAQ open on page load
    const firstItem = document.querySelector(".sai-faq-item.active");

    if (firstItem) {
        const firstAnswer = firstItem.querySelector(".sai-faq-answer");
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
    }

});