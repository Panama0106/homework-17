

let year = +prompt('Введите год, для определения высокосного:');

let years = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 'Высокосный' : 'Не высокосный';
console.log(`Ваш год является: ${years}`)