//Задание 4
//Сделать счетчик

let counterValue = 0;

const valueSpan = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const refresh = function () {
  valueSpan.textContent = counterValue;
};

const increment = function () {
  counterValue += 1;
  refresh();
};

const decrement = function () {
  counterValue -= 1;
  refresh();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
