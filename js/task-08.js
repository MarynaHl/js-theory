// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обробка відправлення форми form.login-form повинна відбуватися 
// відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
//  об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням 
//  властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти
//  значення полів форми методом reset.


const formRef = document.querySelector('form.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password =  formElements.password.value;
    const formData = {email, password}; 
    if (email && password) {
        console.log(formData)
    } 
    else {
        alert('Please, complete all fields')
    }
}