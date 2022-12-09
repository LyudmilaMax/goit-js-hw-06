const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
let ingredientsToAppend = [];
const ingredientsName = ingredients.forEach(ingredient =>
{
  let ingredientsEl = document.createElement('li'); 
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  ingredientsToAppend.push(ingredientsEl);
   
})
ingredientsList.append(...ingredientsToAppend);
