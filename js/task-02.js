const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log('imageEl', imageEl);
  console.log(imageEl.src);
  imageEl.src = 
  'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg';
  imageEl.alt = 'New cat';

  const heroTitleEl = document.querySelector('.hero__title');
  console.log('heroTitleEl', heroTitleEl);
  console.log(heroTitleEl.textContent);
  heroTitleEl.textContent = 'I`m sweety'
});
