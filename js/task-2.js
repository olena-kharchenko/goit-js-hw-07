//Задание 2

//Для каждого элемента массива ingredients создать отдельный li,
//вставить все li за одну операцию в список ul.ingredients

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(item => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = item;
  return itemOfIngredients;
});

listOfIngredients.append(...elements);
