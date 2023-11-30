// af
"use strict";
 
// Задание 1:
// 1. Установить расширение форматирования кода “Prettier”: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
// Если не загружается, можно скачать здесь: https://open-vsx.org/extension/esbenp/prettier-vscode
// 2. Установить расширение “JavaScript Snippet Pack”: https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack
// Если не загружается, можно скачать здесь: https://disk.yandex.ru/d/ktnuTXmnzVEUCw
// 3. Создайте файлы для вашей первой программы: index.html и script.js.
// 4. Подключите файл `script.js` к `index.html`.
// 5. В файле script.js выведите в консоль текст “Текст из script.js!”.
// 6. В файле `index.html` создайте скрипт (без подключения отдельного js-файла), который выводет в консоль текст “Текст из index.html”.
// 7. Проверьте работоспособность кода.
// Тайминг: 20 минут.
 
// Задание 2:
// 1. Создайте переменную `num` и присвойте ей значение `123`. Выведите значение этой переменной в консоль.
// const num = 123;
// console.log(num);
// let num2 = 500;
// console.log(num2);
// num2 = 100;
// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на значение `7`, выведите переменную `а` в консоль.
// let a = 5;
// a = 7;
// console.log(a);
// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`. С помощью функции `console.log` выведите в консоль содержимое переменной `b`.
//const b = 1 + 2 + 3;
//console.log(b);
// 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст.
// Тайминг: 20 минут.
//const b = 1 + 2 + 3;
/*console.log(b);
тоже комментарий
*/
 
// Задание 3: 
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
// const myAge = 45;
// const currentYear = 2023;
// const sum = myAge + currentYear;
// const diff = myAge - currentYear;
// const mul = myAge * currentYear;
// const div = myAge / currentYear;
 
// 2. Выведите в консоль все созданные переменные.
// console.log(myAge);
// console.log(currentYear);
// console.log(sum);
// console.log(diff);
// console.log(mul);
// console.log(div);
// 3. Сложите все созданные переменные и выведите результат в консоль.
//console.log(myAge + currentYear + sum + diff + mul + div);
// Тайминг: 20 минут.
 
// Задание 4: 
// Не запуская код, определите, что отобразится в консоли: 
// `let a = 5 + 5 * 3 + 3;`
// Не запуская код, определите, что отобразится в консоли:
// `let b = 8 / 2 + 2;`
// Не запуская код, определите, что отобразится в консоли:
// `let c = (2 + 3) * (2 + 3);`
// Не запуская код, определите, что отобразится в консоли:
// `let d = (2 + 3) * 2 + 3;`
// Не запуская код, определите, что отобразится в консоли:
// `let e = (2 * 8) / 4;`
// Не запуская код, определите, что отобразится в консоли:
// `let f = 2 * (8 / 4);`
// Тайминг: 20 минут.
 
// Задание 5: 
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
//const a = 0.1;
// const b = 0.2;
// console.log(a + b);
 
// const c = 13453.35637;
// console.log(Math.round(c));
// console.log(Math.floor(c));
// console.log(Math.ceil(c));
// console.log(Math.trunc(c));
// console.log(c);
// console.log(c * 100);
// console.log(Math.round(c * 100) / 100);
// console.log(c.toFixed(2));
 
// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
//const a = 100;
//console.log(-a);
 
// Тайминг: 5 минут.
 
// Задание 6: 
// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.
// const myName = "Артур";
// const myFamile = "Федоров";
// console.log(myName + " " + myFamile);
// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'javascript'.
// const java = "java";
// const script = "script";
// console.log(java + script);
// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).
// const a = "hello";
// const b = "world";
// console.log(`${a} ${b}`);
 
// Тайминг: 15 минут.
 
let num = 5;
console.log(num);
num = 10;
console.log(num);
num = 10 ** 2;
console.log(num);
 
//Строки - string
//Числа - number
//Логические - boolean
//Не определённое значение - undefined
let num2;
// Пустое значение - null 
let num2 = null;
//Уникальные значения - symbol 
//Большое целое число - BigInt
let num3 = 356893576287029845702986720986721497298673856703596730598763095867n;
//Объект - object

