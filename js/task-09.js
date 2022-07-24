function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const elementOfBody = document.querySelector("body");
const spanElement = document.querySelector(".color");
const buttonElement = document.querySelector(".change-color");

buttonElement.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  elementOfBody.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = elementOfBody.style.backgroundColor;
}
// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
