let arr = [], digit;
let digitLength = parseInt(prompt('Сколько чисел Вы хотите ввести?'));

for (let i = 0; i < digitLength; i++) {
	digit = parseInt(prompt('Введите любое число'));
	arr.push(digit);
}

document.write('<p>' + arr + '</p>');

function compareDigit (a, b) {
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}

document.write('<p>' + arr.sort(compareDigit) + '</p>');

arr.splice(2,3);
document.write('<p>' + arr + '</p>');