'use strict';

// let more = document.querySelector('.text');
// let open = document.querySelector('.btn');
// let close = document.querySelector('.btnClose');


// /* Открываем модальное окно */
// open.onclick = function () {
//   more.style.display = "flex";
// };
// /* Закрываем модальное окно */
// close.onclick = function () {
//   more.style.display = "none";
// };
 
// вешаем на кнопки обработчик событий клика
const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

// функция проверки действия при клике
function handleClick(clickedButtonEvent) {
    // получаем коллекцию элементов родителя целевого элемента
    let cardNode = clickedButtonEvent.target.parentNode;
    let classHidden = cardNode.querySelector('.imgHidden'); 

    if (classHidden === null) {
        console.log(classHidden);
        cardNode.querySelector('img').classList.add('imgHidden');
        cardNode.querySelector('.text').style.display = 'block'
        cardNode.querySelector('.btn').innerHTML = 'Отмена';
    }
    else {
        cardNode.querySelector('.img').classList.remove('imgHidden');
        cardNode.querySelector('.text').style.display = ''
        cardNode.querySelector('.btn').innerHTML = 'Подробнее';
    }
};
 

