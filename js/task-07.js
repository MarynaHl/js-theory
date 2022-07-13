
// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


// const inputBtn = document.querySelector('input#font-size-control');
// const textString = document.querySelector('span#text');

//     inputBtn.addEventListener('input', onInputBtnChange);
//     textString.style.fontSize = `${inputBtn.value}px`;
// function onInputBtnChange(event) {
//     textString.style.fontSize = `${inputBtn.value}px`;
// }
// 
const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onInputChange);

function onInputChange({currentTarget}){
    text.setAttribute('style', `font-size: ${currentTarget.value}px`);