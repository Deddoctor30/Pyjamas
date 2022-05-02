/* Содержание

1. IF                                                                if11
1. FOR                                                               for11
1. Function                                                          функции11
1. Объект                                                            объект11
1. Массив                                                            массив11
1. DOM                                                               dom11
2. querySelectorAll                                                  query11
2.1 Matches - продвинутая проверка элементов при переборе            matches11
3. closest                                                           closest11
5. Отмена стандартных действий браузера                              отменастандарта11
6. Формы                                                             формы11
7. Строки                                                            строки11
8. Работа с телефоном                                                телефон11
9. Загрузка страницы с script (оптимизация)                          оптимизация11
10. CSS                                                              css11
11. Чтобы получить список доступных свойств у тега - dir             dir11
12. Делегирование (кнопки)                                           делегирование11
13. Дефолтные значения                                               defolt11
14. Задержки                                                         задержки11
15. Даты                                                             date11
16. Размеры окна браузера                                            браузер11
17. События                                                          события11
18. This                                                             this11
19. Классы                                                           классы11
20. JSON                                                             json11
21. Сервер                                                           сервер11
22. Объект в массив (перебор)                                        объект в массив
23. Json server                                                      jsonserver11
24. Async и await                                                    Async и await11
25. Преобразовать данные с сайта в JSON                              form to JSON11
26. Библиотека axios (для работы с сервером)                         axios11
27. Геттеры и сеттеры                                                get11
28. Local Storage                                                    localstorage11
29. Регулярные выражения                                             выражения11
30. Свой фильтр                                                      фильтр11
31. Map                                                              map11
32. Прием модуль                                                     модуль11
33. Модульность в js - CommonJS                                      CommonJS11
34. type='module'                                                    type11
35. Try and Catch                                                    try11
36. Поддержка старыми браузерами                                     старостьнерадость11
37. addEventListener                                                 add11
38. React                                                            react11

Справка:


getComputedStyle                             Чтобы получить стили написанные именно в CSS: getComputedStyle(element, [pseudo]) - (только для чтения, переназначить нельзя)
                                             [pseudo - стили кот. относятся к псевдо-элементу]

document.documentElement.scrollTop = 50      Прокрутит скрол на странцие до заданного к-ва пикселей (50)
window.scrollTo и scrollBy                   Перемещение по странице

classList.remove('_active')                  Css классы (remove, add, toggle, contains)

addEventListener('click', () => {            События
   xxx = setInterval(logger, 500);
});

createElement                                создает элемент в html

innerHTML                                    содержимое html элемента вместе с тэгами










*/

const { url } = require("inspector");





//  Чтобы элемент был по дефолту равен чему-то   xxx(i = 0)                                                              Defolt11

function showTabContent(i = 0) {                // дальше при вызове функции, даже если будут пустые скобки () значение все равно будет будто там стоит 0

};












// Если нужно проверить нажата ли кнопка или стоит галочка:
// смотри в разделе формы

// Галочки

const item = chekbox.checked;


// Кнопки

const chekBox = mainForm2.check3;

console.log(chekBox.value);         // значение
console.log(chekBox.checked);       // false, т.к. кнопка не выбрана


// Назначить значение

chekBox.value = 'save';
chekBox.checked = 'true';




"use strict"
// _______________________________ Переменные _________________________________
let myStyle = "fun";
myStyle = 2;
console.log(myStyle);



function test() {
   let mylife = 3;
   console.log(mylife);
}

// _______________________________ Константы _________________________________

const profile = {
   name: "wados",
   age: 27,
}

console.log(profile);

profile.age = 18;

console.log(profile);

// _______________________________ Var _________________________________
// Вары устаренили

age = 35;
console.log(age);
var age;


if (true) {
   var name = 50;
}

console.log(name);



// _______________________________ Тип данных _________________________________

let userName = true;
console.log(userName);
console.log(typeof userName);

userName = String(userName);

console.log(userName);
console.log(typeof userName);


let usersName = 145 / 0;
console.log(usersName);









   // Alert

   alert('Hello');

   // Confirm - выскакиевает меню с текстом, и возвращает true или false в зависимости от выбора пользователя
   const asq = confirm('Вам есть 18?')

   // Prompt - выскакиевает меню с текстом, и значение в зависимости от выбора пользователя
   const answer = prompt('Сколько вам лет?', '18'); // Во вторых скобках - плейсхолдер

   console.log(answer);

//___________________________Операторы_____________________________________



   //_______________Математика____________



      let x;   

      // Сложение
      x = 5 + 8;
      console.log(`Результат сложения ${x}`);

      let result = "Дом" + " который" + " построил Джек"
      console.log(result);

      let result2 = "Дом " + 22;
      console.log(result2);
      console.log(typeof result2);

      let result3 = 22 + 11 + " Дом";
      console.log(result3);

      // + перед строкой переводит строку в число
      let result5 = + "11";
      console.log(result5);
      console.log(typeof result5);

      // + перез выводом делают их числами и выполняет операцию 25 + -10 = 15 аналог если ставить Number перед user1 и user2
      let user1 = "25";
      let user2 = "-10";
      console.log(+user1 + +user2);




      // Вычетание
      x = 7 - 9;
      console.log(`Результат сложения ${x}`);

      // любые операторы строки и числа переводят результат в число и выполняют операцию
      let result4 = "22" - 10;
      console.log(result4);
      console.log(typeof result4);




      // Умножение
      x = 2 * 16;
      console.log(`Результат сложения ${x}`);

      // Деление
      x = 13 / 2;
      console.log(`Результат сложения ${x}`);

      // Взятие остатка от деления %
      x = 13 % 2;
      console.log(`Результат сложения ${x}`);

      // Взятие в степень **
      x = 13 ** 2;
      console.log(`Результат сложения ${x}`);






   //_____________________________Присвоения___________________________________





      // Присвоение = (но лучше так не делать) результат будет a = 4, а не 5

      let a = 5;
      let b = 1;

      let sum = 8 - ( a = b + 3);
      console.log(a);




      // Присвоение через =

      let result1 = result2 = result3 = 1 + 2;
      console.log(result1);
      console.log(result2);
      console.log(result3);




      // Короткая запись d += 1 + 3

      let c = 5;
      c = c + 1 + 3;
      console.log(c);

      let d = 5;
      d += 1 + 3;
      console.log(d);


   //________________________________________________________________


      // Инкремент ++ - увеличивает значение на 1

      let inc = 5;
      inc++;
      console.log(inc);

      // Декремент -- - уменьшает значение на 1

      let dec = 5;
      dec--;
      console.log(dec);

      // inc++ и ++inc имеют разницу при выводе через console.log(inc)
      // inc = 0, inc++, результат = 0. Если inc = 0, ++inc, результат 1.

      let mat = 0;
      let newmat = 2 * ++mat;
      console.log(newmat);



      // Операторы сравнения (возвращают true or false)

      // <, >, <=, >=, == - равно, != - не равно, === строго равно, !== строго не равно.

      console.log(2 > 1);
      console.log(2 < 1);
      console.log(25 == 13);
      console.log(7 != 11);

      // Приводит строчный элемент к числовому
      console.log('51' == 51);

      // Присвоить переменной

      let f = 2 > 1;
      console.log(f);


   //________________________________________________________________

      // Строгие операторы сравнивают не приводя к числовому
      // false
      console.log('51' === 51);

   //________________________________________________________________

      // Логические операнды 

      // || - оператор или. Вернет true, или если тру нет тогда false (читает слева на право) (т.е. переменные с данными)

      console.log(0 || 1);
      console.log(true || 1);
      console.log(null || 'fixIt' || 12);
      console.log(null || '' || 12);

      // так

      let name2 = '';
      let surrname = "возраст";

      let user = name2 || surrname || "имя пользователя"

      console.log(user);

      // или так
      // если юзер меньше админа, будет юзер +1, иначе будет юзер
      let user3 = 0;
      let admin = 5;

      user3 > admin || user3++;

      console.log(user3);


      // && - оператор и, тоже что и || только возращает flase, а если только тру, тогда возращает тру(или последний тру или фалс).

      console.log('дом' && 0 && 14);
      console.log('дом' && 11 && 14);

      // && - больший приоритет чем у ||

      console.log('дом' && 1 || 0 && 5);
      // сначала 'дом' && 1, потом 0 && 5, а затем 1 // 0.

      // Пример

      let user5 = 1;
      user5 > 0 && console.log(`Пользователь: ${user5}`);
      // если user5 = 1, то выводится пользователь: user5, если 0, то ничего не выводится



      // Оператор ! не - меняет буллевые операторы. Наивысший приоритет

      console.log(!true);
      // будет лож

      console.log(!null);
      // будет тру

      console.log(!24);
      // будет лож

      // Пример

      console.log(!true && 58 || 18 && !1);
      // сначала !true => false, false && 58 => false, 18 && !1 => !1(0, false), false || !1(0, false) => false



      // Сделать булевый оператор !! или Boolean писать

      console.log(!!"Дом");
      // будет тру
      console.log(!!"");
      // будет лож


      // Не null - ??


      let name5 = '';
      console.log(name5 ?? "имя");


      // Примеры

      console.log('35' + '22');
      console.log('35' * '22');
      console.log('35' - '22');
      console.log('35' > 22);








// _______________________________ If _________________________________                                                                               if11

let a = 11
let b = 10

if (a == b) {
   console.log("Верно");
} else {
   console.log("Не верно");
}


// Комбинирование

let dom = 4

if (dom > 10) {
   console.log("dom больше 10");
} else if (dom > 5) {
   console.log("dom больше 5");
} else if (dom >1) {
   console.log("dom больше 1");
} else {
   console.log(":-(");
}


let test2 = "Вася";

let test3 = " Оля";

test2 += test3
console.log(test2);



//?
let c = (13 < 2) ? "Вася" : "Оля";
console.log(c);


// Комбинирование

let d = (13 < 2) ? "больше 10" :
         (2 == 3) ? "равно?" :
         ((11 + 12 * 3) > 111) ? "че?" : "совсем запутался"

console.log(d);


// Домашка
let mes = (92 > '11' && 58 < 100) ? 'Истина' : 'Лож!'
console.log(mes);
// будет истина


if (0) {
   console.log('Лож!');
} else if (" ") {
   console.log('Истина!');
}
// будет истина, т.к. "_" пробел = true






// switch...case
// в switch передается что проверяем, и если switch === case, тогда выполняем что после : 
input.target.addEventListener('input', () => {
   switch(input.getAttribute('id')) {
      case 'height':
         height = +input.value;
         break;
      case 'weight':
         weight = +input.weight;
         break;
      case 'age':
         age = +input.age;
         break;
   }
});



//________________________for while___________________________________

// for while
let num = 0;
while (num <= 5) {
   console.log(num);
   num++;
}










//do...while пишется наоборот, чтобы хотя бы 1 фалс прописался

let num2 = 0;
do {
   console.log(num2);
   num++;
} while (num < 0);
// num2 не < 0, но все рвно будет 1 итерация











// for                                                                                                                                             
// for (с чего начинаем; условие; шаг) {код}

for (let index = 0; index < 5; index++) {
   console.log(index);
}




// Пример

let data = document.querySelectorAll('h1');

for (let i = 0; i < data.length; i++) {         // i < xxx.length - повторит столько раз, сколько элементов в псевдомассиве
   console.log(data[i]);                        // Чтобы вывести в консоль содержимое каждого элемента
}





// Остановить код

let num3 = 0;
for (; num3 < 5; num3++) {
   console.log(num3);
   if (num3 == 2) break;
}
console.log(`Работа равна ${num3}`);


// Прервать выполнять часть круга

let num4 = 0;
for (; num4 < 5; num4++) {
   if (num4 == 2) continue;
   console.log(num4);
}









// Методы перебора every / some
   // every - возвращает булиновое значение если все элементы массива соответствуют условию
      const every = [4, 'Ilya', 'Petya'];
      console.log(every.every(item => typeof(item) === 'number'));     // будет true
   // some - возвращает булиновое значение если хоть один элемент массива соответствует условию

      const some = [4, 'Ilya', 'Petya'];
      console.log(some.some(item => typeof(item) === 'number'));     // будет true








// Объект в массив. Чтобы из существующего объекта выдербанить только нужные элементы:                                  объект в массив

const obj = {
   ivan: 'persone',
   anna: 'persone',
   dog: 'animal',
   cat: 'animal'
}

const newArr = Object.entries(obj)                                            // превращает объект в массив
.filter(item => item[1] === 'persone')                                        // находим persone в ново-созданном массиве
.map(item => item[0]);                                                        // через map оставляем только первое значение, т.е. имена

console.log(newArr);











   // Преобразить formData в JSON (преобразовать данные полученные с формы на сайте в JSON файл)                     form to JSON11
   // так
   // const obj = {};                                                                           // Пустой объект, куда будут передаваться данные
   // formData.forEach(function (value, key) {
   //    obj[key] = value;
   // })
   
   // или так
   const json = JSON.stringify(Object.fromEntries(formData.entries()));












// Метки breack или continue с меткой останавливают саму метку

mark: for (let bob = 0; bob < 2; bob++) {
   for (let bob2 = 0; bob2 < 3; bob2++) {
      if (bob2 == 2) {
         continue mark;
      }
      console.log(bob2);
   }
}



let p = 8;
while (p) {
   console.log(p);
   p--;
}










//__________________________Функции______________________________________                                                                                      функции11






   // Функции

   function name(params) {
      
   }

   showMessage ();

   function showMessage() {
      console.log('Сообщение');
   }

   showMessage ();
   showMessage ();







   // Работа с функциями - Задать значения по умолчанию

   function calcSum(numOne, numTwo) {
      function calcSum(numOne = 1, numTwo = 5) {                                                     // задать значения по умолчанию
      console.log(numOne);
      console.log(numTwo);

      let numSum  = numOne + numTwo;
      
      console.log(`Результат: ${numSum}`);
      }
   }
   calcSum (1, 5);










   // Функции колбэки

   function calcSum2 (numOne1, numTwo1, more, less) {
      let sum = numOne1 + numTwo1;
      
      if (sum > 3) { 
         more();
      } else {
         less();
      }
   }

   function showMore() {
      console.log('Больше 3');
   }

   function showLess() {
      console.log('Меньше 3');
   }

   calcSum2 (1, 1, showMore, showLess);

   // Return - возврат значения(переменной), который записан в функции, без него переменные объявленные в функции не использовать вне ее

   function calcSum2 (numOne2, numTwo2) {
      let sum1 = numOne2 + numTwo2;
      
      return sum1;
      // код ниже - не выполняется
   }

   let result6 = calcSum2(1, 1);

   console.log(`Сумма ${result6}`);



   // Рекурсия (когда функция сама взаимодействует с собой)
   // Пример с for

   function calcSumm4(numOne4, numTwo4) {
      let result7 = 1;

      for (let i = 0; i < numTwo4; i++) {
         result7 *= numOne4;
      }
      return result7;
   }

   console.log(calcSumm4(3, 2));

   // Пример с рекурсией

   function calcSumm5(numOne5, numTwo5) {
      if (numTwo5 === 1) {
         return numOne5;
      } else {
         return numOne5 * calcSumm5(numOne5, numTwo5 - 1);
      }
   }
   console.log(calcSumm5(3, 2));






// Стрелочная функция

let getMessage = (text, name2) => text + ', ' + name2 + "!";

console.log(getMessage('Привет', 'Андрей'));






// Многострочная стрелочная функция

let getMessage2 = (text2, name3) => {
   let message = text2 + ', ' + name3 + '!';
   return message;
}; 
console.log(getMessage2('Привет', 'Андрей'));





















// Задержки                                                                                                          задержки11

// 1 раз выведет что-то через заданный промежуток времени   setTimeout(функция или код, задержка, параметр, ...параметр);
// Несколько раз быдет выводить что-то через заданный промежуток времени   setInterval(функция или код, задержка, параметр, ...параметр);


function showMessage(text, name) {
   console.log(`${text}, ${name}`);
}

setTimeout(showMessage, 3000, 'Привет', 'Андрей')
// setInterval(showMessage, 3000, 'Привет', 'Андрей') - не самая точная задержка








// Пример c setTimeout:

const timerId = setTimeout(logger, 2000);

function logger () {
   console.log('Привет');
}







// Пример c setTimeout - если скрипт тяжелый и его выполнение дольше чем задержка setInterval, то он не будет ждать еще задданое время после выполнения,
//    для этого есть setTimeout, который вызывает сам себя, т.е. после выполнения тяжелого скрипта будет отсчитываться время, как положено

let id = setTimeout(function log() {                                    // задаем функцию для setTimeout
   console.log('hello');                                                // выполняем тяжелый скрипт
   id = setTimeout(log, 500);                                           // опять ставим задержку для id столькоже скольно и у родителя
}, 500);                                                                // теперь, каким бы долгим не был скрипт внутри, после него всегда будет задержка







// Пример c setInterval, и событием - клик по кнопке:

const btn = document.querySelector('.btn');

