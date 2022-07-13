// Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// let counterValue = 0;
// const decBtn = document.querySelector('button[data-action="decrement"]');
// const incBtn = document.querySelector('button[data-action="increment"]');
// const countClickEl = document.querySelector('#value');

// decBtn.addEventListener('click', onDecBtnClick);
// function onDecBtnClick() {
//   counterValue -= 1;
//   console.log((countClickEl.textContent = counterValue));
// }

// incBtn.addEventListener('click', onIncBtnClick);
// function onIncBtnClick() {
//   counterValue += 1;
//   console.log((countClickEl.textContent = counterValue));
// }

const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

function onButtonDecrementClick (){
    counterValue.textContent = Number(counterValue.textContent)-1;
};
function onButtonIncrementClick (){
    counterValue.textContent = Number(counterValue.textContent)+1;
};
buttonDecrement.addEventListener('click', onButtonDecrementClick);
buttonIncrement.addEventListener('click', onButtonIncrementClick);