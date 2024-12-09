
// // var num1 = parseFloat(prompt("Введите первое число:"));
// // var operator = prompt("Введите оператор 1)+, 2)-, 3)*, 4)/ :");
// // var num2 = parseFloat(prompt("Введите второе число:"));

// // document.getElementById('checkButton').addEventListener('click', function() {
// //     if (isNaN(num1) || isNaN(num2)) {
// //         alert("Пожалуйста, введите правильные числа.");
// //         return;
// //     }

// //     if (!['1', '2', '3', '4'].includes(operator)) {
// //         alert("Пожалуйста, введите правильный оператор (1, 2, 3 или 4).");
// //         return;
// //     }

// //     var result;
// //     if (operator === '1') { 
// //         result = num1 + num2;
// //     } else if (operator === '2') {  
// //         result = num1 - num2;
// //     } else if (operator === '3') {  
// //         result = num1 * num2;
// //     } else if (operator === '4') {  
// //         result = num1 / num2;
// //     }

// //     document.getElementById('result').innerText = result;
// // });
// // Добавим стили через JavaScript

// document.body.style.margin = "0";
// document.body.style.padding = "0";
// document.body.style.boxSizing = "border-box";
// document.body.style.fontFamily = "Arial, sans-serif";
// document.body.style.backgroundColor = "#f0f0f0";
// document.body.style.color = "#333";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";

// // Создаем контейнер и применяем стили
// var container = document.createElement('div');
// container.style.backgroundColor = "#fff";
// container.style.borderRadius = "10px";
// container.style.padding = "30px";
// container.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
// container.style.textAlign = "center";
// container.style.width = "300px";

// // Добавляем контейнер на страницу
// document.body.appendChild(container);

// // Создаем заголовок и применяем стили
// var title = document.createElement('h1');
// title.innerText = "Калькулятор";
// title.style.marginBottom = "20px";
// title.style.fontSize = "24px";
// title.style.color = "#007bff";
// container.appendChild(title);

// // Создаем блок для ввода чисел и оператора
// var inputContainer = document.createElement('div');
// inputContainer.style.marginBottom = "20px";
// container.appendChild(inputContainer);

// // Ввод для первого числа
// var num1 = document.createElement('input');
// num1.type = "number";
// num1.placeholder = "Введите первое число";
// num1.style.width = "100%";
// num1.style.padding = "10px";
// num1.style.marginBottom = "10px";
// num1.style.border = "2px solid #ddd";
// num1.style.borderRadius = "5px";
// num1.style.fontSize = "16px";
// inputContainer.appendChild(num1);

// // Выпадающий список для оператора
// var operator = document.createElement('select');
// operator.style.width = "100%";
// operator.style.padding = "10px";
// operator.style.marginBottom = "10px";
// operator.style.border = "2px solid #ddd";
// operator.style.borderRadius = "5px";
// operator.style.fontSize = "16px";
// operator.innerHTML = `
//     <option value="1">+</option>
//     <option value="2">-</option>
//     <option value="3">*</option>
//     <option value="4">/</option>
// `;
// inputContainer.appendChild(operator);

// // Ввод для второго числа
// var num2 = document.createElement('input');
// num2.type = "number";
// num2.placeholder = "Введите второе число";
// num2.style.width = "100%";
// num2.style.padding = "10px";
// num2.style.marginBottom = "10px";
// num2.style.border = "2px solid #ddd";
// num2.style.borderRadius = "5px";
// num2.style.fontSize = "16px";
// inputContainer.appendChild(num2);

// // Создаем кнопку
// var button = document.createElement('button');
// button.innerText = "Вычислить";
// button.style.width = "100%";
// button.style.padding = "12px";
// button.style.backgroundColor = "#007bff";
// button.style.color = "white";
// button.style.fontSize = "18px";
// button.style.border = "none";
// button.style.borderRadius = "5px";
// button.style.cursor = "pointer";
// button.style.transition = "background-color 0.3s";
// container.appendChild(button);

// // Элемент для результата
// var resultText = document.createElement('h3');
// resultText.innerText = "Результат: ";
// var result = document.createElement('span');
// resultText.appendChild(result);
// result.style.fontWeight = "bold";
// result.style.color = "#007bff";
// container.appendChild(resultText);

// // Добавляем обработчик события для кнопки
// button.addEventListener('click', function() {
//     var num1Value = parseFloat(num1.value);
//     var operatorValue = operator.value;
//     var num2Value = parseFloat(num2.value);

//     if (isNaN(num1Value) || isNaN(num2Value)) {
//         alert("Пожалуйста, введите правильные числа.");
//         return;
//     }

//     if (!['1', '2', '3', '4'].includes(operatorValue)) {
//         alert("Пожалуйста, выберите правильный оператор.");
//         return;
//     }