let timerId;                                                // задать до события, чтобы можно было использовать эту переменную внутри функции и после функции
let i = 0;

btn.addEventListener('click', () => {
   timerId = setInterval(logger, 500);
});

function logger () {
   if (i === 3) {
      clearInterval(timerId);                               // через заданную переменную, останавливаем setInterval
   }
   console.log('Hello');
   i++;                                                     // добавляем +1 чтобы при условии остановать setInterval
}






// Более точная задержка, добавим setTimeout в саму функцию
function showMessage(text, name) {
   console.log(`${text}, ${name}`);
   setTimeout(showMessage, 3000, 'Привет', 'Андрей')
}

setTimeout(showMessage, 3000, 'Привет', 'Андрей')








// Вывести значения (сделать до 5, к примеру)

function showNumber20(num20) {
   console.log(num20);
   if (num20 < 5) {
      setTimeout(showNumber20, 500, ++num20);
   }
}

setTimeout(showNumber20, 500, 1);







//  clearTimeout - останавливает работу setTimeout

function showNumber10(num10) {
   console.log(num10);
   let timeId = setTimeout(showNumber10, 1000, ++num10);
   if (num10 === 6) {
      clearTimeout(timeId);
   }
}

setTimeout(showNumber10, 1000, 1);



// Пример:

const timerId = setTimeout(logger, 2000);

clearTimeout(timerId);

function logger () {
   console.log('Привет');
}











// Упрощение функций

// Функция соединения строк
function createMassage(text, name) {
   return `${text}, ${name}!`;
}


// Функция вывода в консоль
function showMassage(message) {
   console.log(message);
}


// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
   showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');




















// _______________________________ Объекты _________________________________                                                                                        объект11

// Объектами считаются не только сами объекты, но и массивы и функции и др.
// Если копировать объекты через = , то это будет ссылка а не полноценная копия.[со строками и переменнами все работает нормально]. Как копировать см. ниже

// Записать можно так:

let userInfo = new Object();

// Или так: 

let userInfo2 = {
   name5: 'Вася', // name5 - ключ, "Вася" - свойство
   age: 18,
   'user name': 11,
};

console.log(userInfo2); // вызвать весь объект

console.log(userInfo2.age); // вызвать только свойство

console.log(userInfo2['user name']); // когда ключ состоит из нескольких слов









// Прототипы объектов
// Сделать прототип на уже готовый объект - Object.setPrototypeOf(_на который хотим повесить, _с которого слизываем прототип)

let obj = {
   name: 'alex',
   age: '44',
   address: {
      city: 'moscow',
      street: 'lenina',
   },
   text: function log() {
      console.log('Hello');
   }
}


const mark = {
   name: 'mark'
}


Object.setPrototypeOf(mark, obj);         // делаем прототип марку, забирая его от объекта

console.log(mark.address.street);         // обращаемся уже к марку, но на то, что есть у obj




// Создать новый объект и сразу ему назначить прототип

const john = Object.create(obj);

console.log(john);
console.log(john.text);















// Сначала объявить переменную, а потом включить ее в объект и поменять
let firstPart = 'joke';
let userInfo3 = {
   name6: 'Вася', 
   age: 18,
   [firstPart]: 'not a joke',
};

console.log(userInfo3[firstPart]);


let key = 'name6'; // задаем ключ в переменную
console.log(userInfo3[key]); // вызываем переменную с ключом









// Вложенность

let userInfo4 = {
   name7: "logan",
   age2: 20,
   address: {
      city: "lol",
      street: "lolx2",
   }
}

// Вызывать вложенность
console.log(userInfo4);
console.log(userInfo4.age2);
console.log(userInfo4.address.street);










// Получить значение свойств объекта

function makeUser(name, age) {
   return {
      name: name,
      age: age,
   };
}

let user = makeUser ('Oleg', 22);
console.log(user);










// Изменение объекта

   // Довавление свойств

   let userInfo6 = {
      name8: 'Anatoliy',
   }
   console.log(userInfo6);

   userInfo6.age = 21;
   console.log(userInfo6);






   // Чтобы создать вложенность

   userInfo6.address2 = {
      city2: 'lol',
      street2: 'lolx3',
   };

   console.log(userInfo6);






   // Чтобы удалить свойство

   delete userInfo6.age;
   console.log(userInfo6);






   // Изменить объект

   userInfo6.name8 = 'Vasya';
   console.log(userInfo6);





   // Присвоить (копировать) объект             получается ссылка на копируемый объект, он также изменится вместе с копией

   let user11 = userInfo6;
   user11.name8 = 'Penelopa';

   console.log(userInfo6);






   // Копирование через функцию  
   const obj = {
      a: 5,
      b: 6,
      c: {
         x: 11,
         y: 51,
      }
   }

         // создаем функцию, в которую при вызове объекта будет копироваться объект (но это поверхностное клонирование, вложенности все еще будут ссылкой)

         function copy(targetObject) {             // функция с назв. копия и переменной targetObject
            let objCopy = {};                      // создаем новый объект, в который будем копировать содержимое
            let key;                               // задаем переменную свойств копии
            for(key in targetObject) {             // делаем перебор свойств внутри переменной функции
               objCopy[key] = targetObject[key];   // задаем свойства новой копии равной свойствам объекта который копируем - в самой функции
            }
            return objCopy;                        // возвращаем новую копию из функции, чтобы с ним дальше работать
         }


         const newObj = copy(obj);                 // объявляем новый объект и запускаем функцию copy а в () тот объект который нужно скопировать









   // Настоящее дублирование (копия) Object.assign (поверхностное)
      // Object.assign (куда добавить(объект)), что добавить(свойство №1), что(свойство №2) 
      // Object.assign (в какой объект добавить), (что копировать)

   let user12 = Object.assign({}, userInfo6);            // если в ({}, xxx) то это будет просто копирование ххх в новую переменную которую задаем

   user12.name8 = 'Kameliya';                            // при изменении в новой копии, старая меняться не будет

   console.log(userInfo6);
   console.log(user12);




      // Можно объединять объекты

      let newUser = Object.assign(user12, userInfo6);          // в user12 добавит в конец значения userInfo6




      // Добавить новое 
      Object.assign(userInfo6, {['dom of Jack']: 13, city: 'lol'});
      console.log(userInfo6);







         // Копирование через ...

         let obj = {
            age: 11,
            address: 'pushka'
         }

         let newObj = {...obj}








   // Проверки
      // через if
      let userInfo7 = {
         name11: 'Petya',
         // age11: 13,
         address11: {
            city: 'lol?',
            // street: 'no way',
         }
      }

      if (userInfo7.age11) {
         console.log(userInfo7.age11);
      }

      console.log(userInfo7);








      // Через опциональную цепочку

      console.log(userInfo7?.address11?.street); // Будет undefined вместо ошибки


      // Через in (делается если задается name:undefined при других способах проверки будет ошибка) 

      if ('city' in userInfo7.address11) {
         console.log(userInfo7.address11.city);
   }


   




   

   // for in - вывести и ключ и свойство

   let userInfo8 = {
      name12: 'Petya',
      age12: 17,
      address12: {
         city: 'lol?',
         street: 'no way',
      }
   }

   for (let key2 in userInfo8) {
      console.log(key2); // выводит ключи
      console.log(userInfo8[key2]); // выводит значения (свойства)
   }





      // Еще пример с For in

         let userInfo = {
            name: 'Lena',
            age: '22',
            address: 'Pushkina',
         }

         // Перебрать все свойства объекта (key - дефолтное название)

         for(let key in userInfo) {                                              // Цикл сработает столько раз, сколько внутри его элементов
            console.log(`Свойство ${key} и его значение ${userInfo[key]}`);
         }








         // Но если внутри объекта будет еще один объект (будет вложенность)

         let userInfo = {
            name: 'Lena',
            age: '22',
            address: 'Pushkina',
            cars: {
               audi: 'red',
               bmw: 'black',
            }
         }

         // Перебрать все свойства объекта (key - дефолтное название)

         for(let key in userInfo) {                                              // Цикл сработает столько раз, сколько внутри его элементов
            if (typeof(userInfo[key]) === 'object') {                            // Делаем проверку (в верхнем примере когда цикл натыкался на вложенность он писал 'ошибка: объект') 
                                                                                 // сейчас, если будет така ошибка, мы запускаем новый цикл, уже внутри этой вложенности
               for(let i in userInfo[key]) {                                            // Новый цикл внутри вложенности
                  console.log(`Свойство ${i} и его значение ${userInfo[key][i]}`);       // Обращаемся уже внутрь вложенности через [] можно и через . обращаться
               }
            } else {                                                                      // Если вложенность не найдена, то выполняем как в примере выше
               console.log(`Свойство ${key} и его значение ${userInfo[key]}`);
            }
         }







         // Деструкторизация объекта - вытаскивать свойства которые находятся во вложенности

         const {audi, bmw} = userInfo.cars;     // ауди и бмв стали переменными и с ними можно работать






   // сделать для вложенного объекта (address)
   for (let key2 in userInfo8.address12) {
      console.log(key2); // выводит ключи
      console.log(userInfo8.address12[key2]); // выводит значения (свойства)
   }







   // Посчитать к-во свойств внутри объекта:


   let counter = 0;              // задаем переменную счетчик
   let userInfo = {
      name: 'Lena',
      age: '22',
      address: 'Pushkina',
      cars: {
         audi: 'red',
         bmw: 'black',
      }
   }


   for(let key in userInfo) {
      counter++;                                   // с каждым повтором - считает к-во свойств объекта (но не считает вложенности)
   }

   console.log(counter);





   // Можно посчитать к-во свойств внутри объекта через метод Object.keys:

   console.log(Object.keys(userInfo).length);      // Object.keys - выводит в консоль все ключи у объекта (не считая вложенности) а length - их считает и выводит к-во в консоль



   // Вывести счетчик в переменную
   counter = Object.keys(userInfo).length;
   console.log(counter);




// Чтобы просчитать даже вложенности нужно в прошлый пример добавить счетчики counter++

   // Перебрать все свойства объекта (key - дефолтное название)

   for(let key in userInfo) {                                              // Цикл сработает столько раз, сколько внутри его элементов
      if (typeof(userInfo[key]) === 'object') {                            // Делаем проверку (в верхнем примере когда цикл натыкался на вложенность он писал 'ошибка: объект') 
                                                                           // сейчас, если будет така ошибка, мы запускаем новый цикл, уже внутри этой вложенности
         for(let i in userInfo[key]) {                                            // Новый цикл внутри вложенности
            console.log(`Свойство ${i} и его значение ${userInfo[key][i]}`);       // Обращаемся уже внутрь вложенности через [] можно и через . обращаться
            counter++;
         }
      } else {                                                                      // Если вложенность не найдена, то выполняем как в примере выше
         console.log(`Свойство ${key} и его значение ${userInfo[key]}`);
         counter++;
      }
   }

   console.log(counter);














// Методы объекта
   let userInfo9 = {
      name13: 'Petya',
      age13: 17,
      address13: {
         city3: 'lol?',
         street3: 'no way',
      },
      showInfo: function () {
         console.log(`${userInfo9.name13}, ${userInfo9.age13} лет. Адрес: ${userInfo9.address13.city3}, по улице: ${userInfo9.address13.street3}`);
            // userInfo (имя объекта) можно замерить через this и будет тогда ... (this обращается к родителю [ на дочерних элементах не работает])
         console.log(`${this.name13}, ${this.age13} лет. Адрес: ${this.address13.city3}, по улице: ${this.address13.street3}`)
      }
      // Можно записать функцию короче:
   //    showInfo () {
   //       console.log(`${userInfo9.name13}, ${userInfo9.age13} лет. Адрес: ${userInfo9.address13.city3}, по улице: ${userInfo9.address13.street3}`);
      // }
   }

   userInfo9.showInfo(); // Вызвать функцию












   // Конструктор (название начинаетя с большой буквы) делается для создания множества объектов

   function UserInfo(name15) {
      // this = {}; создется пустой объект (неявно)
      this.name15 = name15;
      this.age = 15;
      // return this; возвращается объект (неявно)
   }

   console.log(new UserInfo(`Vyasya?`));
   console.log(new UserInfo(`Lyana`));








//   This(контекст) - обращается к объекту который вызываем                                                                                  this11


//   1) Если обычная функция: this = window, если use strick = undefind
      function showThis () {
      console.log(this);                  // будет window или undefind
      }
       console.log(showThis);




//   2) Если this вызывается в функции, которая внутри объекта, но this будет ссылаться на объект. Но если внутри функц. сделать еще функцию 
//      и вызвать this там, то будет undefind
      let obj = {
         a: 20,
         b: 15,
         sub: function() {
            console.log(this)
         }
      };
      obj.sum();                                                         //  в логе будет объект





//   3) This в конструкторая и классах - это сслыка на новый объект
      function User(name, age) {                                         //  имя функции конструктора - с большой буквы
         this.name = name;
         this.age = age;
         this.hello = function() {
            console.log('hello' + this.name);
         };
      }

      let ivan = new User('Ivan', 25);
      console.log(ivan);                                                  //   в логе будет имя-иван, возраст-25 и т.д., т.е. это будет объект





//   4) Эй, функция, заработай на этом объекте - имя_Функции.call(имя_Объекта, 'аргументы') или имя_Функции.apply(имя_Объекта, '[аргументы]')
      function sayName(surname) {
         console.log(this);                                               // покажет весь объект
         console.log(this.name + surname);                                // выведет только имя и фамилию, имя из объекта а фамилию из вызова функции
      }

      let user = {
         name: 'Ivan'
      }

      sayName.call(user, 'Petrov');                         
      sayName.apply(user, ['Petrov']);




//   4.1) Создать новую функцию - bind
      function count (num) {
         return this*num;
      }

      const double = count.bind(2);                                        // this в функции count будет брать значение из скобок bind(), т.е. 2
      console.log(double(3));                                              // число при вызове double будет подставляться в num функции count
      console.log(double(18));



//    5) This у события - заменяет event.target (если будет стрелочная функц. то работать не будет, т.к. у стр. ф. нет своего this)
//    6) У стрелочных функций своего контекста вызова(this) и она обращается выше, к родителю
      let obj = {
         num:5,
         sayNumber: function() {                                           // sayNumber - метод объекта и он обращается к объекту
            const say = () => {                                            // у стрелочной функции нет своего this и она обращается к род. функции sayNumber
               console.log(this);                                          // this обращаетя к объекту потому что вызвана в стрелочной функции
            }
            say();
         }
      }
      obj.sayNumber();
