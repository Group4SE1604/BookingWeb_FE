//error email
const emailInput = document.getElementById('email');
const errorEmailText = document.getElementById('errorEmailText');
const errorLabelEmail = document.getElementById('error-label-email');
const form = document.getElementById('form');

emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        errorEmailText.textContent = 'Enter a valid email address.';
        errorEmailText.classList.add('errorEmailAddress');
        errorLabelEmail.classList.add('error-label');
        errorLabelEmail.classList.remove('valid-label');
        emailInput.classList.add('error-input');
        emailInput.classList.remove('valid-input');
        emailInput.classList.remove('input-box');
    } else {
        errorEmailText.textContent = '';
        errorEmailText.classList.remove('errorEmailAddress');
        errorLabelEmail.classList.add('valid-label');
        errorLabelEmail.classList.remove('error-label');
        emailInput.classList.remove('error-input');
        emailInput.classList.add('valid-input');
    }

});
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



//error phone number
const phoneInput = document.getElementById('phone');
const errorPhoneText = document.getElementById('errorPhoneText');
const errorLabelPhone = document.getElementById('error-label-phone');

phoneInput.addEventListener('input', function () {
    const phone = phoneInput.value;
    if (!validatePhone(phone)) {
        errorPhoneText.textContent = 'Enter a valid phone number.';
        errorPhoneText.classList.add('errorPhoneNumber');
        errorPhoneText.classList.remove('validPhone');
        errorLabelPhone.classList.add('error-label');
        errorLabelPhone.classList.remove('valid-label');
        phoneInput.classList.add('error-input');
        phoneInput.classList.remove('valid-input');
        phoneInput.classList.remove('input-box');

    } else {
        errorPhoneText.textContent = '';
        errorPhoneText.classList.remove('errorPhoneNumber');
        errorPhoneText.classList.add('validPhone');
        errorLabelPhone.classList.add('valid-label');
        errorLabelPhone.classList.remove('error-label');
        phoneInput.classList.remove('error-input');
        phoneInput.classList.add('valid-input');
    }
});

function validatePhone(phone) {
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})/;
    return phoneRegex.test(phone);
}

form.onsubmit = function (event) {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        event.preventDefault();
        errorEmailText.textContent = 'Enter a valid email address.';
        errorEmailText.classList.add('errorEmailAddress');
        errorLabelEmail.classList.add('error-label');
        errorLabelEmail.classList.remove('valid-label');
        emailInput.classList.add('error-input');
        emailInput.classList.remove('valid-input');
        emailInput.classList.remove('input-box');
    }
    const phone = phoneInput.value;
    if (!validatePhone(phone)) {
        event.preventDefault();
        errorPhoneText.textContent = 'Enter a valid phone number.';
        errorPhoneText.classList.add('errorPhoneNumber');
        errorPhoneText.classList.remove('validPhone');
        errorLabelPhone.classList.add('error-label');
        errorLabelPhone.classList.remove('valid-label');
        phoneInput.classList.add('error-input');
        phoneInput.classList.remove('valid-input');
        phoneInput.classList.remove('input-box');
    }
};