// Напиши скрипт для створення галереї зображень 
// на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images 
// для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const contCardListItems = document.querySelector('ul.gallery');

const cardListTemplate = ({ url, alt }) => {
  return `<li class="gallery-list">
        <img
          src="${url}",
          alt="${alt}" width = 380 height = 200,
        />
      </li>`;
};
const markup = images.map(cardListTemplate).join('');
console.log(markup);
contCardListItems.insertAdjacentHTML('beforeend', markup);



// const imagesEl = document.querySelector('#gallery');

// const createImageCards = images
// .map(({url, alt}) => `<li style="list-style: none">
// <img src="${url}" alt="${alt}" width = 380 height = 200/></li>`)
// .join('');

// imagesEl.insertAdjacentHTML('beforeend', createImageCards);
// чомусь не працює