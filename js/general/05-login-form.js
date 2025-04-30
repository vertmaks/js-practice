let refs = {
  form: document.querySelector('.login-form'),
  loginFormBtn: document.querySelector('.form-btn-submit'),
  emailInput: document.getElementById('userEmail'),
  passwordInput: document.getElementById('userPassword'),
};

let emailTimeoutId = null;
let passwordTimeoutId = null;

function formSubmit(event) {
  event.preventDefault();

  const email = refs.emailInput.value.trim();
  const password = refs.passwordInput.value;

  if (!email || !password) {
    alert('Enter email and password');
    return;
  } else if (password.length < 6) {
    alert('The minimum number of characters for a password is 6');
    return;
  }

  refs.form.reset();
}

refs.form.addEventListener('submit', formSubmit);
