var swiper = new Swiper(".mySwiper", {
    slideToClickedSlide: true,
    
    
    slidesPerView: 4,
    breakpoints: {

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

var swiper2 = new Swiper(".mySwiper2", {

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    thumbs: {
        swiper: swiper,
    },
});
//for click to copy link
const clipboardInput = document.getElementById('clipboard-input');
const copyButton = document.getElementById('copy-button');
const tooltip = document.getElementById('tooltip');

copyButton.addEventListener('click', () => {
    clipboardInput.select();
    document.execCommand('copy');
    tooltip.style.display = 'block';

    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 1500);
});

// Restore the default text when refreshing the page
window.addEventListener('load', () => {
    clipboardInput.value = "https://www.facebook.com/profile.php?id=100013924782835";//উপরে input value তে যেই value দেওয়া আছে তাই এখানে হুবহু বসিয়ে দিতে হবে যা restor হবে refresh হবে
});

//for deafult menu select
// Show the 'Home' tab by default
$(document).ready(function () {
    $('#home-tab').tab('show');
});

//for active menu indicator
// Add 'active' class to the clicked menu item
$(document).ready(function () {
    $('.navbar-cus-for-trigger .nav-item-cus-for-trigger').on('click', function () {
        $('.navbar-cus-for-trigger .nav-item-cus-for-trigger').removeClass('active');
        $(this).addClass('active');
    });
});


// for first rating
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
        const rating = star.getAttribute("data-rating");
        ratingValue.innerText = `Rating: ${rating}`;
    });

    star.addEventListener("mouseout", () => {
        if (selectedRating === 0) {
            ratingValue.innerText = "";
        } else {
            ratingValue.innerText = `Rating: ${selectedRating}`;
        }
    });

    star.addEventListener("click", () => {
        const rating = star.getAttribute("data-rating");
        selectedRating = rating;
        stars.forEach((s) => {
            if (s.getAttribute("data-rating") <= rating) {
                s.classList.add("activee");
            } else {
                s.classList.remove("activee");
            }
        });
    });
});







// for second rating write review section
const starss = document.querySelectorAll(".starr");
const ratingValuee = document.getElementById("rating-valuee");

let selectedRatingg = 0;

starss.forEach((star) => {
    star.addEventListener("mouseover", () => {
        const rating = star.getAttribute("data-rating");
        ratingValuee.innerText = `Rating: ${rating}`;
    });

    star.addEventListener("mouseout", () => {
        if (selectedRatingg === 0) {
            ratingValuee.innerText = "";
        } else {
            ratingValuee.innerText = `Rating: ${selectedRatingg}`;
        }
    });

    star.addEventListener("click", () => {
        const rating = star.getAttribute("data-rating");
        selectedRatingg = rating;
        starss.forEach((s) => {
            if (s.getAttribute("data-rating") <= rating) {
                s.classList.add("activee");
            } else {
                s.classList.remove("activee");
            }
        });
    });
});