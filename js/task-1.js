//Задание 1

// 1) Посчитать количество категорий в ul#categories

const itemsInCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemsInCategories.length} категории.`);

// const categories = document.querySelector('#categories');
// console.log(`В списке ${categories.children.length} категории.`);

// 2) Для каждого элемента li.item найти текст заголовка h2 и количество элементов в категории

itemsInCategories.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
