const rangeInput = document.querySelectorAll(".search-wrapper .price-filter .range-input input"),
priceInput = document.querySelectorAll(".price-filter .price-input .field input"),
range = document.querySelector(".search-wrapper .price-filter .slider .progress");
let priceGap = 100;

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

const showBtns = document.querySelectorAll('.search-wrapper .filter-section .open-icon');

showBtns[0].addEventListener('click', function() {
    let icon = showBtns[0].querySelector('i');
    icon.classList.toggle('fa-rotate-180');
    let priceFilter = document.querySelector('.search-wrapper .price-filter .price-form');
    priceFilter.classList.toggle('close');
});

showBtns[1].addEventListener('click', function() {
    let icon = showBtns[1].querySelector('i');
    icon.classList.toggle('fa-rotate-180');
    let priceFilter = document.querySelector('.search-wrapper .rating-filter .rate-butons');
    priceFilter.classList.toggle('close');
});

showBtns[2].addEventListener('click', function() {
    let icon = showBtns[2].querySelector('i');
    icon.classList.toggle('fa-rotate-180');
    let priceFilter = document.querySelector('.search-wrapper .freebies-filter .freebies-list');
    priceFilter.classList.toggle('close');
});