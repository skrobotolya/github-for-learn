"use strict"
function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}
/**
 * Функция получает два числа и осуществляет операцию.
    param {number} arg1
    param {number} arg2
    param {string} operation может быть "+", "-", "*", "/".
    trows {Error} если передана непредусмотренная операция, то будет выводиться ошибка.
    returns {number} врзвращаемый функцией результат.
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Нет такой операции");
    }
}
mathOperation(5, 1, "+");

let a = mathOperation(3, 5, "+");
alert(`Сумма равна ${a}`);
a = mathOperation(3, 5, "-");
alert(`Разница равна ${a}`);
a = mathOperation(3, 5, "*");
alert(`Произведение равно ${a}`);
a = mathOperation(3, 5, "/");
alert(`Частное равно ${a}`);