// _______________________________ Числа _________________________________



   // 1 миллион: 1e6; -1 миллион: 1-e6

   // Math.floor - округляет в меньшую сторону

   let numOne = Math.floor(5.8);
   let numTwo = Math.floor(-2.8);

   console.log(numOne);
   console.log(numTwo);


   // Math.ceil - округляет в большую сторону

   let numOne2 = Math.ceil(5.8);
   let numTwo2 = Math.ceil(-2.8);

   console.log(numOne2);
   console.log(numTwo2);


   // Math.round - округляет до ближайшего целого

   let numOne3 = Math.round(5.8);
   let numTwo3 = Math.round(-2.8);

   console.log(numOne3);
   console.log(numTwo3);


   // Чтобы округлять не до целой используется способ * и /

   let numOne4 = Math.round(5.845 * 10) / 10; // 58.45 => 58 => 5.8
   // вместо 10 можно использовать 100 если числа большего порядка

   // Или использовать метод toFixed(n) - округляем число до n знаков после запятой, после чего
   // возвращается строка, которую нужно перевести в число =========== inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);


   // Неточности вычисления. Если есть неточность в округлении, добавляем к исходному числу + Number.EPSILON;

   let sourceNum = 1.005 + Number.EPSILON;
   let numFour = Math.round(sourceNum * 100) / 100;
   console.log(numFour); // получится 1.01 иначе 1





   // Проверки чисел

   // isNaN - проверка на NaN - неправильно 

   console.log(Number(25+'Hello!'));

   console.log(isNaN(25+'Hello!')); // Показывает что это NaN



   // isFinite - показывает является ли выражение числом

   console.log(isFinite('25')); // '25' => 25 => true

   
   console.log(isFinite('hello')); // 'hello' => false

   console.log(isFinite(10 / 0)); // infinity => false
   





   // Получение чисел из текста

   // parseInt(получить целое число) и parseFloat(получить число с запятой) только если первое идет число (в строке) a150.58px - не сработает

   let valueOne = parseInt('150.58px');
   console.log(valueOne);
   console.log(typeof valueOne);

   let valueTwo = parseFloat('150.58px');
   console.log(valueTwo);
   console.log(typeof valueTwo);


   // Math.random() - вывести случайное число

   console.log(Math.random());
   console.log(Math.random());
   console.log(Math.random());

   // Вывести макс. или мин. число - Math.max (5, 85, -49) ... Math.min (5, 85, -49)

   console.log(Math.max(5, 85, -49));
   console.log(Math.min(5, 85, -49));

   // Вернуть модуль числа Math.abs()

   let num13 = -58;
   console.log(Math.abs(num13)); // будет 58

   // Возвести в степень - Math.pow(5, 8);

   console.log(Math.pow(2, 3));






   //_______________________________ Строки _________________________________                                                                               строки11


     // `` - ковычки, позволяющие делать магию...ууууу

      let textHi = 'hello';
      let textAll = `${textHi} = magic`;
      console.log(textAll);



      // Можно делать вызов функции внутри консоли

      function someSum(a, b) {
         return a + b;
      }
      console.log(`Summa: ${someSum(4, 7)}`);


      // Писать в несколько строк

      let text = `Hello
         it's me
         your love
         `;
      console.log(text);


      // Спец символы (символ переноса строки) \n

      let textTwo = 'hello\nOleg\nAre you ok?';
      console.log(textTwo);

      // Спец символы (символ табуляции) \t

      let textTwo2 = 'hello\n\tOleg\n\t\tAre you ok?\\'; // \t абсолютно, нужно 2 раза писать для 2ого отступа
      console.log(textTwo2);
      // чтобы \ был в тексте надо писать их 2 \\ 


      // Показать ковычки \" и в конце \"










      // Символы строки

      let textOne2 = 'hello';
      console.log(textOne2.length);

      // Чтобы указать один нужный сивол нужно

      let textOne3 = 'hello!';
      let firstSymbol = text[0];
      let lastSymbol = text[text.length - 1];
      
      console.log(firstSymbol);
      console.log(lastSymbol);


      for (const char of textOne3)
      console.log(char);


      // Верхний и нижний регист

      let text20 = 'Hello';
      
      console.log(text20.toUpperCase());
      console.log(text20.toLowerCase());


      // Искать подстроки indexOf ('что ищем', 'с какой позиции')

      let text21 = 'Привет';
      console.log(text21.indexOf('рив'));
      console.log(text21.indexOf('рив', 3));

      // более современный способ, который возвращает true of false

      let text22 = 'Привет';
      console.log(text22.includes('рив'));
      console.log(text22.includes('рив', 3));

      // Есть startWith - ищет в начале строки
      // endWith - в конце строки


      // Для поиска нужно учитывать регистр, либо переводить все в нижний регистр

      let text23 = "Привет";
      let searchText = 'пР';
      console.log(text23.toLowerCase().includes(searchText.toLowerCase()));


      // Вывести часть текста str.slice(start, [, end]) от старт до end (не включая)

      let text24 = "Привет";
      console.log(text24.slice(1, 2));
      console.log(text24.slice(-2, -1));
      console.log(text24.slice(1));

      



      // Алфавитное сравнение

      console.log('A' > 'Б'); // false
      console.log('а' > 'Б'); // true  нижний регистр в приоритете
      console.log('Скрипт' > 'Скрипка'); // true  сравнение идет до первой отлич. буквы
      console.log('Слайнер' > 'Слайд'); // true   большая строка
      console.log('Фрилансер' > 'фрилансер'); // false










//__________________________Массивы______________________________________                                                                             массив11



// Объявить массив: let arrOne = []

let arrOne = [
   'Ваня',
   'Света',
   'Лола',
];

// или 

let arrOne2 = ['Ваня', 'Света', 'Лола',];




// выводить определенные значения, начиная с 0

console.log(arrOne[2]);





// более сложные примеры

let arrTwo = [
   'Коля',
   {
      type: 'JS so good',
      age: Infinity,
   },
   true,
   function () {
      console.log('Я сасный');
   },
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);     // [] + .имя ключа
console.log(arrTwo[2]);
arrTwo[3]();                     // вызвать функцию, в [] указать позицию



// многомерные массивы

let matrix = [
   [1, 3, 11],
   [6, 15, 8],
   [6, 47, 5],
];

console.log(matrix);
console.log(matrix[1][0]);    // в [] указываются позиции массива




// length вывести только это

console.log(matrix.length);


// Доступ к массиву

let arr = ['Vyasya', 'Ivat', "Yolia"];
console.log(arr);

let newarr = arr;

newarr.length = 2;

console.log(arr);






// Менять значения

arr[0] = 'Evgesa';
console.log(arr);






// Добавить новое

arr[3] = 'Billy';
console.log(arr);








// Метод push - добавляет в конец массива

let arr2 = ['Billy', 'Jim',];
arr2.push('Lena');                  // в '' название чего вставляем
console.log(arr2);






// Удалить первый элемент и сдвигает <=

arr2.shift();
console.log(arr2);





// Удалить последний элемент

arr2.pop();
console.log(arr2);






// Добавить в начало массива

arr2.unshift('Petya');
console.log(arr2);








// Рил таф делит

// Удалять - splice(с какого начинать, сколько удалить)
let arr3 = ['Petya', 'Vasya', "Diana"];
arr3.splice(1, 1);
console.log(arr3);


// Чтобы удалить и вывести потом удаленный элемент нужно:
let removed = arr3.splice(1, 1);
console.log(removed);


// Заменить
let arr4 = ['Petya', 'Vasya', "Diana"];
arr4.splice(0, 1, 'Natalya');
console.log(arr4);


// Добавить элементы splice (1, 0, 'Text') - 0 удалить
arr4.splice(1, 0, 'Evgenia');
console.log(arr4);


// Удалить последний элемент splice(-1, 1) - (-1) означает первый с конца
arr4.splice(-1, 1);
console.log(arr4);




// Объекдинение двух массивов + можно свое добавить - через ...         {также в es8 можно пользоваться им и с объектами}

let arr1 = ['audi', 'bmw', 'lexus'];
let arr2 = ['intel', 'amd', 'nvidea'];

let summ = [...arr1, ...arr2, 'beeline', 'mts']       // ... - разворачивает содержимое массива




      // ... - также можер развернуть значения из массива для работы функции:

      function log(a, b, c) {
         console.log(a);
         console.log(b);
         console.log(c);
      }

      
      let sum = [5, 11, 7];

      log(...sum);               // с помощью ... мы как бы разделяем массив на отдельные составляющие, с которыми может уже работать функция





// Обратное от верхнего (разворота) - добавлять переменные, количество которых неизвестно - rest:

const elem = function(a, b, ...rest) {
   console.log(a, b, rest);
}

elem('Привет', 'Андрей', 'Анна');




// Копирование массивов через .slice(1, 2); 1-начало, 2-конец(не включительно). Можно просто .slice - просто копия

let arr5 = ['Petya', 'Vasya', "Diana"];
arr5.slice(0, 1);
console.log(arr5);


// Просто дубль массива
let arr6 = arr5.slice();
console.log(arr6);





// Копирование массивов через ...:

let arr1 = ['1', '2'];

let arr2 = [...arr1];






// Еще один дубль + можно добавить

let arr7 = arr6.concat('Lida');
console.log(arr7);


// Поиск в массиве такой же через 
// indexOf
// lastIndexOf
// includes












// Поиск и вывод объектов в массиве find

let arr8 = [
   { name11: 'Vasya', age: 38 },
   { name11: 'Kolya', age: 18 },
   { name11: 'Olya', age: 13 },
];

let resultArr = arr8.find(function (item, index, array) {               // item - элемент массива, index - ключ (позиция), array - весь массив
   return item.age < 18;
});

console.log(resultArr);



// findIndex - тоже самое, только возвращается номер строки



// filter - тоже поиск, но он не прекращается, а выводит все элементы подходящие под условия (создаёт новый массив со всеми элементами, 
// прошедшими проверку, задаваемую в передаваемой функции.) 

let arr9 = [
   { name11: 'Vasya', age: 38 },
   { name11: 'Kolya', age: 18 },
   { name11: 'Olya', age: 13 },
];

let resultArr2 = arr9.filter(function (item, index, array) {
   return item.age < 30;
});
console.log(resultArr2);










// Сортировка по алфавитному порядку sort

let arr10 = ['Petya', 'Vasya', "Diana", "Дима",];
console.log(arr10.sort());









// Сортировка чисел

let arr11 = [3, 22, 8];
console.log(arr11.sort()); // неверная сортировка, есть 3 способа:



// 1 способ, добавить функцию
function compare(a, b) {
   console.log(`Сравниваем ${a} и ${b}`);
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
};
console.log(arr11.sort(compare));



// 2 способ заменить if на return
function compare(a, b) {
   console.log(`Сравниваем ${a} и ${b}`);
   return a - b;
};
console.log(arr11.sort(compare));



// 3 способ, строчный способ
console.log(arr11.sort((a, b) => a - b));










// Поменять на обратный reverse

let arr12 = ['Petya', 'Vasya', "Diana", "Дима",];
console.log(arr12.reverse());








// Преобразование массивов

// map - вызывает функцию для каждого элемента массива и возвраает массив результатов выполнения этой функции                                   map11

let arr13 = ['Petya', 'Vasya', "Diana", "Дима",];

let result13 = arr13.map(function (item, index, array) {
   return item;
});


console.log(arr13);
console.log(result13);









// Разделитель и объединитель :)


// split преобразовывает строку в массив по заданному разделителю

let str = "Ivan, Lola, Jim";

let arr = str.split(",");
console.log(arr);


// можно ограничить количество

let arr2 = str.split(",", 2); // вывести только 2 значения 
console.log(arr2);







// join - объединяет, обратное от split =>  массив данных превращает в строку. принцип записи тот же

let arr3 = ['Ivan', 'Ilya', 'Jhonny'];
let str3 = arr3.join(','); // (';') также может быть разделителем
console.log(str3);

// можно также через String, но тогда разделитель будет только , а в пред. случае, разделитель может быть любой

let arr4 = ['Ivan', 'Ilya', 'Jhonny'];
console.log(String(arr4));





let str = prompt('введите ваши имена', '');        // вводим данные
let products = str.split(",");                     // переводим их в массив
let final = products.join(';');                     // превращаем массив в строку через разделистель ;
console.log(final);







// проверка на массив, хз зачем

let obj = {};
let arr6 = [];

console.log(typeof obh);
console.log(typeof arr6);

if (Array.isArray(obj)) {
   console.log('Это массив');
} else {
   console.log('О боже, это же не массив!');
}









// Перебор элементов в массиве

let arr7 = ['Ivan', 'Ilya', 'Jhonny'];
console.log(arr7.length);

for (let i = 0; i < arr7.length; i++) {
   console.log(arr7[i]);
}









// А можно сделать перебор через FOR OF

let arr8 = ['Ivan', 'Ilya', 'Jhonny'];

for (let arrItem of arr8) {               // arrItem - новая переменная которая задается каждому элементу в массиве, который мы перебираем
   console.log(arrItem);
}





// Комбинирование. break и continue

for (let i = 1; i <= 10; i++) {
   num++;
   if (i === 5) {
      break       // прерывает цикл
   }
   console.log(num);
}
// num = 50, я задаю условие с 1 до 10 вкл. раз провести цикл => увеличить num на 1 ед., но если к-во циклов будет строого = 5, то прерву операцию и выведу в консоль в итоге num


for (let i = 1; i <= 10; i++) {
   num--;
   if (i === 5) {
      continue       // continue - именно это условие не включает в цикл, а продолжает (т.е. все до i === 5 и все после кроме 5 будет включено в цикл)
   }
   console.log(num);
}







// В for of и for можно использовать break и continue, например:

// Используя поиск DOM элемента такой как document.xxx.childNodes - он выведет переносы текста тоже, аналога для элементов нет, поэтому мы вручную удалим такие переносы

let childNod = document.body.childNodes;        // это псевдоколлекция всего body

for (let node of childNod) {
   if (node.nodeName == '#text') {              // выделяем те элементы, внутри которых есть nodeName = #text
      continue;                                 // не будет выводить их а продолжаем выводить дальше (т.е. не выводим текстовые ноды)
   }
   console.log(node);
}









// А еще можно сделать через п - выполняет функцию для каждого элемента массива
// _название массива.forEach (function(_название элемента(Sonya, [можно называть как угодно(item)]), _номер по порядку[index], _ссылка на сам массив){                                      
// Функция будет выполняться для каждого элемента массива
   
//});

let arr9 = ['Sonya', 'Madara', 'Bond,'];

arr9.forEach(function (item, index, array) {
   console.log(`${item} находится на ${index} позиции в массиве ${array}`);
});





   // также можно:

   let arr10 = ['Sonya', 'Madara', 'Bond,'];
   arr10.forEach(show);

   function show(item) {
      console.log(item);
   }

   


   // а еще можно так (более частый вариант)

   let num = querySelectorAll('h1');

   num.forEach(item => {
      item.style.backgroundColor = 'red';
   });










// Люто. reduce / reduceRight    (Предназначен для вывода массива в одно значение, в основном в число. 
// в качестве переменных в функции выступают первое значение - сумма предыдущих, а второе - текущие значение, третье - начальное значение суммы в 1 интерации, которое изначально равно 0. 
// Исп. для суммы всех чисел массива к примеру или для сложения строк через запятую через ``.

let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array) {
   return item + previousValue;
}, 0); // previousValu = 0
console.log(reduceValueOne);


// previousValue = 0 + 1 (item)
// previousValue = 1 + 2 (item) и так далее, и до 10


// Если previousValue не задано (0 после скобки) то он автоматом будет первым элементом в массиве, а работа начнется со второго


let arrTwo = ['Vanya', 'Ivan', 'Evgesha'];

let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
   console.log(item);
   return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);



// previousRight - тоже самое, толкьо проходит по массиву справа на лево



   // Итого:

   // Массив является объектом arr = {}
   // К массиву можно добавлять нечисловое свойство

   let org = ['Vanya', 'Ivan', 'Evgesha'];
   
   org.name = 'Kolya';
   console.log(org); // добавится: "name: Kolya"




   // Итог итог: массивы тчательно настроены для работы с однотипными упоряточенными данными, если делать произвольные ключи, то лучше использовать объекты



















   // ______________________DOM______________________                                                                                                 dom11

   // Навигация по документу
   // Самые верхние элементы дерева доступны как свойства объекта document
   // Живые элементы, не массив а коллекция, менять привычным способом через задание нельзя, тут бругие методы бро 

   const htmlElement = document.documentElement;
   const headElement = document.head;
   const bodyElement = document.body;
   console.log(htmlElement);
   console.log(headElement);
   console.log(bodyElement);



   // первый и последний элемент у body (узлы)

   const firstChild = bodyElement.firstChild;
   const lastChild = bodyElement.lastChild;
   console.log(firstChild);
   console.log(lastChild);


   // все дети элемента bodyElement - childNodes;

   const childNodes = bodyElement.childNodes;
   console.log(childNodes);


   // Соседние и родительские узлы

   const previousSiblingNode = bodyElement.previousSibling;
   const nextSiblingNode = bodyElement.nextSibling;
   const parentNode = bodyElement.parentNode;

   console.log(previousSiblingNode);
   console.log(nextSiblingNode);
   console.log(parentNode);




   // Навигация по элементам сhildren разница от предыдущего в том, что здесь нет переносов текста, т.е. только элементы

   const bodyChildren = bodyElement.children;
   console.log(bodyChildren);


   // Первый и последний дочерний элемент
  const firstChildElement = bodyElement.firstElementChild;
  const lastChildElement = bodyElement.lastElementChild;
  console.log(firstChildElement);
  console.log(lastChildElement); 


  // Соседние и родительские элементы
  const previousSiblingElement = bodyElement.previousElementSibling;
  const nextSiblingElement = bodyElement.nextSiblingElement;
  const parentElement = bodyElement.parentElement;
  console.log(previousSiblingElement);
  console.log(nextSiblingElement);
  console.log(parentElement);






  // Поиск

  // querySelectorAll(CSS);                                                                                                               query11
  
  
   // поиск по селектору класса (возвращает статичную коллекцию)

   const elemOne = document.querySelectorAll('.page__main');
   console.log(elemOne);

   // поиск по селектору тега
   const elemTwo = document.querySelectorAll('li');
   console.log(elemTwo);

   // поиск смешенному селектору тега и класса
   const elemThree = document.querySelectorAll('li.menu__item'); // будет искать все li с классом menu__item
   console.log(elemThree);

    // поиск тегу первого уровня вложенности
    const elemFour = document.querySelectorAll('.menu__list>li'); 
    console.log(elemFour);

    // поиск по нескольким классам
    const elemFive = document.querySelectorAll('.menu__list, .page__main'); 
    console.log(elemFive);

   // поиск по вложенным классам
   const elemSix = document.querySelectorAll('.header__container .header__logo'); // будет искать header__logo в классе header__container
   console.log(elemFive);

   // поиск по ID ('#listItem')
   // поиск по атрибуту ('[data-item]')      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   


   // Если нашел родительский элемент, а потом хочешь в нем найти другие элеменоты document можно не писать:

   const mainElement = document.querySelector('.main');        // находим родителя

   const element = mainElement.querySelector('.element')       // уже именно в родителе ищем элемент

   const element = mainElement.querySelector('form.add')       // форма с классом add







   // все элементы коллекции querySelectorAll можно перебрать сразу через forEach

   let element = document.querySelectorAll('h1');

   element.forEach(item => {           // через стрелочную функцию
      item.style.color = 'blue';
   })







   // коллекцию можно перебрать, к примеру все li
   for (const item of elemTwo) {
      console.log(item);
   }


   // искать можно не только в document

   const subList = document.querySelectorAll('.header__menu');
   const subItem = subList[0].querySelectorAll('li');
   console.log(subItem);




   // querySelector ищет первый попавшийся объект и его возвращает

   // т.е. вместо   const menu__list = document.querySelectorAll('.menu__list')[0]; пишем
   const menu__list = document.querySelector('.menu__list');
   console.log(menu__list);


   // getElementById(ID)
   // const elem = document.getElementById('listItem') - поиск по id


   // getElementsByTagName('li'); - ищет по имени тэгу (живая коллекция(обновляемая реал тайм))

   
   // getElementsByClassName('lesson__item'); - ищет по имени класса (живая коллекция(обновляемая реал тайм))









   // closest                                                                                                                                                        closest11
   // Метод elem.closest(css) - ищет ближайшшего предка, который соответствует css селектору [даже при клике на дочку, выведет родителя указанного в скобках]
   const elem = document.querySelector('.lesson__item-sub-list');
   const parentList = elem.closest('.lesson__list'); // ищет элемент с классом lesson__list у родителя в ветке с lesson__item-sub-list









   // Проверка matches
   // проверяет, удовлетворяет ли элемент CSS - селектору и возвращает true or false

   const elems = document.querySelectorAll('lesson__item-list');
   for (let elem of elems) {
      if (elem.matches('[class$="lesson__item-list_red"]')) {
         console.log('Red one');
      } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
         console.log('Blue one');
      }
   }





