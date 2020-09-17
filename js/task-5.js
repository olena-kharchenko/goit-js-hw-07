//Задание 5
//Привет, незнакомец!

const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  outputEl.textContent = inputEl.value === '' ? 'незнакомец' : inputEl.value;
});


