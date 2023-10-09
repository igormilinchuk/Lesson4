const array = [];

const prompt = require('prompt-sync')();

const length = parseInt(prompt('Введіть довжину масиву: '));

if (isNaN(length)) {
  console.log('Будь ласка, введіть числове значення для довжини масиву.');
} else {

  const startNumber = parseInt(prompt('З якого числа почнеться масив: '));

  if (isNaN(startNumber)) {
    console.log('Будь ласка, введіть числове значення для початкового числа.');
  } else {
    
for (let i = startNumber; i < startNumber + length; i++) {
  array.push(i);
}
    console.log('Згенерований масив:', array);
  }
}