// Еще пример                                                                                                                                      matches11

const mainBtns = document.querySelector('.promo__btns');


mainBtns.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target && event.target.matches('button.red')) {                       // если элемент с тэгом button будет иметь класс red
        console.log('Да, это кнопка');
    }
})












   // Ко всем элементам, которые мы нашли также можно применять свойства навигации

   const text = document.querySelector('.lesson__text');
   const list = text.nextElementSibling;
   console.log(list);



   







   // Изменения документа

   // получаем объект
   const textElement = document.querySelector('.menu__link');

   // получаем объект как есть (вместе с HTML)  (.innerHTML)
   const textElementContent = textElement.innerHTML;
   console.log(textElementContent);

   // перезаписываем содержимое
   textElement.innerHTML = 'Eto ne ya'; // на странице поменялся, а в консоли нет!


   // дописываем содержимое
   textElement.innerHTML = `<p>${textElementContent}</p> <p>А если попробовать <span class="yellow">вот так</span></p>`;
   console.log(textElement.innerHTML);



   // .outerHTML
   // типа тоже самое, но выводит уже вместе с <div> или <p> и т.д.
   const textElement2 = document.querySelector('.menu__link');
   const textElementContent2 = textElement2.outerHTML;
   console.log(textElementContent2);


   textElement2.outerHTML = `<p>А попробовать? <span class="yellow">вот так</span></p>`;
   console.log(textElement2.outerHTML);



   // .textContent
   // выводит только текст, любые теги в тексе - считается текстом (является безопасным методом для форматирования кода)

   const textElement3 = document.querySelector('.menu__link');
   const textElementContent3 = textElement3.textContent;

   textElement3.textContent = `<p>А попробовать? <span class="yellow">вот так</span></p>`;
   console.log(textElement3.textContent);



   // вывести комментарий из html в текст
   const textElement4 = document.querySelector('.header__menu');
   const getComment = textElement4.nextSibling; // взять следующий элемент
   console.log(textElement4);
   console.log(getComment);
   console.log(getComment.data);

   // а можно еще изменить текст выводимого коммента
   getComment.data = 'а вот и не угадал';
   console.log(getComment.data);





   // Создание элементов и узлов

      // создание элементов createElement

      const newElement = document.createElement('div');
      console.log(newElement);

      // наполнение элемента

      newElement.innerHTML = `Это новый элемент
         и он не так уж прост!`;
      console.log(newElement);


      // создать узел (просто надпись) 

      const newText = document.createTextNode('Hello');
      console.log(newText);






      // а теперь важное!!!

      // чтобы добавлять в элементе надо:
      // 1. получить объект
      const textElement = document.querySelector('.menu__link');

      // далее 
      // создание элементов createElement

      const newElement2 = document.createElement('div');

      // наполнение элемента

      newElement2.innerHTML = `Это новый элемент
         и он не так уж прост!`;

      // далее - как и куда вставить этот элемент
      
      // ... перед объектом
      textElement.before(newElement2);

      // ... после объекта
      textElement.after(newElement2);

      // ... внурь и в начало объекта
      textElement.prepend(newElement2);

      // ... внурь и в конец объекта
      textElement.append(newElement2);

      // ... также можно вписывать и обычный (безопасный) текст
      textElement.append(newElement2, 'Hello!');

      // Если нужно вставить перед одним из нескольких элементов, то писать так:
      textElement[1].append(newElement2); // поместит новый элемент в конец второго элемента textElement


      // 2ой метод вставки insertAdjacentHTML
      const textElement2 = document.querySelector('.main__container');
      
      // вставляем текст, HTML, элемент
      textElement2.insertAdjacentHTML(
         'afterend',
         `<p>Hello, it is again me</p>`
      );

      /*
         'beforebegin' - вставить html непосредственно перед textElement,
         'afterbegin' - вставить html в начало textElement,
         'beforeend' - вставить html в конец textElement,
         'afterend' - вставить html непосредственно после textElement,
      */



      // также есть insertAdjacentText - вставляет текст (менее распр. метод, обычно юзают самый первый)
      // и еще есть insertAdjacentElement - вставляет элемент (также используется чаще первый метод)




      // Перенос элемента (удаляет на старом месте и вставляет в новый)

      const lessonBlock = document.querySelector('.header__menu');
      const title = document.querySelector('h3');

      // пеоеносим элемент
      lessonBlock.before(title); // см. первый метод создания выше




      // если нужно склонировать элемент 

      const textElement3 = document.querySelector('.menu__link');
      const cloneText = textElement3.cloneNode(true); // (true) - если будут пустые скобки, содержимое не склонируется

      const lessonBlock3 = document.querySelector('.main__container');
      lessonBlock3.append(cloneText);






      // чтобы удалить объект

      const textElement4 = document.querySelector('h4');
      textElement4.remove();






      // CSS изменение класса    (устарело, следует юзить classList - ниже)
      // 1. .className
      const element = document.querySelector('.menu__item');

      const elementClassName = element.className;
      console.log(elementClassName);

      // перезаписываем имя класса
      element.className = 'red';



      


      // 2. classList
      const element2 = document.querySelector('.menu__item'); 

      // Проверка наличия класса, возвращает true/false  (содержит ли)
      element2.classList.contains('active');

      if (element2.classList.contains('active')) {
         console.log('active!');
      }

      // Получить класс, как и выше className - xxx.classList.item(какой по счету класс)
      element2.classList.item('0');

      // Добавляем еще один класс к старому xxx.classList.add('xxx', 'yyy', ...);
      element2.classList.add('active');

      // Удалит класс
      element2.classList.remove('active');

      // Добавит класс, если его нет, или удалит, если есть
      element2.classList.toggle('active');





      // classList является перебираемым элементом, поэтому можно перечислить все классы при помощи for...of

      for (let className2 of element2.classList) {
         console.log(className2);
      }











      // _______________________________________ УПРАВЛЕНИЕ CSS - style ________________________________________                                                     css11

      const element4 = document.querySelector('.menu__link');

      element4.style.color = 'red'; // задаем стиль

      // чтобы писать свойства из нескольких слов используется camelCase
      // margin-bottom
      element4.style.marginBottom = '30px';

      // z-index
      element4.style.zIndex = '10';


      // xxx.style.xxx - должно задаваться именно конкретному элементу, если взять через querySelectorAll - то это будет псевдомассив и ему задавать стиль-бестолку, поэтому нужно:
      // xxx[0].style.xxx - стиль будет применен к первому элементу псевдомассива












      // Посмотреть значение свойства: (только если оно будет записано в атрибудет style)

      console.log(element4.style.marginBottom);

      
      // Сбросить стиль: написать его пустым
      element4.style.zIndex = '';








      // записать сразу несколько - cssText (но перезапишет все старые стили)

      element4.style.cssText = `
         margin-bottom: 50px;
         color: blue;
         `;






      // Чтобы получить стили написанные именно в CSS: getComputedStyle(element, [pseudo]) - (только для чтения, переназначить нельзя) [pseudo - стили кот. относятся к псевдо-элементу]

      const element5 = document.querySelector('.menu__link');
      console.log(element5.style.fontSize); // появится если css свойство записано в самом html


      // вывести из css
      
      const element5Style = getComputedStyle(element5);
      console.log(element5Style.fontSize);

      
      // также можно получить стили псевдоэлементов ::before и т.д.

      const element5Before = getComputedStyle(element5, "::before");
      console.log(element5Before.fontSize);

      
      // потом меняем значение
      element5.style.marginLeft = '20px';






      // Чтобы получить список доступных свойств у тега - dir(...)                                                                              dir11
      const link = document.querySelector('.menu__link');
      console.dir(link);











      





      // Делегирование - обращение не ко кнопкам, а к родителю:                                                                              делегирование11

      const mainBtns = document.querySelector('.promo__btns');             // находим родителя кнопок                

      mainBtns.addEventListener('click', (event) => {                      // вешаем событие на клик
          event.preventDefault();                                          // отменяем ребут страницы при клике
          if (event.target && event.target.tagName == 'BUTTON') {          // если клик на родителя + на элемент кнопка, которая имеет tagName - 'BUTTON, можно узнать через console.dir('xxx')
              console.log('Да, это кнопка');                               // вывести лог
          }
          // А еще можно так
          if (event.target && event.target.classList.contains('blue')) {   // если клик на родителя + на элемент с классом blue
            console.log('Да, это все еще кнопка');  
          }
      })


      const target = event.target;        // - содается внутри события, чтобы не писать постоянно event.target













      // Атрибуты
      
      const lessonText2 = document.querySelector('.menu__link');

      // Проверяем наличие атрибута
      lessonText2.hasAttribute('name');


      // Получаем значение атрибута
      lessonText2.getAttribute('name');

      // Устанавливаем значение атрибута
      lessonText2.setAttribute('name', 'value');

      // Удаляем атрибут
      lessonText2.removeAttribute('name');












      // Пример
      const lessonText3 = document.querySelector('.menu__link');

      // Задаем новый атрибут
      lessonText3.setAttribute('some-attribute', 'some-value');
      
      // Проверяем его на наличие
      if (lessonText3.hasAttribute('some-attribute')) {
         console.log('Да, он есть');
      } else {
         console.log('Неа, нету');
      }




      // Изменения атрибутов:
      // они меняются:

      const input = document.querySelector('.menu__link');

      input.setAttribute('id', '123');
      console.log(input.id);

      input.id = '321';
      console.log(input.getAttribute('id'));



      // а тут не меняются:

      const input2 = document.querySelector('.menu__link');

      input2.setAttribute('value', 'Gogo');
      console.log(input2.getAttribute('value'));

      input2.value = 'How are you?';
      console.log(input.getAttribute('value'));




      // Зарезервированные атрибуты, которые можно использовать - data-... и доступны через свойство - dataset

      // получаем элемент (стандартно)
      const lessonData = document.querySelector('.menu__link');

      // задаем атрибут
      lessonData.setAttribute('data-size', '225');

      // Получаем data - атрибут
      console.log(lessonData.dataset.size);

      // Перезаписать:
      lessonData.dataset.size = '1182';
      console.log(lessonData.dataset.size);


      // Например, если у elem есть атрибут "data-about", то обратиться к нему можно как elem.dataset.about.
      // Как тут:
      
      <body data-about="Elephants">
      <script>
         alert(document.body.dataset.about); // Elephants
      </script>







      // Лайвхаки:

      const link3 = document.querySelector('.menu__link');

      // Получаем тег элемента
      console.log(link3.tagName);


      // Скрыть / показать элемент
      link3.hidden = true;
      console.log(link3.hidden);




      
      // Домашка
// 1. Получить в переменную элемент с атрибутом data-say-hi и прочитать
// <div data-say-hi="yes">Привет!</div>

const test1 = document.querySelector('[data-say-hi]');
console.log(test1);


// 2. Получить в переменную элемент с текстом Йончи

/* <ul>
<li>Корчи</li>
<li>Йончи</li>
</ul> */

const test3 = document.querySelector('ul');

const test2 = test3.lastElementChild
console.log(test2.textContent); // вывести значение тега


// 3. Получить в переменную коллекцию элементов с классом like
/* <div class="like"></div>
<div class="subscribe">1231321231</div>
<div class="like subscribef">1231321231</div> */

const test4 = document.querySelectorAll('.like');
console.log(test4);




// 4. Куда добавится <li>Текст</li> ?

// JS
const list3 = document.querySelector('.test');

list3.insertAdjacentHTML(
   'beforeend',
   `<li>Текст1313121</li>`
);




