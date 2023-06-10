$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true
    });
});

const closeBtns = document.querySelectorAll('.close-rate');
const vote_conatainer = document.querySelector('.vote-conatainer');
const vote_forms = document.querySelectorAll('.vote-form');
const btn_review = document.querySelector('.btn-review');



btn_review.addEventListener('click', function () {
    vote_conatainer.classList.toggle('open')
})


for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', function () {
        vote_conatainer.classList.remove('open')
    })
}



