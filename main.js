//1//
const number1 = Number(prompt("Введите первое число:"));
const number2 = Number(prompt("Введите второе число:"));
const number3 = Number(prompt("Введите третье число:"));

const maxNumber = Math.max(number1, number2, number3);

console.log(maxNumber);
//2//
const age = Number(prompt("Введите ваш возраст:"));
const result = age >= 18 && age <= 60;
console.log(result);
//3//
const username = "Muslim";
const password = "12345";

const enteredUsername = prompt("Введите username:");
const enteredPassword = prompt("Введите пароль:");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}
//4//
const correctAnswer1 = "5";
const correctAnswer2 = "4";
const correctAnswer3 = "10";
const correctAnswer4 = "8";
const correctAnswer5 = "15";

const answer1 = prompt("1. Сколько будет 3 + 2?");
const answer2 = prompt("2. Сколько будет 2 + 2?");
const answer3 = prompt("3. Сколько будет 4 + 6?");
const answer4 = prompt("4. Сколько будет 4 * 2?");
const answer5 = prompt("5. Сколько будет 5 + 10?");

let correctAnswers = 0;

if (answer1.toLowerCase() === correctAnswer1) {
    correctAnswers++;
}

if (answer2 === correctAnswer2) {
    correctAnswers++;
}

if (answer3.toLowerCase() === correctAnswer3) {
    correctAnswers++;
}

if (answer4 === correctAnswer4) {
    correctAnswers++;
}

if (answer5.toLowerCase() === correctAnswer5) {
    correctAnswers++;
}

console.log(correctAnswers);
//5//
const number = Number(prompt("Введите число:"));

if (number % 2 === 0 || number % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}
//6//
const purchaseAmount = Number(prompt("Введите сумму покупки:"));

if (purchaseAmount > 5000) {
    const result = purchaseAmount * 0.9;
    console.log(result);
} else {
    console.log(purchaseAmount);
}
//7//
const symbol = prompt("Введите символ:");

const vowel = "aeiou".includes(symbol.toLowerCase());

console.log(vowel);
//8//
const number1_1 = Number(prompt("Введите число:"));
const percent = Number(prompt("Введите процент:"));

const conclusion = number1_1 * percent / 100;

console.log(conclusion);