// HTML
/* <ul>
   <li>Пункт 1</li>
   <li>Пункт 2</li>
</ul> */










   // Размеры окна браузера (контент + паддинги + скролл) - clientWidth и clientHeight                                                                                        браузер11

   const mainElement = document.documentElement;
   const mainElementWidth = mainElement.clientWidth;
   const mainElementHeight = mainElement.clientHeight;

   console.log(mainElementWidth);
   console.log(mainElementHeight);




   // Ширина и высота окна вместе в полосами
   const windowWith = window.innerWidth;
   const windowHeight = window.innerHeight;

   console.log(windowWith);
   console.log(windowHeight);





   // Ширина и высота всей части, включая невидимую (непрокрученную)

   let scrollWidth = Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth,
   );

   let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,         // вся высота страницы
      document.body.offsetHeight, document.documentElement.offsetHeight,         // вся высота с border
      document.body.clientHeight, document.documentElement.clientHeight,         // высота контента, на экране пользователя
   );

   console.log(scrollWidth);
   console.log(scrollHeight);







   // Получить кол-во прокрученных пикселей
   // только для чтения

   const windowScrollTop = window.pageYOffset;                          // прокрученная часть страницы
   const windowScrollLeft = window.pageXOffset;

   console.log(windowScrollTop);
   console.log(windowScrollLeft);


   // Прокручивать страницу относительно ее текущего положения scrollBy(x, y);
   // При каждом клике будет прокручивать на заданное к-во пикселей

   function setScrollBy() {
      window.scrollBy(0, 50);
      const windowScrollTop2 = window.pageYOffset;
      console.log(windowScrollTop2);
   }


   // Прокрутить на абсолютные координаты - scrollTo(pageX, pageY) (только 1 раз будет работать)
   // Тоже самое что и window.scroll()

   function setScrollTo () {
      window.scrollTo(0, 50);
      const windowScrollTop3 = window.pageYOffset;
      console.log(windowScrollTop3);
   }


   // Опции 

   function setScrollToOptions () {
      window.scrollTo({
         top: 500,
         left: 0,
         // smooth, instant,
         // auto - по умолчанию
         behavior: 'smooth'
      });
   }
   // не работают в Safari






   // Прокрутить страницу до элемента - scrollIntoView(top)
   // если при вызове функции top = true - элемент будет вверху страницы
   // если top = false - будет внизу

   function setScrollIntoView(top) {
      const lessonSelection = document.querySelector('.h3');
      lessonSelection.setScrollIntoView(top)
   }


   // Также есть Опции

   function setScrollIntoViewOption(top) {
      const lessonSelection2 = document.querySelector('.h3');
      lessonSelection.setScrollIntoView({
         // start, center, end или nearest - по умолч. center
         block: 'center',
         // start, center, end или nearest - по умолч. nearest
         inline: 'nearest',
         // auto или smooth - по умолч. auto
         behavior: 'smooth',
      });
   }

   // Опции в сафари не работают



   // Запретить прокрутку 

   function setEnableDisableScroll() {
      // можно сделать двумя способами:
      // 1 написать вручную
      // document.body.style.overflow = 'hidden';
      // сделать класс в SCC и активировать/деактивировать его
      document.body.classList.toggle('scroll-lock');
   }






   // Позиционирование 
   // получаем объект

   const block2 = document.querySelector('.menu__link');
   console.log(block2);
   // позиция объекта:
   // offsetParent, offsetLeft, offsetTop


   // Получаем родительский элемент, относительно которого позиционирован объект

   const elementOffsetParent = block2.offsetParent;
   console.log(elementOffsetParent);




   // Получаем позицию объекта относительно предка (offsetParent)
   const elementOffsetLeft = block2.offsetLeft;
   const elementOffsetTop = block2.offsetTop;

   console.log(elementOffsetTop);
   console.log(elementOffsetLeft);



   // Получаем размеры объекта offsetWidth и offsetHeigh

   const elementOffseWidth = block2.offsetWidth;
   const elementOffsetHeight = block2.offsetHeight;

   console.log(elementOffseWidth);
   console.log(elementOffsetHeight);



   // Получаем внутренние отступы от внешней оболочки clientTop и clientLeft

   const elementClientTop = block2.clientTop;
   const elementClientLeft = block2.clientLeft;

   console.log(elementClientTop);
   console.log(elementClientLeft);



   // Получаем внутренние отступы без рамок и полос прокруток

   const elementClientWidth = block2.clientWidth;
   const elementClientHeight = block2.clientHeight;

   console.log(elementClientWidth);
   console.log(elementClientHeight);

   // Пример: общая ширина (offsetWidth) - рамка слева -рамка справа - скролл
   // получается: 500 - 20 - 20 - 17 = 443




   // Получим размеры включающие в себя прокручиваемую часть (которую не видно)

   const elementScrollWidth = block2.scrollWidth;
   const elementScrollHeight = block2.scrollHeight;

   console.log(elementScrollWidth);
   console.log(elementScrollHeight);



   // Размеры прокручеваемой области scrollLeft и scrollTop
   
   // этот оператор можно задавать

   block2.scrollTop = 150;
   
   const elementScrollLeft = block2.scrollLeft;
   const elementScrollTop = block2.scrollTop;

   console.log(elementScrollLeft);
   console.log(elementScrollTop);

   

   // scrollBy, scrollTo и scrollIntoView может применяться и к объекту
   function setElementScrollBy() {
      block2.scrollBy({
         top: 20,
         left: 0,
         behavior: 'smooth',
      });
   }
   





   // Координаты
   // координаты относительно окна браузера - getBoundingClientRect

   // Получаем объект
   const item = document.querySelector('.menu__link');

   // Получаем координаты относительно окна браузера
   const getItemCoords = item.getBoundingClientRect();

   console.log(getItemCoords);


   // Чтобы получить конкретную координату относительно окна браузера
   const getItemLeftCoord = item.getBoundingClientRect().left;

   console.log(getItemLeftCoord);



   // Координаты относительно документа - getBoundingClientRect

   // Получаем объект
   const item2 = document.querySelector('.menu__link');



   // Чтобы получить конкретную координату относительно окна браузера
   const getItemTopCoord = item2.getBoundingClientRect().top;
   // Получаем конкретную координату относительно документа
   const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

   console.log(getItemTopCoord); // относительно окна браузера
   console.log(getItemTopDocumentCoord); // относительно докуметн (абсолютная величина)


   


   // Получение объекта по координатам - document.elementFromPoint(x, y);

   const elem = document.elementFromPoint(100, 100); // относительно скролла

   console.log(elem);




      // Домашка

   // 2. Заставить браузер прокрутиться на 500px сверху, с задержкой после секунды открытия страницы

   function setScrollTo () {
      window.scrollTo(0, 500);
      const windowScrollTop = window.pageYOffset;
      console.log(windowScrollTop);
   }

   setTimeout(setScrollTo, 1000);
   


   // 3. Получите координаты любого элемента страницы

   // Получаем объект
   const item2 = document.querySelector('.menu__link');

   // Получаем координаты относительно окна браузера
   const getItemCoords = item2.getBoundingClientRect();

   console.log(getItemCoords);









   // _____________________________ События _____________________________                                                           события11


   // клик-клик

   const button = document.querySelector('.menu__link');

   button.onclick = function () {
      console.log('клик-клик');
   }


   // или так

   function showConsole() {
      console.log('кликуэ');
   }
   
   button.onclick = showConsole; // функция без () потому чтобы не вызывать функцию сразу [со () она вызовится сразу]




   // Тру клик-клик - addEventListener / removeeventListener                                                                        add11       

   // element.addEventListener(event, handler[, options]);

   const button2 = document.querySelector('.menu__link');

   button2.addEventListener('click', function () {
      console.log('Клаг');
   });

   button2.addEventListener('click', function () {
      console.log('клюк');
   });










   // Использовать стрелочную функцию

   button.addEventListener('click', () => {
      alert('click')
   })









   // Обращения к объекту внутри функции эвента

   const btn = document.querySelector('button');

   btn.addEventListener('mouseenter', (event) => {
      console.log(event.target);                              // через console.log(event) можно посмотреть возможные свойства (если раскрыть в консоли)
      event.target.remove();                                  // обращение event.target - обращение к объекту, на котором висит эвент
   });












   // Удалить эвент после одного использования:

   const button3 = document.querySelector('.menu__link');

   function showConsole() {
      console.log('Клюк');
      button3.removeEventListener('click', showConsole); // Чтобы после 1 раза снимался кликер, и больше его не было
   }

   button3.addEventListener('click', showConsole);













   // Или сделать удаление по событию, которое произошло после клика
   
   const button3 = document.querySelector('.promo__interactive-item');


   let i = 0;
   
   const deleteElement = (event) => {
       console.log(event.target);
       i++;
       if (i == 1) {
          button3.removeEventListener('click', deleteElement)
       }
   };
   
   button3.addEventListener('click', deleteElement);








   // Опции:

   const options = {
      'capture': false, // фаза, на которой должен сработать обработчик
      'once': true, // если true - оключает повтор, работает как ремув выше
      'passive': false, // если true, то указывает, что обработчик никогда не вызовет preventDefault()
   }

   const button4 = document.querySelector('.menu__link');

   function showConsole3(params) {  
      console.log('Клик!');      
   }

   button4.addEventListener('click', showConsole3, options);
   // как альтернатива:
   button4.addEventListener('click', showConsole3, {once: true});       // делаем опцию once - и ставим в позицию true - включаем










   // Объект события

   const button5 = document.querySelector('.menu__link');

   function showConsole(event) {
      // Тип события
      console.log(event.type);
      // Вывести объект, на котором сработал обработчик (могут проскакивать другие объекты[если один внутри другого])
      console.log(event.target);
      // Вывести объект, к которому непосредственно назначен обработчик
      console.log(event.currentTarget);
      // Положение курсова по оси Х
      console.log(event.clientX);
      // Положение курсова по оси Y
      console.log(event.clientY);
      // Вывести всё
      console.log(event);
   }

   button5.addEventListener('click', showConsole); // собитые - клик мыши
   button5.addEventListener('mouseenter', showConsole); // навести мышкой на объект
   




   // Всплытие и погружение
   // всплытие - когда событие срабатывает сначала на дочернем элемента, а потом на родителе и т.д.
   const block = document.querySelector('.menu__link');
   const blockInner = document.querySelector('.menu__item');
   const blockInnerx2 = document.querySelector('.menu__list');


   block.addEventListener('click', function (event) {
      console.log('Клик на блок!');
   });

   blockInner.addEventListener('click', function (event) {
      console.log('Клик на блок второго уровня!');
   }, {'capture': true}); // 'capture': true - погружение начинается с него

   blockInnerx2.addEventListener('click', function (event) {
      console.log('Клик на блок третьего уровня!');
      event.stopPropagation(); // Стопает всплытие
   });








// мобильные события:

// touchstart - косание по элементу                                                                                                 телефон11
// touchmove - при движении пальца
// touchend - при отрыве пальца от экрана
// touchenter - если при скольжении пальца он натыкается на элемент с этим событием - событие срабатывает
// touchleave - если при скольжении пальца он уходит с этого элемента
// touchcancel - если палец уйдет за браузер, т.е. браузер не будет регестрировать палец

// Свойство event.clientX у клавомыши - event.touches[0].clientX на телефонах

// мобильные свойства:
// xxx.touches - показывает к-во пальцев
// xxx.targetTouches - показывает к-во пальцев которые взаимодействуют именно с этим элементом
// xxx.changedTouches - изменение к-ва пальцев

// Мобилка

window.addEventListener('DOMContentLoaded', () => {
   let btn = document.querySelector('button');

   btn.addEventListener('touchstart', (event) => {
       event.preventDefault();
       console.log('косание по кнопке');
       console.log(event.touches);
   })

   btn.addEventListener('touchmove', (event) => {
       event.preventDefault();
       console.log(event.targetTouches[0].pageX);              // выводит координаты 1 пальца относительно объекта на котором висит событие
   })

   btn.addEventListener('touchend', (event) => {
       event.preventDefault();
       console.log('оторвал палец от кнопки');
   })
});












   // подцепить каждую кнопку

   // но если кнопок много - хреново для оптимизации т.к. навешивание на все кнопки
   const button6 = document.querySelectorAll('.menu__link');

   function showConsole6() {
      console.log('Eeeee!');
   }

   button6.forEach(buttonItem => {
      buttonItem.addEventListener('click', showConsole6);
   });




   // альтернатива верхнему примеру (для 1ого элемента):

   const lesson = document.querySelector('.header__menu'); // находим любого родителя для кнопки

   function showConsole7() {
      console.log('Trutyytt'); // функция с выводом контента
   }

   lesson.addEventListener('click', function (event) {   // на переменную вешается евент, с событием - клик, и выполнять функцию
      if (event.target.closest('.menu__link')) {         // если клинкул на линк, или на дочерний элмент - выполнить функцию
         showConsole7();
      }
   });




   // Внимание, тут сейчас будет контент - КНОООПКА

   // 1 Вызываем родителя сего действия
   const menuBody2 = document.querySelector('.menu__btn');

   const listBody2 = document.querySelector('.menu__list')

   // 2 Вешаем событие на весь документ (чтобы можно было убрать список по клику на экран)

   document.addEventListener('click', menu); // при клике будет вызываться функция menu

   // 3 Описываем саму функцию
   function menu(event) {
      if (event.target.closest('.menu__btn')) {
         menuBody2.classList.toggle('menu__active');   // при нажатии - добавляет класс menu__active к menu__btn
      }
      if (event.target.closest('.menu__btn')) {
         listBody2.classList.toggle('menu__list_active');   // при нажатии - добавляет класс menu__active к menu__list
      }

      // Чтобы закрыть на тыке на экране !event... и remove - чтобы удалить active

      if (!event.target.closest('.menu__btn')) {              // если кликнуть на объект с классом menu = false (!) - то удалить 
         menuBody2.classList.remove('menu__active');
      }
      if (!event.target.closest('.menu__btn')) {
         listBody2.classList.remove('menu__list_active');
      }
   }


   // Чтобы Escape - скрывал открытое меню (см. ниже примеры с кнопками, это пример)

   document.addEventListener('keyup', function (event) {
      if (event.code ==='Escape') {
         listBody2.classList.remove('menu__list_active');
         menuBody2.classList.remove('menu__active');
      }
   });







   // Отмена стандартных действий браузера (например, переход по ссылке)                                                                           отмена стандарта11

   const link2 = document.querySelector('.link2');

   link2.addEventListener('click', function (event) {
      console.log('Ну давай, попробуй');
      event.preventDefault();
   });



   // Если делать не через addEventListener а через onclick =>

   link2.onclick = function () {
      console.log('Ну давай, попробуй');
      return false;
   }




    link2.addEventListener('click', function (event) {
      console.log('Ну давай, попробуй');
      event.preventDefault();
   }, {'passive': true});           // passive:true - отменяет отключение стандартных действий event.preventDefault(), нужно для каких-то целей (для тач скрина телефона)
   






   // Основные события мыши

   // Простые события: 

/*
   mousedown / mouseup - кнопка нажата / отпущена над элементом
   mouseover / mouseout - курсор мыши появляется над элементом и уходит от него
   mousemove - каждое движение мыши над элементом генерирует это событие
   contextmenu - вызывается контекстное меню правой кнопкой (может вызываться с клавиатуры)
*/


   // Комплексные события

/*
   click - клик - клик
   dblclick - вызывается при двойном клике
*/



   // Примеры

   const button3 = document.querySelector('.menu__btn');

   button3.addEventListener('mousedown', function (event) {
      console.log(`Нажата кнопка ${event.which}`);    // ${event.which} - выводит № кнопки 1-левая, 2-колесо, 3-правая
   });

   button3.addEventListener('click', function (event) {
      console.log(`Нажата основная кнопка мыши`);
   });

   button3.addEventListener('contextmenu', function (event) {
      console.log(`Контекст меню`);
   });






   // Координаты мыши: clientX/Y, pageX/Y

   const blockForMouse = document.querySelector('.menu__btn');

   blockForMouse.addEventListener('mousemove', function (event) {
      blockForMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
   });




   
   // Наведение мыши на объект - mouseover/mouseout

   const blockForMouse = document.querySelector('.menu__btn');

   blockForMouse.addEventListener('mouseover', function (event) {
      blockForMouse.innerHTML = 'Курсор над элементом';
   });

   blockForMouse.addEventListener('mouseout', function (event) {
      blockForMouse.innerHTML = 'Курсор улетел';
   });


   // Также есть события relatedTarget - противоположность target, т.е. можно вывести на что навел, и с чего увел
   // mouseover и mouseout - всплывают, т.е. при переходе от одного к доугому, цикл начинается сначала

   const blockForMouse2 = document.querySelector('.menu__btn');

   blockForMouse2.addEventListener('mouseover', function (event) {
      console.log(event.target);
      console.log(event.relatedtarget);
   });

   blockForMouse2.addEventListener('mouseout', function (event) {   // mouseout - наоборот от mouseover
      console.log(event.target);
      console.log(event.relatedtarget);
   });





   // mouseenter и mouseleave - тоже смое, только они НЕ всплывают, т.е. если в элементе есть дочки, при наведении курсора на дочки, ничего не происходит, 
   // в mouseover/out - будет всплытие и они будут выполняться



   // Пример выделяемого номера

   const phoneBlock = document.querySelector('.header__phone');

   phoneBlock.addEventListener('mouseover', function (event) {
      let target = event.target.closest('span');
      if (!target) return;
      target.style.cssText = `background-color: rgb(205, 99, 99);`;
   });

   phoneBlock.addEventListener('mouseout', function (event) {
      let target = event.target.closest('span');
      if (!target) return;
      target.style.cssText = ``;
   });


   // mouseenter и mouseleave работать не будут, т.к. надо будет переберать каждый элемент, а тут работает делегирование







   // События клавиатуры:
   // keydown и keyup
   // а также event.code и event.key [разница будет в регистре key - показывает регистр а code - нет, также при смене языка]

   document.addEventListener('keydown', function (event) {
      console.log(`Нажата клавиша ${event.code} (${event.key})`);
   });

   document.addEventListener('keyup', function (event) {
      console.log(`Отжата клавиша ${event.code} (${event.key})`);
   });




   // Пример использования: переключение языка

   document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {   // metaKey - для Apple
         console.log('Отмена');
      }
   });






   // Пример окна с вводом в окошко 30 символов и подсчета сколько символов осталось

   const txtItem = document.querySelector('.textarea__item');            // вызываем само поле
   const txtItemLimit = txtItem.getAttribute('maxlength');                // находим атрибут с максимальным к-вом символов
   const txtCounter = document.querySelector('.textarea__counter span');   // вызываем спан, в который будет считаться значение
   console.log(txtCounter);
   txtCounter.innerHTML = txtItemLimit;                                       // span => вводим переменную maxlength

   txtItem.addEventListener('keyup', txtSetCounter);           // вешается keyup и выполняем функцию txtSetCounter

   txtItem.addEventListener('keydown', function (event) {         // чтобы при зажатии тоже считалось к-во написанного текста - вызываем функцию на нажатие клавиши
      if (event.repeat) txtSetCounter();                          // если событие повторяется запустить функцию txtSetCounter
   });

   function txtSetCounter() {
      const txtSetCounterResult = txtItemLimit - txtItem.value.length;        // из макс. значения символов - то к-во которое введено
      txtCounter.innerHTML = txtSetCounterResult;                             // меняем значение в span'е
   }







   // Прокрутка страницы (скролл)   scrollY или scrollX

   window.addEventListener('scroll', function (event) {
      console.log(`${scrollY}px`);
   });














   







/*
 Оптимизация загрузки кода                                                                                                                оптимизация11
 1. document.addEventListener('DOMContentLoaded', () => {                               - прогружает скелет дом дерева, но не весь (ускоряет загрузку скрипта)
       весь контент
});


 2. в html в script прописать атрибут defer:
 <script defer src="..."></script>                                                      - можно не ставить скрипт в конец, он все равно будет работать. 
                                                                                          Но если скрипта 2, то сначала грузится 1 а потом 2 друг за другом

 3. в html в script прописать атрибут async:                                           - тоже что и defer, но без очереди, кто первый загрузился из скриптов, тот с сьел
 <script async src="..."></script>                                                       скрипт с таким атрибутом подключается в том случае, если он не зависит от других скриптов
                                                                                         или DOM дерева, например яндекс или гугл метрики и т.д.


4. подключение новых скриптов через функцию:
*/
function loadScript(src) {                                                           //   создаем новую функцию, при которой будет создаваться новый скрипт и вставляться в конец body
   const script = document.createElement('script');
   script.src = src;
   script.async = false;                                                             //   выключаем async (чтобы загрузка была один за другим, а не сразу)
   document.body.append(script);                                                     //   вставляем в конец body
} 