//     var resultValue;
//     if (operatorValue === '1') {
//         resultValue = num1Value + num2Value;
//     } else if (operatorValue === '2') {
//         resultValue = num1Value - num2Value;
//     } else if (operatorValue === '3') {
//         resultValue = num1Value * num2Value;
//     } else if (operatorValue === '4') {
//         if (num2Value === 0) {
//             alert("На ноль делить нельзя.");
//             return;
//         }
//         resultValue = num1Value / num2Value;
//     }

//     result.innerText = resultValue;
// });
// Сначала получаем данные через prompt
var num1 = parseFloat(prompt("1-raqamni kiriting:"));
var operator = prompt("Tanlang: 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("2-raqamni kiriting:"));

// Проверяем, что данные введены корректно
if (isNaN(num1) || isNaN(num2)) {
    alert("Iltimos to'g'ri son kiriting.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("Iltimos to'g'ri tanlang (1, 2, 3 yoki 4).");
} else {
    // Создаем элементы и стилизуем их после получения данных

    // Создаем контейнер
    var container = document.createElement('div');
    container.style.backgroundColor = "#fff";
    container.style.borderRadius = "10px";
    container.style.padding = "30px";
    container.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    container.style.textAlign = "center";
    container.style.width = "300px";
    document.body.appendChild(container);

    // Создаем заголовок
    var title = document.createElement('h1');
    title.innerText = "Kalkulator";
    title.style.marginBottom = "20px";
    title.style.fontSize = "24px";
    title.style.color = "black";
    title.style.background = "yellow"
    container.appendChild(title);

    // Создаем блок ввода чисел и оператора
    var inputContainer = document.createElement('div');
    inputContainer.style.marginBottom = "20px";
    container.appendChild(inputContainer);

    // Ввод для первого числа
    var num1Input = document.createElement('input');
    num1Input.value = num1;
    num1Input.disabled = true; // Число только для отображения
    num1Input.style.width = "100%";
    num1Input.style.padding = "10px";
    num1Input.style.marginBottom = "10px";
    num1Input.style.border = "2px solid #ddd";
    num1Input.style.borderRadius = "5px";
    num1Input.style.fontSize = "16px";
    inputContainer.appendChild(num1Input);

    // Выпадающий список для оператора
    var operatorSelect = document.createElement('select');
    operatorSelect.disabled = true; // Оператор только для отображения
    operatorSelect.innerHTML = `
        <option value="1" ${operator == '1' ? 'selected' : ''}>+</option>
        <option value="2" ${operator == '2' ? 'selected' : ''}>-</option>
        <option value="3" ${operator == '3' ? 'selected' : ''}>*</option>
        <option value="4" ${operator == '4' ? 'selected' : ''}>/</option>
    `;
    operatorSelect.style.width = "100%";
    operatorSelect.style.padding = "10px";
    operatorSelect.style.marginBottom = "10px";
    operatorSelect.style.border = "2px solid #ddd";
    operatorSelect.style.borderRadius = "5px";
    operatorSelect.style.fontSize = "16px";
    inputContainer.appendChild(operatorSelect);

    // Ввод для второго числа
    var num2Input = document.createElement('input');
    num2Input.value = num2;
    num2Input.disabled = true; // Число только для отображения
    num2Input.style.width = "100%";
    num2Input.style.padding = "10px";
    num2Input.style.marginBottom = "10px";
    num2Input.style.border = "2px solid #ddd";
    num2Input.style.borderRadius = "5px";
    num2Input.style.fontSize = "16px";
    inputContainer.appendChild(num2Input);

    // Создаем кнопку для вычисления
    var button = document.createElement('button');
    button.innerText = "Tekshirish";
    button.style.width = "100%";
    button.style.padding = "12px";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
    container.appendChild(button);

    // Элемент для отображения результата
    var resultText = document.createElement('h3');
    resultText.innerText = "Natija: ";
    var result = document.createElement('span');
    resultText.appendChild(result);
    result.style.fontWeight = "bold";
    result.style.color = "#007bff";
    container.appendChild(resultText);

    // Обработчик кнопки "Вычислить"
    button.addEventListener('click', function() {
        var resultValue;

        // Выполнение выбранной операции
        if (operator === '1') {
            resultValue = num1 + num2;
        } else if (operator === '2') {
            resultValue = num1 - num2;
        } else if (operator === '3') {
            resultValue = num1 * num2;
        } else if (operator === '4') {
            if (num2 === 0) {
                alert("0 ga bo'lsa bo'lmaydi.");
                return;
            }
            resultValue = num1 / num2;
        }

        // Отображаем результат
        result.innerText = resultValue;
    });
}

