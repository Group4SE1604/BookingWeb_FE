function calTotalCost() {
  let totalCost = document.getElementById('total'),
    discount = document.getElementById('discount'),
    amount = parseInt(document.getElementById('amount').value),
    service = parseInt(document.getElementById('service').value),
    cost = parseInt(document.getElementById('cost').value);

  let costDiscount = cost * parseInt(discount.value) / 100;
  let total = (cost * amount + service) - costDiscount;

  totalCost.value = total;
  discount.value = costDiscount;
}

calTotalCost();

const minusBtn = document.querySelector('.booking_details .left-content .amount-btn .minus'),
  number = document.querySelector('.booking_details .left-content .amount-btn .number'),
  plusBtn = document.querySelector('.booking_details .left-content .amount-btn .plus'),
  amount = document.getElementById('amount');

let a = 1;

plusBtn.addEventListener('click', () => {
  a++;
  number.innerText = a;
  amount.value = a;
  calTotalCost();
});

minusBtn.addEventListener('click', () => {
  if (a > 1) {
    a--;
    number.innerText = a;
    amount.value = a;
    calTotalCost();
  }

});
