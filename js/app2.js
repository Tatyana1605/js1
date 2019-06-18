'use strict';

 
 
// вешаем на кнопки обработчик событий клика
const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

//  проверка действия при клике
function handleClick(clickedButtonEvent) {
   
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
 

