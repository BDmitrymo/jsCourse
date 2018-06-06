/* Восстановить порядок в меню, добавить пятый пункт */
var item = document.getElementsByTagName('li');

item[1].innerHTML = 'Второй пункт';
item[2].innerHTML = 'Третий пункт';

/* Заменить картинку заднего фона на другую из папки img */
document.body.style.background = "url('img/apple-true.jpg') center no-repeat";

/* Поменять заголовок, добавить слово "подлинную" */
var tl = document.getElementById('title');
tl.textContent = 'Подлинную';

/* Удалить рекламу со страницы */
var advertising = document.getElementsByClassName('adv');
advertising[0].remove();

/* Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt" */
var sqr = prompt('Какое отношение к технике apple у Вас', ''),
	pmpt = document.getElementById('prompt');

	pmpt.innerHTML = sqr;




