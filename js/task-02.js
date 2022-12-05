const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsName = ingredients.forEach(ingredient =>
{
  let ingredientsEl = document.createElement('li'); 
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  ingredientsList.append(ingredientsEl);
  
})

console.log(ingredientsList);


// for (let i = 0; i < ingredients.length; i++) {
// 	const ingredientsEl = document.createElement('li')
// 	ingredientsEl.textContent = ingredients[i]
// 	ingredientsEl.classList.add('item')
// 	ingredientsList.append(ingredientsEl)
// }