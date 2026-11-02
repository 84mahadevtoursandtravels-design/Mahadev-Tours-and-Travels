const header = document.querySelector(".fixed-header"),
    progcl = document.querySelector(".progressset"),
    toggleClass = "has-sticky",
    progressClass = "progressbg";
window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? (header.classList.add(toggleClass), progcl.classList.add(progressClass)) : (header.classList.remove(toggleClass), progcl.classList.remove(progressClass))
}), $(document).on("scroll", function() {
    var e = $(document).scrollTop(),
        s = $(document).height() - $(window).height();
    $(".pageprogress").css("width", 100 * e / s + "%"), $(".pageprogress").css("background-color", "#99be43")
});

function initializeAutocomplete() {
    const pickupInput = document.querySelector('input[name="pickup"]');
    const dropInput = document.querySelector('input[name="drop"]');
    const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput, {
        types: ['geocode'],
        componentRestrictions: {
            country: 'in'
        }
    });
    const dropAutocomplete = new google.maps.places.Autocomplete(dropInput, {
        types: ['geocode'],
        componentRestrictions: {
            country: 'in'
        }
    });
    pickupInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    });
    dropInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    initializeAutocomplete()
});
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typed-text", {
        strings: ["Find your Destination"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: !0,
        showCursor: !1
    })
});
$(function() {
    $(".product-card").hover(function() {
        $(this).find(".description").animate({
            height: "toggle",
            opacity: "toggle"
        }, 300)
    })
});
document.addEventListener("DOMContentLoaded", function() {
    let counters = document.querySelectorAll(".count");
    let speed = 2000;
    let options = {
        threshold: 0.6
    };
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.getAttribute("data-count"), 10);
                let suffix = counter.getAttribute("data-suffix") || "";
                let start = 0;
                let startTime = null;

                function animateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = timestamp - startTime;
                    let easing = Math.min(progress / speed, 1);
                    let currentCount = Math.floor(easing * target);
                    counter.innerText = currentCount.toLocaleString() + suffix;
                    if (progress < speed) {
                        requestAnimationFrame(animateCount)
                    } else {
                        counter.innerText = target.toLocaleString() + suffix
                    }
                }
                requestAnimationFrame(animateCount);
                observer.unobserve(counter)
            }
        })
    }, options);
    counters.forEach((counter) => observer.observe(counter))
});
document.addEventListener("DOMContentLoaded", function() {
    let section = document.querySelector(".why-nrk-section");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                section.classList.add("visible")
            }
        })
    }, {
        threshold: 0.3
    });
    observer.observe(section)
});
$(document).ready(function() {
    $(".js-slick-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 1500,
        dots: !0,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ],
    });

    function setEqualHeights() {
        let maxHeight = 0;
        $(".js-slide article.card").each(function() {
            $(this).css("height", "auto");
            let cardHeight = $(this).outerHeight();
            maxHeight = Math.max(maxHeight, cardHeight)
        });
        $(".js-slide article.card").css("height", maxHeight + "px")
    }
    setEqualHeights();
    $(".js-slick-carousel").on("afterChange", setEqualHeights);
    $(window).resize(setEqualHeights)
});
$(document).ready(function() {
    $(".js-slick-client").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 1500,
        dots: !0,
        arrows: !1,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, ],
    });

    function setEqualHeights() {
        let maxHeight = 0;
        $(".js-slide article.card").each(function() {
            $(this).css("height", "auto");
            let cardHeight = $(this).outerHeight();
            maxHeight = Math.max(maxHeight, cardHeight)
        });
        $(".js-slide article.card").css("height", maxHeight + "px")
    }
    setEqualHeights();
    $(".js-slick-carousel").on("afterChange", setEqualHeights);
    $(window).resize(setEqualHeights)
});
window.onscroll = function() {
    toggleSticky()
};

var swiper = new Swiper(".todolist", {
    allowTouchMove: !0,
    breakpoints: {
        0: {
            slidesPerView: 2.2,
            spaceBetween: 5,
        },
        468: {
            slidesPerView: 2.1,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 2.7,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
    },
});
var swiper = new Swiper(".mySwiper", {
    loop: !0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: !1,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});
var swiper = new Swiper(".car-slider", {
    loop: !0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: !1,
    // },
    slidesPerView: 1.3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {

    new Swiper(".vrGallerySwiper", {

        loop: true,

        speed: 2000,

        spaceBetween: 18,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        navigation: {
            nextEl: ".vr-gallery-next",
            prevEl: ".vr-gallery-prev"
        },

        pagination: {
            el: ".vr-gallery-pagination",
            clickable: true
        },

        breakpoints: {

            0: {
                slidesPerView: 2,
                spaceBetween: 5
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 5
            },

            992: {
                slidesPerView: 5,
                spaceBetween: 5
            }

        }

    });

});
var swiper = new Swiper(".taxiFleetSlider", {
    spaceBetween: 5, // More breathing room between slides
    loop: true,
    speed: 2000, // Slide transition speed (ms)
   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 1.1
        },
        468: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});
var swiper = new Swiper(".packageSwiper", {

    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 1000,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3.3,
        }

    }

});

var swiper = new Swiper(".googleReviewSwiper", {

    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {

        0: {
            slidesPerView: 1.1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 4,
        }

    }

});

  
document.addEventListener("DOMContentLoaded", function () {
    const mobileCTA = document.querySelector(".mobile-action-bar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {   // kitna scroll ke baad show ho
            mobileCTA.classList.add("show");
        } else {
            mobileCTA.classList.remove("show");
        }
    });
});
var saiReviewsSwiper = new Swiper(".saiReviewsSwiper", {
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
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        576: {
            slidesPerView: 1,
            spaceBetween: 18
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});