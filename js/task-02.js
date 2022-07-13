
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
