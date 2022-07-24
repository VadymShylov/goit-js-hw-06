// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputSizeControl = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

function onOutputChange() {
  output.style.fontSize = `${inputSizeControl .value}px`;
}

inputSizeControl .addEventListener("input", onOutputChange);
addEventListener("DOMContentLoaded", onOutputChange);