// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", outFocus);

const amount = Number(validInput.attributes["data-length"].value);

function outFocus(event) {
  event.currentTarget.value.length === amount
    ? (validInput.classList = "valid")
    : (validInput.classList = "invalid");
}

// const validInput = {
//    validationInput: document.querySelector('#validation-input'),
//     validNumberOfDigits: document.querySelector('input').dataset.length,
// }
// validInput.validationInput.addEventListener('blur', onInputValidation);

// function onInputValidation(event) {
//     if (event.currentTarget.value.length !== Number(validInput.validNumberOfDigits)) {
//         validInput.validationInput.classList.add('invalid');
//         validInput.validationInput.classList.remove('valid');
//     } else {
//         validInput.validationInput.classList.add('valid');
//         validInput.validationInput.classList.remove('invalid');
//     }
// }
