// Существует меньше способов выбрать узел DOM с устаревшими браузерами
var form  = document.getElementsByTagName('form')[0];
var phone = document.getElementById('phone');

// Ниже приведен трюк для достижения следующего узла Element Element в DOM
// Это опасно, потому что вы можете легко построить бесконечный цикл.
// В современных браузерах вам следует использовать элемент element.nextElementSibling
var error = phone;
while ((error = error.nextSibling).nodeType != 1);

// As per the HTML5 Specification
var phoneRegExp = /[0-9]{1}[ -][0-9]{3}[ -][0-9]{3}[ -][0-9]{2}[ -][0-9]{2}/;

// Многие устаревшие браузеры не поддерживают метод addEventListener.
// Вот простой способ справиться с этим; это далеко не единственный.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);

    // Обратный вызов, который возвращает `false`, останавливает цепочку обратного вызова
     // и прерывает выполнение обратного вызова события.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Теперь мы можем перестроить наше ограничение валидации
// Поскольку мы не полагаемся на псевдо-класс CSS, мы должны
// явно установить допустимый / недопустимый класс в поле электронной почты
addEvent(window, "load", function () {
// Здесь мы проверяем, пусто ли поле (помните, что поле не требуется)
   // Если это не так, мы проверяем, является ли его контент корректным адресом электронной почты.
  var test = phone.value.length === 0 || phoneRegExp.test(phone.value);

  phone.className = test ? "valid" : "invalid";
});

// Это определяет, что происходит, когда пользователь вводит в поле
addEvent(phone, "input", function () {
  var test = phone.value.length === 0 || phoneRegExp.test(phone.value);
  if (test) {
    phone.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    phone.className = "invalid";
  }
});

// Это определяет, что происходит, когда пользователь пытается отправить данные
addEvent(form, "submit", function () {
  var test = phone.value.length === 0 || phoneRegExp.test(phone.value);

  if (!test) {
    phone.className = "invalid";
    error.innerHTML = "Телефон - должно содержать 11 цифр, не больше, не меньше. В формате 8-999-123-11-11";
    error.className = "error active";

    // Некоторые устаревшие браузеры не поддерживают метод event.preventDefault ()
    return false;
  } else {
    phone.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});