loadScript('js/test.js');                                                            //   подключаем другие скрипты через функцию
loadScript('js/some.js');




















   // События загрузки страницы

   // События DOMContentLoadded срабатывает на объекте document                                                                     
   document.addEventListener('DOMContentLoaded', readyDOM);

   // Событие Load срабатывает на объекте window
   window.addEventListener('load', readyLoad);

   function readyDOM() {
      const button = document.querySelector('.menu__btn');
      console.log(document.readyState);
      console.log('DOM загружен!');
      console.log(button.offsetWidth);
   }

   function readyLoad() {
      console.log(document.readyState);
      const button = document.querySelector('.button');
      console.log('Страница загружена');
      console.log(button.offsetWidth);       // т.к. это не картинка, которая подгружается после, кнопка тут выдает ошибку
   }




   // Создать запрос на релоад страницы
   // Событие beforeunload - срабатывает на объекте window

   window.addEventListener('beforeunload', BeforeUnload);

   function BeforeUnload(event) {
      // Отмените событие, как указано в стандарте
      event.preventDefault();
      // Chrome требует установки возвратного значения
      event.returnValue = '';
   }



   // Событие unload срабатывает на объекте window
   window.addEventListener('unload', function (e) {
      // Отправка статистики в фоновом режиме и т.д.
      // navigator.sendBeacon(url, data)
   });











   // _______________________________________ Формы _______________________________________                                                              формы11


   // Получить все формы
   console.log(document.forms);



   // т.к. document.form это коллекция, то можно получить первую по счету форму

   const form = document.forms[0];     // 0 => первая
   console.log(form);



   // Найсти form'у по имени [В html форме нужно задать name = 'form', к примеру]

   const form2 = document.forms.form;     // выводит живую форму
   console.log(form2);



   // можно вывести через querySelectorAll

   const form3 = document.querySelectorAll('form');         // это будет не живая форма, т.е. не будет меняться, если добавится что-то новое







   const mainForm = document.forms.form;
   console.log(mainForm.elements);


   // Обращение именно к внутренним элементам формы через name = ''

   const mainFormInput = mainForm.username;
   console.log(mainFormInput);



   // Получаем коллекцию с одним именем, например радиокнопка, которые должны иметь одно имя, чтобы был выбор между ними

   const radioButton = mainForm.check;
   console.log(radioButton);




   // Чтобы вывести родителя формы нужно radioButton.form

   console.log(radioButton.form);








   // Работа с элементами


   const mainForm2 = document.forms.form;

   const formInput = mainForm2.username;
   const formTextarea = mainForm2.tarea;


   // // Получить значение (содержимое) поля
   // console.log(formInput.value);
   // console.log(formTextarea.value);


   

   // Изменить содержимое поля

   formInput.value = 'Давай пока';
   formTextarea.value = 'Не забывай';


   // Радиокнопки

      const radioBtn = mainForm2.check;

      // Получить значения поля rype radio

      console.log(radioBtn[0].value);        // value - показывает значение, что вбито в html
      console.log(radioBtn[1].value);
      console.log(radioBtn[0].checked);      // cheked - какая кнопка нажата true or false
      console.log(radioBtn[1].checked);


      // Назначить значение

      radioBtn[0].value = 'left';
      radioBtn[1].value = 'right';
      radioBtn[1].checked = 'true';






   // Чекбокс

      const chekBox = mainForm2.check3;

      console.log(chekBox.value);         // значение
      console.log(chekBox.checked);       // false, т.к. кнопка не выбрана


      // Назначить значение

      chekBox.value = 'save';
      chekBox.checked = 'true';
   




   // Для type file (загрузчика файлов)

      const load = mainForm2.download;

      console.log(load.value);









   // select и option


   /*
      select.option - коллекция из подэлементов <option>
      select.value - значение выбранного в данный момент <option>
      select.selectedIndex - номер выбранного <option>
    */


   const mainForm3 = document.forms.form;

   const select = mainForm3.list;

   // Получить все option'ы
   console.log(select.options);

   // Получить индекс (номер по счету, начиная с 0)
   // console.log(select.selectedIndex);     или через константу
   const selectedIndex = select.selectedIndex;
   console.log(selectedIndex);

   // Получить value выбранного option'а
   const selectedValue = select.value;
   console.log(selectedValue);

   // Получить текст выбранного option'а

   const selectedText = select.options[selectedIndex].text;
   console.log(selectedText);



      /*
      Элементы <option> имеют свойства:
      выбрана ли опция - option.selected
      номер опции среди других в списке <select> - option.index
      содержимое опции (что видит пользователь) - option.text
   */





   // Менять option'ы 
      // выбрать определенный селектед по номеру
      select.options[1].selected = true;

      // А можно задать
      select.selectedIndex = 3;

      // А можно задать
      select.value = 2;



   
   // Добавить новую Option new Option
   // option = new Option(text, value, defaultSelected, selected);

   // Параметры:
   // text - текст внутри <option>
   // value - значение
   // defaultSelected - атрибут, если вписать true, то в HTML постивится атрибут selected
   // selected - если поастивать true, то данный <option> будет выбран

   // Пример

   let newOption = new Option('Ламборгини', '5', true, true);
   select.append(newOption);


   
   // Мультивыбор хз что такое и с чем его едят если честно [в html в select должно стоять multiply]

   // получаем все выбранные значения из select с multiple 

   let selectedOptions = Array.from(select.options)
      .filter(option => option.selected)
      .map(option => option.value)
   
   console.log(selectedOptions);














   // События form и их элементов

      // Фокусировка и брур   focus blur

      const mainForm = document.forms.form;
      const mainFormInput = mainForm.username;
      const mainFormPlace = mainForm.tarea;


      const mainFormInputPlaceholder = mainFormInput.placeholder;
      const mainFormInputPlaceholder2 = mainFormPlace.placeholder;

      mainFormInput.addEventListener('focus', function (e) {
         mainFormInput.placeholder = '';
      });

      mainFormPlace.addEventListener('focus', function (e) {
         mainFormPlace.placeholder = '';
      });

      mainFormInput.addEventListener('blur', function (e) {
         mainFormInput.placeholder = mainFormInputPlaceholder;
      });

      mainFormPlace.addEventListener('blur', function (e) {
         mainFormPlace.placeholder = mainFormInputPlaceholder2;
      });



      // Установить фокус при загрузке страницы, а потом его убрать через 3 сек

      //       const mainForm = document.forms.form;

      //      const mainFormInput = mainForm.username;

      mainFormInput.focus();

      setTimeout(() => {
         mainFormInput.blur();
      }, 3000);






      // Фокусеровка не работает на дивах или хедерах, но есть фокус-покус
      // поставить диву tabindex="-1", он не будет выделятся через таб но на нем будет работать фокусировка

      const lesson = document.querySelector('.form__inner');

      // Реагируем на событие 'в фокусе'
      lesson.addEventListener('focus', function (e) {
         lesson.classList.add('focus');
         console.log('Див в фокусе');
      });

      // Реагируем на событие потеря фокуса
      lesson.addEventListener('blur', function (e) {
         lesson.classList.remove('focus');
      });




      // События focusin и focusout
      // Работаею также как и обычные focus и blur, но они всплывают


      const mainForm3 = document.forms.form;

      // Хотим установить фокус на форме при работе с элеентами
      mainForm3.addEventListener('focusin', function (e) {          // с focus ничего не будет, ноесли заменить на focusin, то все получится
         mainForm3.classList.add('focus');
      }); 

      // Поймать на этапе погружения
      // , {'capture': true}






      // Событие change
      // Срабатывает по окончании изменения элемента
      // в инпут и текстареа работает также как и блур, но в select, radio, checkbox и др. - сразу

      const mainForm4 = document.forms.form;
      const mainForm4Input = mainForm4.username;
      const mainForm4Select = mainForm4.list;
      const mainForm4File = mainForm4.download;

      mainForm4Input.addEventListener('change', function(e){
         console.log('Сработало change');
      });

      mainForm4Select.addEventListener('change', function(e){
         console.log('Сработало elect');
      });

      mainForm4File.addEventListener('change', function(e){
         console.log('Сработало File');
      });





      // Событие input - срабатывает при изменении значения

      const mainForm5 = document.forms.form;
      const mainForm5Input = mainForm5.username;

      mainForm5Input.addEventListener('input', function (event) {
         console.log((`value: ${mainForm5Input.value}`));
      });







         // Пример окна с вводом в окошко 30 символов и подсчета сколько символов осталось

   const txtItem = document.querySelector('.textarea__item');            // вызываем само поле
   const txtItemLimit = txtItem.getAttribute('maxlength');                // находим атрибут с максимальным к-вом символов
   const txtCounter = document.querySelector('.textarea__counter span');   // вызываем спан, в который будет считаться значение
   console.log(txtCounter);
   txtCounter.innerHTML = txtItemLimit;                                       // span => вводим переменную maxlength

   txtItem.addEventListener('input', txtSetCounter);           // вешается keyup и выполняем функцию txtSetCounter         [заменил keyup на input и убрал keydown, пример выше]

   function txtSetCounter() {
      const txtSetCounterResult = txtItemLimit - txtItem.value.length;        // из макс. значения символов - то к-во которое введено
      txtCounter.innerHTML = txtSetCounterResult;                             // меняем значение в span'е
   }





   // События cut, copy, paste - происходят при вырезании, копировании и вставке данных

   const mainForm6 = document.forms.form;
   const mainForm6Input = mainForm6.username;

   mainForm6Input.addEventListener('copy', function (event) {
      console.log('копируем');
   });

   mainForm6Input.addEventListener('paste', function (event) {
      console.log('вставляем');
   });

   mainForm6Input.addEventListener('cut', function (event) {
      console.log('вырезаем');
   });



   // Запретить вставку через event.preventDefalult();

   mainForm6Input.addEventListener('paste', function (event) {
      console.log('Неа, не получится дружок');
      event.preventDefault();
   });





   // Отправка формы - событие и метод submit
   
   const mainForm7 = document.forms.form;
   const mainForm7Input = mainForm7.username;

   mainForm7.addEventListener('submit', function (event) {
      console.log('Форма отправляется...');

      // Проверяем поля, и если есть ошибки, отменяем отправку
      if (!mainForm7Input.value) {
         console.log('Поле воода имени не заполнено');
         event.preventDefault();
      }
   });


   // Для того, чтобы форма отправилась при снятии фокуса с поля

   mainForm7Input.addEventListener('blur', function (e) {
      mainForm7.submit();
   });









   



   // Классы                                                                                                      классы11
   
   class Rectangle {
      constructor(height, width) {
         this.height = height;
         this.width = width;
      }
      calcArea() {
         return this.height * this.width;
      }
   }
   
   const square = new Rectangle(10, 10);
   const long = new Rectangle(11, 20);
   
   
   class ColoredRectangleWithText extends Rectangle {                                     // extends_xxx - копирует другой клсс 
      constructor (height, width, test, bgColor) {
         super(height, width);                                                            // если есть extends, то копирует все свойства копируемого класса
                                                                                          // но super должен быть первым в () можно передавать аргументы
         this.text = test;
         this.bgColor = bgColor;
      }
      showMyProps() {
         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
      }
   }
   
   const div = new ColoredRectangleWithText(35, 11, 'прямоугольник', 'розовый');
   
   
   div.showMyProps();                                                                     
   console.log(div.calcArea());     













   // JSON                                                                                                                 json11
   // stringify - передать элемент в JSON
   // parse - из JSON в обычный объект



   const res = fetch(url);
   res.json();                                                                                        // конвертация в json





   const persone = {
      name: 'Alex',
      tel: '+784848484',
      parents: {
         mom: 'Anna',
         dad: 'Peter',
      }
   }

   console.log(JSON.parse(JSON.stringify(persone)));                                                     // переведет в JSON и обратно


   // Глубокое копирование (копирование доч. элементов)                                                  // глубокой клоринрование

   const clone = JSON.parse(JSON.stringify(persone));                                                    // таким образом будет полный клон














   // Сервер AJAX                                                                                           // сервер11
// Асинхронный код - 1) Таймаут - код выполнется через какой-то промежуток, другой код выполняется. 2) Запросы на сервер, тоже с неизветным временем исполнения
// 1. Работа с асинхронным кодом через XMLHttpRequest().

/* в файле JSON написано:
   {
      "current":{
         "usd": 74
      }
   }
*/

   const inputRub = document.querySelector('[data-rub]');                                                   // находим элемент на странице
   const inputUsd = document.querySelector('[data-usd]');

   inputRub.addEventListener('input', () => {                                                               // input для события - снятие фокуса с поля
      const request = new XMLHttpRequest();                                                                 // запрос
      // request.open(method, url, async, login, pass);                                                     // собирает настройки для запроса
      request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');                          // что отправляем
      request.send();                                                                                       // отправляем запрос на сервер. у сенда () зависят от метода get или post
      
      // узнаем что с полученными данными от запроса
      // status                                                                                             // код, что произошло
      // statusText                                                                                         // то же, но уже с описанием
      // response                                                                                           // ответ от сервера
      // readyState                                                                                         // текущее состояние запроса

      request.addEventListener('readystatechange', () => {                                                  // readystatechange - отслеживает статус готовности запроса
         if (request.readyState === 4 && request.status === 200) {                                          // если readyState - 4 т.е. done(см. гугл) и status = 200
                                                                                                            // т.е. все ок, тогда выполняем следующее
            console.log(request.response);                                                                  // в лог уходит объект json (не обработанный)
            const data = JSON.parse(request.response);                                                      // переводим json в читаемый вид
            inputUsd.value = +inputRub.value / data.current.usd;                                            // значение в окне долларов = значение рублей / на наш json объект
         } else {
            inputUsd.value = 'Упс что-то пошло не так';
         }
      });

      // request.addEventListener('load', () => {                                                           // load - отслеживает статус готовности запроса без request.readyState
      //    if (request.status === 200) {                                                                       
      //                                                                                                       
      //       console.log(request.response);                                                                 
      //       const data = JSON.parse(request.response);                                                      
      //       inputUsd.value = +inputRub.value / data.current.usd;                                            
      //    } else {
      //       inputUsd.value = 'Упс что-то пошло не так';
      //    }
      // });
   });





// promise (обежания) (делаем функцию, если внутри нее код выполнился (resolve) то выполняем то-то, если нет, то другое)


console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) {                                       // Создаем обежание с двумя аргументами, вместо которых будут подставляться функции
   setTimeout(() => {
      console.log('Подготовка данных...');

      const product = {
         name: 'TV',
         price: 2000
      };

      resolve(product);                                                                  // Положительный исход promisa (возвращает из функции аргумент внутри себя, чтобы исп. его дальше по коду)
   }, 2000);
});

req.then((product) => {                                                                  // then = resolve и выполняется в случае выполнения resolve
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         product.status = 'order';                                                       // добавляем в product новое свойство
         resolve(product);                                                               // resolve - успешное выполнение (в скобках как return - возвращается элемент)
         // reject(product);                                                                // reject - ошибка выполнения кода
      }, 2000);
   });
}).then(data => {
   data.modyfy = true;
   return data;
}).then((data) => {
   console.log(data);
}).catch(() => {                                                                         // catch - работает на reject - т.е. на ошибку
   console.log('Ошибка');
}).finally(() => {                                                                       // Finally - вызывается в любом из исходов в самом конце
   console.log('Конец работы скрипта');
});


const test = time => {
   return new Promise(resolve => {
      setTimeout(() => resolve(), time);
   });
};


// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


Promise.all([test(1000), test(2000)]).then(() => {                                          // Promise.all - ждет все промисы которые в него передале, пока они выполнятся, а потом действует
   console.log('all');
});                                                                                         // В итоге, все 2 промиса выполнятся через 2 секунды


