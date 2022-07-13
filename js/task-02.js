// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listIngredientsEl = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map(ingredient => {
  const addIngredientEl = document.createElement('li');
  addIngredientEl.textContent = ingredient;
  addIngredientEl.classList.add('item');
  return addIngredientEl;
});

listIngredientsEl.append(...ingredientsEl);
console.log(listIngredientsEl);