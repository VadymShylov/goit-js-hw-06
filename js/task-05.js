// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput= {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

textInput.nameInput.addEventListener('input', onOutputNameChange);

function onOutputNameChange(event) {
    if (event.currentTarget.value.length === 0) {
        textInput.nameOutput.textContent = "Anonymous";
    } else {
       textInput.nameOutput.textContent = event.currentTarget.value;
    }
}