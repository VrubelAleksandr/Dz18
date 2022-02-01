//5) Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск, приклад: 10369 1 0 3 6 9
let x = parseInt(prompt('число из пяти цифр'));
let remainder = x % 10000;
let k = ((x - remainder) / 10000);
let remainder2 = remainder % 1000;
let l = (remainder - remainder2) / 1000;
let remainder3 = remainder2 % 100;
let m = (remainder2 -remainder3) / 100;
let remainder4 = remainder3 % 10;
let n = (remainder3 - remainder4) / 10;
let o = remainder4;
console.log(k + ' ' + l + ' ' + m + ' ' + n + ' ' + o);