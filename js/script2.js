let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let quantityPlus = 0;
let minArr = arr[0];
let idMin = 0;
let maxArr = arr[0];
let idMax = 0;
let quantityMinus = 0;
let quantityPlusEven = 0;
let quantityPlusOdd = 0;
let sumPlusEven = 0;
let sumPlusOdd = 0;
let composition = 1;

for (let i = 0; i < arr.length; i++) {

	if (arr[i] > 0) {
		sum = sum + arr[i];
		quantityPlus++;
		composition = composition * arr[i];
	}

	if (arr[i] < minArr) {
		minArr = arr[i];
		idMin = i;
	}

	if (arr[i] > maxArr) {
		maxArr = arr[i];
		idMax = i;
	}

	if (arr[i] < 0) {
		quantityMinus++;
	}

	if (arr[i] > 0 && arr[i] % 2 !== 0) {
		quantityPlusOdd++;
		sumPlusOdd += arr[i];
	}

	if (arr[i] > 0 && arr[i] % 2 === 0) {
		quantityPlusEven++;
		sumPlusEven += arr[i];
	}

}

console.log('Сумма положительных элементов равна: ' + sum);
console.log('Количество положительных элементов равно: ' + quantityPlus);
console.log('Минимальный элемент массива: ' + minArr + ', его порядковый номер: ' + idMin);
console.log('Максимальный элемент массива: ' + maxArr + ', его порядковый номер: ' + idMax);
console.log('Количество отрицательных элементов равно: ' + quantityMinus);
console.log('Количество нечетных положительных элементов равно: ' + quantityPlusOdd);
console.log('Количество четных положительных элементов равно: ' + quantityPlusEven);
console.log('Сумма четных положительных элементов равна: ' + sumPlusEven);
console.log('Сумма нечетных положительных элементов равна: ' + sumPlusOdd);
console.log('Произведение положительных элементов равно: ' + composition);
arr.splice(0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0) + arr.splice(19,5,0,0,0,0,0);
console.log(arr);