
const CategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${CategoriesEl.length}`);


CategoriesEl.forEach(categoryEl => {
    const titleEl = categoryEl.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const ulCategorEl = categoryEl.querySelectorAll('li').length;
    console.log(`Elements: ${ulCategorEl}`);
});