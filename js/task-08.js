// Задание 8
// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formLogin = {
  form: document.querySelector(".login-form"),
};
formLogin.form.addEventListener("submit", onFormSubmit);
function formSubmit(events) {
  events.preventDefault();

  const {
    elements: { email, password },
  } = events.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!!!");
  } else {
    const formData = new FormData(events.currentTarget);
    const loginFormData = {};

    formData.forEach((value, name) => {
      loginFormData[name] = value;
    });

    console.log(loginFormData);
  }

  events.currentTarget.reset();
}
