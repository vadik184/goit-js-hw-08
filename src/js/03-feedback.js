import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formData = {};
const getNewData = throttle(function (event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);
form.addEventListener('input', getNewData);

try {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
} catch (error) {
  console.log(error);
}
console.log(formData);
function makeSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}
form.addEventListener('submit', makeSubmit);
