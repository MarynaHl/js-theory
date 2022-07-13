// Напиши скрипт, який під час набору тексту 
// в інпуті input#name-input (подія input), підставляє його 
// поточне значення в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputBtn = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

inputBtn.addEventListener('input', onInputBtnInput);

function onInputBtnInput(event) {
  if (event.currentTarget.value === '') {
    return (output.textContent = 'Anonymous');
  }
  output.textContent = event.currentTarget.value;
}