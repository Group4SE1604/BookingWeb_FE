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
        amen_conatainer.forEach(item => {
            item.classList.remove("open")
        })
    })
}

const amen_conatainer = document.querySelectorAll('.amen-conatainer');
const edit_icon = document.querySelectorAll('.edit-btn');
const select_btns = document.querySelectorAll(".select-btn");
const items = document.querySelectorAll(".item");

edit_icon[0].addEventListener('click', function () {
    amen_conatainer[0].classList.toggle('open');
});

edit_icon[1].addEventListener('click', function () {
    amen_conatainer[1].classList.toggle('open');
});

select_btns.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
})

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked")

        let checked = document.querySelectorAll(".checked"),
            select_text = document.querySelector(".select-text")

            if(checked && checked.length > 0){
                select_text.innerText = `${checked.length} Selected`
            }else{
                select_text.innerText = "Select Amenities"
            }
    });
})







