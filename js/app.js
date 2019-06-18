'use strict';

let modal = document.querySelector('.modal');
let open = document.querySelector('.btn');
let close = document.querySelector('span');


/* Открываем модальное окно */
open.onclick = function () {
  modal.style.display = "flex";
};
/* Закрываем модальное окно */
close.onclick = function () {
  modal.style.display = "none";
};
/* Закрываем модальное окно по клику на серое поле*/
window.onclick = function (event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
     
