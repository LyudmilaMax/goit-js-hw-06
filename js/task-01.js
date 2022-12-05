
const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});

// const totalCategories = document.querySelectorAll('#categories li.item')
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(categories => `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);