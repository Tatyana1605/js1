'use strict';

let more = document.querySelector('.text');
let open = document.querySelector('.btn');
let close = document.querySelector('.btnClose');


/* Открываем модальное окно */
open.onclick = function () {
  more.style.display = "flex";
};
/* Закрываем модальное окно */
close.onclick = function () {
  more.style.display = "none";
};
 

 

