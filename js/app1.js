'use strict';

 function getNumber() {
   let numberX = prompt("Введите число от 1 до 999, значение должно быть целым числом");
   if (Number.isInteger(numberX) || numberX > 0 && numberX < 999) {
     alert("Ваше число в диапазоне чисел");

     return {
      units:  numberX % 10,
      tens:  Math.floor(numberX / 10) % 10,
      hundreds: Math.floor(numberX / 100),
     };

   } else {
     alert('Введеное вами число не в диапазоне чисел от 1 до 999');
     return {};
   }
 };

 let result = getNumber();

 alert(`${result.units} //это единицы
        ${result.tens} //это десятки
        ${result.hundreds} //это сотни `);