Promise.race([test(1000), test(2000)]).then(() => {                                          // Promise.race - действует тогда, когда первый промис выполнится, не дожидаясь остальных
   console.log('all');
});          


















   // Отправка формы на сервер. Для этого на сервере есть файл server.php

   // 1. Через XMLHttpRequest    (formData)

   const forms = document.querySelectorAll('form');                                                // Т.к. форм несколько сделаем отд. функцию для отправки


   const message = {                                                                               // Объект, чтобы выводить сообщения на экран пользователю
      loading: '/img/form/spinner.svg',
      sucsess: 'Все загружено',
      fail: 'Что-то пошло не так'
   }



   forms.forEach(item => {
      postData(item);
   });


   function postData(form) {                                                                       // Потом просто будем вызывать функцию для отправки
      form.addEventListener('submit', (event) => {                                                 // submit в событии - если будет отправка формы
         event.preventDefault();                                                                   // чтобы не было перезагрузки страницы

         const statusMessage = document.createElement('img');                                      // Создаем элемент + клсс + выводим сообщение из объекта выше
         statusMessage.src = message.loading;                                                      // создаем + задаем одновременно атрибут src и добавляем css текст
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;

         // form.append(statusMessage);
         form.insertAdjacentElement('afterend', statusMessage);                                     // более гибкий метод, чем выше, чтобы закинуть файл не в конец формы, а сразу полсе нее
          


         const request = new XMLHttpRequest();                                                     // создаем рексвест
         request.open('POST', 'server.php');                                                       // POST т.к. мы будем загружать данные формы на сервер

         // request.setRequestHeader('Content-type', 'multipart/form-data');                       // Заголовки для сервера (для formData) [должен быть откоючен для меода FormData]
         

        
         const formData = new FormData(form);                                                      // Значение формы, которое ввел пользователь формируется для сервера 
                                                                                                   //(обязательно у input и др. должно быть заполнено name='', иначе работать не будет)
         request.send(formData);                                                                   // То, что мы отправляем

         request.addEventListener('load', () => {                                                  // Событие с load - отслеживаем загрузку на сервер
            if(request.status === 200) {
               console.log(request.response);
               showThanksModal(message.sucsess);
               form.reset();                                                                       // Очистить форму после успеха
               statusMessage.remove();
            } else {
               showThanksModal(message.fail);
            }
         });
      });
   }









 // 1.1 Через XMLHttpRequest    (JSON)

 const forms = document.querySelectorAll('form');                                                // Т.к. форм несколько сделаем отд. функцию для отправки


 const message = {                                                                               // Объект, чтобы выводить сообщения на экран пользователю
    loading: '/img/form/spinner.svg',
    sucsess: 'Все загружено',
    fail: 'Что-то пошло не так'
 }



 forms.forEach(item => {
    postData(item);
 });


 function postData(form) {                                                                       // Потом просто будем вызывать функцию для отправки
    form.addEventListener('submit', (event) => {                                                 // submit в событии - если будет отправка формы
       event.preventDefault();                                                                   // чтобы не было перезагрузки страницы

       const statusMessage = document.createElement('img');                                      // Создаем элемент + клсс + выводим сообщение из объекта выше
       statusMessage.src = message.loading;                                                      // создаем + задаем одновременно атрибут src и добавляем css текст
       statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
       `;

       // form.append(statusMessage);
       form.insertAdjacentElement('afterend', statusMessage);                                     // более гибкий метод, чем выше, чтобы закинуть файл не в конец формы, а сразу полсе нее
        


       const request = new XMLHttpRequest();                                                     // создаем рексвест
       request.open('POST', 'server.php');                                                       // POST т.к. мы будем загружать данные формы на сервер



      /*
       !!!!!!!!!!!!!!!! Для того, чтобы передавать данные в формате JSON нужно добавить:
       Для того чтобы php мог обрабатывать JSON файлы, в php нужно добавить строчку:  $_POST = json_decode(file_get_contents("php://input"), true);
      */
       request.setRequestHeader('Content-type', 'application/json');                             // Заголовки для сервера (для JSON)

       const obj = {};                                                                           // Пустой объект, куда будут передаваться данные
       formData.forEach(function(value, key) {
          obj[key] = value;
       })

       const json = JSON.stringify(obj);                                                         // Переводим объект в JSON

                                                                                                 // Отправляем новую переменную (вместо send(formData) ниже)

       
       const formData = new FormData(form);                                                      // Значение формы, которое ввел пользователь формируется для сервера 
                                                                                                 //(обязательно у input и др. должно быть заполнено name='', иначе работать не будет)
      request.send(json);                                                                        // То, что мы отправляем

       request.addEventListener('load', () => {                                                  // Событие с load - отслеживаем загрузку на сервер
          if(request.status === 200) {
             console.log(request.response);
             showThanksModal(message.sucsess);
             form.reset();                                                                       // Очистить форму после успеха
             statusMessage.remove();
          } else {
             showThanksModal(message.fail);
          }
       });
    });
 }










// Отправка формы через Fetch API      fetch();       ВМЕСТО XMLHttpRequest() выше

// get с адреса: jsonplaceholder

fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => console.log(json));


// post

fetch('https://jsonplaceholder.typicode.com/posts', {                                           // меняем конец на posts (на jsonplaceholder если инфа)
   method: "POST",                                                                              // методом выбираем POST запрос
   body: JSON.stringify({name: 'Alex'}),                                                        // что мы будем отправлять. Обьект превращается в JSON и отправляется
   headers: {                                                                                   // заголовки определяют что мы отправляем
      'Content-type': 'application/json'
   }
})
   .then(response => response.json())
   .then(json => console.log(json));



// Пример Fetch (отправляем formData)
   const forms = document.querySelectorAll('form');                                                // Т.к. форм несколько сделаем отд. функцию для отправки


   const message = {                                                                               // Объект, чтобы выводить сообщения на экран пользователю
      loading: '/img/form/spinner.svg',
      sucsess: 'Все загружено',
      fail: 'Что-то пошло не так'
   }



   forms.forEach(item => {
      postData(item);
   });


   function postData(form) {                                                                       // Потом просто будем вызывать функцию для отправки
      form.addEventListener('submit', (event) => {                                                 // submit в событии - если будет отправка формы
         event.preventDefault();                                                                   // чтобы не было перезагрузки страницы

         const statusMessage = document.createElement('img');                                      // Создаем элемент + клсс + выводим сообщение из объекта выше
         statusMessage.src = message.loading;                                                      // создаем + задаем одновременно атрибут src и добавляем css текст
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;

         // form.append(statusMessage);
         form.insertAdjacentElement('afterend', statusMessage);                                     // более гибкий метод, чем выше, чтобы закинуть файл не в конец формы, а сразу полсе нее
          
        
         const formData = new FormData(form);                                                      // Значение формы, которое ввел пользователь формируется для сервера 
                                                                                                   //(обязательно у input и др. должно быть заполнено name='', иначе работать не будет)

         fetch('server.php', {
            method: 'POST',
            body: formData
         }).then(data => data.text())
         .then(data => {                                                                         // then будет, т.к. fetch возвращает promise и это будет вместо request.addEventListener('load', () из кода выше 
               console.log(data);
               showThanksModal(message.sucsess);

               statusMessage.remove();
         }).catch(() => {
               showThanksModal(message.fail);
         }).finally(() => {
            form.reset();                                                                           // Очистить форму после успеха
         })
      });
   }




   // 2. Через Fetch (отправляем JSON)
   // Для того чтобы php мог обрабатывать JSON файлы, в php нужно добавить строчку:  $_POST = json_decode(file_get_contents("php://input"), true);

   const forms = document.querySelectorAll('form');                                                // Т.к. форм несколько сделаем отд. функцию для отправки


   const message = {                                                                               // Объект, чтобы выводить сообщения на экран пользователю
      loading: '/img/form/spinner.svg',
      sucsess: 'Все загружено',
      fail: 'Что-то пошло не так'
   }



   forms.forEach(item => {
      postData(item);
   });


   function postData(form) {                                                                       // Потом просто будем вызывать функцию для отправки
      form.addEventListener('submit', (event) => {                                                 // submit в событии - если будет отправка формы
         event.preventDefault();                                                                   // чтобы не было перезагрузки страницы

         const statusMessage = document.createElement('img');                                      // Создаем элемент + клсс + выводим сообщение из объекта выше
         statusMessage.src = message.loading;                                                      // создаем + задаем одновременно атрибут src и добавляем css текст
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;

         // form.append(statusMessage);
         form.insertAdjacentElement('afterend', statusMessage);                                     // более гибкий метод, чем выше, чтобы закинуть файл не в конец формы, а сразу полсе нее
            
         
         const formData = new FormData(form);                                                      // Значение формы, которое ввел пользователь формируется для сервера 
                                                                                                   //(обязательно у input и др. должно быть заполнено name='', иначе работать не будет)

         const obj = {};                                                                           // Пустой объект, куда будут передаваться данные
         formData.forEach(function(value, key) {
            obj[key] = value;
         })

         const json = JSON.stringify(obj); 

         fetch('server.php', {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },
            body: json
         })
         .then(data => data.text())
         .then(data => {                                                                         // then будет, т.к. fetch возвращает promise и это будет вместо request.addEventListener('load', () из кода выше 
               console.log(data);
               showThanksModal(message.sucsess);
               statusMessage.remove();
         }).catch(() => {
               showThanksModal(message.fail);
         }).finally(() => {
            form.reset();                                                                           // Очистить форму после успеха
         })
      });
   }














   // Получение ошибки от сервера

   const getResource = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {                                                                            // ! - если не окей, тогда 
         throw new Error(`Could not fetch ${url}, statys: ${res.status}`);                      // throw - вывести; новую ошибку и что будет в ней написано
      }

      return await res.json();
}











// Json server                                                                                                             jsonserver11

// в консоли npm init => npm install -g json-server      -g - установить глобально
// далее json-server xxx.json                             название файла базы данных
// Через fetch ('xxx.json') вместо xxx.json файла на сервере нужно обращаться на ссылку которую в консоли выдает json server















                                                                                                //Async и await11

// async и await - предназначены для дожидания операции (если в функции есть отправка данных на сервере с помощю этого метода дожидаются ответа) чтобы 
// следующий код сработал тогда, когда получит ответ от сервера предыдущая операция


const postData = async (url, data) => {                                                      // async пишется перед функцией
   const res = await fetch(url, {                                                            // await пишется перед кодом, который нужно дождаться
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   });

   return await res.json();
}












// Бибилиотека axios                                                                                                    axios11
// подключение через скрипт в html:
//    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> 


axios.get('http://localhost:3000/menu')
   .then(data => {
      data.data.forEach(({ img, title, descr, price, alt }) => {                        // {} - это деструктуризация объекта, т.е. сразу подстановка свойств
         new AddCart('.menu__field .container', img, title, descr, price, alt);
      });
});












// Геттеры и сеттеры                                                                                                                            get11
// get - получить что-то через обращение this вне объекта
// set - задать что-то опять таки через обращение this

const persone = {
   name: 'Alex',
   age: 30,

   get userAge() {
      return this.age;
   },

   set userAge(num) {
      this.age = num
   }
}

persone.userAge = 30;

console.log(persone.userAge);









// Инкапсуляция
// Матод при котором запрещается извне изменять объекты

function User (name, age) {
   this.name = name;                                                                               // this.name можно изменить извне через обращение.name = 'Хрен' - и оно поменяется
   let userAge = age;                                                                              // при задании переменнрй ее можно менять только в самом объекте, либо через свойство

   this.say = function() {
      console.log(`имя пользователя: ${this.name}, возраст ${userAge}`);
   };

   this.getAge = function() {                                                                      // только при обращении к этой функции можно будет получить данные, заданные переменной (let)
      return userAge;
   };

   this.setAge = function(age) {                                                                   // через эту функцию, при обращении на нее можно будет менять значения переменой
      if (typeof age === 'number' && age > 0 && age < 110) {
         userAge = age;
      } else {
         console.log('Недопустимое значение');
      }
   };
}

const ivan = new User('Ivan', 27);                                                                 // создаем новый объект через конструктор
console.log(ivan.name);

ivan.userAge = 30;                                                                                 // возраст не поменятеся, т.к. обращение к переменной в объекте вне объекта недопустимо
ivan.name = 'Alex';                                                                                // имя поменяется, т.к. задано через this.name а не через переменную

ivan.say();


console.log(ivan.getAge());                                                                        // получить возраст

ivan.setAge(30);                                                                                   // устанавливаем возраст
ivan.setAge(300);
console.log(ivan.getAge());




// Как это работает с классами

class User {
   constructor(name, age) {
      this.name = name;                                                                               // this.name можно изменить извне через обращение.name = 'Хрен' - и оно поменяется
      this._age = age;                                                                                // в классе задавать через переменные не получится (делаем через _age)
   }

   #surname = 'Ivanov';                                                              // экспериментальное с-во работает в хроме

   say() {
      console.log(`имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
   }

   get age() {                                                                      // только при обращении к этой функции можно будет получить данные, заданные переменной (let)
      return this._age;
   }

   set age(age) {                                                                   // через эту функцию, при обращении на нее можно будет менять значения переменой
      if (typeof age === 'number' && age > 0 && age < 110) {
         this._age = age;
      } else {
         console.log('Недопустимое значение');
      }
   }

   get surname() {                                                                  // геттер для #surname
      return this.#surname;
   }

   set surname(surname) {                                                           // сеттер для #surname
      this.#surname = surname;
   }
}


const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
console.log(ivan.surname);                                              // будет ошибка
ivan.surname = 'Petrov';
ivan.say();










// local Storage                                                                                                                                   localstorage11
// на каждом сайте под каждый домен есть свое хранилище на 5мб данных

   // setItem('ключ', значение ключа)  - установить значение в сторадж
   localStorage.setItem('number', 5);

   // getItem('ключ')  - получить значение
   localStorage.getItem('number');

   console.log(localStorage.getItem('number'));                                                 // вывести в консоль


   // removeItem('ключ')  - удалить значение
   localStorage.removeItem('number');


   // clear()  - очистить все
   localStorage.clear();


   // пример на форме

   const checkbox = document.querySelector('#checkbox'),
         form = document.querySelector('form'),
         change = document.querySelector('#color');

   // сделать так, чтобы при нажатии на галочку в форме, она всегда была активна, при релооде или закрытии страницы
   if (localStorage.getItem('isCheked')) {                                                      // если в local storage есть isCheked, то
      checkbox.checked = true;                                                                  // сделать галочку активной
   }

   if (localStorage.getItem('bg') === 'changed') {                                              // покраска формы в красный цвет из примера ниже
      form.style.backgroundColor = 'red';
   } 

   checkbox.addEventListener('change', () => {                                                  // при клике(изменении состояния галочки) 
      localStorage.setItem('isCheked', true);                                                   // в local storage будет записываться ключ isCheked со значением тру
   });


   // перекрашиваем форму по клику на кнопку, с записью в базу данных, чтобы информация сохранялась
   change.addEventListener('click', () => {
      if (localStorage.getItem('bg') === 'changed') {
         localStorage.removeItem('bg');
         form.style.backgroundColor = '#fff';
      } else {
         localStorage.setItem('bg', 'changed');
         form.style.backgroundColor = 'red';
      }
   });



   // Также в local storage можно передавать данные, но их нужно серилизовать (перевести в json к примеру)

   const persone = {
      name: 'alex',
      age: 25
   };

   const serializePersone = JSON.stringify(persone);                                              // переводим объект в json

   localStorage.setItem('alex', serializePersone);                                                // закидываем в local storage объект в формате json
      
   console.log(JSON.parse(localStorage.getItem('alex')));                                         // выводим в консоль полученный через гет объект с ключом алекс, который парсим обратно в объект из JSON













// Регулярные выражения                                                                                                 выражения11

/*
/pattern/flags   
flags:
i - искать в любом регистре
g - искать все буквы
m - искать во всех строках
                                    флаги можно стакать все сразу
*/


const ans = prompt('введите что-то там');

const reg = /n/i                                                                                   // pattern - n, flag - i(нижний и вернхий регистр)

console.log(ans.search(reg));                                                                      // search - соответственно искать до первого совпадения
console.log(ans.match(reg));                                                                       // match - искать более подробно (с флагом g - выдает массив)
console.log(ans.replace(/./g, '*'));                                                               // replace - заменяет (_что заменить, '_на что заменить')(/./g - все элементы)
                                                                                                   // чтобы заменить . нужно ее экранировать - /\./g, (\) - экран

console.log('12-35-68'.replace(/-/g, ':'));                                                        // пример к реплейсу
console.log(reg.test(ans));                                                                        // test - ищет и если найдет выводит true или false если не найдет




// Поиск типов данных
/*
\d - искать числа
\w - искать слова(буквы)
\s - искать пробелы
*/

const ans = prompt('введите число');
const reg = /\d/;
console.log(ans.match(reg));

// можно через const reg = /\d/g; - вывести все числа, если введено 200px будет массив [2, 0, 0] - дальше склеить в строку через join(',')  НЕТ
// something.replace(/\D/g, '') - заменить все не числа на '' - пустое место, т.е. останутся только числа

let str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));                                                                  // - шаблон поиска буква - цифра - буква - цифра (найти R2D2)



// Чтобы искать не буквы, не цифры и не пробелы - писать с большой буквы: \W, \D, \S












// CommonJS                                                                                     CommonJS11
// Webpack 
// нужно установить node.js => npm init => npm i webpack webpack-cli - g (установить глобально) (возможно нужно делать с -D как в галпе)
// закинуть файл webpack.config.js в корень с проектом и содержимым:

'use strict';

let path = require('path');                           // рабочая переменная

module.exports = {
   mode: 'development',                               // мод development или production как и в галпе
   entry: './src/js/script.js',                       // входящий файл жс'а
   output: {
      filename: 'bundle.js',                          // итоговый файл
      path: __dirname + '/dist/js'                    // __dirname - корень проекта - путь для итогового жс'a
   },
   watch: true,                                       // как и в галпе ватчер

   devtool: "source-map",                             // карту можно посмотреть в источниках, 

   module: {}
};


// Далее создаем в папке js папку modules и там уже создаем фалы js с названиями отдельных модулей
// в новом js создаем функцию, с именем (к примеру tabs)
// внутрь функции помещаем внутреннести этого модуля, а в конце прописываем:

