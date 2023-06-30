const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(function (event) {
    formInput(event, form);
  }, 500)
);

form.addEventListener('submit', function (event) {
  formSubmit(event, form);
});

function formInput(event, form) {
  const user = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function formSubmit(event, form) {
  event.preventDefault();
  const newUser = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(newUser);
  localStorage.removeItem('feedback-form-state');

  form.reset();
}

window.addEventListener('load', function (event) {
  const newUser = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (newUser) {
    form.elements.email.value = newUser.email;
    form.elements.message.value = newUser.message;
  }
});
