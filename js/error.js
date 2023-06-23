//error email
const emailInput = document.getElementById('email');
const errorEmailText = document.getElementById('errorEmailText');

emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        errorEmailText.textContent = 'Enter a valid email address.';
        emailInput.classList.add('errorEmail');
        emailInput.classList.remove('validEmail');
    } else {
        errorText.textContent = '';
        emailInput.classList.remove('errorEmail');
        emailInput.classList.add('validEmail');
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//error phone number
const phoneInput = document.getElementById('phone');
const errorPhoneText = document.getElementById('errorPhoneText');

phoneInput.addEventListener('input', function () {
    const phone = phoneInput.value;
    if (!validatePhone(phone)) {
        errorPhoneText.textContent = 'Enter a valid phone number.';
        phoneInput.classList.add('errorPhone');
        phoneInput.classList.remove('validPhone');
    } else {
        errorPhoneText.textContent = '';
        phoneInput.classList.remove('errorPhone');
        phoneInput.classList.add('validPhone');
    }
});

function validatePhone(phone) {
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})/;
    return phoneRegex.test(phone);
}

