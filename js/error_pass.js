//error password
var passwordInput = document.getElementById('password');
var rePasswordInput = document.getElementById('reEnterPassword');
var errorPassText = document.getElementById('passwordError');
var warningPassText = document.getElementById('passwordWarning');
var errorRePassText = document.getElementById('rePasswordError');
var errorLabelPass = document.getElementById('pass-label');
var errorLabelRePass = document.getElementById('re-pass-label');


function validatePassword() {
  var password = passwordInput.value;
  var reEnterPassword = rePasswordInput.value;

  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasNumber = /[0-9]/.test(password);
  var isValidLength = password.length < 8;
  var isMatching = password === reEnterPassword;
  //đúng hết điều kiện
  if (hasUppercase && hasLowercase && hasNumber && password.length > 13) {
    //có giống với confirm pass
    if (isMatching) {
      errorPassText.textContent = '';
      warningPassText.textContent = '';
      errorRePassText.textContent = '';
      errorPassText.classList.remove('errorPass');
      warningPassText.classList.remove('warningPass');
      errorRePassText.classList.remove('errorRePass');
      errorLabelPass.classList.add('valid-label');
      errorLabelPass.classList.remove('error-label');
      errorLabelRePass.classList.add('valid-label');
      errorLabelRePass.classList.remove('error-label');
      passwordInput.classList.add('valid-input');
      passwordInput.classList.remove('error-input');
      passwordInput.classList.remove('warning-input');
      passwordInput.classList.remove('input-box');
      rePasswordInput.classList.add('valid-input');
      rePasswordInput.classList.remove('error-input');
      rePasswordInput.classList.remove('input-box');
    }
    //không giống
    else {
      errorPassText.textContent = '';
      warningPassText.textContent = '';
      errorRePassText.textContent = 'Re-entered password does not match.';
      errorPassText.classList.remove('errorPass');
      warningPassText.classList.remove('warningPass');
      errorRePassText.classList.add('errorRePass');
      errorLabelPass.classList.add('valid-label');
      errorLabelPass.classList.remove('error-label');
      errorLabelPass.classList.remove('warning-label');
      errorLabelRePass.classList.remove('valid-label');
      errorLabelRePass.classList.add('error-label');
      passwordInput.classList.add('valid-input');
      passwordInput.classList.remove('error-input');
      passwordInput.classList.remove('warning-input');
      passwordInput.classList.remove('input-box');
      rePasswordInput.classList.remove('valid-input');
      rePasswordInput.classList.add('error-input');
      rePasswordInput.classList.remove('input-box');
    }
  }
  //số ký tự 8-13
  else if (hasUppercase && hasLowercase && hasNumber && 8 < password.length <= 13) {
    //giong
    if (isMatching) {
      warningPassText.textContent = 'Password loss should be more than 13 characters.';
      errorPassText.textContent = '';
      errorRePassText.textContent = '';
      errorPassText.classList.remove('errorPass');
      warningPassText.classList.add('warningPass');
      errorRePassText.classList.remove('errorRePass');
      errorLabelPass.classList.remove('valid-label');
      errorLabelPass.classList.remove('error-label');
      errorLabelPass.classList.add('warning-label');
      errorLabelRePass.classList.add('valid-label');
      errorLabelRePass.classList.remove('error-label');
      passwordInput.classList.remove('valid-input');
      passwordInput.classList.remove('error-input');
      passwordInput.classList.add('warning-input');
      passwordInput.classList.remove('input-box');
      rePasswordInput.classList.add('valid-input');
      rePasswordInput.classList.remove('error-input');
      rePasswordInput.classList.remove('input-box');

    }
    //khong giong
    else {
      errorPassText.textContent = '';
      warningPassText.textContent = 'Password loss should be more than 13 characters.';
      errorRePassText.textContent = 'Re-entered password does not match.';
      errorPassText.classList.remove('errorPass');
      warningPassText.classList.add('warningPass');
      errorRePassText.classList.add('errorRePass');
      errorLabelPass.classList.remove('valid-label');
      errorLabelPass.classList.remove('error-label');
      errorLabelPass.classList.add('warning-label');
      errorLabelRePass.classList.remove('valid-label');
      errorLabelRePass.classList.add('error-label');
      passwordInput.classList.remove('valid-input');
      passwordInput.classList.remove('error-input');
      passwordInput.classList.add('warning-input');
      passwordInput.classList.remove('input-box');
      rePasswordInput.classList.remove('valid-input');
      rePasswordInput.classList.add('error-input');
      rePasswordInput.classList.remove('input-box');
    }
  }
  //lỗi nát bét
  else {
    warningPassText.textContent = '';
    warningPassText.classList.remove('warningPass');
    errorLabelPass.classList.remove('valid-label');
    errorLabelPass.classList.remove('warning-label');
    passwordInput.classList.remove('valid-input');
    passwordInput.classList.remove('warning-input');
    passwordInput.classList.remove('input-box');
    //giong
    if (isMatching) {
      errorLabelRePass.classList.remove('error-label');
      rePasswordInput.classList.remove('error-input');
      rePasswordInput.classList.remove('input-box');
      if (isValidLength) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must be at least 8 characters.';
      }
      else if (!hasUppercase) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 capital letter.';
      } else if (!hasLowercase) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 lowercase letter.';
      } else if (!hasNumber) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 number.';
      }
      errorRePassText.textContent = '';
      errorRePassText.classList.remove('errorPass');
      errorLabelRePass.classList.add('valid-label');
      rePasswordInput.classList.add('valid-input');
    }
    //
    else {
      errorLabelRePass.classList.remove('valid-label');
      rePasswordInput.classList.remove('valid-input');
      rePasswordInput.classList.remove('input-box');
      if (isValidLength) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must be at least 8 characters.';
      }
      else if (!hasUppercase) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 capital letter.';
      } else if (!hasLowercase) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 lowercase letter.';
      } else if (!hasNumber) {
        warningPassText.textContent = '';
        errorPassText.textContent = 'Password must contain at least 1 number.';
      }
      
      errorRePassText.textContent = 'Re-entered password does not match.';
      errorRePassText.classList.add('errorRePass');
      errorLabelRePass.classList.add('error-label');
      rePasswordInput.classList.add('error-input');
    }
    errorLabelPass.classList.add('error-label');
    passwordInput.classList.add('error-input');
    errorPassText.classList.add('errorPass');
  }
}
passwordInput.addEventListener('input', validatePassword);
rePasswordInput.addEventListener('input', validatePassword);