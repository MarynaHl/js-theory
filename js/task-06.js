// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// Рішення 1
// const inputBtn = document.querySelector('#validation-input');
// const inputDataLengthEl = Number(inputBtn.getAttribute('data-length'));
// const borderInputBtnValid = document.querySelector('#validation-input');

// inputBtn.addEventListener('blur', onInputBtnBlur);
// function onInputBtnBlur(event) {
//     if (event.currentTarget.value.length === inputDataLengthEl) {
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid');
//         return;
//     }
//     event.currentTarget.classList.add('invalid');
//     event.currentTarget.classList.remove('valid');
//     console.log(event.currentTarget.value);
// }


const validationInput = document.querySelector('#validation-input');

const onInputBlur = () => {
    validationInput.classList.forEach(elem => validationInput.classList.remove(elem));
  if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
};
validationInput.addEventListener('blur', onInputBlur);