module.exports = tabs;                                // где tabs - название функции

// В файле script.js - файл сборщик всех модулей пишем:



// Модули с ES6

// Для экспорта файлов пишем:

export let one = 1; 

// или 

let two = 2;

export {two};

// можно экспортить все что угодно:

export function sayHi() {
   console.log('Say hi');
}


// Импорт файлов

import {one, two} from './main';                         // импорт 2х переменных из папки main в той же папке, что и экспорт

// Браузер не умеет собирать импорты, для этого нужен webpack

// Можно сразу же переименовать файл после импорта:

import {one as first} from './main';

console.log(first);

// Можно испортировать сразу все:

import * as data from './main';

// А обращаться к ним:

console.log(`${data.one} and ${data.two}`); 

// data становится объектом, и к нему соответствующее обращение через .

// Есть еще экспорт по умолчанию (в файле может быть только 1 такой default)
export default function sayHi() {
   console.log('hi');
}
// в другом жс файле:
//import sayHi form './main';                                // без {} скобок





// type='module'                                                                       type11
// не использовать webpack а подключить в html особым образом скрипты

// В HTML:

/*
<script type='module' src="./js/main.js"></script>                                 // main.js откуда экспортируем
<script type='module' src="./js/script.js"></script>                               // script.js куда импортируем
*/

// страница будет по 1 подключать каждый скрипт, что не очень хорошо
// также в самом import... в сылке на export нужно прописывать файлы с расширением .js:
import {one, two} from './main.js';












// React                                                                                                          react11

// Установка

   /*npx create-react-app my-app
   cd my-app
   npm start
   */

// JSX - упрощенная вставка html в js код

// создание элемента:
// JSX:
   const elem = <h2>hello world</h2>

// React:
   const elem = React.createElement('h2', {className: 'greeting'}, 'hello world');              // где второй аргумент - класс задается через объект (если нет класса, но null)

// Вставка элементов со страницы делается через {}
   const elem = <h2>{2+11}</h2>








   // Strict mode
   import React, {StrictMode} from 'react';

   ReactDOM.render(
      <StrictMode>
         <App/>
      </StrictMode>,
      document.getElementById('root')
    );
    










// Задачка на кнопку счетчик
// https://codepen.io/Deddoctor30/pen/JjMOQrJ

class App extends React.Component {
   constructor(props) {
     super(props);
     
     this.state = {
       curValue: this.props.counter
     }
   }
 
   // Используйте только стрелочную форму методов
   // Почему? Подробный ответ будет в следующем уроке
   inc = () => {
     if (this.state.curValue < 5) {
       this.setState({
         curValue: this.state.curValue + 1
       })
     } else {
       curValue: 5
     }
   }
 
   dec = () => {
     if (this.state.curValue > -5) {
           this.setState({
           curValue: this.state.curValue - 1
     })
     } else {
       curValue: -5
     }
   }
   
   rnd = () => {
     this.setState({
      curValue: Math.floor(Math.random() * (6 - 1) + 1) * (Math.random() < 0.5 ? -1 : 1)
     })
   }
   
   reset = () => {
     this.setState({
       curValue: this.props.counter
     })
   }
   
   render() {
     // const {counter} = this.props;
     return (
       <div class="app">
         <div class="counter">{this.state.curValue}</div>
         <div class="controls">
           <button onClick={this.inc}>INC</button>
           <button onClick={this.dec}>DEC</button>
           <button onClick={this.rnd}>RND</button>
           <button onClick={this.reset}>RESET</button>
         </div>
       </div>
     )
   }
 }
 ReactDOM.render(<App counter={1}/>, document.getElementById('app'));
 
 // 1) Начальное значение счетчика должно передаваться через props
 // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
 // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
 // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов







   // ========= Примеры ================                                                                                   примеры11


   // Пример корректности ввода email'а

   const mainForm8 = document.forms.form;
   const mainForm8Input = mainForm8.username;


   mainForm8.addEventListener('submit', function (event) {
      if (emailTest(mainForm8Input)) {
         mainForm8Input.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="main-form__error">
               Введите email
            </div>`
         );
         event.preventDefault();
      }  
   });


   mainForm8Input.addEventListener('focus', function (event) {
      if (mainForm8Input.nextElementSibling) {
         mainForm8Input.nextElementSibling.remove();
      }
   });      // удаляет последний элемент, который должен быть новым дивом, но у меня последний это большое поле, нужно просто переделать html немного

   // Функция теста email
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }






   // Выводим картинку после выбора

   const mainForm9 = document.forms.form;
   const mainFormFile = mainForm9.download;

   mainFormFile.addEventListener('change', function (e) {
      let selectedFile = mainFormFile.files[0];

      // получаем URL изображения
      let fileURL = URL.createObjectURL(selectedFile);

      mainFormFile.parentElement.insertAdjacentHTML(
         'beforeend',
         `<div class="download__image">
            <img alt"" title="${selectedFile.name}" src="${fileURL}">
         </div>`
      );
   });


   














   // Даты                                                                                                            date11

   const now = new Date();

   // Получение дат

   console.log(now.getFullYear());
   console.log(now.getMonth());
   console.log(now.getDate());
   console.log(now.getDay());                // день недели, начинается с воскресенья
   console.log(now.getHours());
   console.log(now.getUTCHours());


   console.log(now.getTimezoneOffset());     // разница между UTC и твоим временем в минутах
   console.log(now.getTime());                // разница между 1970 и твоим временем в мс


   // Задавание параметров

   now.setHours(18);
   now.setHours(18, 40, 32);                                         // После , можно устанавливать дальнейшие параметры: минуты, секунды
   console.log(now);






   // Разница между временными интервалами и нагрузкой внутри


   let start = new Date();                                            // дата старта

   for (let i = 0; i < 1000000; i++) {                                // нагрузка, как она закончится стартанется end
      i ** 3;  
   }

   let end = new Date();                                                // дата конца
   
   alert(`Цикл отработал за ${end - start} миллисекунд`);               // разница в миллисекундах между start и end










   // Создать свой фильтр (вместо .filter) для фильтрации массива                                                               фильтр11

   const filterThis = [2, 4, 3, 6, 8, 9];

   const filter = (arr, func) => {
      const filterArr = [];                                              // создаем переменную типа массив
      for (let elem of arr) {                                            // для каждого элемента массива выполнить:
         if (func(elem)) {                                               // пушим элемент
            filterArr.push(elem);
         }
      }
      return filterArr;
   }

   console.log(filter(filterThis, (elem) => elem % 3 == 0));              // отфильтровать массив и вывести все числа в массиве, которые делятся на 3 без остатка      



   // Свой some (возращает true или false если есть хоть 1 элемент)

   const someOf = ['java', 'javascript', 'pyton'];

   const some = (arr, func) => {
      for (let elem of arr) {
         if (func(elem)) return true;
      }
      return false;
   }
   
   console.log(some(someOf, (elem) => elem === 'java'));






   // Свой map

   const mapMe = [1000, 800, 2400, 500];

   const map = (arr, func) => {
      const mapArr = [];                                        
      for (let elem of arr) {                                          
         mapArr.push(func(elem));
      }
      return mapArr;
   }

   console.log(map(mapMe, (elem) => elem + 200));










   // Свой модуль                                                                                                       модуль11

   const user = (function(){                                                                    // это анонимная, самовызывающаяся функция
      const privat = function() {                                                               // создаем переменную - функцию с действием
         console.log("I'm privat");
      };

      return {
         sayHello: privat                                                                       // метод sayHello с сылкой на переменную - функцию
      };
   }());

   user.sayHello();                                                                             // вызываем метод sayHello










   // Try and Catch - в случае ошибки, не останавливает весь код, а продолжает его возможное выполнение

   try {
      console.log('Normal');
      console.log('a');
      console.log('Result');
   } catch (error) {                                                                               // error - сама ошибка
      console.log(error);
   }

   console.log('Success');

   // Если в коде с try будет ошибка, произойдет условие из catch и код пойдет дальше

   try {
      console.log('Normal');
   } catch (error) {
      console.log(error.name);                                                                     // Разложение на вывод ошибки
      console.log(error.message);
      console.log(error.stack);
   }

   // Также можно как и в промисах еще вывести в конце finally

   try {
      console.log('Normal');
   } catch (error) {
      console.log(error);                                                                     
   } finally {                                                                                     // Выполнить эту часть кода в любом случае
      console.log('Выполнить в любом случае');
   }





   







   // Поддержка кода старыми браузерами                                                            старостьнерадость11


      // 1. Babel
      // Смотри видео, мне лень это писать :[]

      // npm install --save-dev @babel/core @babel/cli @babel/preset-env       из документации

      // Файл webpack.config вместе с бабилем:
      'use strict';

      let path = require('path');

      module.exports = {
         mode: 'development',
         entry: './src/js/script.js',
         output: {
            filename: 'bundle.js',
            path: __dirname + '/dist/js'                    // __dirname - корень проекта
         },
         watch: true,

         devtool: "source-map",

         module: {
            rules: [
               {
               test: /\.m?js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: [['@babel/preset-env', {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: "usage"
                     }]]
                  }
               }
               }
            ]
         }
      };




      // Затем в файле package.json добавить (после autor и licence): 
/*
      "browserslist": [
         "> 1%"
      ],
*/



      // После этого в терминале пишем:

      // npm i --save-dev babel-loader
      // npm i --save-dev core-js
      // После этого запускаем webpack и все должно работать














   // JQuery уже немного устарел, но можно встретить в коде
   /*
   jquery можно скачать в папку, можно подключить с сайтов jquery cdn или через npm пакеты: npm i jquery --save

   Подключить:
   в скрипте в котором работаешь прописать 
      import 'jquery';

   */


import $ from 'jquery';

$(document).ready(function() {                     // аналог подгрузки страницы DOMContent loader
   // Добавить класс к элементу при наведении на него через hover (как в CSS)
   $('.list-item').first().hover(function() {      // находим эолемент через $, .first - первый элем. .hover = addEventList() только работает как hover в CSS
      $(this).toggleClass('active');               // $(this) вместо event в функции, обращаемся к событию и toggleClass = classList.toggle
   });

   // Найти 3 кнопку и сделать анимацию сокрытия для четных изображений
   $('.list-item:eq(2)').on('click', function() {                      // on = addEventListener()
      $('.image:even').fadeToggle();                                   // находим изображения => четное и делаем готовую анимацию fadeToggle()
   });

   // Написать анимацию вручную
   $('.list-item:eq(4)').on('click', function() {                      // on = addEventListener()
      $('.image:odd').animate({
         opacity: 'toggle',
         height: 'toggle',
      }, 2000);
   });
});













// Функции генераторы
// каждый раз при вызове функции будет выводится своё в yield по порядку

// задается так:

function* generator() {
   yield 'S';
   yield 't';
   yield 's';
}

const str =  generator();

console.log(str.next());            // будет объект: value = S, done: false и каждый дальше будет вызывать свое
console.log(str.next().value);      // .value - выведет только S





// Еще пример

function* count(n) {
   for (let i = 0; i < n; i++) {
      yield i;
   }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);     // будет 0, 1, 2


// Вместо console.log можно сделать через for of

for (let k of count(7)) {
   console.log(k);
}
















   // Анимации через requestAnimationFrame

   const btn = document.querySelector('.btn'),
         elem = document.querySelector('.box');

   function myAnimation() {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";

      if (pos < 300) {
         requestAnimationFrame(myAnimation);
      }
   }

   btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
   









// Сайты с кодом:
// 1.Nisnom.com
// 2. Slick-slider










   // Войны кода



   // получить середину строки 1 символ или 2 если букв четное к-во

      function getMiddle(s) {
         const a = s.length;
         const b = a / 2;
         if (Number.isInteger(b)) {
            return s.slice((b-1), (b+1))
         } else {
            return s.slice(b, (b+1))
         }
      }

   // или так

      function getMiddle(s) {
         const b = s.length / 2;
         if (s.length % 2 === 0) {                                // проверка через остаток
            return s.slice((b-1), (b+1))
         } else {
            return s.slice(b, (b+1))
         }
      }










   // получить наибольшее слово в строке по к-ву символов

      function shortWord(str) {
         let item = str.split(' ');
         let tempo = 0;
         for (let i = 0; i < item.length; i++) {
            if (item[i].length > tempo) {
               tempo = item[i].length;
            }
         }
         return tempo;
      }
      
      console.log(shortWord('Иногда я люблю играть со утра'));



   // получить наименьшее слово в строке по к-ву символов

      function shortWord(str) {
         let item = str.split(' ');
         let tempo = 100;
         for (let i = 0; i < item.length; i++) {
            if (item[i].length < tempo) {
               tempo = item[i].length;
            }
         }
         return tempo;
      }
      
      console.log(shortWord('Иногда яaa люблю играть со утра'));


      // или головокружительный вариант с варкода

      function shortWord(s) {
         return Math.min(...s.split(' ').map (s => s.length));
      }
      
      console.log(shortWord('Иногда яaa люблю играть со утра'));












   // Сделать строку со всеми заглавными буквами
         String.prototype.toJadenCase = function () {
            return this.split(" ").map(item => {
               return `${item[0].toUpperCase()}${item.slice(1)}`
            }).join(' ');
         };
         
         String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");


         // читаемый вид
         String.prototype.toJadenCase = function (i) {
            return i.split(" ").map(item => {
               return `${item[0].toUpperCase()}${item.slice(1)}`
            }).join(' ');
         };
         
         console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));









   // Проверить число на взятие корня и вернуть true или false
      // мое чудо

      var isSquare = function(n){
         let a = Math.sqrt(n);
         if (Number.isInteger(a)) {
            return true;
         } else {
            return false;
         }
      }

      
      // чудо задрота
         function isSquare(n) {
            return Math.sqrt(n) % 1 === 0;
          }







      // Посчитать, сколько в массиве штук true 

         function countSheeps(arrayOfSheep) {
            let a = 0;
            for (let i of arrayOfSheep) {
               if (i === true) {
                  a++;
               }
            }
            return a;
         }
         console.log(countSheeps(arrayOfSheep));



      // Естественно лютый вариант из варкода
         function countSheeps(arrayOfSheeps) {
            return arrayOfSheeps.filter(Boolean).length;
         }
         console.log(countSheeps(arrayOfSheep));








         
      // Сделать ряд  1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

         function SeriesSum(n) {
            let a = 0;
            for (let i = 1; i <= n; i++) {
            a += 1 / (2 * i + (i - 2));
            }
            return a.toFixed(2);
         }
         
         console.log(SeriesSum(2));













      // Есть переменная с числами, ее нужно обернуть в массив с числами и сделать реверс

            function digitize(n) {
               return String(n).split("").reverse().map(Number);
            }
            console.log(digitize(987654321));

         // или более расписанный вариант

            function digitize(n) {
               return String(n).split( "" ).map((i)=>{
                  return Number(i)
               });
            }
            console.log(digitize(987654321));










      // Есть двумерный массив, первое число - сколько в автобус зашло человек, второе сколько вышло
      // к-во масиввов внутри - к-во остановок, нужно сосчитать, сколько людей осталось в конце

         let arr = [[10, 0], [3, 5], [5, 8]];

         var number = function(busStops){
            let a = 0;
            for (let i = 0; i < busStops.length; i++) {
               a += busStops[i][0] - busStops[i][1];
            }
            return a;
         }
         
         console.log(number(arr));
      

         
         // мега скилл 1 строчка с сайта

         const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);









      // Функция принимает число, если четное вывести слово - четное, если нет - нечетное

         function even_or_odd(number) {
            if (number % 2 === 0) {
              return 'even';
            } else {
              return 'Odd';
            }
          }


          // Сайт:
          function even_or_odd(number) {
            return number % 2 ? "Odd" : "Even"
          }







      // Boolean значение перевести в строку 'true' или 'false'
         
         function booleanToString(b){
            return b = String(b);
         }
          





      // Дают массив, нужно из него выбрать наименьшее число

         function findSmallestInt(args) {
            return args.sort((a, b) => a - b)[0];
         }
         
         let arr = [22, -2, 11, 135, -257];
         
         console.log(findSmallestInt(arr));


      // Рил таф с сайта:

         function findSmallestInt(args) {
            return Math.min(...args)
         }
      




      


      // Есть строка, нужно ее преобразовать в другую строку,
      // проверить каждую букву на повторение и вывести П - повтор или Н - нет повтора

         const i = 'Здравствуйте';
         console.log(i);
         
         function duplicateEncode(word){
            let res;
            let good = '';
            let b = word.toLowerCase().split('');
            for (let i = 0; i < b.length; i++) {
               for (let c = 0; c < b.length; c++) {
                  if (i === c) {
                     continue
                  }
                  if (b[i] === b[c]) {
                     res = 'П';
                     break
                  } else {
                     res = 'Н';
                  }
               }
               console.log(`${b[i]} = ${res}`);
               good += res;
            }
            console.log(good);
         }
         
         
         duplicateEncode(i);

         // С сайта нет, т.к. доделывал дома