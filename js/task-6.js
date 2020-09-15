//Задание 6
//Проверить 6 символов или нет

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validation);

const validLength = Number(inputEl.dataset.length);

function validation() {
  if (inputEl.value.length === validLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (inputEl.value.length === 0) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
